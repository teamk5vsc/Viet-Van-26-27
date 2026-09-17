import { EssayMetadata } from '../types';

export const SYLLABUS_DATA: EssayMetadata[] = [
  {
    id: 'ta-canh',
    title: 'Văn tả cảnh',
    emoji: '🌳',
    iconName: 'camera',
    iconBg: 'from-emerald-100 to-teal-100',
    iconColor: 'text-emerald-600',
    description: 'Miêu tả một cảnh đẹp quê hương, trường học, công viên, cảnh sinh hoạt thiên nhiên giúp người đọc hình dung rõ nét không gian.',
    topics: [
      'Tả một cảnh đẹp quê hương em (con sông, cánh đồng, bãi biển...)',
      'Tả cảnh trường học mến yêu của em trước buổi học',
      'Tả cảnh một công viên xanh mát vào một buổi sáng ấm áp',
      'Tả cảnh sân trường giờ ra chơi sôi động náo nhiệt',
      'Tả một buổi chiều hoàng hôn rực rỡ trên quê hương em'
    ],
    template: {
      mobi: [
        'Giới thiệu cảnh đẹp định miêu tả (Là cảnh gì? Ở đâu? Em quan sát vào lúc nào?)',
        'Cảm xúc, ấn tượng chung ban đầu (Cảnh đó đẹp ra sao? Vì sao em tả?)'
      ],
      thanbi: [
        '1. Tả bao quát: Tầm nhìn bao quát toàn bộ cảnh vật (Không gian, thời gian, thời tiết, ấn tượng lớn nhất).',
        '2. Tả chi tiết theo trình tự hợp lý (Từ xa đến gần hoặc từ cao xuống thấp):',
        '- Bầu trời (Mây, nắng, gió...), âm thanh xung quanh.',
        '- Cảnh vật chính: Cây cối, những con đường, dòng nước, màu sắc nổi bật.',
        '- Hoạt động của con người hoặc con vật góp phần làm cảnh sống động.',
        '3. Điểm đặc sắc nổi bật nhất (Chi tiết đắt giá, màu sắc hay âm thanh đặc trưng gây thương nhớ).'
      ],
      ketbi: [
        'Khẳng định lại tình cảm tinh tế của em với cảnh đẹp đó (Yêu quý, tự hào, gắn bó).',
        'Mong muốn hoặc hành động thiết thực để tiếp tục gìn giữ, bảo vệ vẻ đẹp thiên nhiên.'
      ]
    },
    aiRules: {
      mustHave: [
        'Xác định rõ cảnh vật cần tả',
        'Có miêu tả bao quát không gian',
        'Có miêu tả chi tiết bằng nhiều giác quan (thị giác, thính giác...)',
        'Sử dụng các từ ngữ miêu tả sinh động (tính từ chỉ màu sắc, hình dáng)',
        'Thể hiện cảm xúc tinh tế gắn bó với cảnh vật'
      ],
      shouldAvoid: [
        'Sa đà kể chuyện, liệt kê hoạt động quá nhiều mà quên đặc trưng tả cảnh',
        'Bố cục lộn xộn, không tả theo trình tự thời gian hoặc không gian',
        'Dàn ý quá sơ sài, chỉ gạch vài dòng chung chung phi thực tế'
      ]
    }
  },
  {
    id: 'ke-chuyen-sang-tao',
    title: 'Kể chuyện sáng tạo',
    emoji: '📖',
    iconName: 'book-open',
    iconBg: 'from-purple-100 to-violet-100',
    iconColor: 'text-purple-600',
    description: 'Tập trung kể lại một câu truyện quen thuộc bằng cách đổi vai nhân vật, thêm nhân vật mới, đổi kết cục hoặc viết tiếp hành trình bất ngờ.',
    topics: [
      'Trong vai Chiếc hộp bí mật dưới gốc cây kể lại hành trình phiêu lưu cùng Minh',
      'Thay đổi kết thúc của câu chuyện "Trí khôn của ta đây" theo hướng nhân văn hơn',
      'Đóng vai người cháu kể bài thơ "Bếp lửa" thành một câu chuyện sáng tạo',
      'Viết tiếp câu chuyện sáng tạo: Một buổi sáng, Minh phát hiện chiếc hộp kỳ lạ chứa bí mật...',
      'Đại diện cho chú Dế Mèn kể về bài học đường đời đầu tiên bằng một góc nhìn mới'
    ],
    template: {
      mobi: [
        'Giới thiệu câu chuyện định kể (Tên chuyện gốc là gì? Nhân vật chính là ai?)',
        'Hoàn cảnh xảy ra câu chuyện và lý do sáng tạo (Em nhập vai ai? Bắt đầu thế nào?)'
      ],
      thanbi: [
        '1. Sự việc khơi mào kích thích sự tò mò.',
        '2. Diễn biến câu chuyện sáng tạo:',
        '- Sự việc thứ nhất dẫn đến tình huống đặc biệt.',
        '- Sự việc thứ hai tiếp nối cùng các nhân vật mới hoặc hành động khác biệt chuyện cũ.',
        '- Xuất hiện tình huống bất ngờ hoặc nút thắt đột phá.',
        '3. Cao trào kịch tính: Đỉnh điểm vấn đề đặt ra và cách giải quyết khéo léo của nhân vật.',
        '4. Kết quả của những thay đổi sáng tạo đó.'
      ],
      ketbi: [
        'Từ câu chuyện rút ra ý nghĩa sâu sắc hoặc bài học cuộc sống đáng suy ngẫm.',
        'Thể hiện nét suy nghĩ riêng hoặc thông điệp sáng tạo muốn gửi gắm.'
      ]
    },
    aiRules: {
      mustHave: [
        'Giới thiệu rõ ràng hoàn cảnh câu chuyện',
        'Tạo ra nhân vật mới hoặc đột phá về vai kể khác biệt chuyện gốc',
        'Có sự việc mở đầu đầy hứa hẹn',
        'Xây dựng các chi tiết thắt nút và mở nút (cao trào và giải quyết ổn thỏa)',
        'Kết thúc câu chuyện sáng tạo mang ý nghĩa sâu sắc'
      ],
      shouldAvoid: [
        'Chép y nguyên cốt truyện cũ, không có yếu tố sáng tạo riêng',
        'Kể quá vắn tắt, diễn biến rời rạc như bản kiểm điểm',
        'Thời gian lỗi nhịp, thiếu logic hành động nhân vật'
      ]
    }
  },
  {
    id: 'cam-xuc-nhan-vat',
    title: 'Bày tỏ tình cảm về nhân vật',
    emoji: '🎬',
    iconName: 'heart-handshake',
    iconBg: 'from-pink-100 to-rose-100',
    iconColor: 'text-pink-600',
    description: 'Bày tỏ những tình cảm chân thành, chân dung tính cách ấn tượng về nhân vật trong các cuốn sách đã đọc hoặc phim hoạt hình mà em kính yêu.',
    topics: [
      'Bày tỏ cảm xúc của em về nhân vật Dế Mèn kiêu hãnh và bài học sau đó',
      'Tình cảm của em đối với nhân vật bé Thu trong truyện "Chiếc lược ngà"',
      'Chia sẻ suy nghĩ sâu sắc về nhân vật Doraemon - người bạn tinh nghịch sáng tạo',
      'Tình cảm đối với một người anh hùng nhỏ tuổi (Lượm, Kim Đồng...) trong truyện lịch sử',
      'Nêu cảm nghĩ về một nhân vật giàu nghị lực vượt lên số phận trong bộ phim hoạt hình yêu thích'
    ],
    template: {
      mobi: [
        'Giới thiệu nhân vật gây ấn tượng mạnh (Nhân vật nào? Thuộc tác phẩm hay bộ phim nào?)',
        'Cảm nhận bao quát của em về sự thu hút của nhân vật đó.'
      ],
      thanbi: [
        '1. Ấn tượng chung đầu tiên: Hoàn cảnh em tiếp cận nhân vật này (Từ câu chuyện đọc đêm mưa hay cùng bố xem phim?).',
        '2. Những nét đặc sắc cuốn hút nhất ở nhân vật:',
        '- Vẻ ngoài đặc trưng hoặc hành động phi thường.',
        '- Lời nói hoặc suy nghĩ độc đáo bộc lộ bản lĩnh tâm hồn.',
        '- Tính cách cốt lõi: nhân hậu, dũng cảm, thông minh vượt khó.',
        '3. Chi tiết em tâm đắc và lay động nhất ở nhân vật (Điều gì khiến trái tim em rung động?).',
        '4. Ảnh hưởng tốt đẹp của nhân vật đến suy nghĩ, hành động thực tế của chính em.'
      ],
      ketbi: [
        'Khẳng định tình cảm chân thành, sự trân quý của em với nhân vật.',
        'Rút ra bài học đạo đức hay lẽ sống tự hứa với bản thân để noi theo.'
      ]
    },
    aiRules: {
      mustHave: [
        'Nêu tên nhân vật và nguồn gốc tác phẩm',
        'Lựa chọn dẫn chứng cụ thể thể hiện nét tính cách nhân vật',
        'Lời bình luận sâu sắc về hành động đáng quý của nhân vật',
        'Thể hiện cảm xúc yêu ghét hoặc kính phục rõ rệt qua từ ngữ chân thật',
        'Bài học tự thân thấm thía tinh nghịch'
      ],
      shouldAvoid: [
        'Lệch sang kể tóm tắt lại toàn bộ nội dung tác phẩm, truyện kể mà quên biểu lộ cảm xúc',
        'Khen ngợi hời hợt chung chung không có dẫn chứng sự việc cụ thể',
        'Thiếu liên hệ thực tế xem nhân vật dạy em làm việc tốt gì'
      ]
    }
  },
  {
    id: 'cam-xuc-su-viec',
    title: 'Bày tỏ tình cảm, cảm xúc về một sự việc',
    emoji: '❤️',
    iconName: 'heart',
    iconBg: 'from-red-100 to-orange-100',
    iconColor: 'text-red-500',
    description: 'Thể hiện rung động, suy nghĩ và kỉ niệm sâu sắc của bản thân về một việc làm tốt, một kì nghỉ đáng nhớ hay một hoạt động thi đua xã hội thiết thực.',
    topics: [
      'Nêu cảm nghĩ về một kỉ niệm ấm áp đáng nhớ cùng người thân trong gia đình',
      'Viết về một hành động bảo vệ môi trường chung sức làm sạch bãi biển em tham gia',
      'Bày tỏ cảm xúc của em về một buổi quyên góp thiện nguyện giúp bạn vùng bão lũ',
      'Cảm xúc sau khi nỗ lực hoàn thành xuất sắc giải bơi lội hoặc thể chất của lớp',
      'Nêu cảm xúc sâu đậm về một sự việc tốt đẹp bất ngờ em chứng kiến trên đường đi học'
    ],
    template: {
      mobi: [
        'Giới thiệu sơ lược về sự việc đáng nhớ (Sự việc gì? Diễn ra khi nào? Ai tham gia?)',
        'Cảm xúc bao quát ban đầu về trải nghiệm này (Hồi hộp, tự hào hay đầy xúc động?)'
      ],
      thanbi: [
        '1. Diễn biến chân thực của sự việc:',
        '- Hoàn cảnh khởi đầu đầy thách thức khó quên.',
        '- Hoạt động chính diễn ra theo tiến trình từ đầu đến lúc sôi nổi nhất.',
        '- Mọi người xung quanh đã đóng góp công sức và tương tác thế nào?',
        '2. Cảm xúc sâu sắc trong suốt quá trình trải nghiệm:',
        '- Hồi hộp lo lắng trước giờ G.',
        '- Niềm vui vỡ òa, hăng say khi bắt tay thực hiện chung vai sát cánh.',
        '- Sự xúc động sâu xa lắng đọng sau khi sự việc hoàn tất.',
        '3. Điểm sáng hay hình ảnh ấn tượng nhất (Một ánh mắt cảm ơn, một nụ cười rạng rỡ của bạn ấm áp).'
      ],
      ketbi: [
        'Khẳng định giá trị nhân văn mà sự việc mang lại cho bản thân.',
        'Hứa hẹn thay đổi hành vi tích cực hoặc mong ước duy trì những hoạt động tuyệt đẹp đó.'
      ]
    },
    aiRules: {
      mustHave: [
        'Nêu rõ sự việc và thời điểm diễn ra',
        'Kết cấu logic trước - trong - sau của diễn biến',
        'Sử dụng nhiều từ ngữ tả cảm xúc nội tâm tinh tế (xúc động, nghẹn ngào, bừng sáng)',
        'Bật lên được ý nghĩa nhân bản thiết thực của việc làm đó',
        'Có bài học trải nghiệm sâu sắc đúc rút riêng'
      ],
      shouldAvoid: [
        'Chương trình hóa sự việc như lịch trình khô khan không chút cảm xúc',
        'Bịa đặt chi tiết không có thật khiến bài viết trở nên giả tạo',
        'Kể lể tràn lan nhưng không thể hiện được kỉ niệm đáng yêu nào'
      ]
    }
  },
  {
    id: 'neu-y-kien',
    title: 'Nêu ý kiến đồng tình / phản đối',
    emoji: '💡',
    iconName: 'scale',
    iconBg: 'from-blue-100 to-sky-100',
    iconColor: 'text-blue-600',
    description: 'Sử dụng tư duy biện luận đơn giản để đồng tình hoặc phản đối một quan điểm xã hội gần gũi như sử dụng điện thoại, đọc sách, bảo vệ động vật.',
    topics: [
      'Nêu ý kiến của em về việc: Học sinh lớp 5 có nên sử dụng điện thoại thông minh ở trường?',
      'Trình bày quan điểm tán thành việc: Đọc sách giấy mỗi ngày tốt hơn lướt mạng xã hội',
      'Kiến nghị bảo vệ động vật hoang dã và không đồng tình với việc sử dụng đồ da thú',
      'Nêu ý kiến đồng tình hay phản đối việc: Học sinh tiểu học có bắt buộc phải học thêm không?',
      'Phát biểu suy nghĩ về ý kiến: Trẻ em cần tham gia làm việc nhà phụ giúp cha mẹ'
    ],
    template: {
      mobi: [
        'Dẫn dắt nêu vấn đề nghị luận trong đời sống (Vấn đề gì đang được chú ý?)',
        'Khẳng định rõ ràng lập trường cá nhân: Em Tán thành đồng ý hay Phản đối không đồng tình.'
      ],
      thanbi: [
        '1. Lý lẽ 1 chứng minh quan điểm của em (Giải thích cốt lõi vấn đề): Vì sao em có quan điểm này?',
        '2. Lý lẽ 2 tăng tính thuyết phục (Dẫn chứng thực tế):',
        '- Nêu ra một ví dụ rất cụ thể sinh động từ đời sống học tập hằng ngày.',
        '- Phân tích lợi ích nếu làm theo hoặc tác hại nguy hại nếu vi phạm.',
        '3. Đưa ra lập luận phản biện nhẹ nhàng (Giải đáp ý kiến trái chiều): Một số bạn có thể cho rằng... Tuy nhiên, thực tế là...',
        '4. Bài học liên hệ bản thân sáng suốt.'
      ],
      ketbi: [
        'Khẳng định đinh thép ý kiến tán thành hoặc bác bỏ một lần nữa.',
        'Đề xuất giải pháp hành động thông điệp thiết thực, kêu gọi bạn bè cùng hưởng ứng.'
      ]
    },
    aiRules: {
      mustHave: [
        'Bày tỏ rõ ràng ngay ở mở bài là tán thành hay phản đối',
        'Có ít nhất 2 lý lẽ sâu sắc để chứng minh',
        'Có dẫn chứng cụ thể thực tế làm điểm tựa lập luận',
        'Có bước tranh biện giải quyết ý kiến trái chiều',
        'Lời văn khúc chiết mang tính thuyết phục cao'
      ],
      shouldAvoid: [
        'Ba phải mơ hồ lúc đồng ý lúc lại bác bỏ khiến bài văn mất trọng tâm',
        'Toàn diễn giải đao to búa lớn thiếu ví dụ sinh động lứa tuổi tiểu học',
        'Công kích gay gắt thô bạo ý kiến khác, thiếu tôn trọng quan điểm đa chiều'
      ]
    }
  },
  {
    id: 'cam-xuc-cau-chuyen',
    title: 'Bày tỏ cảm xúc về một câu chuyện',
    emoji: '📖',
    iconName: 'book-open',
    iconBg: 'from-blue-100 to-indigo-100',
    iconColor: 'text-blue-600',
    description: 'Bày tỏ những rung động, cảm nghĩ chân thành của em về một câu chuyện đầy ý nghĩa đã đọc hoặc được nghe kể.',
    topics: [
      'Nêu cảm nghĩ của em về câu chuyện "Sự tích hồ Ba Bể" và tấm lòng của mẹ con bà góa',
      'Bày tỏ tình cảm, cảm xúc của em sau khi đọc câu chuyện "Một phát minh nho nhỏ"',
      'Nêu cảm nghĩ về câu chuyện "Bông hoa cúc trắng" và lòng hiếu thảo của người con',
      'Chia sẻ cảm nhận của em về câu chuyện "Hạt giống tâm hồn" mà em yêu thích nhất'
    ],
    template: {
      mobi: [
        'Giới thiệu câu chuyện em định bày tỏ cảm xúc (Tên truyện, hoàn cảnh em đọc/nghe)',
        'Nêu cảm xúc, ấn tượng bao quát nhất'
      ],
      thanbi: [
        '1. Tóm tắt ngắn gọn sự việc chính khơi gợi cảm xúc mạnh mẽ nhất.',
        '2. Cảm xúc chi tiết của em đối với từng nhân vật hoặc tình huống trong câu chuyện (Cảm kích, thương xót, vui sướng, hay tiếc nuối).',
        '3. Ý nghĩa sâu sắc của câu chuyện lay động đến tâm hồn em.',
        '4. Những liên hệ thực tế, bài học bản thân tự rút ra.'
      ],
      ketbi: [
        'Khẳng định lại tình cảm của em đối với câu chuyện và giá trị của câu chuyện đó theo thời gian.'
      ]
    },
    aiRules: {
      mustHave: [
        'Nêu rõ tên câu chuyện',
        'Thể hiện cảm xúc chân thành xuyên suốt',
        'Rút ra được bài học sâu sắc từ câu chuyện',
        'Lập luận rõ ràng về ý nghĩa câu chuyện'
      ],
      shouldAvoid: [
        'Kể lại toàn bộ câu chuyện từ đầu đến cuối mà quên bày tỏ cảm xúc',
        'Nhận xét chung chung không có dẫn chứng sự việc cụ thể'
      ]
    }
  },
  {
    id: 'cam-xuc-bai-tho',
    title: 'Bày tỏ cảm xúc về một bài thơ',
    emoji: '📜',
    iconName: 'pen-tool',
    iconBg: 'from-amber-100 to-yellow-100',
    iconColor: 'text-amber-600',
    description: 'Bày tỏ những suy ngẫm, cảm xúc sâu lắng về nhịp điệu, hình ảnh và tình cảm chứa đựng trong một bài thơ em yêu thích.',
    topics: [
      'Bày tỏ cảm xúc của em sau khi học bài thơ "Hạt gạo làng ta" của Trần Đăng Khoa',
      'Cảm xúc của em về tình quê hương ấm áp trong bài thơ "Quê hương"',
      'Nêu cảm nhận của em về hình ảnh người chiến sĩ trong bài thơ "Tre Việt Nam"',
      'Chia sẻ rung động của em khi đọc bài thơ "Cánh diều tuổi thơ"'
    ],
    template: {
      mobi: [
        'Giới thiệu bài thơ (Tên bài thơ, tác giả) và hoàn cảnh tiếp xúc.',
        'Bộc lộ cảm nghĩ chung nhất về bài thơ.'
      ],
      thanbi: [
        '1. Cảm nhận về hình ảnh thơ đẹp và độc đáo (Hình ảnh thiên nhiên, con người).',
        '2. Cảm nhận về nhạc điệu, vần điệu của bài thơ gợi cảm giác gì.',
        '3. Phân tích từ ngữ gợi cảm xúc chân thật, lay động lòng người của bài thơ.',
        '4. Tình cảm của tác giả gửi gắm và sự đồng cảm của chính em.'
      ],
      ketbi: [
        'Khẳng định giá trị của bài thơ trong lòng em và sự trân trọng đối với tác giả.'
      ]
    },
    aiRules: {
      mustHave: [
        'Nêu tên bài thơ và tác giả',
        'Trích dẫn hoặc chỉ rõ những hình ảnh, từ ngữ đặc sắc trong bài thơ',
        'Bộc lộ tình cảm sâu sắc của người viết'
      ],
      shouldAvoid: [
        'Chép lại bài thơ mà không phân tích cảm xúc',
        'Viết lan man không tập trung vào cái hay của ngôn từ nghệ thuật thơ'
      ]
    }
  },
  {
    id: 'gioi-thieu-nhan-vat-sach',
    title: 'Giới thiệu nhân vật trong sách',
    emoji: '📘',
    iconName: 'book',
    iconBg: 'from-teal-100 to-emerald-100',
    iconColor: 'text-teal-600',
    description: 'Giới thiệu vẻ đẹp ngoại hình, tính cách đáng quý và những hành động ấn tượng của một nhân vật trong cuốn sách em đã đọc.',
    topics: [
      'Giới thiệu nhân vật chú dế Mèn kiêu hãnh nhưng biết sửa sai trong cuốn "Dế Mèn phiêu lưu ký"',
      'Giới thiệu cậu bé Lượm dũng cảm, hồn nhiên trong tập thơ/truyện cùng tên',
      'Giới thiệu nhân vật Harry Potter - cậu bé phù thủy quả cảm vượt khó',
      'Giới thiệu nhân vật bé Thu đầy cá tính và tình yêu cha mãnh liệt trong cuốn sách em đã đọc'
    ],
    template: {
      mobi: [
        'Giới thiệu nhân vật và cuốn sách chứa nhân vật đó (Tên sách, tác giả).',
        'Nêu ấn tượng sâu sắc nhất về nhân vật.'
      ],
      thanbi: [
        '1. Giới thiệu sơ lược về hoàn cảnh xuất hiện của nhân vật trong sách.',
        '2. Miêu tả đặc điểm ngoại hình nổi bật (nếu có) phản ánh tính cách.',
        '3. Phân tích tính cách và phẩm chất tốt đẹp thông qua hành động, lời nói cụ thể.',
        '4. Chi tiết ấn tượng nhất về nhân vật khiến em nhớ mãi.',
        '5. Cảm xúc và suy nghĩ của em dành cho nhân vật.'
      ],
      ketbi: [
        'Khẳng định lại ý nghĩa của nhân vật đó đối với độc giả và tình cảm của em.'
      ]
    },
    aiRules: {
      mustHave: [
        'Chỉ rõ tên nhân vật và tên cuốn sách',
        'Nêu được đặc điểm tính cách nổi bật của nhân vật',
        'Có ví dụ về hành động hoặc lời nói của nhân vật trong sách để minh họa'
      ],
      shouldAvoid: [
        'Tóm tắt cả cuốn sách mà không tập trung vào nhân vật',
        'Miêu tả chung chung không gắn liền với chi tiết trong sách'
      ]
    }
  },
  {
    id: 'gioi-thieu-nhan-vat-hoat-hinh',
    title: 'Giới thiệu nhân vật hoạt hình',
    emoji: '🦄',
    iconName: 'video',
    iconBg: 'from-rose-100 to-pink-100',
    iconColor: 'text-rose-500',
    description: 'Giới thiệu những nét vẽ sinh động, phép thuật kỳ diệu, tính cách dễ thương hay bài học ý nghĩa từ nhân vật hoạt hình em yêu thích.',
    topics: [
      'Giới thiệu nhân vật chú mèo máy Doraemon thông minh, tốt bụng và những bảo bối kỳ diệu',
      'Giới thiệu chú chuột Mickey vui nhộn, lạc quan trong bộ phim hoạt hình kinh điển',
      'Giới thiệu nhân vật Elsa - nữ hoàng băng giá xinh đẹp và giàu tình yêu thương em gái',
      'Giới thiệu nhân vật chú gấu Po vụng về nhưng kiên trì trong "Kung Fu Panda"'
    ],
    template: {
      mobi: [
        'Giới thiệu tên nhân vật hoạt hình và bộ phim hoạt hình đó.',
        'Nêu lý do em yêu thích nhân vật.'
      ],
      thanbi: [
        '1. Miêu tả đặc điểm hình dáng bên ngoài đầy sắc màu sinh động (màu sắc, trang phục, biểu cảm).',
        '2. Giới thiệu năng lực đặc biệt hoặc các món bảo bối, phép thuật (nếu có).',
        '3. Phân tích tính cách cốt lõi (Vui vẻ, tốt bụng, quả cảm, kiên trì).',
        '4. Kể lại một tình huống hài hước hoặc cảm động nhất của nhân vật trong phim.'
      ],
      ketbi: [
        'Nêu cảm nghĩ của em về nhân vật và bài học bổ ích nhân vật mang lại cho trẻ thơ.'
      ]
    },
    aiRules: {
      mustHave: [
        'Nêu rõ tên nhân vật và phim',
        'Miêu tả hình ảnh sinh động phù hợp với phim hoạt hình',
        'Nêu được tính cách hoặc thông điệp giáo dục từ nhân vật'
      ],
      shouldAvoid: [
        'Liệt kê các tập phim mà không tập trung giới thiệu nhân vật',
        'Miêu tả thiếu sinh động sinh động trẻ thơ'
      ]
    }
  },
  {
    id: 'ta-nguoi',
    title: 'Văn tả người',
    emoji: '🧑',
    iconName: 'user',
    iconBg: 'from-orange-100 to-amber-100',
    iconColor: 'text-orange-500',
    description: 'Miêu tả ngoại hình, cử chỉ, giọng nói và tính cách ấm áp của một người thân, cô giáo, người bạn hay một người lao động em kính yêu.',
    topics: [
      'Tả người mẹ kính yêu luôn tảo tần chăm sóc gia đình em',
      'Tả hình ảnh thầy giáo/cô giáo dạy lớp 5 của em đang say sưa giảng bài',
      'Tả người bạn thân thiết nhất của em ở trường tiểu học',
      'Tả bác nông dân đang chăm chỉ gặt lúa trên đồng quê hương',
      'Tả một em bé chập chững biết đi, biết nói vô cùng đáng yêu'
    ],
    template: {
      mobi: [
        'Giới thiệu người định tả (Ai? Quan hệ với em thế nào? Ấn tượng bao quát nhất).'
      ],
      thanbi: [
        '1. Tả ngoại hình nổi bật: Vóc dáng, khuôn mặt, mái tóc, đôi mắt, nụ cười, làn da, trang phục.',
        '2. Tả hoạt động, tính cách: Giọng nói nói năng, cử chỉ điệu bộ, đôi bàn tay lao động, tính cách (Hiền hậu, chu đáo, vui tính, chăm chỉ).',
        '3. Kỷ niệm đáng nhớ hoặc việc làm cụ thể của người đó thể hiện tình cảm với em.'
      ],
      ketbi: [
        'Bộc lộ tình cảm yêu mến, kính trọng sâu sắc và mong ước, lời hứa đối với người được tả.'
      ]
    },
    aiRules: {
      mustHave: [
        'Xác định rõ đối tượng tả người',
        'Kết hợp hài hòa giữa tả ngoại hình và tả hoạt động, tính cách',
        'Sử dụng từ ngữ miêu tả biểu cảm chân thực',
        'Thể hiện tình cảm sâu sắc của em'
      ],
      shouldAvoid: [
        'Liệt kê các bộ phận cơ thể một cách máy móc rập khuôn',
        'Miêu tả quá cường điệu xa rời thực tế học sinh lớp 5'
      ]
    }
  },
  {
    id: 'lap-chuong-trinh-hoat-dong',
    title: 'Lập chương trình hoạt động',
    emoji: '📅',
    iconName: 'calendar',
    iconBg: 'from-cyan-100 to-sky-100',
    iconColor: 'text-cyan-600',
    description: 'Lập kế hoạch chi tiết, phân công cụ thể các bước chuẩn bị cho một hoạt động tập thể như dọn vệ sinh, hội diễn văn nghệ hay cắm trại.',
    topics: [
      'Lập chương trình hoạt động cho buổi lao động dọn vệ sinh lớp học, sân trường',
      'Lập chương trình hoạt động tổ chức buổi chúc mừng Ngày Nhà giáo Việt Nam 20-11',
      'Lập chương trình cho buổi quyên góp sách vở ủng hộ học sinh vùng khó khăn',
      'Lập kế hoạch tổ chức một buổi sinh hoạt lớp cuối tuần vui tươi, gắn kết'
    ],
    template: {
      mobi: [
        'Nêu mục đích của chương trình hoạt động (Hoạt động tập thể gì? Nhằm mục đích gì?)'
      ],
      thanbi: [
        '1. Công tác chuẩn bị: Dụng cụ cần mang theo, địa điểm tập trung, thời gian.',
        '2. Phân công nhiệm vụ cụ thể cho từng cá nhân hoặc nhóm (Ai quét dọn, ai lau bảng, ai nhổ cỏ; hoặc ban văn nghệ, ban khánh tiết...).',
        '3. Chương trình cụ thể (Các bước tiến hành): Trình tự các hoạt động diễn ra từ đầu đến cuối một cách logic.'
      ],
      ketbi: [
        'Nêu ý nghĩa của hoạt động tập thể (Gắn kết tình bạn, nâng cao ý thức trách nhiệm và niềm vui sau khi hoàn thành).'
      ]
    },
    aiRules: {
      mustHave: [
        'Bố cục rõ ràng gồm 3 phần (Mục đích, Chuẩn bị & Phân công, Các bước tiến hành)',
        'Phân công nhiệm vụ cụ thể, rõ ràng cho từng nhóm',
        'Các hoạt động sắp xếp theo trình tự thời gian hợp lý',
        'Từ ngữ ngắn gọn, rõ ý'
      ],
      shouldAvoid: [
        'Viết như bài văn miêu tả thông thường',
        'Lập kế hoạch quá sơ sài chung chung không thể thực hiện được thực tế'
      ]
    }
  }
];

