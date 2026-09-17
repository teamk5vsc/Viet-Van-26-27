// Index of every reading passage ("Đọc") in the real Tiếng Việt 5 - Kết nối tri thức textbooks
// (Tập 1 and Tập 2), transcribed from the books' own table of contents so title/volume/page/genre
// are always accurate. This is the single source of truth for grounding AI prompts about a real
// textbook story — server.ts builds its reference block from this file instead of a hard-coded
// prompt string, so adding/correcting a story only requires editing this file.
//
// `characters` / `summary` are only filled in once verified against the actual book page (see
// `verified: true`). For entries with `verified: false`, do NOT invent character names or plot
// details — the AI prompt is instructed to stay generic for these instead of guessing.

export type TextbookGenre =
  | 'ke-chuyen-sang-tao'
  | 'ta-canh'
  | 'ta-nguoi'
  | 'cam-xuc-nhan-vat'
  | 'cam-xuc-su-viec'
  | 'cam-xuc-cau-chuyen'
  | 'cam-xuc-bai-tho'
  | 'gioi-thieu-nhan-vat-sach'
  | 'gioi-thieu-nhan-vat-hoat-hinh'
  | 'neu-y-kien'
  | 'lap-chuong-trinh-hoat-dong'
  | 'khac'; // thơ / văn bản thông tin không gắn với 1 dạng viết cụ thể

export interface TextbookStory {
  title: string;
  volume: 1 | 2;
  page: number;
  genres: TextbookGenre[];
  verified: boolean;
  /** Only set when verified. Real character names/roles confirmed from the book page. */
  characters?: string;
  /** Only set when verified. Short, accurate plot/content summary. */
  summary?: string;
}

