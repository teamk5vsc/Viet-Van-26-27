export type EssayType = 
  | 'ta-canh' 
  | 'ke-chuyen-sang-tao' 
  | 'cam-xuc-nhan-vat' 
  | 'cam-xuc-su-viec' 
  | 'neu-y-kien'
  | 'cam-xuc-cau-chuyen'
  | 'cam-xuc-bai-tho'
  | 'gioi-thieu-nhan-vat-sach'
  | 'gioi-thieu-nhan-vat-hoat-hinh'
  | 'ta-nguoi'
  | 'lap-chuong-trinh-hoat-dong';

export interface EssayMetadata {
  id: EssayType;
  title: string;
  emoji: string;
  iconName?: string;
  iconBg?: string;
  iconColor?: string;
  description: string;
  topics: string[];
  template: {
    mobi: string[];
    thanbi: string[];
    ketbi: string[];
  };
  aiRules: {
    mustHave: string[];
    shouldAvoid: string[];
  };
}

export interface RubricCriteria {
  understand: number;     // max 20
  structure: number;      // max 20
  development: number;    // max 25
  creativity: number;     // max 20
  logic: number;          // max 15
}

export interface ChecklistItem {
  name: string;
  status: boolean;
}

export interface GradeResult {
  score: number;
  criteriaScores: RubricCriteria;
  feedback: {
    general: string;
    strengths: string[];
    improvements: string[];
    nextSteps: string;
  };
  checklist: ChecklistItem[]; // specific to the essay type
  isSimulated?: boolean; // true when this grade came from the offline/mock engine, not real AI
}

export interface GrowthComparison {
  scoreBefore: number;
  scoreAfter: number;
  scoreDiff: number;
  skillsBefore: RubricCriteria;
  skillsAfter: RubricCriteria;
  feedback: {
    celebration: string; // What improved noticeably
    reminders: string;   // Working targets remaining
    growthWords: string; // A message summarizing growth of style (Before vs After)
  };
  isSimulated?: boolean; // true when this comparison came from the offline/mock engine, not real AI
}

export interface SampleHighlight {
  text: string;
  type: 'imagery' | 'emotion' | 'rhetorical' | 'vocabulary';
  explanation: string;
}

export interface SampleEssayResult {
  format: 'essay' | 'paragraph';
  content: string;
  highlights: SampleHighlight[];
  analysis: string[];
  isSimulated?: boolean; // Indicates if this is a static mock/simulated fallback
}

export interface RubricItem {
  name: string; // free text, e.g. "Bố cục" — the teacher names it to fit the essay type
  max: number; // points this criterion is worth, teacher-defined
  score: number; // points awarded, 0..max
}

export interface TeacherReview {
  score: number; // points awarded, set by the teacher (never AI-generated) — sum of criteriaScores' score
  maxScore: number; // total points possible for this grading — sum of criteriaScores' max (100 if no criteria were used)
  criteriaScores?: RubricItem[]; // teacher-defined criteria, free-form to fit whatever essay type this is
  comment?: string;
  ratedAt: string;
}

export interface OutlineSubmission {
  id: string; // unique ID
  studentId: string;
  studentName: string;
  topic: string;
  type: EssayType;
  outlineBefore: string;
  gradeBefore?: GradeResult;
  outlineAfter?: string;
  gradeAfter?: GradeResult;
  comparison?: GrowthComparison;
  reflection?: {
    q1_changes: string; // Em đã thay đổi những gì?
    q2_reasons: string; // Điều gì giúp bài của em tốt hơn?
    q3_learnings: string; // Lần sau em rút ra lưu ý gì?
  };
  teacherReview?: TeacherReview;
  sampleEssay?: SampleEssayResult;
  studentEssay?: string; // The student's own writing, typed directly in the app (no AI)
  createdAt: string;
  updatedAt: string;
  emotionTag?: string; // SEL emotion tag selected by student
}

export interface StudentProfile {
  id: string;
  name: string;
  avatar: string;
  gradeClass: string;
  level: string;
  avgScore: number;
  outlineCount: number;
  progressScore: number; // sum of scoreDiff or average diff
  timeline: {
    month: string;
    score: number;
  }[];
  skillMap: {
    understand: number;   // % (out of 100)
    structure: number;    // %
    development: number;  // %
    creativity: number;   // %
    logic: number;        // %
  };
  styleAttributes: {
    tag: string;
    description: string;
    examples: { before: string; after: string }[];
  };
  badges: {
    id: string;
    title: string;
    emoji: string;
    description: string;
    unlocked: boolean;
    unlockedAt?: string;
  }[];
  strengthCards?: string[]; // IDs of collected strength cards
}

export interface ClassStatistics {
  className: string;
  totalStudents: number;
  averageScore: number;
  skillAverages: {
    understand: number;
    structure: number;
    development: number;
    creativity: number;
    logic: number;
  };
  typeDistribution: {
    type: string;
    count: number;
  }[];
}

// === Class Management Types ===
export interface StudentEntry {
  id: string;
  name: string;
  avatar: string;
  // Only present when fetched by an already-authenticated teacher/student session
  // (see /api/sync/roster vs /api/sync/class-info) — never trust this being set.
  pin?: string;
}

export interface StudentGroup {
  id: string;
  name: string;
  emoji: string;
  studentIds: string[];
}

export interface GroupAssignment {
  id: string;
  groupId: string;
  title: string;
  genreId: string;
  topic: string;
  description: string;
  createdAt: string;
  dueDate?: string;
  status: 'active' | 'completed';
}

export interface ClassInfo {
  className: string;
  schoolName: string;
  students: StudentEntry[];
  groups: StudentGroup[];
  assignments: GroupAssignment[];
  createdAt: string;
  updatedAt: string;
}
