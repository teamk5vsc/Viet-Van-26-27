import React, { useState } from 'react';
import { OutlineSubmission, StudentProfile, RubricCriteria } from '../types';
import { SYLLABUS_DATA } from '../data/syllabus';
import { STRENGTH_CARDS } from '../data/strengthCards';
import {
  Award, TrendingUp, BookOpen, Clock, Heart, Calendar,
  Map, FileText, ChevronRight, Bookmark, ArrowRight, Printer, Star, User, PenLine
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// No more mock data — portfolio shows real submissions only
const PAST_SUBMISSIONS_MOCK: OutlineSubmission[] = [];

interface PortfolioTabProps {
  studentProfile: StudentProfile;
  customSavedOutlines: OutlineSubmission[];
  isTeacher?: boolean;
  onRateSubmission?: (submissionId: string, score: number, criteriaScores: RubricCriteria, comment: string) => void;
}

// Score of record for a submission: the teacher's manual rating, falling back to an
// old AI-graded score if this submission predates the switch to manual grading.
const scoreOf = (sub: OutlineSubmission) => sub.teacherReview?.score || sub.gradeAfter?.score || sub.gradeBefore?.score || 0;

// The rubric the teacher fills in by hand. Labels + max points must sum to 100.
const RUBRIC_ITEMS: { key: keyof RubricCriteria; label: string; max: number }[] = [
  { key: 'understand', label: 'Hiểu đề & yêu cầu', max: 20 },
  { key: 'structure', label: 'Bố cục 3 phần', max: 20 },
  { key: 'development', label: 'Phát triển ý', max: 25 },
  { key: 'creativity', label: 'Sáng tạo, hình ảnh', max: 20 },
  { key: 'logic', label: 'Logic, mạch lạc', max: 15 },
];
const EMPTY_CRITERIA: Record<keyof RubricCriteria, string> = { understand: '', structure: '', development: '', creativity: '', logic: '' };

// Shows the teacher's rating for a saved essay, and — for the teacher only —
// a small form to set or update it. Remounts (via the parent's `key`) whenever
// the selected submission changes, so its local draft state always starts fresh.
function TeacherReviewBlock({
  submission,
  isTeacher,
  onSave,
}: {
  submission: OutlineSubmission;
  isTeacher: boolean;
  onSave?: (submissionId: string, score: number, criteriaScores: RubricCriteria, comment: string) => void;
}) {
  const existing = submission.teacherReview;
  const [isEditing, setIsEditing] = useState(!existing);
  const [criteria, setCriteria] = useState<Record<keyof RubricCriteria, string>>(() =>
    existing?.criteriaScores
      ? {
          understand: existing.criteriaScores.understand.toString(),
          structure: existing.criteriaScores.structure.toString(),
          development: existing.criteriaScores.development.toString(),
          creativity: existing.criteriaScores.creativity.toString(),
          logic: existing.criteriaScores.logic.toString(),
        }
      : EMPTY_CRITERIA
  );
  const [comment, setComment] = useState(existing?.comment || '');

  const total = RUBRIC_ITEMS.reduce((sum, item) => sum + (Number(criteria[item.key]) || 0), 0);
  const allFilled = RUBRIC_ITEMS.every(item => criteria[item.key].trim() !== '' && !Number.isNaN(Number(criteria[item.key])));

  if (isTeacher) {
    if (!isEditing && existing) {
      return (
        <div className="bg-purple-50/40 border border-purple-100/50 p-3 rounded-xl space-y-2">
          <div className="flex items-center justify-between">
            <strong className="text-purple-900 text-[10px] uppercase font-bold tracking-wider block">Đánh giá của cô: {existing.score}/100đ</strong>
            <button
              onClick={() => setIsEditing(true)}
              className="text-[10px] font-bold text-purple-600 hover:text-purple-800 flex items-center space-x-1 cursor-pointer"
            >
              <PenLine className="w-3 h-3" />
              <span>Sửa</span>
            </button>
          </div>
          {existing.criteriaScores && (
            <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[10px] text-purple-800">
              {RUBRIC_ITEMS.map(item => (
                <div key={item.key} className="flex justify-between">
                  <span>{item.label}</span>
                  <span className="font-bold">{existing.criteriaScores![item.key]}/{item.max}</span>
                </div>
              ))}
            </div>
          )}
          {existing.comment && <p className="text-purple-950 text-[11px] leading-relaxed">{existing.comment}</p>}
        </div>
      );
    }

    return (
      <div className="bg-purple-50/40 border border-purple-100/50 p-3 rounded-xl space-y-2.5">
        <strong className="text-purple-900 text-[10px] uppercase font-bold tracking-wider block">Chấm điểm bài viết này</strong>
        <div className="space-y-1.5">
          {RUBRIC_ITEMS.map(item => (
            <div key={item.key} className="flex items-center gap-2">
              <span className="text-[11px] text-purple-800 flex-1">{item.label}</span>
              <input
                type="number"
                min={0}
                max={item.max}
                value={criteria[item.key]}
                onChange={(e) => setCriteria({ ...criteria, [item.key]: e.target.value })}
                placeholder="0"
                className="w-16 px-2 py-1 rounded-lg border border-purple-200 text-xs font-bold text-purple-900 text-right focus:outline-hidden focus:ring-2 focus:ring-purple-300"
              />
              <span className="text-[10px] text-purple-500 w-10">/ {item.max}đ</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-1.5 border-t border-purple-200/60">
          <span className="text-[11px] font-bold text-purple-900 uppercase tracking-wide">Tổng điểm</span>
          <span className="text-sm font-extrabold text-purple-900">{total} / 100đ</span>
        </div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Nhận xét cho học sinh (không bắt buộc)..."
          rows={2}
          className="w-full px-2.5 py-1.5 rounded-lg border border-purple-200 text-[11px] text-purple-900 resize-none focus:outline-hidden focus:ring-2 focus:ring-purple-300"
        />
        <div className="flex justify-end gap-2">
          {existing && (
            <button
              onClick={() => setIsEditing(false)}
              className="px-3 py-1.5 rounded-lg text-[10px] font-bold text-neutral-500 hover:bg-neutral-100 cursor-pointer"
            >
              Huỷ
            </button>
          )}
          <button
            disabled={!allFilled}
            onClick={() => {
              const criteriaScores: RubricCriteria = {
                understand: Number(criteria.understand),
                structure: Number(criteria.structure),
                development: Number(criteria.development),
                creativity: Number(criteria.creativity),
                logic: Number(criteria.logic),
              };
              onSave?.(submission.id, total, criteriaScores, comment.trim());
              setIsEditing(false);
            }}
            className="px-3 py-1.5 rounded-lg text-[10px] font-bold text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            Lưu đánh giá
          </button>
        </div>
      </div>
    );
  }

  // Student / read-only view
  if (existing) {
    return (
      <div className="bg-purple-50/40 border border-purple-100/50 p-3 rounded-xl space-y-2">
        <strong className="text-purple-900 text-[10px] uppercase font-bold tracking-wider block">Nhận xét của cô: {existing.score}/100đ</strong>
        {existing.criteriaScores && (
          <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[10px] text-purple-800">
            {RUBRIC_ITEMS.map(item => (
              <div key={item.key} className="flex justify-between">
                <span>{item.label}</span>
                <span className="font-bold">{existing.criteriaScores![item.key]}/{item.max}</span>
              </div>
            ))}
          </div>
        )}
        {existing.comment && <p className="text-purple-950 text-[11px] leading-relaxed">{existing.comment}</p>}
      </div>
    );
  }
  return (
    <div className="bg-neutral-100/60 border border-neutral-200/50 p-3 rounded-xl">
      <p className="text-[11px] text-neutral-500 italic">Bài viết này chưa được cô chấm điểm.</p>
    </div>
  );
}

export default function PortfolioTab({ studentProfile, customSavedOutlines, isTeacher = false, onRateSubmission }: PortfolioTabProps) {
  // Combine static and custom saved outlines
  const allSubmissions = [...customSavedOutlines, ...PAST_SUBMISSIONS_MOCK];

  // Track the selected submission by id, not by object reference — customSavedOutlines
  // gets a new array (with a new object for the rated submission) every time the
  // teacher saves a review, so holding onto the old object here would keep showing
  // stale data after saving.
  const [selectedSubmissionId, setSelectedSubmissionId] = useState<string | null>(allSubmissions[0]?.id || null);
  const selectedSubmission = allSubmissions.find(s => s.id === selectedSubmissionId) || null;
  const [showParentReport, setShowParentReport] = useState(false);

  // Growth calculations
  const totalSubmissions = allSubmissions.length;
  // Average only counts submissions the teacher has actually rated — an unrated
  // essay contributes no score rather than a made-up default.
  const ratedSubmissions = allSubmissions.filter(sub => scoreOf(sub) > 0);
  const averageAllScores = ratedSubmissions.length > 0
    ? Math.round(ratedSubmissions.reduce((acc, sub) => acc + scoreOf(sub), 0) / ratedSubmissions.length)
    : 0;

  return (
    <div className="space-y-6">
      {/* Teacher notice if viewing guest portfolio */}
      {isTeacher && studentProfile.id === 'guest' && (
        <div className="p-4 bg-blue-50 border border-blue-150 text-blue-900 text-xs rounded-xl font-medium flex items-center space-x-2">
          <span>💡 Bạn đang ở chế độ Giáo viên. Hãy vào mục <strong>Chế độ Giáo viên</strong> &rarr; Chọn học sinh &rarr; Click <strong>Xem Portfolio 🏆</strong> để xem báo cáo năng lực và tiến trình chi tiết của học sinh đó.</span>
        </div>
      )}

      {/* Student Banner Overview */}
      <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-amber-100/50 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800 text-3xl font-bold font-mono shadow-xs border border-amber-200">
            {studentProfile.avatar}
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-bold text-neutral-800 font-sans tracking-tight">{studentProfile.name}</h2>
              <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Lớp {studentProfile.gradeClass}</span>
            </div>
            <p className="text-xs text-neutral-500 font-medium">
              Writing Level: <span className="text-amber-600 font-extrabold">{studentProfile.level}</span> • Niên khóa 2025 - 2026
            </p>
          </div>
        </div>

        {/* Dashboard quick figures */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto shrink-0 border-t md:border-t-0 md:border-l border-neutral-100 pt-4 md:pt-0 md:pl-6">
          <div className="text-center bg-neutral-50 p-2.5 rounded-xl border border-neutral-100 min-w-[90px]">
            <Star className="w-4 h-4 text-amber-500 mx-auto mb-1 fill-amber-300" />
            <span className="text-[10px] uppercase text-neutral-400 font-semibold block">Điểm Trung Bình</span>
            <span className="text-[16px] font-extrabold text-neutral-800">{ratedSubmissions.length > 0 ? `${averageAllScores}/100` : 'Chưa chấm'}</span>
          </div>

          <div className="text-center bg-neutral-50 p-2.5 rounded-xl border border-neutral-100 min-w-[90px]">
            <BookOpen className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
            <span className="text-[10px] uppercase text-neutral-400 font-semibold block">Đã Luyện tập</span>
            <span className="text-[16px] font-extrabold text-neutral-800">{totalSubmissions} bài viết</span>
          </div>

          <div className="text-center bg-neutral-50 p-2.5 rounded-xl border border-neutral-100 min-w-[90px]">
            <TrendingUp className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
            <span className="text-[10px] uppercase text-neutral-400 font-semibold block">Mức tiến bộ</span>
            <span className="text-[16px] font-extrabold text-emerald-600">
              {ratedSubmissions.length >= 2 ? `+${studentProfile.progressScore}đ` : 'Chưa đủ bài'}
            </span>
          </div>

          <div className="text-center bg-neutral-50 p-2.5 rounded-xl border border-neutral-100 min-w-[90px]">
            <Award className="w-4 h-4 text-purple-500 mx-auto mb-1" />
            <span className="text-[10px] uppercase text-neutral-400 font-semibold block">Huy Hiệu Đạt</span>
            <span className="text-[16px] font-extrabold text-purple-600">
              {studentProfile.badges.filter(b => b.unlocked).length} khiên
            </span>
          </div>
        </div>
      </div>

      {/* Main double column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Skill Matrix Chart & Badge Shelf */}
        <div className="space-y-6">
          {/* Skill Radar Progress Block */}
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-amber-100/30 shadow-sm space-y-4">
            <h3 className="font-extrabold text-xs text-neutral-800 uppercase tracking-widest border-b border-neutral-100 pb-2 flex items-center space-x-1.5">
              <Map className="w-4 h-4 text-amber-500" />
              <span>Bản Đồ Năng Lực Viết</span>
            </h3>

            <div className="space-y-3 pt-1">
              {/* Nhận diện đề */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-neutral-600 font-semibold">
                  <span>Nhận diện đề & yêu cầu</span>
                  <span>{studentProfile.skillMap.understand}%</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-100 rounded-full">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: `${studentProfile.skillMap.understand}%` }} />
                </div>
              </div>

              {/* Lập bố cục */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-neutral-600 font-semibold">
                  <span>Lập bố cục 3 phần</span>
                  <span>{studentProfile.skillMap.structure}%</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-100 rounded-full">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: `${studentProfile.skillMap.structure}%` }} />
                </div>
              </div>

              {/* Phát triển ý */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-neutral-600 font-semibold">
                  <span>Phát triển ý chính, ý phụ</span>
                  <span>{studentProfile.skillMap.development}%</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-100 rounded-full">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${studentProfile.skillMap.development}%` }} />
                </div>
              </div>

              {/* Miêu tả chi tiết */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-neutral-600 font-semibold">
                  <span>Miêu tả có chiều sâu gợi giác quan</span>
                  <span>{studentProfile.skillMap.creativity}%</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-100 rounded-full">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${studentProfile.skillMap.creativity}%` }} />
                </div>
              </div>

              {/* Cảm xúc / Sáng tạo */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-neutral-600 font-semibold">
                  <span>Kiểu văn cảm xúc, kết bài mở rộng</span>
                  <span>{studentProfile.skillMap.logic}%</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-100 rounded-full">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: `${studentProfile.skillMap.logic}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Gamification badges shelf */}
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-purple-100/30 shadow-sm space-y-4">
            <h3 className="font-extrabold text-xs text-neutral-800 uppercase tracking-widest border-b border-neutral-100 pb-2 flex items-center space-x-1.5">
              <Award className="w-4 h-4 text-purple-500" />
              <span>Kho Huy Hiệu Danh Dự</span>
            </h3>

            <div className="space-y-3">
              {studentProfile.badges.map((badge) => {
                const isUnlocked = badge.unlocked || allSubmissions.length >= (badge.id === 'obs' ? 1 : 2);
                return (
                  <div 
                    key={badge.id} 
                    className={`p-3 rounded-xl border flex items-center space-x-3 transition-colors ${
                      isUnlocked 
                        ? 'bg-purple-50/40 border-purple-100 text-purple-900' 
                        : 'bg-neutral-100/50 border-neutral-100 opacity-60'
                    }`}
                  >
                    <span className="text-2xl">{isUnlocked ? badge.emoji : '🔒'}</span>
                    <div className="flex-1 space-y-0.5">
                      <h4 className="text-xs font-bold text-neutral-800">{badge.title}</h4>
                      <p className="text-[10px] text-neutral-500 leading-snug">{badge.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Strength Cards Collection (SEL) */}
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-amber-100/30 shadow-sm space-y-4">
            <h3 className="font-extrabold text-xs text-neutral-800 uppercase tracking-widest border-b border-neutral-100 pb-2 flex items-center space-x-1.5">
              <span className="text-base">🃏</span>
              <span>Bộ Sưu Tập Thẻ Sức Mạnh</span>
              <span className="ml-auto text-[10px] font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                {studentProfile.strengthCards?.length || 0}/{STRENGTH_CARDS.length} thẻ
              </span>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {STRENGTH_CARDS.map((card) => {
                const isCollected = studentProfile.strengthCards?.includes(card.id) || false;
                const colorMap: Record<string, string> = {
                  'amber': 'from-amber-100 to-yellow-50 border-amber-200',
                  'orange': 'from-orange-100 to-amber-50 border-orange-200',
                  'emerald': 'from-emerald-100 to-green-50 border-emerald-200',
                  'yellow': 'from-yellow-100 to-amber-50 border-yellow-200',
                  'pink': 'from-pink-100 to-rose-50 border-pink-200',
                  'purple': 'from-purple-100 to-violet-50 border-purple-200',
                  'blue': 'from-blue-100 to-sky-50 border-blue-200',
                  'teal': 'from-teal-100 to-cyan-50 border-teal-200',
                };
                const colors = colorMap[card.color] || 'from-neutral-100 to-neutral-50 border-neutral-200';
                return (
                  <div 
                    key={card.id}
                    className={`relative rounded-xl border p-3 text-center transition-all ${
                      isCollected 
                        ? `bg-gradient-to-br ${colors} shadow-sm` 
                        : 'bg-neutral-50/50 border-neutral-100 opacity-50 grayscale'
                    }`}
                  >
                    <span className="text-2xl block mb-1">{isCollected ? card.emoji : '🔒'}</span>
                    <span className="text-[10px] font-bold text-neutral-800 block">{card.name}</span>
                    <span className="text-[9px] text-neutral-500 leading-tight block mt-0.5">{card.description}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Writer Portrait */}
          {isTeacher && (
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/30 p-5 rounded-2xl border border-amber-200/50 shadow-sm space-y-2">
              <div className="flex items-center space-x-1.5 text-amber-900 font-bold text-xs uppercase tracking-wider">
                <User className="w-4 h-4 text-amber-600" />
                <span>Chân dung người viết {studentProfile.name}</span>
              </div>
              <p className="text-xs text-amber-800 font-medium leading-relaxed italic">
                "{studentProfile.name} là học sinh có khả năng quan sát thiên nhiên rất sinh động. Thích viết lồng ghép các bài học triết lý ngộ nghĩnh và biết lắng nghe, tiếp thu chi tiết đắt giá từ huấn luyện viên AI để vượt hạng ngoạn mục."
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Historical timeline & Printable parent report */}
        <div className="lg:col-span-2 space-y-6">
          {/* Toggle Parent Report Button */}
          {isTeacher && (
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowParentReport(!showParentReport)}
                className="flex items-center space-x-1.5 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-bold rounded-xl border border-neutral-200 transition cursor-pointer select-none"
              >
                <Printer className="w-4 h-4 text-neutral-500" />
                <span>{showParentReport ? 'Quay về lịch sử học' : 'Xem Báo Cáo Phụ Huynh 👩‍👦'}</span>
              </button>
            </div>
          )}

          <AnimatePresence mode="wait">
            {showParentReport && isTeacher ? (
              /* PANEL A: Printable parent report */
              <motion.div
                key="parent-report"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl border border-purple-100/30 space-y-6 shadow-md"
              >
                {/* Print Header */}
                <div className="text-center space-y-1.5 border-b border-dashed border-neutral-200 pb-5">
                  <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest block">VietMaster 5 • Hồ Sơ Đánh Giá Định Kỳ</span>
                  <h3 className="text-xl font-black font-sans text-neutral-800 uppercase tracking-tight">BÁO CÁO PHÁT TRIỂN NĂNG LỰC VIẾT</h3>
                  <p className="text-xs text-neutral-500 font-medium">Báo cáo gửi các Bác Phụ Huynh của em <strong className="text-neutral-800">{studentProfile.name}</strong> • Lớp {studentProfile.gradeClass}</p>
                </div>

                {/* Content body */}
                <div className="space-y-4 text-xs text-neutral-700 leading-relaxed">
                  <p>Kính thưa các Bác Phụ huynh,</p>
                  <p>
                    Dựa trên tiến trình quan sát và rèn luyện lập dàn ý Tiếng Việt lớp 5 của bé <strong>{studentProfile.name}</strong>, hệ thống thông minh xin gửi sơ bộ tóm tắt định tính kết quả học tập vượt khó học kỳ vừa rồi:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-neutral-50 p-4 rounded-2xl border border-neutral-100/50">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">Các điểm mốc cốt lõi:</span>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Trung bình đạt điểm mốc: <strong>{ratedSubmissions.length > 0 ? `${averageAllScores}/100đ` : 'Chưa có bài được chấm'}</strong> 🏆</li>
                        <li>Đã thực hành: <strong>{totalSubmissions} chủ đề đa dạng</strong></li>
                        {ratedSubmissions.length >= 2 && (
                          <li>Mức tăng điểm thăng tiến: <strong>+{studentProfile.progressScore}đ</strong></li>
                        )}
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">Các Huy hiệu đã đạt:</span>
                      <ul className="list-disc pl-4 space-y-1">
                        {studentProfile.badges.filter(b => b.unlocked).length > 0 ? (
                          studentProfile.badges.filter(b => b.unlocked).map(b => (
                            <li key={b.id}>{b.title} {b.emoji}</li>
                          ))
                        ) : (
                          <li className="text-neutral-400">Chưa mở khoá huy hiệu nào</li>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">Nhận xét từ giáo viên:</span>
                    {(() => {
                      const commented = allSubmissions.filter(s => s.teacherReview?.comment);
                      const latest = commented.sort((a, b) => new Date(b.teacherReview!.ratedAt).getTime() - new Date(a.teacherReview!.ratedAt).getTime())[0];
                      return latest ? (
                        <p className="bg-amber-50/30 p-4 rounded-xl border border-amber-100/30 text-amber-900 leading-relaxed">
                          "{latest.teacherReview!.comment}" — nhận xét cho bài "{latest.topic}"
                        </p>
                      ) : (
                        <p className="bg-amber-50/30 p-4 rounded-xl border border-amber-100/30 text-amber-900/70 leading-relaxed italic">
                          Giáo viên chưa để lại nhận xét cho bài viết nào.
                        </p>
                      );
                    })()}
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-dashed border-neutral-200 pt-5 text-[10px] text-neutral-400 font-semibold uppercase">
                  <span>Ngày xuất báo cáo: {new Date().toLocaleDateString('vi-VN')}</span>
                  <span>Ký bởi: VietMaster 5 ✍️</span>
                </div>
              </motion.div>
            ) : (
              /* PANEL B: Outlines timeline list & Before-After compare card display */
              <div className="space-y-6">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-amber-100/30 shadow-sm space-y-4">
                  <h4 className="font-extrabold text-xs text-neutral-800 uppercase tracking-widest border-b border-neutral-100 pb-2 flex items-center space-x-1.5">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span>Lịch sử Hành trình Viết lách ({totalSubmissions} bài đã lưu)</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* List of outlines */}
                    <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                      {allSubmissions.map((sub, idx) => {
                        const isChosen = selectedSubmission?.id === sub.id;
                        const scoreDisp = scoreOf(sub);
                        const genreMetadata = SYLLABUS_DATA.find(g => g.id === sub.type);

                        return (
                          <div
                            key={sub.id}
                            onClick={() => setSelectedSubmissionId(sub.id)}
                            className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all duration-200 ${
                              isChosen
                                ? 'bg-amber-50/70 border-amber-200 text-amber-900 shadow-xs ring-1 ring-amber-300/30'
                                : 'bg-neutral-50/50 hover:bg-neutral-50 text-neutral-700 border-neutral-100 hover:border-neutral-200'
                            }`}
                          >
                            <div className="flex justify-between items-start gap-2">
                              <div className="space-y-0.5">
                                <span className="text-[9px] font-bold text-neutral-400 uppercase block">
                                  {genreMetadata?.title || 'Dàn bài'}
                                </span>
                                <h5 className="text-xs font-bold leading-tight break-words">{sub.topic}</h5>
                              </div>
                              {scoreDisp > 0 ? (
                                <span className="bg-amber-600 text-white font-bold text-[11px] py-0.5 px-2 rounded-md shrink-0">
                                  {scoreDisp}đ
                                </span>
                              ) : (
                                <span className="bg-neutral-200 text-neutral-500 font-bold text-[10px] py-0.5 px-2 rounded-md shrink-0">
                                  Chưa chấm
                                </span>
                              )}
                            </div>
                            <div className="flex items-center space-x-1.5 text-[10px] text-neutral-400 mt-2 font-semibold">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(sub.createdAt).toLocaleDateString('vi-VN')}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Detailed selected card viewer */}
                    <AnimatePresence mode="wait">
                      {selectedSubmission ? (
                        <motion.div
                          key={selectedSubmission.id}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="bg-neutral-50/60 rounded-2xl border border-neutral-100 p-5 space-y-4 text-xs"
                        >
                          <div className="border-b border-neutral-200/55 pb-2">
                            <span className="text-[10px] text-amber-600 uppercase font-bold block">Bài viết đã lưu</span>
                            <h4 className="font-extrabold text-neutral-800 leading-snug break-words">{selectedSubmission.topic}</h4>
                          </div>

                          <div className="space-y-3">
                            <TeacherReviewBlock
                              submission={selectedSubmission}
                              isTeacher={isTeacher}
                              onSave={onRateSubmission}
                            />

                            {selectedSubmission.studentEssay && (
                              <div className="bg-amber-50/40 border border-amber-100/50 p-4 rounded-xl space-y-2">
                                <strong className="text-amber-950 text-[10px] uppercase font-extrabold tracking-wider block flex items-center space-x-1">
                                  <span>✍️ Bài viết của học sinh:</span>
                                </strong>
                                <div className="bg-white p-3.5 rounded-lg border border-amber-100/50 shadow-2xs text-xs text-neutral-800 leading-relaxed font-serif whitespace-pre-line select-text">
                                  {selectedSubmission.studentEssay}
                                </div>
                              </div>
                            )}

                            {selectedSubmission.sampleEssay && (
                              <div className="bg-emerald-50/40 border border-emerald-100/50 p-4 rounded-xl space-y-2">
                                <strong className="text-emerald-950 text-[10px] uppercase font-extrabold tracking-wider block flex items-center space-x-1">
                                  <span>🦉 Bài viết mẫu tham khảo (Cú Văn viết):</span>
                                </strong>
                                <div className="bg-white p-3.5 rounded-lg border border-emerald-100/50 shadow-2xs text-xs text-neutral-800 leading-relaxed font-serif whitespace-pre-line select-text">
                                  {selectedSubmission.sampleEssay.content}
                                </div>
                                {selectedSubmission.sampleEssay.analysis && selectedSubmission.sampleEssay.analysis.length > 0 && (
                                  <div className="pt-2 border-t border-emerald-100/30 text-[10px] text-emerald-800 space-y-1">
                                    <strong className="font-bold">💡 Nét nghệ thuật hay cần học hỏi:</strong>
                                    {selectedSubmission.sampleEssay.analysis.map((analysisItem, idx) => (
                                      <p key={idx} className="font-medium">• {analysisItem}</p>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ) : (
                        <div className="flex items-center justify-center h-48 bg-neutral-50 rounded-2xl border border-dashed">
                          <span className="text-xs text-neutral-400">Chọn một bài viết để ngắm tiến trình đối chiếu nâng cấp!</span>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