export const VOCABULARY_BANK = {
  'ta-canh': {
    title: '🌿 Từ vựng Văn Tả Cảnh',
    categories: [
      { name: 'Màu sắc thiên nhiên', words: [
        { term: 'xanh mướt', meaning: 'xanh tươi, mượt mà, đầy sức sống (như cỏ non, lá cây)' },
        { term: 'vàng óng', meaning: 'vàng sáng, bóng mượt như được đánh bóng (lúa chín, nắng chiều)' },
        { term: 'dát ánh bạc', meaning: 'được phủ một lớp sáng lấp lánh như bạc (mặt nước dưới trăng)' },
        { term: 'xanh rì', meaning: 'xanh đậm và um tùm, rậm rạp (rừng cây, bãi cỏ)' },
        { term: 'khói lam chiều', meaning: 'làn khói bếp mỏng, xanh nhạt bay lên lúc chiều tối ở làng quê' },
        { term: 'hồng hào đầy sức sống', meaning: 'màu hồng tươi, khỏe khoắn, tràn đầy sinh lực' },
        { term: 'nhuộm vàng rực rỡ', meaning: 'làm cho cả một vùng chuyển sang màu vàng tươi sáng' },
        { term: 'tím biếc', meaning: 'tím đậm và trong, đẹp mắt (hoa, bầu trời lúc hoàng hôn)' },
      ] },
      { name: 'Âm thanh không gian', words: [
        { term: 'xào xạc lá rơi', meaning: 'tiếng lá khô cọ vào nhau khi gió thổi hoặc khi rơi xuống đất' },
        { term: 'líu lo thánh thót', meaning: 'tiếng chim hót trong trẻo, cao vút, nghe rất vui tai' },
        { term: 'rầm rì tiếng sóng', meaning: 'tiếng sóng biển vỗ đều đều, nghe văng vẳng từ xa' },
        { term: 'náo nhiệt rộn rã', meaning: 'ồn ào, tưng bừng, tràn đầy sức sống (chợ, lễ hội)' },
        { term: 'tĩnh lặng khẽ khàng', meaning: 'rất yên tĩnh, chỉ có tiếng động rất nhỏ, nhẹ nhàng' },
        { term: 'rì rào gió thổi', meaning: 'tiếng gió lướt qua cây lá nghe đều đều, êm tai' },
        { term: 'ríu rít gọi bầy', meaning: 'tiếng chim, gà con kêu liên tục, vui vẻ khi gọi nhau' },
        { term: 'lao xao trò chuyện', meaning: 'tiếng nói chuyện nhỏ, xen lẫn của nhiều người cùng lúc' },
      ] },
      { name: 'Giác quan, xúc giác', words: [
        { term: 'ấm áp ngọt lành', meaning: 'cảm giác dễ chịu, ấm áp và trong lành (không khí, nắng sớm)' },
        { term: 'mát rượi lộng gió', meaning: 'mát mẻ, dễ chịu vì có gió thổi nhiều' },
        { term: 'thoang thoảng hương sen', meaning: 'mùi hương nhẹ, chỉ cảm nhận được khi ở gần' },
        { term: 'ngào ngạt hương rơm', meaning: 'mùi thơm nồng, lan tỏa khắp không gian (rơm mới phơi)' },
        { term: 'se se lạnh', meaning: 'hơi lạnh nhẹ, gây cảm giác dễ chịu chứ không buốt giá' },
        { term: 'mịn màng như nhung', meaning: 'mềm mịn, êm ái khi chạm vào (cánh hoa, lá non)' },
        { term: 'giòn tan trong nắng', meaning: 'cảm giác khô ráo, giòn rụm dưới ánh nắng (lá khô, rơm)' },
        { term: 'ẩm ướt hơi sương', meaning: 'có hơi nước nhẹ bám vào, cảm giác mát và ẩm (buổi sáng sớm)' },
      ] },
    ]
  },
  'ke-chuyen-sang-tao': {
    title: '📖 Từ vựng Kể Chuyện Sáng Tạo',
    categories: [
      { name: 'Từ nối cuốn hút', words: [
        { term: 'bất thình lình', meaning: 'xảy ra đột ngột, không ai ngờ tới' },
        { term: 'thật kỳ lạ là', meaning: 'dùng để dẫn vào một chi tiết khác thường, gây tò mò' },
        { term: 'kể từ khoảnh khắc đó', meaning: 'đánh dấu một mốc thời gian quan trọng làm thay đổi câu chuyện' },
        { term: 'như có một phép màu', meaning: 'diễn tả điều gì đó xảy ra kỳ diệu, khó tin' },
        { term: 'sau bao thử thách', meaning: 'sau khi đã trải qua nhiều khó khăn, gian nan' },
        { term: 'không ai có thể ngờ rằng', meaning: 'mở đầu cho một tình tiết bất ngờ trong truyện' },
        { term: 'đúng lúc đó', meaning: 'nhấn mạnh một sự việc xảy ra vào thời điểm quan trọng' },
        { term: 'cứ thế', meaning: 'diễn tả sự việc tiếp diễn một cách tự nhiên, liên tục' },
      ] },
      { name: 'Khêu gợi sự tò mò', words: [
        { term: 'chiếc hộp bí mật', meaning: 'vật đựng chứa điều gì đó chưa được biết đến, gây tò mò' },
        { term: 'gốc cây sần sùi', meaning: 'thân cây có bề mặt thô ráp, không nhẵn, gợi vẻ cổ xưa' },
        { term: 'bản đồ sờn rách', meaning: 'tấm bản đồ cũ, đã bị rách và mòn theo thời gian' },
        { term: 'ánh sáng huyền hoặc', meaning: 'ánh sáng kỳ lạ, khó giải thích, gợi cảm giác bí ẩn' },
        { term: 'thì thầm rỉ tai', meaning: 'nói rất nhỏ vào tai người khác, thường là điều bí mật' },
        { term: 'cánh cửa khép hờ', meaning: 'cửa không đóng chặt, hé mở như đang giấu điều gì' },
        { term: 'tiếng động lạ', meaning: 'âm thanh không rõ nguồn gốc, khiến người nghe tò mò, hồi hộp' },
        { term: 'dấu chân bí ẩn', meaning: 'vết chân không rõ của ai, gợi ra một câu chuyện chưa biết' },
      ] },
      { name: 'Bài học triết lý', words: [
        { term: 'bài học khắc cốt', meaning: 'điều học được sâu sắc đến mức không bao giờ quên' },
        { term: 'thấu hiểu tấm lòng', meaning: 'hiểu được tình cảm, suy nghĩ chân thật của người khác' },
        { term: 'gắn kết sẻ chia', meaning: 'cùng nhau chia sẻ buồn vui, giúp mối quan hệ thêm bền chặt' },
        { term: 'mở rộng vòng tay', meaning: 'sẵn sàng đón nhận, giúp đỡ người khác' },
        { term: 'vượt qua giới hạn', meaning: 'cố gắng vượt lên khả năng vốn có của bản thân' },
        { term: 'kiên trì không bỏ cuộc', meaning: 'cố gắng đến cùng dù gặp khó khăn, không từ bỏ' },
        { term: 'sống có trách nhiệm', meaning: 'biết lo cho bản thân và những người xung quanh' },
        { term: 'trân trọng những gì mình có', meaning: 'biết quý những điều tốt đẹp đang có trong cuộc sống' },
      ] },
    ]
  },
  'cam-xuc-nhan-vat': {
    title: '🎬 Từ vựng Cảm Xúc về Nhân Vật',
    categories: [
      { name: 'Ngoại hình/Tính cách', words: [
        { term: 'kiêu hãnh tự tin', meaning: 'tự hào về bản thân, luôn vững tin vào chính mình' },
        { term: 'dung dị chân chất', meaning: 'giản dị, thật thà, không cầu kỳ' },
        { term: 'oai vệ kiêu hùng', meaning: 'có dáng vẻ mạnh mẽ, uy nghiêm, đáng nể' },
        { term: 'nhỏ nhắn hoạt bát', meaning: 'vóc dáng nhỏ bé nhưng nhanh nhẹn, năng động' },
        { term: 'tinh nghịch đáng yêu', meaning: 'hay đùa nghịch nhưng khiến người khác thấy dễ mến' },
        { term: 'hiền lành phúc hậu', meaning: 'tính tình tốt bụng, gương mặt toát lên vẻ nhân từ' },
        { term: 'cương trực thẳng thắn', meaning: 'ngay thẳng, nói đúng sự thật, không giả dối' },
        { term: 'chăm chỉ cần cù', meaning: 'luôn chịu khó làm việc, không ngại vất vả' },
      ] },
      { name: 'Cảm xúc kính phục', words: [
        { term: 'vô cùng xúc động', meaning: 'cảm thấy rung động mạnh mẽ trong lòng' },
        { term: 'ngưỡng mộ thiết tha', meaning: 'rất khâm phục và yêu mến ai đó một cách chân thành' },
        { term: 'khâm phục vô ngần', meaning: 'phục vô cùng, không gì sánh được' },
        { term: 'ấm áp thương xót', meaning: 'vừa cảm thấy gần gũi, vừa thương cảm cho hoàn cảnh của ai đó' },
        { term: 'nêu gương sáng ngời', meaning: 'trở thành tấm gương tốt đẹp để người khác noi theo' },
        { term: 'tự hào khôn xiết', meaning: 'cảm thấy hãnh diện đến mức khó diễn tả hết bằng lời' },
        { term: 'cảm phục ý chí', meaning: 'khâm phục nghị lực, sự cố gắng của một người' },
        { term: 'trân trọng biết ơn', meaning: 'vừa quý mến vừa cảm thấy mang ơn ai đó' },
      ] },
      { name: 'Hành động lay động', words: [
        { term: 'dũng cảm can trường', meaning: 'gan dạ, không sợ khó khăn, nguy hiểm' },
        { term: 'hy sinh thầm lặng', meaning: 'âm thầm chịu thiệt thòi vì người khác mà không cần ai biết' },
        { term: 'bảo vệ chở che', meaning: 'luôn đứng ra giúp đỡ, giữ an toàn cho người khác' },
        { term: 'mỉm cười rạng rỡ', meaning: 'nụ cười tươi sáng, tràn đầy niềm vui' },
        { term: 'gạt nước mắt đứng lên', meaning: 'nén nỗi buồn, mạnh mẽ vượt qua khó khăn' },
        { term: 'dang tay giúp đỡ', meaning: 'sẵn sàng ra tay hỗ trợ người khác lúc khó khăn' },
        { term: 'âm thầm cống hiến', meaning: 'lặng lẽ đóng góp công sức mà không khoe khoang' },
        { term: 'nỗ lực không ngừng', meaning: 'luôn cố gắng, không bao giờ dừng lại' },
      ] },
    ]
  },
  'cam-xuc-su-viec': {
    title: '❤️ Từ vựng Cảm Xúc Sự Việc',
    categories: [
      { name: 'Rung động ban đầu', words: [
        { term: 'hồi hộp khôn nguôi', meaning: 'cảm giác lo lắng, mong chờ không dứt' },
        { term: 'rạo rực mong chờ', meaning: 'nôn nao, háo hức chờ đợi điều gì đó' },
        { term: 'lòng ngập tràn háo hức', meaning: 'trong lòng đầy cảm giác mong chờ, phấn khích' },
        { term: 'ngỡ ngàng khôn tả', meaning: 'bất ngờ đến mức không biết diễn tả sao cho đúng' },
        { term: 'chộn rộn bâng khuâng', meaning: 'vừa xao xuyến vừa có chút bồn chồn khó tả' },
        { term: 'bồi hồi xúc động', meaning: 'cảm xúc dâng trào, khó giữ được bình tĩnh' },
        { term: 'nôn nao khó tả', meaning: 'cảm giác nóng lòng, không thể ngồi yên' },
        { term: 'ngạc nhiên thích thú', meaning: 'bất ngờ nhưng cảm thấy vui vẻ, hào hứng' },
      ] },
      { name: 'Xúc cảm quá trình', words: [
        { term: 'thấm đậm nghĩa tình', meaning: 'chứa đựng tình cảm sâu sắc, chân thành' },
        { term: 'ấm áp lan tỏa', meaning: 'cảm giác dễ chịu, lan rộng ra xung quanh' },
        { term: 'niềm vui vỡ òa', meaning: 'niềm vui bất ngờ trào dâng mạnh mẽ' },
        { term: 'bừng ngời nhiệt huyết', meaning: 'tràn đầy nhiệt tình, hăng hái' },
        { term: 'sát cánh kề vai', meaning: 'cùng nhau đồng hành, hỗ trợ trong mọi việc' },
        { term: 'hân hoan phấn khởi', meaning: 'vui mừng, tinh thần phấn chấn' },
        { term: 'say sưa hào hứng', meaning: 'tập trung và thích thú tột độ với việc đang làm' },
        { term: 'rộn ràng náo nức', meaning: 'vui tươi, nôn nóng muốn được tham gia' },
      ] },
      { name: 'Ý nghĩa sâu xa', words: [
        { term: 'biết ơn trân trọng', meaning: 'cảm thấy mang ơn và quý những điều đã nhận được' },
        { term: 'trưởng thành sâu sắc', meaning: 'nhận ra bài học lớn, thay đổi suy nghĩ của bản thân' },
        { term: 'ký ức ngọt ngào', meaning: 'kỷ niệm đẹp, khiến người ta nhớ mãi với niềm vui' },
        { term: 'khắc ghi muôn đời', meaning: 'ghi nhớ mãi mãi, không bao giờ quên' },
        { term: 'ấm lòng tình người', meaning: 'cảm thấy được an ủi bởi tình cảm chân thành từ người khác' },
        { term: 'thêm yêu cuộc sống', meaning: 'cảm thấy trân quý và yêu đời hơn' },
        { term: 'để lại dấu ấn', meaning: 'tạo ra ảnh hưởng sâu sắc, khó phai trong lòng người' },
        { term: 'lan tỏa điều tốt đẹp', meaning: 'truyền cảm hứng, việc làm tốt đến với nhiều người khác' },
      ] },
    ]
  },
  'neu-y-kien': {
    title: '💡 Từ vựng Biện Luận Nêu Ý Kiến',
    categories: [
      { name: 'Bày tỏ lập trường', words: [
        { term: 'hoàn toàn tán thành', meaning: 'đồng ý một cách chắc chắn, không chút do dự' },
        { term: 'gạt đi ý kiến bất cập', meaning: 'bác bỏ những ý kiến không hợp lý, còn thiếu sót' },
        { term: 'tin tưởng vững chắc', meaning: 'tin một cách chắc chắn, không lay chuyển' },
        { term: 'kiên quyết phản đối', meaning: 'không đồng ý một cách dứt khoát, rõ ràng' },
        { term: 'đồng quan điểm với', meaning: 'có cùng suy nghĩ, cùng ý kiến với ai đó' },
        { term: 'giữ vững lập trường', meaning: 'không thay đổi ý kiến của mình dù có tranh luận' },
        { term: 'bày tỏ chính kiến', meaning: 'nói rõ suy nghĩ, quan điểm riêng của bản thân' },
        { term: 'một cách khách quan', meaning: 'nhìn nhận vấn đề công bằng, không thiên vị' },
      ] },
      { name: 'Từ nối lập luận', words: [
        { term: 'trước hết ta cần thấy', meaning: 'dùng để mở đầu một lý lẽ, ý kiến' },
        { term: 'hơn thế nữa', meaning: 'dùng để bổ sung thêm một lý lẽ khác mạnh hơn' },
        { term: 'đặc biệt đáng chú ý', meaning: 'nhấn mạnh một điểm quan trọng cần lưu ý' },
        { term: 'ví dụ minh chứng rõ nhất', meaning: 'đưa ra ví dụ cụ thể để làm rõ ý kiến' },
        { term: 'trái lại, trái chiều là', meaning: 'dùng khi nêu ý kiến ngược lại để so sánh' },
        { term: 'chính vì vậy', meaning: 'dùng để nêu kết luận rút ra từ lý lẽ đã nêu' },
        { term: 'không thể phủ nhận rằng', meaning: 'khẳng định một điều hiển nhiên, đúng đắn' },
        { term: 'bên cạnh đó', meaning: 'dùng để thêm một ý mới liên quan đến ý trước' },
      ] },
      { name: 'Khẳng định đề xuất', words: [
        { term: 'chìa khóa vững bước', meaning: 'điều quan trọng giúp đạt được thành công, tiến bộ' },
        { term: 'hướng tới lối sống đẹp', meaning: 'mong muốn xây dựng cách sống tốt, có ích' },
        { term: 'chúng ta hãy cùng nhau', meaning: 'lời kêu gọi mọi người cùng hành động' },
        { term: 'đáng trân quý biết bao', meaning: 'thể hiện sự quý trọng đối với điều gì đó' },
        { term: 'trao thông điệp vàng', meaning: 'gửi gắm một bài học, lời khuyên ý nghĩa' },
        { term: 'cần được nhân rộng', meaning: 'nên được nhiều người biết đến và làm theo' },
        { term: 'góp phần xây dựng', meaning: 'đóng góp công sức để tạo nên điều tốt đẹp' },
        { term: 'thiết thực và ý nghĩa', meaning: 'vừa có ích thực tế, vừa mang giá trị tốt đẹp' },
      ] },
    ]
  },
  'cam-xuc-cau-chuyen': {
    title: '📖 Từ vựng Cảm Xúc về Câu Chuyện',
    categories: [
      { name: 'Rung động sâu sắc', words: [
        { term: 'cảm động nghẹn ngào', meaning: 'xúc động đến mức khó nói thành lời' },
        { term: 'xót xa thương cảm', meaning: 'cảm thấy đau lòng, thương cho hoàn cảnh nhân vật' },
        { term: 'lòng đầy khâm phục', meaning: 'trong lòng rất nể phục một hành động, phẩm chất nào đó' },
        { term: 'thấu hiểu sâu sắc', meaning: 'hiểu rõ, hiểu tận gốc rễ vấn đề, cảm xúc' },
        { term: 'ký ức ùa về', meaning: 'những kỷ niệm bỗng nhiên hiện lên rõ ràng trong tâm trí' },
        { term: 'rưng rưng nước mắt', meaning: 'cảm động đến mức mắt ầng ậc nước' },
        { term: 'nhói lòng xót thương', meaning: 'cảm thấy đau nhói vì thương cảm sâu sắc' },
        { term: 'ấm lòng khi đọc', meaning: 'cảm thấy dễ chịu, hạnh phúc sau khi đọc câu chuyện' },
      ] },
      { name: 'Đặc điểm câu chuyện', words: [
        { term: 'cốt truyện nhân văn', meaning: 'nội dung câu chuyện đề cao tình người, đạo lý tốt đẹp' },
        { term: 'chi tiết đắt giá', meaning: 'tình tiết hay, có giá trị, để lại ấn tượng mạnh' },
        { term: 'bất ngờ cảm động', meaning: 'diễn biến không lường trước được nhưng khiến người đọc xúc động' },
        { term: 'kết thúc viên mãn', meaning: 'câu chuyện kết thúc tốt đẹp, trọn vẹn' },
        { term: 'giàu tính giáo dục', meaning: 'mang nhiều bài học ý nghĩa cho người đọc' },
        { term: 'tình tiết ly kỳ', meaning: 'diễn biến hấp dẫn, gây tò mò, hồi hộp' },
        { term: 'hình tượng sống động', meaning: 'nhân vật, sự việc được miêu tả chân thực, rõ nét' },
        { term: 'thông điệp sâu sắc', meaning: 'bài học, ý nghĩa được gửi gắm có giá trị lớn' },
      ] },
      { name: 'Bài học kết nối', words: [
        { term: 'hiếu thảo kính yêu', meaning: 'biết yêu thương, kính trọng ông bà, cha mẹ' },
        { term: 'sống đẹp sẻ chia', meaning: 'biết quan tâm, giúp đỡ, chia sẻ với người khác' },
        { term: 'lan tỏa tình thương', meaning: 'truyền tình cảm yêu thương đến nhiều người xung quanh' },
        { term: 'biết ơn trân trọng', meaning: 'nhớ ơn và quý trọng những điều tốt đẹp đã nhận' },
        { term: 'nuôi dưỡng tâm hồn', meaning: 'bồi đắp những suy nghĩ, tình cảm tốt đẹp bên trong mỗi người' },
        { term: 'gắn bó yêu thương', meaning: 'có tình cảm bền chặt, gần gũi với nhau' },
        { term: 'trân trọng tình bạn', meaning: 'coi trọng và giữ gìn mối quan hệ bạn bè' },
        { term: 'sống chan hòa', meaning: 'sống hòa đồng, gần gũi, yêu thương mọi người xung quanh' },
      ] },
    ]
  },
  'cam-xuc-bai-tho': {
    title: '📜 Từ vựng Cảm Xúc về Bài Thơ',
    categories: [
      { name: 'Hình ảnh, ngôn từ', words: [
        { term: 'hình ảnh thơ mộng', meaning: 'hình ảnh đẹp, nên thơ, gợi cảm xúc lãng mạn' },
        { term: 'ngôn từ trau chuốt', meaning: 'lời văn được chọn lọc kỹ càng, tinh tế, đẹp đẽ' },
        { term: 'giản dị mộc mạc', meaning: 'đơn giản, chân thật, gần gũi, không cầu kỳ' },
        { term: 'giàu sức gợi hình', meaning: 'từ ngữ khiến người đọc dễ dàng hình dung ra hình ảnh' },
        { term: 'so sánh độc đáo', meaning: 'cách ví von mới lạ, thú vị, ít gặp' },
        { term: 'từ ngữ giàu nhạc tính', meaning: 'lời thơ đọc lên nghe êm tai, có nhịp điệu' },
        { term: 'hình ảnh ẩn dụ', meaning: 'hình ảnh mang ý nghĩa sâu xa hơn nghĩa đen của nó' },
        { term: 'ngôn ngữ trong sáng', meaning: 'lời thơ rõ ràng, dễ hiểu, đẹp đẽ' },
      ] },
      { name: 'Nhạc điệu, vần thơ', words: [
        { term: 'vần điệu uyển chuyển', meaning: 'cách gieo vần mềm mại, nhịp nhàng' },
        { term: 'nhịp thơ dồn dập', meaning: 'nhịp điệu nhanh, gấp gáp, tạo cảm giác mạnh mẽ' },
        { term: 'êm đềm sâu lắng', meaning: 'nhẹ nhàng, êm ái và khiến người đọc suy ngẫm' },
        { term: 'âm vang giòn giã', meaning: 'âm thanh vang lên rõ ràng, tươi vui' },
        { term: 'nhạc điệu thiết tha', meaning: 'âm điệu chan chứa tình cảm, tha thiết' },
        { term: 'ngân nga trầm bổng', meaning: 'âm điệu lên xuống nhẹ nhàng, du dương' },
        { term: 'vần thơ nhịp nhàng', meaning: 'cách gieo vần đều đặn, tạo cảm giác hài hòa' },
        { term: 'tiết tấu du dương', meaning: 'nhịp điệu êm ái, dễ nghe, dễ nhớ' },
      ] },
      { name: 'Cảm xúc khơi gợi', words: [
        { term: 'bâng khuâng xao xuyến', meaning: 'cảm xúc nhẹ nhàng, khó gọi tên, gợi nhớ' },
        { term: 'dâng trào cảm xúc', meaning: 'cảm xúc bỗng nhiên mạnh mẽ, tràn đầy trong lòng' },
        { term: 'ấm áp tình quê', meaning: 'cảm giác gần gũi, yêu thương dành cho quê hương' },
        { term: 'khắc khoải nhớ thương', meaning: 'nỗi nhớ da diết, không nguôi' },
        { term: 'thắp sáng niềm tin', meaning: 'khơi dậy hy vọng, niềm tin vào điều tốt đẹp' },
        { term: 'rung động lòng người', meaning: 'chạm đến cảm xúc sâu thẳm của người đọc' },
        { term: 'gợi nhớ tuổi thơ', meaning: 'khiến người đọc nhớ lại những kỷ niệm thời thơ ấu' },
        { term: 'lắng đọng tâm hồn', meaning: 'để lại cảm xúc sâu sắc, khiến người đọc suy tư' },
      ] },
    ]
  },
  'gioi-thieu-nhan-vat-sach': {
    title: '📘 Từ vựng Giới thiệu Nhân vật trong Sách',
    categories: [
      { name: 'Ngoại hình tính cách', words: [
        { term: 'kiêu hãnh tự tin', meaning: 'tự hào, vững tin vào bản thân' },
        { term: 'nhỏ nhắn tinh nghịch', meaning: 'vóc dáng nhỏ bé nhưng hay đùa nghịch' },
        { term: 'dũng cảm quả cảm', meaning: 'gan dạ, không sợ nguy hiểm, khó khăn' },
        { term: 'hiền từ nhân hậu', meaning: 'tốt bụng, giàu lòng thương người' },
        { term: 'học thức uyên bác', meaning: 'hiểu biết rộng, có nhiều kiến thức sâu sắc' },
        { term: 'lanh lợi thông minh', meaning: 'nhanh nhẹn, sáng dạ, xử lý tình huống tốt' },
        { term: 'ngay thẳng thật thà', meaning: 'sống trung thực, không gian dối' },
        { term: 'giàu lòng trắc ẩn', meaning: 'dễ đồng cảm, thương xót trước khó khăn của người khác' },
      ] },
      { name: 'Hoàn cảnh & Hành động', words: [
        { term: 'phiêu lưu mạo hiểm', meaning: 'trải qua những chuyến đi đầy thử thách, nguy hiểm' },
        { term: 'đối đầu thử thách', meaning: 'dũng cảm đương đầu với khó khăn' },
        { term: 'giúp bạn vượt khó', meaning: 'hỗ trợ bạn bè khi gặp khó khăn' },
        { term: 'sửa sai nhận lỗi', meaning: 'biết nhận ra và sửa chữa lỗi lầm của mình' },
        { term: 'đồng cam cộng khổ', meaning: 'cùng nhau chia sẻ khó khăn, gian khổ' },
        { term: 'vượt qua nghịch cảnh', meaning: 'cố gắng vươn lên dù hoàn cảnh khó khăn' },
        { term: 'kiên trì theo đuổi ước mơ', meaning: 'không bỏ cuộc trong việc thực hiện mơ ước' },
        { term: 'đấu tranh cho lẽ phải', meaning: 'dũng cảm bảo vệ điều đúng đắn' },
      ] },
      { name: 'Tình cảm độc giả', words: [
        { term: 'yêu mến khôn nguôi', meaning: 'yêu thích một cách sâu đậm, không dứt' },
        { term: 'khâm phục vô ngần', meaning: 'rất nể phục, không gì sánh được' },
        { term: 'đồng cảm sâu sắc', meaning: 'hiểu và chia sẻ cảm xúc cùng nhân vật' },
        { term: 'nhân vật truyền cảm hứng', meaning: 'nhân vật khiến người đọc học hỏi, noi theo' },
        { term: 'ấn tượng sâu đậm', meaning: 'để lại dấu ấn khó quên trong lòng người đọc' },
        { term: 'muốn học hỏi theo', meaning: 'mong muốn noi gương những điều tốt đẹp của nhân vật' },
        { term: 'gần gũi thân quen', meaning: 'cảm thấy nhân vật như người quen thuộc, dễ mến' },
        { term: 'nể phục nghị lực', meaning: 'khâm phục ý chí, sự kiên cường của nhân vật' },
      ] },
    ]
  },
  'gioi-thieu-nhan-vat-hoat-hinh': {
    title: '🦄 Từ vựng Giới thiệu Nhân vật Hoạt hình',
    categories: [
      { name: 'Ngoại hình nét vẽ', words: [
        { term: 'ngộ nghĩnh đáng yêu', meaning: 'hình dáng vui mắt, khiến người xem thấy dễ thương' },
        { term: 'tròn xoe màu sắc', meaning: 'hình dáng tròn trịa, màu sắc tươi sáng, bắt mắt' },
        { term: 'nét vẽ sinh động', meaning: 'hình ảnh được vẽ chân thực, có hồn, dễ cuốn hút' },
        { term: 'đáng yêu ngây ngô', meaning: 'vẻ ngoài dễ thương, hồn nhiên, trong sáng' },
        { term: 'vẻ ngoài đặc trưng', meaning: 'hình dáng riêng biệt, dễ nhận ra của nhân vật' },
        { term: 'rực rỡ sắc màu', meaning: 'màu sắc tươi sáng, nổi bật, thu hút ánh nhìn' },
        { term: 'hình dáng độc đáo', meaning: 'vẻ ngoài mới lạ, không giống ai' },
        { term: 'biểu cảm hài hước', meaning: 'nét mặt vui nhộn, gây cười' },
      ] },
      { name: 'Bảo bối phép thuật', words: [
        { term: 'phép thuật kỳ diệu', meaning: 'sức mạnh huyền bí, tạo ra những điều không tưởng' },
        { term: 'bảo bối thần kỳ', meaning: 'vật dụng đặc biệt có sức mạnh phi thường' },
        { term: 'biến hóa khôn lường', meaning: 'thay đổi hình dạng, năng lực một cách bất ngờ' },
        { term: 'sức mạnh phi thường', meaning: 'khả năng vượt xa người bình thường' },
        { term: 'khám phá ước mơ', meaning: 'hành trình tìm kiếm, chinh phục điều mình mong muốn' },
        { term: 'năng lượng diệu kỳ', meaning: 'nguồn sức mạnh đặc biệt, khó lý giải' },
        { term: 'thế giới huyền ảo', meaning: 'không gian tưởng tượng, kỳ lạ, đầy phép màu' },
        { term: 'vật phẩm bí ẩn', meaning: 'đồ vật mang sức mạnh hoặc bí mật chưa được khám phá' },
      ] },
      { name: 'Tính cách hành động', words: [
        { term: 'tốt bụng ấm áp', meaning: 'tính cách hiền lành, luôn quan tâm người khác' },
        { term: 'vui vẻ lạc quan', meaning: 'luôn tươi cười, nhìn cuộc sống theo hướng tích cực' },
        { term: 'vụng về tinh nghịch', meaning: 'hay lóng ngóng nhưng đáng yêu, hay đùa nghịch' },
        { term: 'kề vai sát cánh', meaning: 'luôn đồng hành, hỗ trợ bạn bè' },
        { term: 'tinh thần đồng đội', meaning: 'biết hợp tác, giúp đỡ nhau trong nhóm' },
        { term: 'dũng cảm bảo vệ bạn bè', meaning: 'sẵn sàng đứng ra che chở cho bạn' },
        { term: 'hài hước dí dỏm', meaning: 'tính cách vui tính, hay pha trò' },
        { term: 'luôn sẵn sàng giúp đỡ', meaning: 'nhiệt tình hỗ trợ người khác khi cần' },
      ] },
    ]
  },
  'ta-nguoi': {
    title: '🧑 Từ vựng Văn Tả Người',
    categories: [
      { name: 'Ngoại hình khuôn mặt', words: [
        { term: 'mái tóc bạc phơ', meaning: 'tóc trắng hoàn toàn, thường thấy ở người già' },
        { term: 'đôi mắt biết nói', meaning: 'ánh mắt thể hiện rõ tình cảm, suy nghĩ' },
        { term: 'gương mặt phúc hậu', meaning: 'khuôn mặt hiền từ, toát lên vẻ nhân hậu' },
        { term: 'làn da rám nắng', meaning: 'da có màu sạm do tiếp xúc nhiều với nắng' },
        { term: 'nụ cười tỏa nắng', meaning: 'nụ cười tươi tắn, mang lại cảm giác vui vẻ' },
        { term: 'vầng trán cao rộng', meaning: 'trán rộng, thường gợi vẻ thông minh, hiểu biết' },
        { term: 'đôi má hồng hào', meaning: 'má có màu hồng, trông khỏe mạnh, xinh xắn' },
        { term: 'dáng người tần tảo', meaning: 'vóc dáng gầy gò vì vất vả, chịu khó' },
      ] },
      { name: 'Cử chỉ hành động', words: [
        { term: 'bàn tay chai sần', meaning: 'tay có vết chai do lao động vất vả, lâu năm' },
        { term: 'giọng nói truyền cảm', meaning: 'giọng nói ấm áp, dễ đi vào lòng người' },
        { term: 'tảo tần khuya sớm', meaning: 'chăm chỉ làm việc từ sáng sớm đến tối khuya' },
        { term: 'chăm chỉ miệt mài', meaning: 'làm việc chăm chỉ, không ngừng nghỉ' },
        { term: 'ân cần chu đáo', meaning: 'quan tâm, chăm sóc kỹ lưỡng, tận tình' },
        { term: 'dịu dàng ân cần', meaning: 'nhẹ nhàng, quan tâm chu đáo đến người khác' },
        { term: 'cần mẫn sớm hôm', meaning: 'chăm chỉ làm việc suốt cả ngày' },
        { term: 'nhanh nhẹn hoạt bát', meaning: 'cử chỉ linh hoạt, nhanh nhẹn trong công việc' },
      ] },
      { name: 'Tình cảm gắn kết', words: [
        { term: 'kính yêu vô bờ', meaning: 'yêu thương, kính trọng vô cùng lớn lao' },
        { term: 'biết ơn sâu sắc', meaning: 'cảm thấy mang ơn một cách chân thành, sâu đậm' },
        { term: 'trân quý thiêng liêng', meaning: 'coi trọng như điều gì đó cao quý, đặc biệt' },
        { term: 'kỷ niệm ấm áp', meaning: 'những ký ức đẹp, mang lại cảm giác dễ chịu' },
        { term: 'khắc ghi công ơn', meaning: 'luôn nhớ và biết ơn công lao của ai đó' },
        { term: 'gắn bó thân thiết', meaning: 'có mối quan hệ gần gũi, khăng khít' },
        { term: 'yêu thương vô điều kiện', meaning: 'tình yêu thương không đòi hỏi, không toan tính' },
        { term: 'luôn dõi theo che chở', meaning: 'luôn quan tâm, bảo vệ dù ở gần hay xa' },
      ] },
    ]
  },
  'lap-chuong-trinh-hoat-dong': {
    title: '📅 Từ vựng Lập Chương trình Hoạt động',
    categories: [
      { name: 'Mục đích chuẩn bị', words: [
        { term: 'nâng cao ý thức', meaning: 'giúp mọi người hiểu và quan tâm hơn đến một vấn đề' },
        { term: 'khang trang sạch đẹp', meaning: 'gọn gàng, sạch sẽ và đẹp mắt' },
        { term: 'tri ân thầy cô', meaning: 'bày tỏ lòng biết ơn đối với thầy cô giáo' },
        { term: 'chuẩn bị chu đáo', meaning: 'sắp xếp kỹ lưỡng, đầy đủ trước khi thực hiện' },
        { term: 'phân công cụ thể', meaning: 'giao nhiệm vụ rõ ràng cho từng người, từng nhóm' },
        { term: 'lên kế hoạch chi tiết', meaning: 'sắp xếp các bước thực hiện rõ ràng, đầy đủ' },
        { term: 'mục tiêu rõ ràng', meaning: 'kết quả mong muốn đạt được được xác định cụ thể' },
        { term: 'huy động sự tham gia', meaning: 'kêu gọi nhiều người cùng tham gia hoạt động' },
      ] },
      { name: 'Hoạt động phân công', words: [
        { term: 'ban khánh tiết', meaning: 'nhóm phụ trách trang trí, chuẩn bị cho buổi lễ' },
        { term: 'nhóm lao động', meaning: 'nhóm phụ trách công việc dọn dẹp, làm vệ sinh' },
        { term: 'hăng hái thực hiện', meaning: 'thực hiện công việc với tinh thần nhiệt tình, tích cực' },
        { term: 'phối hợp nhịp nhàng', meaning: 'cùng nhau làm việc ăn ý, không chồng chéo' },
        { term: 'phân công trách nhiệm', meaning: 'giao rõ việc ai làm gì, chịu trách nhiệm gì' },
        { term: 'tích cực hưởng ứng', meaning: 'vui vẻ tham gia, ủng hộ hoạt động' },
        { term: 'hoàn thành đúng tiến độ', meaning: 'làm xong công việc đúng thời gian đã định' },
        { term: 'hỗ trợ lẫn nhau', meaning: 'giúp đỡ nhau trong quá trình thực hiện công việc' },
      ] },
      { name: 'Kết quả ý nghĩa', words: [
        { term: 'hoàn thành xuất sắc', meaning: 'thực hiện công việc rất tốt, vượt mong đợi' },
        { term: 'gắn kết tinh thần', meaning: 'làm cho mọi người thêm đoàn kết, gần gũi nhau' },
        { term: 'vui tươi lành mạnh', meaning: 'không khí vui vẻ, tích cực và bổ ích' },
        { term: 'trải nghiệm bổ ích', meaning: 'có được bài học, kinh nghiệm quý giá' },
        { term: 'đoàn kết một lòng', meaning: 'mọi người cùng chung sức, cùng một mục tiêu' },
        { term: 'để lại ấn tượng tốt đẹp', meaning: 'hoạt động khiến mọi người nhớ mãi với cảm giác tích cực' },
        { term: 'lan tỏa tinh thần tích cực', meaning: 'truyền cảm hứng, năng lượng tốt đến mọi người' },
        { term: 'góp phần xây dựng tập thể', meaning: 'đóng góp giúp nhóm, lớp thêm gắn bó, phát triển' },
      ] },
    ]
  }
};