export const TEXTBOOK_STORIES: TextbookStory[] = [
  // ===== TẬP 1 — Chủ đề: THẾ GIỚI TUỔI THƠ =====
  {
    title: 'Thanh âm của gió',
    volume: 1,
    page: 8,
    genres: ['ke-chuyen-sang-tao'],
    verified: true,
    characters: 'Bống, anh trai của Bống, Điệp, Văn, Thành (nhóm trẻ chăn trâu)',
    summary: 'Nhóm bạn nhỏ chơi trò bịt tai nghe "tiếng gió" rì rào qua khe đá, xào xạc qua kẽ tre ở một thung lũng lộng gió; câu chuyện về trí tưởng tượng và tình bạn tuổi thơ.',
  },
  {
    title: 'Cánh đồng hoa',
    volume: 1,
    page: 13,
    genres: ['ke-chuyen-sang-tao'],
    verified: true,
    characters: 'Ja Ka, Mư Hoa, Ja Prok, Mư Nhơ (nhóm bạn nhỏ ở buôn làng)',
    summary: 'Các bạn nhỏ cùng nhau dọn rác và trồng hoa hướng dương, cúc bách nhật trên một bãi cỏ hoang đầu buôn làng, biến nó thành cánh đồng hoa rực rỡ.',
  },
  { title: 'Tuổi Ngựa', volume: 1, page: 18, genres: ['khac'], verified: false },
  {
    title: 'Bến sông tuổi thơ',
    volume: 1,
    page: 23,
    genres: ['cam-xuc-su-viec', 'ta-canh'],
    verified: true,
    characters: 'Không có nhân vật tên riêng — bài viết ở ngôi thứ nhất ("tôi") kể về tuổi thơ của chính người viết.',
    summary: 'Hồi ức của người kể về dòng sông quê ở một xứ cù lao: hàng cây bần, trái bần chua nấu canh cá bống sao/cá bồng lau, những buổi chiều nô đùa cùng đám trẻ ở bến sông.',
  },
  { title: 'Tiếng hạt nảy mầm', volume: 1, page: 28, genres: ['khac'], verified: false },
  { title: 'Ngôi sao sân cỏ', volume: 1, page: 31, genres: ['khac'], verified: false },
  { title: 'Bộ sưu tập độc đáo', volume: 1, page: 36, genres: ['khac'], verified: false },
  { title: 'Hành tinh kì lạ', volume: 1, page: 41, genres: ['khac'], verified: false },

  // ===== TẬP 1 — Chủ đề: THIÊN NHIÊN KÌ THÚ (Tả phong cảnh) =====
  {
    title: 'Trước cổng trời',
    volume: 1,
    page: 46,
    genres: ['ta-canh'],
    verified: true,
    summary: 'Cảnh núi cao hùng vĩ, hoang sơ của vùng Tây Bắc nhìn từ một "cổng trời" trên đèo.',
  },
  {
    title: 'Kì diệu rừng xanh',
    volume: 1,
    page: 51,
    genres: ['ta-canh'],
    verified: true,
    summary: 'Cảnh sắc một khu rừng khộp đầy nấm rực rỡ sắc màu và loài mang vàng ngơ ngác xuất hiện giữa rừng.',
  },
  { title: 'Hang Sơn Đoòng – những điều kì thú', volume: 1, page: 56, genres: ['ta-canh'], verified: true, summary: 'Vẻ kỳ vĩ của hang Sơn Đoòng: thạch nhũ nghìn năm tuổi và hố sụt có cả một khu rừng nguyên sinh mọc bên trong lòng hang lớn nhất thế giới.' },
  { title: 'Những hòn đảo trên vịnh Hạ Long', volume: 1, page: 60, genres: ['ta-canh'], verified: true, summary: 'Cảnh biển đảo đá vôi vịnh Hạ Long kỳ vĩ, nhấp nhô muôn hình dáng như một bức tranh thiên nhiên.' },
  { title: 'Mầm non', volume: 1, page: 64, genres: ['khac'], verified: false },
  { title: 'Những ngọn núi nóng rẫy', volume: 1, page: 68, genres: ['ta-canh'], verified: false },
  { title: 'Bài ca về mặt trời', volume: 1, page: 72, genres: ['khac'], verified: false },
  { title: 'Xin chào, Xa-ha-ra', volume: 1, page: 76, genres: ['ta-canh'], verified: false },

  // ===== TẬP 1 — Chủ đề: TRÊN CON ĐƯỜNG HỌC TẬP =====
  { title: 'Thư gửi các học sinh', volume: 1, page: 89, genres: ['khac'], verified: false },
  { title: 'Tấm gương tự học', volume: 1, page: 94, genres: ['gioi-thieu-nhan-vat-sach'], verified: false },
  { title: 'Trải nghiệm để sáng tạo', volume: 1, page: 98, genres: ['khac'], verified: false },
  { title: 'Khổ luyện thành tài', volume: 1, page: 102, genres: ['gioi-thieu-nhan-vat-sach'], verified: false },
  { title: 'Thế giới trong trang sách', volume: 1, page: 105, genres: ['gioi-thieu-nhan-vat-sach'], verified: false },
  { title: 'Từ những câu chuyện ấu thơ', volume: 1, page: 110, genres: ['cam-xuc-cau-chuyen'], verified: false },
  { title: 'Giới thiệu sách Dế Mèn phiêu lưu kí', volume: 1, page: 114, genres: ['gioi-thieu-nhan-vat-sach'], verified: false },
  { title: 'Tinh thần học tập của nhà Phi-lít', volume: 1, page: 117, genres: ['cam-xuc-cau-chuyen'], verified: false },

  // ===== TẬP 1 — Chủ đề: NGHỆ THUẬT MUÔN MÀU =====
  { title: 'Tiếng đàn ba-la-lai-ca trên sông Đà', volume: 1, page: 122, genres: ['cam-xuc-bai-tho'], verified: false },
  { title: 'Trí tưởng tượng phong phú', volume: 1, page: 127, genres: ['cam-xuc-bai-tho'], verified: false },
  { title: 'Tranh làng Hồ', volume: 1, page: 132, genres: ['cam-xuc-bai-tho'], verified: false },
  { title: 'Tập hát quan họ', volume: 1, page: 136, genres: ['cam-xuc-bai-tho'], verified: false },
  {
    title: 'Phim hoạt hình Chú ốc sên bay',
    volume: 1,
    page: 140,
    genres: ['gioi-thieu-nhan-vat-hoat-hinh'],
    verified: true,
    characters: 'Chú ốc sên (không nêu tên riêng); một nhà khoa học trẻ gắn đôi cánh cho ốc sên (không nêu tên riêng)',
    summary: 'Văn bản dạng áp phích quảng cáo phim: một chú ốc sên khát khao được bay đi khắp nơi khám phá thế giới, được một nhà khoa học trẻ gắn cho đôi cánh, từ đó có nhiều trải nghiệm thú vị trong hành trình bay lượn và trưởng thành.',
  },
  { title: 'Nghệ thuật múa ba lê', volume: 1, page: 145, genres: ['gioi-thieu-nhan-vat-hoat-hinh'], verified: false },
  { title: 'Một ngôi chùa độc đáo', volume: 1, page: 149, genres: ['gioi-thieu-nhan-vat-hoat-hinh'], verified: false },
  {
    title: 'Sự tích chú Tễu',
    volume: 1,
    page: 153,
    genres: ['gioi-thieu-nhan-vat-hoat-hinh', 'cam-xuc-cau-chuyen'],
    verified: true,
    characters: 'Tễu (chàng trai làng, tướng mạo "bụng trống chầu, đầu cá trê" nhưng thích ca hát); Ông quản phường rối nước (người dạy nghề cho Tễu)',
    summary: 'Kịch bản ngắn: Tễu xin học nghề múa rối nước để được hát mà không ai thấy mặt mình. Sau 3 năm luyện nghề và nổi tiếng, Tễu xin được lấy chính mình làm hình mẫu khắc tạc một con rối mới để "quân rối chú Tễu" mãi mãi ca hát vui vẻ thay mình — lý giải vì sao rối Tễu luôn cười tươi.',
  },

  // ===== TẬP 2 — Chủ đề: VẺ ĐẸP CUỘC SỐNG (Tả người) =====
  { title: 'Tiếng hát của người đá', volume: 2, page: 8, genres: ['ta-nguoi'], verified: false },
  { title: 'Khúc hát ru những em bé lớn trên lưng mẹ', volume: 2, page: 13, genres: ['ta-nguoi'], verified: false },
  { title: 'Hạt gạo làng ta', volume: 2, page: 17, genres: ['ta-nguoi'], verified: false },
  {
    title: 'Hộp quà màu thiên thanh',
    volume: 2,
    page: 22,
    genres: ['ta-nguoi'],
    verified: true,
    characters: 'Tân, Quang, Huệ (nhóm học sinh)',
    summary: 'Tân, Quang, Huệ cùng viết thư tri ân đựng trong một hộp quà màu xanh thiên thanh để tặng cô giáo chủ nhiệm.',
  },
  {
    title: 'Giỏ hoa tháng Năm',
    volume: 2,
    page: 26,
    genres: ['ta-nguoi'],
    verified: false,
    summary: 'Câu chuyện kể về lòng biết ơn thầy cô giáo qua hình ảnh một giỏ hoa tri ân (tên nhân vật cụ thể chưa xác nhận).',
  },
  { title: 'Thư của bố', volume: 2, page: 30, genres: ['ta-nguoi'], verified: false },
  { title: 'Đoàn thuyền đánh cá', volume: 2, page: 34, genres: ['ta-nguoi'], verified: false },
  { title: 'Khu rừng của Mát', volume: 2, page: 38, genres: ['ta-nguoi'], verified: false, summary: 'Chủ đề bảo vệ thiên nhiên rừng xanh, chống lâm tặc (tên nhân vật cụ thể chưa xác nhận).' },

  // ===== TẬP 2 — Chủ đề: HƯƠNG SẮC TRĂM MIỀN =====
  { title: 'Hội thổi cơm thi ở Đồng Vân', volume: 2, page: 43, genres: ['cam-xuc-su-viec'], verified: false },
  { title: 'Những búp chè trên cây cổ thụ', volume: 2, page: 48, genres: ['cam-xuc-su-viec', 'ta-canh'], verified: true, summary: 'Tả những đồi chè shan tuyết cổ thụ ở vùng Tây Bắc bồng bềnh trong mây khói.' },
  { title: 'Hương cốm mùa thu', volume: 2, page: 53, genres: ['cam-xuc-su-viec', 'ta-canh'], verified: true, summary: 'Tả hương vị cốm xanh ngọc, mát lành, ấm áp của mùa thu Hà Nội.' },
  { title: 'Vũ điệu trên nền thổ cẩm', volume: 2, page: 57, genres: ['cam-xuc-su-viec'], verified: false },
  { title: "Đàn t'rưng – tiếng ca đại ngàn", volume: 2, page: 61, genres: ['lap-chuong-trinh-hoat-dong'], verified: false },
  {
    title: 'Đường quê Đồng Tháp Mười',
    volume: 2,
    page: 66,
    genres: ['lap-chuong-trinh-hoat-dong', 'ta-canh'],
    verified: true,
    summary: 'Tả cảnh sông nước mênh mông, thanh bình của vùng Đồng Tháp Mười, Nam Bộ.',
  },
  {
    title: 'Xuồng ba lá quê tôi',
    volume: 2,
    page: 70,
    genres: ['lap-chuong-trinh-hoat-dong', 'ta-canh'],
    verified: true,
    summary: 'Tả chiếc xuồng ba lá gắn bó với đời sống sông nước miền Tây Nam Bộ.',
  },
  { title: 'Về thăm Đất Mũi', volume: 2, page: 73, genres: ['lap-chuong-trinh-hoat-dong'], verified: false },

  // ===== TẬP 2 — Chủ đề: TIẾP BƯỚC CHA ÔNG (Nêu ý kiến tán thành) =====
  { title: 'Nghìn năm văn hiến', volume: 2, page: 88, genres: ['neu-y-kien'], verified: false },
  { title: 'Người thầy của muôn đời', volume: 2, page: 93, genres: ['neu-y-kien'], verified: false },
  { title: 'Danh y Tuệ Tĩnh', volume: 2, page: 97, genres: ['neu-y-kien'], verified: false },
  { title: 'Cụ Đồ Chiểu', volume: 2, page: 101, genres: ['neu-y-kien'], verified: false },
  { title: 'Anh hùng Lao động Trần Đại Nghĩa', volume: 2, page: 106, genres: ['neu-y-kien'], verified: false },
  { title: 'Bộ đội về làng', volume: 2, page: 109, genres: ['cam-xuc-su-viec'], verified: false },
  { title: 'Về ngôi nhà đang xây', volume: 2, page: 113, genres: ['ta-canh'], verified: false },
  { title: 'Việt Nam quê hương ta', volume: 2, page: 117, genres: ['ta-canh'], verified: false },

  // ===== TẬP 2 — Chủ đề: THẾ GIỚI CỦA CHÚNG TA (Nêu ý kiến phản đối) =====
  { title: 'Bài ca trái đất', volume: 2, page: 122, genres: ['ta-nguoi'], verified: false },
  {
    title: 'Những con hạc giấy',
    volume: 2,
    page: 126,
    genres: ['ta-nguoi', 'cam-xuc-cau-chuyen'],
    verified: true,
    characters: 'Sa-da-cô (cô bé Nhật Bản)',
    summary: 'Câu chuyện cảm động có thật về cô bé Sa-da-cô Xa-xa-ki và ước mong hòa bình thế giới qua 1000 con hạc giấy.',
  },
  { title: 'Một người hùng thầm lặng', volume: 2, page: 130, genres: ['neu-y-kien'], verified: false },
  { title: 'Giờ Trái Đất', volume: 2, page: 135, genres: ['neu-y-kien'], verified: false },
  { title: 'Điện thoại di động', volume: 2, page: 140, genres: ['neu-y-kien'], verified: false },
  { title: 'Thành phố thông minh Mát-xđa', volume: 2, page: 144, genres: ['neu-y-kien'], verified: false },
];

/** Builds the textbook-grounding block injected into AI prompts. */
export function buildTextbookReferenceBlock(): string {
  const verified = TEXTBOOK_STORIES.filter(s => s.verified);
  const titleOnly = TEXTBOOK_STORIES.filter(s => !s.verified);

  const verifiedLines = verified
    .map(s => `  + "${s.title}" (Tập ${s.volume}, trang ${s.page})${s.characters ? ` — Nhân vật: ${s.characters}.` : ''}${s.summary ? ` ${s.summary}` : ''}`)
    .join('\n');

  const titleOnlyLines = titleOnly.map(s => `"${s.title}" (Tập ${s.volume}, tr.${s.page})`).join(', ');

  return `Tài liệu tham khảo về sách giáo khoa Tiếng Việt 5 (Bộ Kết nối tri thức - KNTT):

A. Các bài đọc đã XÁC MINH nội dung (dùng chính xác các chi tiết dưới đây khi đề bài nhắc tới):
${verifiedLines}

B. Các bài đọc khác có trong sách nhưng CHƯA XÁC MINH nội dung/nhân vật cụ thể (chỉ biết tên bài, không biết chi tiết cốt truyện): ${titleOnlyLines}.

QUAN TRỌNG:
- Nếu đề bài nhắc tới một bài ở mục A, BẮT BUỘC dùng đúng tên nhân vật và chi tiết đã liệt kê — tuyệt đối không bịa thêm nhân vật hay tình tiết khác.
- Nếu đề bài nhắc tới một bài ở mục B (chỉ có tên, chưa có chi tiết), TUYỆT ĐỐI không tự bịa tên nhân vật hay tình tiết cốt truyện cụ thể cho bài đó — hãy nói rõ với học sinh rằng em cần tự tóm tắt/nêu lại nội dung chính hoặc tên nhân vật của bài đọc đó (vì đây là nội dung riêng trong sách giáo khoa mà AI chưa được cung cấp), rồi mới xây dựng dàn ý dựa trên thông tin học sinh cung cấp. Không được đoán đại rồi trình bày như thể đó là sự thật trong sách.
- Nếu đề bài không nhắc tới bài đọc cụ thể nào trong sách, hãy viết tự do theo yêu cầu đề bài như bình thường.`;
}
