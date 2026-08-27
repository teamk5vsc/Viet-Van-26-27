import { SampleEssayResult } from '../types';

export function getDynamicMockEssay(
  topic: string,
  type: string,
  format: 'essay' | 'paragraph'
): SampleEssayResult {
  const cleanTopic = topic || '';
  const topicLower = cleanTopic.toLowerCase();
  const isParagraph = format === 'paragraph';

  // -------------------------------------------------------------
  // 1. KỂ CHUYỆN SÁNG TẠO (ke-chuyen-sang-tao)
  // -------------------------------------------------------------
  if (type === 'ke-chuyen-sang-tao') {
    if (topicLower.includes('cánh đồng hoa')) {
      if (isParagraph) {
        return {
          format: 'paragraph',
          content: `Chiều hôm ấy, khi hoàng hôn nhuộm hồng thung lũng, tôi đứng lặng người nhìn ngắm cánh đồng hoa hướng dương lung linh khoe sắc mà lòng trào dâng niềm tự hào khôn tả. Mới ngày nào nơi đây còn là một bãi đất trống hoang tàn, đầy rác rưởi xám xịt do mọi người vô ý thức xả ra. Nhưng bằng tình yêu quê hương và sức lao động bền bỉ, nhóm bạn nhỏ chúng tôi đã rủ nhau dọn dẹp, cuốc đất và gieo xuống những hạt mầm hy vọng. Giờ đây, hàng ngàn đóa hoa như những mặt trời nhỏ xèo cánh vàng tươi rực rỡ, reo vui trong gió, xua tan đi vẻ ảm đạm ngày xưa để tô điểm cho xóm nhỏ thân yêu.`,
          highlights: [
            { text: "như những mặt trời nhỏ xèo cánh vàng tươi rực rỡ", type: "rhetorical", explanation: "Biện pháp so sánh ví hoa hướng dương với mặt trời nhỏ tạo hình ảnh sinh động, đầy năng lượng và tươi sáng." },
            { text: "lòng trào dâng niềm tự hào khôn tả", type: "emotion", explanation: "Cảm xúc tự hào, vui sướng của nhân vật khi thấy công sức của mình và các bạn mang lại vẻ đẹp cho quê hương." },
            { text: "gieo xuống những hạt mầm hy vọng", type: "rhetorical", explanation: "Ẩn dụ nghệ thuật, thể hiện mong ước và niềm tin của các bạn nhỏ vào hành động đẹp bảo vệ môi trường." }
          ],
          analysis: [
            "Đoạn văn kể lại khoảnh khắc thành quả lao động đầy tự hào của các bạn nhỏ dưới dạng ngôi kể thứ nhất.",
            "Sử dụng các từ ngữ miêu tả tương phản rõ rệt giữa bãi đất hoang xám xịt và cánh đồng hoa rực rỡ sắc màu.",
            "Truyền tải thông điệp sâu sắc về tinh thần đoàn kết của tuổi thơ và ý thức làm đẹp cho môi trường sống."
          ]
        };
      } else {
        return {
          format: 'essay',
          content: `Tôi là Lan, một học sinh nhỏ sinh sống ở xóm núi ven đô. Mỗi lần nhìn ngắm những du khách hào hứng chụp ảnh bên thung lũng hoa rực rỡ, lòng tôi lại bồi hồi nhớ về những ngày tháng chung tay biến bãi đất hoang xám xịt thành một cánh đồng hoa tươi thắm.\n\nCâu chuyện bắt đầu từ mùa hè năm ngoái. Nơi đây vốn là một bãi đất trống bỏ hoang, cỏ dại mọc um tùm và dần biến thành bãi rác bốc mùi xú uế của xóm. Thấy cảnh quê hương ngày một xấu đi, tôi cùng các bạn trong nhóm đã nảy ra ý tưởng táo bạo: biến bãi rác thành vườn hoa. Nghĩ là làm, chúng tôi bắt tay vào dọn dẹp rác thải. Những ngày đầu thật gian nan, đôi bàn tay nhỏ bé của chúng tôi mỏi nhừ vì cuốc đất, nhổ cỏ dại dưới nắng hè nóng bức. Thế nhưng, không ai nản chí. Các bạn nam gánh đất, các bạn nữ tỉ mỉ gieo từng hạt hoa cúc bách nhật, hoa hướng dương. Mỗi chiều đi học về, chúng tôi lại tíu tít tiếng cười, cùng nhau xách từng xô nước tưới tắm cho mầm xanh. Kỳ diệu thay, chỉ sau vài tháng chăm sóc, những nụ hoa đầu tiên đã hé nở. Cả bãi đất xám xịt ngày nào giờ đã hóa thành một thảm hoa rực rỡ muôn màu muôn sắc, tỏa hương thơm ngào ngạt khắp không gian.\n\nCánh đồng hoa hướng dương lấp lánh dưới nắng mai không chỉ làm đẹp thêm xóm nhỏ của tôi mà còn nở hoa trong lòng mỗi chúng tôi về tình bạn và sức mạnh của sự chung tay đoàn kết. Tôi tự hứa sẽ luôn gìn giữ, bảo vệ thung lũng hoa xinh đẹp này để xóm nhỏ luôn ngập tràn sắc màu ấm áp.`,
          highlights: [
            { text: "biến bãi đất hoang xám xịt thành một cánh đồng hoa tươi thắm", type: "imagery", explanation: "Hình ảnh tương phản mạnh mẽ thể hiện sức lao động và sự thay đổi kỳ diệu của cảnh vật." },
            { text: "tíu tít tiếng cười, cùng nhau xách từng xô nước", type: "vocabulary", explanation: "Từ láy 'tíu tít' gợi tả bầu không khí vui tươi, hăng say lao động của tuổi thơ." },
            { text: "nở hoa trong lòng mỗi chúng tôi về tình bạn", type: "rhetorical", explanation: "Hình ảnh ẩn dụ đầy chất thơ, nhấn mạnh tình bạn bền chặt được vun đắp qua quá trình cùng làm việc ý nghĩa." }
          ],
          analysis: [
            "Bố cục 3 phần rõ ràng, dẫn dắt bằng ngôi kể thứ nhất tự nhiên, chân thực.",
            "Diễn biến truyện sáng tạo, thêm thắt các chi tiết miêu tả cảm xúc và hành động lao động cụ thể của các bạn nhỏ lớp 5.",
            "Khẳng định bài học sâu sắc về tinh thần đoàn kết và ý thức bảo vệ môi trường, mang tính giáo dục cao."
          ]
        };
      }
    }

    if (topicLower.includes('thanh âm của gió')) {
      if (isParagraph) {
        return {
          format: 'paragraph',
          content: `Nằm dài trên thảm cỏ xanh mát rượi của thung lũng lộng gió, tôi nhắm nghiền mắt và chăm chú lắng nghe bản hòa ca kỳ diệu của gió trời. Tiếng gió luồn qua khe đá rì rào tựa như lời thì thầm kể những câu chuyện cổ tích xa xưa, rồi lại xạc xào qua kẽ lá tre nghe như tiếng đàn tranh êm ái xua tan đi bao mệt mỏi của muôn loài. Gió mát lành đưa hương thơm dịu nhẹ của hoa dại phả nhẹ lên gương mặt tôi ấm áp. Tôi chợt nhận ra gió không hề vô hình mà luôn hiện hữu, hát ca và mang những thanh âm yêu thương kết nối trái tim muôn loài muông thú nơi thung lũng xinh đẹp này.`,
          highlights: [
            { text: "rì rào tựa như lời thì thầm kể những câu chuyện cổ tích", type: "rhetorical", explanation: "So sánh và nhân hóa tiếng gió giúp âm thanh vô hình trở nên gần gũi, mang đậm màu sắc huyền ảo của thế giới tuổi thơ." },
            { text: "xạc xào qua kẽ lá", type: "vocabulary", explanation: "Từ láy gợi âm 'xạc xào' giúp người đọc cảm nhận rõ tiếng lá tre đung đưa theo từng nhịp gió thổi." },
            { text: "mang những thanh âm yêu thương kết nối trái tim muôn loài", type: "emotion", explanation: "Thể hiện sự thấu cảm sâu sắc của nhân vật với thiên nhiên, lan tỏa tình yêu thương bình dị." }
          ],
          analysis: [
            "Đoạn văn miêu tả xúc cảm tinh tế khi lắng nghe tiếng gió qua ngôi kể thứ nhất.",
            "Sử dụng từ ngữ khơi gợi thính giác và khứu giác phong phú (rì rào, xạc xào, dịu nhẹ).",
            "Tôn vinh vẻ đẹp bình yên của thiên nhiên và tình yêu thế giới quanh em."
          ]
        };
      } else {
        return {
          format: 'essay',
          content: `Tôi là Thỏ tai dài, cư dân nhỏ bé sinh sống tại thung lũng lộng gió xinh đẹp dưới chân núi lớn. Nơi đây quanh năm gió thổi rì rào, và chính những cơn gió mát lành ấy đã dạy cho tôi cùng các bạn muông thú bài học vô giá về sự thấu cảm và lắng nghe những thanh âm kỳ diệu của cuộc sống.\n\nMùa thu năm ấy, thung lũng đón những đợt gió lớn khô cằn. Ban đầu, gió rít lên sầm sập qua khe đá khiến muông thú hoảng sợ trốn sâu trong hang. Bác Bò già than thở gió làm xơ xác đồng cỏ, cừu con sợ hãi vì tiếng gió gào rú rú ghê rợn. Thấy các bạn buồn bã, tôi quyết định rủ mọi người cùng bước ra ngoài, nhắm mắt lại và cùng tập trung lắng nghe thật sâu. Ban đầu chỉ là tiếng rít ù ù. Nhưng khi chúng tôi thả lỏng tâm hồn, một phép màu đã xuất hiện. Tiếng gió va vào vách đá tạo nên một nhịp điệu trầm hùng tựa tiếng trống trận của đất trời. Khi luồn qua rừng thông rộng lớn, gió lại xạc xào dịu êm như tiếng mẹ ru ngủ ấm áp. Gió mang theo cả hương thơm ngọt ngào của mật ong rừng và phấn hoa dại bay đi xa. Tất cả chúng tôi cùng ngỡ ngàng nhận ra: gió đang cất tiếng hát ca để kết nối và chia sẻ niềm vui với thung lũng.\n\nTừ ngày đó, muông thú không còn sợ hãi gió nữa. Mỗi chiều hoàng hôn buông xuống, chúng tôi lại nằm bên nhau trên đồng cỏ xanh mướt, cùng đón gió mát lành và lắng nghe bản hòa ca yêu thương của đất trời. Tôi hiểu rằng, chỉ cần ta lắng nghe bằng cả tấm lòng chân thành, vạn vật xung quanh đều có những thanh âm kỳ diệu riêng của chúng.`,
          highlights: [
            { text: "rì rào dịu êm như tiếng mẹ ru ngủ ấm áp", type: "rhetorical", explanation: "Biáp so sánh ví tiếng gió với tiếng mẹ ru mang lại cảm giác an yên, tràn ngập tình yêu thương gia đình." },
            { text: "sầm sập, xạc xào, ngọt ngào", type: "vocabulary", explanation: "Sử dụng chuỗi từ láy gợi tả cả âm thanh lẫn khứu giác một cách uyển chuyển sinh động." },
            { text: "lắng nghe bằng cả tấm lòng chân thành", type: "emotion", explanation: "Cảm xúc lắng đọng, khuyên người đọc biết trân trọng và lắng nghe tiếng nói của thiên nhiên xung quanh." }
          ],
          analysis: [
            "Bố cục rõ ràng, hóa thân kể chuyện sáng tạo bằng ngôi kể thứ nhất sinh động, lôi cuốn.",
            "Cách xây dựng cốt truyện khơi gợi trí tưởng tượng phong phú cho học sinh tiểu học về âm thanh thiên nhiên.",
            "Bài học triết lý nhẹ nhàng về sự kiêu hãnh của tự nhiên và sức mạnh của việc thấu cảm, lắng nghe."
          ]
        };
      }
    }

    if (topicLower.includes('rùa và thỏ')) {
      if (isParagraph) {
        return {
          format: 'paragraph',
          content: `Từng bước chân nặng nề nhưng vững chãi, tôi - chú Rùa kiên cường - vẫn cặm cụi bò về phía trước, mặc kệ những lời trêu chọc kiêu ngạo của thỏ ta đang nằm ngủ mơ màng dưới bóng mát cây sấu cổ thụ. Dẫu chiếc mai trên lưng có nặng trĩu, dẫu mồ hôi đầm đìa ướt đẫm cả lối đi, tôi tự nhủ lòng không bao giờ được phép bỏ cuộc giữa chừng. Tiếng hò reo cổ vũ xa xa của bác Khỉ, chị Sóc đã tiếp thêm cho tôi sức mạnh. Khi thỏ giật mình thức giấc thì đã quá muộn, bàn chân nhỏ bé của tôi đã kiêu hãnh chạm tới đích đến thành công trong tiếng vỗ tay vang dội của cả khu rừng.`,
          highlights: [
            { text: "Rùa kiên cường - vẫn cặm cụi bò về phía trước", type: "vocabulary", explanation: "Từ láy 'cặm cụi' lột tả chân thực sự kiên trì, chăm chỉ không ngừng nghỉ của chú Rùa." },
            { text: "nằm ngủ mơ màng dưới bóng mát cây sấu cổ thụ", type: "imagery", explanation: "Hình ảnh đối lập khắc họa sự chủ quan, kiêu ngạo và lười biếng của chú Thỏ." },
            { text: "kiêu hãnh chạm tới đích đến thành công", type: "emotion", explanation: "Bộc lộ niềm hạnh phúc và vinh quang xứng đáng cho sự kiên trì bền bỉ." }
          ],
          analysis: [
            "Đoạn văn đóng vai nhân vật Rùa kể lại chương cuối đầy kịch tính của cuộc đua chạy bộ.",
            "Tập trung khắc họa các chi tiết đối lập hành động giữa Rùa (cặm cụi) và Thỏ (ngủ mơ màng).",
            "Nêu bật bài học vàng về lòng kiên trì và bài trừ tính chủ quan kiêu ngạo."
          ]
        };
      } else {
        return {
          format: 'essay',
          content: `Tôi là Rùa, người đã làm nên chiến thắng lịch sử trong cuộc chạy đua huyền thoại với chú Thỏ kiêu ngạo năm xưa. Đã nhiều năm trôi qua, chiếc cúp vô địch vẫn được treo trang trọng trong nhà tôi, gợi nhắc một bài học sâu sắc về lòng kiên trì và sự nỗ lực không ngừng nghỉ cho con cháu đời sau.\n\nNgày ấy, Thỏ nổi tiếng khắp rừng xanh nhờ đôi chân dài thoăn thoắt và tốc độ chạy nhanh như gió. Gặp ai chú ta cũng ba hoa, tự mãn và coi thường những loài vật chậm chạp như tôi. Không chịu nổi sự kiêu căng của Thỏ, tôi đã nhận lời thách đấu chạy đua. Cả khu rừng đổ xô đến cổ vũ đông nghẹt. Khi tiếng còi khai cuộc vang lên, Thỏ phóng vụt đi như một mũi tên xé gió, rồi dừng lại ngoảnh đầu trêu chọc tôi. Nghĩ rằng tôi còn lâu mới đuổi kịp, Thỏ thong thả đuổi bướm hái hoa, rồi thảnh thơi nằm ngủ dưới một gốc cây mát rượi. Trong khi đó, tôi biết mình yếu thế nên chỉ tập trung bò từng bước một. Chiếc mai nặng trĩu kéo sát mặt đất, chân tôi mỏi nhừ và mồ hôi rơi lã chã. Nhưng lòng tôi luôn vững tin vào vạch đích phía trước. Cứ thế, cặm cụi và kiên trì, tôi đã vượt qua chỗ Thỏ đang ngáy khò khò. Khi chỉ còn vài bước là tới đích, muông thú reo hò ầm ĩ khiến Thỏ giật mình tỉnh giấc. Chú ta vội vàng cuống cuồng phóng đi nhưng đã quá muộn. Tôi đã chạm chân vào vạch đích trước sự ngỡ ngàng của cả khu rừng.\n\nChiến thắng vang dội năm ấy đã dạy cho tôi bài học khắc cốt ghi tâm: Chậm chạp nhưng kiên trì, nhẫn nại sẽ luôn chiến thắng sự nhanh nhẹn nhưng kiêu ngạo, lười biếng. Đó là hành trang quý giá giúp tôi vượt qua mọi khó khăn trong cuộc sống sau này.`,
          highlights: [
            { text: "phóng vụt đi như một mũi tên xé gió", type: "rhetorical", explanation: "So sánh ví Thỏ chạy như mũi tên xé gió làm nổi bật tốc độ đáng gờm nhưng cũng tương phản với thói kiêu ngạo sau đó." },
            { text: "thong thả, cặm cụi, cuống cuồng", type: "vocabulary", explanation: "Chuỗi từ láy chỉ trạng thái đối nghịch vô cùng sinh động của hai nhân vật trong cuộc đua." },
            { text: "lòng tôi luôn vững tin vào vạch đích phía trước", type: "emotion", explanation: "Thể hiện ý chí quyết tâm cao độ, không nản chí trước khó khăn của Rùa." }
          ],
          analysis: [
            "Bố cục chặt chẽ, đóng vai ngôi thứ nhất dẫn dắt sinh động bằng giọng kể oai hùng của Rùa.",
            "Tình tiết được sáng tạo và đẩy lên cao trào kịch tính ở phần cuối cuộc đua.",
            "Khẳng định bài học nhân văn sâu sắc về ý chí, lòng kiên trì vượt lên giới hạn bản thân."
          ]
        };
      }
    }
  }

  // -------------------------------------------------------------
  // 2. VĂN TẢ CẢNH (ta-canh)
  // -------------------------------------------------------------
  if (type === 'ta-canh') {
    if (topicLower.includes('sơn đoòng')) {
      if (isParagraph) {
        return {
          format: 'paragraph',
          content: `Bên trong hang Sơn Đoòng vĩ đại, em như lạc vào một thế giới cổ tích kỳ ảo, nơi thiên nhiên đã tạc nên những khối thạch nhũ khổng lồ cao sừng sững như những cột chống trời nghìn năm tuổi. Từ trần hang cao vút, ánh nắng mặt trời lọt qua những hố sụt khổng lồ chiếu rọi xuống lòng hang, đánh thức một cánh rừng nguyên sinh xanh mướt với thảm thực vật phong phú ngay sâu trong lòng đất ấm áp. Tiếng dòng sông ngầm chảy rì rào rầm rì luồn qua các kẽ đá tạo nên một thanh âm hoang sơ, huyền bí, khiến bất cứ ai đứng trước kỳ quan vĩ đại này cũng thấy lòng trào dâng niềm tự hào và xúc động sâu sắc về giang sơn gấm vóc Việt Nam.`,
          highlights: [
            { text: "cao sừng sững như những cột chống trời nghìn năm tuổi", type: "rhetorical", explanation: "So sánh thạch nhũ với cột chống trời giúp người đọc hình dung được sự đồ sộ, kỳ vĩ của hang động lớn nhất thế giới." },
            { text: "rầm rì, sừng sững, xanh mướt", type: "vocabulary", explanation: "Từ láy 'rầm rì' gợi âm thanh sông ngầm trầm ấm, bí ẩn chảy mãi không ngừng." },
            { text: "thấy lòng trào dâng niềm tự hào và xúc động sâu sắc", type: "emotion", explanation: "Bày tỏ tình yêu quê hương đất nước qua sự kinh ngạc, kính phục thiên nhiên vĩ đại." }
          ],
          analysis: [
            "Đoạn văn chọn lọc các chi tiết tả cảnh vô cùng đắt giá của Sơn Đoòng (thạch nhũ, hố sụt, rừng ngầm).",
            "Ngôn từ giàu tính tạo hình mạnh mẽ, kết hợp nghệ thuật so sánh tạo liên tưởng phong phú.",
            "Bồi đắp niềm tự hào dân tộc và lòng yêu di sản thiên nhiên đất nước."
          ]
        };
      } else {
        return {
          format: 'essay',
          content: `Việt Nam quê hương ta có biết bao danh lam thắng cảnh kỳ vĩ, nhưng nơi khiến em ao ước được đặt chân đến nhất chính là hang Sơn Đoòng - hang động tự nhiên lớn nhất thế giới, một kỳ quan thiên nhiên vô song ẩn sâu trong lòng di sản Phong Nha - Kẻ Bàng.\n\nNhìn từ bên ngoài, lối vào hang khuất sau những vách núi đá vôi dựng đứng và tán rừng rậm rạp, tỏa ra một luồng gió mát lạnh thổi ngược lên khiến lòng người bồi hồi háo hức. Bước chân vào bên trong hang, một không gian khổng lồ hiện ra làm em vô cùng kinh ngạc. Vòm hang cao rộng đến mức có thể chứa được cả một tòa nhà chọc trời năm mươi tầng. Những khối măng đá và thạch nhũ nghìn năm tuổi rủ xuống từ trần hang mang đủ hình thù ngộ nghĩnh, lấp lánh như những hạt kim cương dưới ánh đèn pin của đoàn thám hiểm. Điểm đặc sắc nhất của Sơn Đoòng chính là hai hố sụt khổng lồ do trần hang sụp đổ từ xa xưa. Nhờ có ánh sáng mặt trời rọi qua hố sụt, ngay trong lòng đất sâu đã hình thành một khu rừng nguyên sinh tươi tốt với những loài cây dương xỉ cổ đại xanh mướt mát rượi. Dưới lòng hang, tiếng một dòng sông ngầm chảy rầm rì, luồn lách qua đá cuội tạo nên bản nhạc du dương, hoang sơ của đất trời đại ngàn.\n\nĐược chiêm ngưỡng vẻ kỳ vĩ của Sơn Đoòng qua trang sách, em thêm tự hào về đất nước mình. Hang Sơn Đoòng mãi là biểu tượng của vẻ đẹp thiên nhiên bất tận mà mỗi người Việt Nam luôn trân quý và có ý thức giữ gìn bảo vệ.`,
          highlights: [
            { text: "vòm hang cao rộng đến mức có thể chứa được cả một tòa nhà chọc trời", type: "rhetorical", explanation: "Sử dụng phóng dụ so sánh kích thước giúp học sinh lớp 5 dễ hình dung độ khổng lồ của vòm hang." },
            { text: "lấp lánh như những hạt kim cương", type: "imagery", explanation: "Hình ảnh so sánh đẹp mắt tả ánh sáng phản chiếu thạch nhũ lung linh, huyền ảo." },
            { text: "rầm rì, xanh mướt, rậm rạp", type: "vocabulary", explanation: "Chuỗi từ láy gợi màu sắc sinh động và âm thanh đặc trưng riêng của lòng hang." }
          ],
          analysis: [
            "Bố cục chuẩn mực 3 phần, cách dẫn dắt mở bài gián tiếp đầy cuốn hút và tò mò.",
            "Trình tự miêu tả khoa học (từ bao quát lối vào đến chi tiết bên trong: vòm hang, thạch nhũ, hố sụt, sông ngầm).",
            "Kết nối tình yêu quê hương đất nước thiết thực, khơi gợi ý thức bảo tồn thiên nhiên quốc gia."
          ]
        };
      }
    }

    if (topicLower.includes('hạ long')) {
      if (isParagraph) {
        return {
          format: 'paragraph',
          content: `Ngắm nhìn vịnh Hạ Long từ trên cao, em cứ ngỡ mình đang chiêm ngưỡng một bức tranh thủy mặc khổng lồ của tạo hóa với hàng ngàn hòn đảo đá nhấp nhô trên làn nước xanh lục bảo mát rượi. Những hòn đảo đá vôi mang đủ hình dáng ngộ nghĩnh kỳ lạ, lúc giống như chú gà chọi đứng chênh vênh giữa sóng nước, lúc lại tựa như một chiếc đỉnh hương khổng lồ tĩnh lặng giữa biển khơi bao la. Gió biển thổi vi vu mang theo hơi muối mặn mà phả vào má em đầy dễ chịu. Đứng trước cảnh sắc non nước hữu tình ấy, lòng em tràn đầy niềm tự hào và tình yêu thiết tha dành cho giang sơn đất nước Việt Nam thân yêu.`,
          highlights: [
            { text: "nhấp nhô trên làn nước xanh lục bảo mát rượi", type: "imagery", explanation: "Sử dụng từ ngữ chỉ màu sắc 'xanh lục bảo' gợi tả độ trong xanh, quý giá và lung linh của nước biển Hạ Long." },
            { text: "đứng chênh vênh giữa sóng nước", type: "vocabulary", explanation: "Từ láy 'chênh vênh' lột tả thế đứng độc đáo, ngộ nghĩnh của hòn Trống Mái giữa biển." },
            { text: "như một bức tranh thủy mặc khổng lồ", type: "rhetorical", explanation: "So sánh vịnh Hạ Long với bức tranh thủy mặc tôn vinh vẻ đẹp nghệ thuật, cổ kính và kỳ vĩ do thiên nhiên tạo tác." }
          ],
          analysis: [
            "Đoạn văn ngắn tả cảnh biển đảo Hạ Long sinh động thông qua các hình ảnh so sánh đặc trưng.",
            "Sử dụng hài hòa từ láy miêu tả hình dáng và màu sắc sang trọng gợi cảm.",
            "Khơi dậy xúc cảm tự hào về danh lam thắng cảnh nổi tiếng của đất nước Việt Nam."
          ]
        };
      } else {
        return {
          format: 'essay',
          content: `Trong những chuyến du lịch cùng gia đình, điểm đến để lại trong em ấn tượng sâu sắc và khơi gợi nhiều niềm tự hào nhất chính là vịnh Hạ Long - một trong những kỳ quan thiên nhiên thế giới tại quê hương Việt Nam.\n\nNhìn từ trên tàu du lịch, vịnh Hạ Long hiện ra như một bức tranh thủy mặc khổng lồ sơn thủy hữu tình. Nổi bật trên làn nước màu xanh lục bảo trong vắt là hàng ngàn hòn đảo đảo đá vôi nhấp nhô trùng điệp. Những hòn đảo đá vôi ấy đã qua hàng triệu năm kiến tạo mang đủ hình dáng kỳ thú. Kìa là hòn Trống Mái oai phong đứng chênh vênh đối mặt nhau giữa sóng nước mênh mông, kia lại là hòn Đỉnh Hương sừng sững tựa như chiếc lư hương khổng lồ dâng lên trời đất. Tàu lướt nhẹ trên sóng êm đềm, gió biển thổi vi vu qua khe núi mang theo vị mặn mòi, mát rượi của biển khơi phả vào da thịt em khoan khoái. Phía xa xa, những con thuyền buồm rực rỡ sắc màu no gió đang rẽ sóng ra khơi, vẽ nên một nhịp sống năng động mà thanh bình trên vịnh. Khi ánh hoàng hôn buông xuống, cả không gian vịnh nhuộm một màu vàng cam lộng lẫy, các hòn đảo đá như những bóng khổng lồ tĩnh lặng canh giữ biển khơi.\n\nNgắm nhìn vịnh Hạ Long tươi đẹp, em thêm yêu mến và tự hào về đất nước mình. Em tự hứa sẽ luôn tuyên truyền, bảo vệ môi trường biển để Hạ Long mãi giữ được vẻ đẹp kỳ vĩ, trong xanh cho bạn bè năm châu cùng chiêm ngưỡng.`,
          highlights: [
            { text: "như những bóng khổng lồ tĩnh lặng canh giữ biển khơi", type: "rhetorical", explanation: "Nghệ thuật nhân hóa và so sánh đảo đá buổi hoàng hôn tạo cảm giác oai nghiêm, thần bí bảo vệ biển trời." },
            { text: "mặn mòi, sừng sững, trùng điệp", type: "vocabulary", explanation: "Sử dụng từ láy đặc sắc tả vị muối biển và sự hùng vĩ của các hòn đảo đá vôi." },
            { text: "gió biển thổi vi vu... phả vào da thịt em khoan khoái", type: "emotion", explanation: "Diễn tả cảm giác dễ chịu, hòa mình vào thiên nhiên của tác giả học sinh." }
          ],
          analysis: [
            "Bố cục rõ ràng 3 phần, mở bài cuốn hút và kết bài nêu rõ thông điệp bảo vệ môi trường biển.",
            "Trình tự miêu tả sinh động: từ xa đến gần, thay đổi theo thời gian từ nắng mai đến hoàng hôn buông.",
            "Ngôn từ giàu nhạc điệu, kết hợp so sánh và nhân hóa xuất sắc đạt điểm giỏi."
          ]
        };
      }
    }
  }

  // -------------------------------------------------------------
  // 3. CẢM XÚC NHÂN VẬT (cam-xuc-nhan-vat)
  // -------------------------------------------------------------
  if (type === 'cam-xuc-nhan-vat') {
    if (topicLower.includes('dế mèn')) {
      if (isParagraph) {
        return {
          format: 'paragraph',
          content: `Nhân vật Dế Mèn trong truyện "Dế Mèn phiêu lưu ký" của nhà văn Tô Hoài luôn khơi gợi trong em những cảm xúc sâu sắc và bài học quý giá về cuộc sống. Ấn tượng nhất với em chính là sự chuyển biến tích cực trong tâm hồn Mèn từ một kẻ kiêu căng, ngạo mạn làm hại Dế Choắt đáng thương trở thành một người anh hùng nghĩa hiệp, biết ăn ăn hối cải và giàu lòng nhân ái. Đọc những dòng chữ miêu tả giọt nước mắt ân hận của Mèn bên nấm mộ Dế Choắt, lòng em lại trào dâng niềm thấu cảm khôn nguôi. Chính sự hướng thiện và tinh thần ham học hỏi, khám phá thế giới rộng lớn đã biến Mèn thành một người bạn đồng hành thân thuộc, dạy em bài học làm người đáng quý.`,
          highlights: [
            { text: "từ một kẻ kiêu căng, ngạo mạn... trở thành người anh hùng nghĩa hiệp", type: "rhetorical", explanation: "Cấu trúc tương phản nhấn mạnh sự trưởng thành, thức tỉnh nhân cách sâu sắc của nhân vật Dế Mèn." },
            { text: "ân hận, hối cải, ngạo mạn", type: "vocabulary", explanation: "Từ láy 'ân hận' lột tả cảm xúc hối lỗi chân thành, sâu sắc của nhân vật." },
            { text: "lòng em lại trào dâng niềm thấu cảm khôn nguôi", type: "emotion", explanation: "Thể hiện tình cảm đồng cảm của người đọc học sinh đối với sự hối hận của nhân vật." }
          ],
          analysis: [
            "Đoạn văn tập trung bày tỏ cảm nhận về sự thay đổi tính cách của Dế Mèn.",
            "Ngôn từ diễn đạt mạch lạc, giàu cảm xúc đồng cảm sâu sắc.",
            "Rút ra bài học đạo đức giá trị về sự khiêm tốn và biết sửa sai của tuổi thơ."
          ]
        };
      } else {
        return {
          format: 'essay',
          content: `Trong thế giới văn học thiếu nhi phong phú, hình ảnh chú Dế Mèn trong tác phẩm "Dế Mèn phiêu lưu ký" của nhà văn Tô Hoài luôn là nhân vật để lại trong em nhiều cảm xúc nhất. Hành trình trưởng thành đầy sóng gió của Mèn đã gieo vào lòng em những bài học quý giá về lòng khiêm tốn và tình yêu thương đồng loại.\n\nỞ những chương đầu, Dế Mèn hiện lên là một chàng dế thanh niên oai vệ nhưng vô cùng kiêu căng, hợm hĩnh. Với đôi càng mẫm bóng, những cái vuốt chân nhọn hoắt cứng ngắc, Mèn tự phụ coi mình là đệ nhất thiên hạ. Chú bắt nạt chị Cào Cào, trêu chọc anh Gọng Vó và khinh thường người hàng xóm yếu ớt Dế Choắt. Sự ngạo mạn ấy đã dẫn đến bi kịch đau lòng: trò đùa tai hại trêu chị Cốc của Mèn đã cướp đi sinh mạng của Dế Choắt đáng thương. Chứng kiến cái chết của người bạn tội nghiệp, lòng Mèn đau xót như cắt. Chú đứng lặng trước nấm mộ bạn, khóc nức nở trong sự ăn ăn hối cải muộn màng. Giọt nước mắt ấy chính là cột mốc thức tỉnh, gột rửa đi tính kiêu ngạo của Mèn. Từ đó, chú quyết chí đi ngao du thiên hạ, làm nhiều việc nghĩa hiệp giúp đỡ kẻ yếu như cứu chị Nhà Trò thoát khỏi bọn Nhện hung ác, ước mơ kết nghĩa anh em bốn bể một nhà.\n\nNhân vật Dế Mèn dạy em bài học đắt giá rằng sự kiêu ngạo ngông cuồng có thể gây hại cho người khác và cho chính mình. Em thầm cảm ơn Dế Mèn vì đã truyền cho em ngọn lửa dũng cảm, biết nhận sai và nỗ lực sửa mình để trở thành một con người tử tế, biết yêu thương mọi người xung quanh.`,
          highlights: [
            { text: "khóc nức nở trong sự ăn ăn hối cải muộn màng", type: "vocabulary", explanation: "Sử dụng từ ngữ gợi tả mạnh mẽ hành động và tâm trạng ân hận sâu sắc của nhân vật." },
            { text: "đôi càng mẫm bóng, cái vuốt chân nhọn hoắt", type: "imagery", explanation: "Miêu tả ngoại hình sinh động tái hiện hình dáng oai vệ đặc trưng của dế mèn." },
            { text: "giọt nước mắt ấy chính là cột mốc thức tỉnh, gột rửa", type: "rhetorical", explanation: "Hình ảnh ẩn dụ ví giọt nước mắt như nguồn nước thanh lọc tâm hồn kiêu ngạo." }
          ],
          analysis: [
            "Bố cục rõ ràng 3 phần, cách mở bài trực tiếp giới thiệu nhân vật đầy lôi cuốn.",
            "Tập trung phân tích sâu sự chuyển biến nội tâm của nhân vật từ tiêu cực sang tích cực.",
            "Kết bài đúc rút bài học thực tế sâu sắc gắn liền với bản thân học sinh."
          ]
        };
      }
    }

    if (topicLower.includes('sa-da-cô') || topicLower.includes('hạc giấy')) {
      if (isParagraph) {
        return {
          format: 'paragraph',
          content: `Hình ảnh cô bé Sa-da-cô Xa-xa-ki trong truyện "Những con hạc giấy" luôn để lại trong em nỗi xúc động sâu sắc và niềm thương cảm khôn nguôi về tội ác chiến tranh. Em vô cùng khâm phục tinh thần lạc quan, yêu đời của cô bé nhỏ khi kiên trì gấp từng cánh hạc giấy mỏng manh với niềm tin chiến thắng căn bệnh hiểm nghèo do bom nguyên tử để lại. Mặc dù Sa-da-cô đã ra đi khi ước nguyện chưa hoàn thành, nhưng 644 con hạc giấy của em cùng hàng ngàn con hạc khác do trẻ em khắp thế giới gửi đến đã trở thành biểu tượng thiêng liêng của ước mơ hòa bình, nhắc nhở em luôn trân quý cuộc sống hòa bình tươi đẹp hôm nay.`,
          highlights: [
            { text: "gấp từng cánh hạc giấy mỏng manh với niềm tin chiến thắng", type: "imagery", explanation: "Chi tiết tả cánh hạc mỏng manh tương phản với tinh thần kiên cường bất khuất của cô bé." },
            { text: "xúc động sâu sắc, thương cảm khôn nguôi", type: "emotion", explanation: "Sử dụng các từ ngữ diễn tả cảm xúc thương xót chân thành đối với nạn nhân chiến tranh." },
            { text: "trở thành biểu tượng thiêng liêng của ước mơ hòa bình", type: "rhetorical", explanation: "Phép ẩn dụ cánh hạc giấy tượng trưng cho khát vọng hòa bình bất diệt của trẻ em trên thế giới." }
          ],
          analysis: [
            "Đoạn văn bày tỏ cảm xúc lay động về nhân vật lịch sử đầy nhân văn Sa-da-cô.",
            "Cách dùng từ ngữ gợi cảm xúc thấu cảm, xót xa sâu sắc.",
            "Hướng người đọc đến ước mơ hòa bình thế giới cao cả."
          ]
        };
      } else {
        return {
          format: 'essay',
          content: `Trong chương trình Tiếng Việt lớp 5, câu chuyện "Những con hạc giấy" luôn lấy đi của em nhiều nước mắt nhất. Hình ảnh cô bé Sa-da-cô Xa-xa-ki dũng cảm chiến đấu với căn bệnh hiểm nghèo đã khơi dậy trong em niềm thấu cảm sâu sắc và khát vọng hòa bình mãnh liệt.\n\nSa-da-cô là một cô bé ngây thơ, đáng yêu sống ở thành phố Hi-rô-si-ma nước Nhật. Tai họa ập xuống khi em bị nhiễm phóng xạ từ quả bom nguyên tử mà quân đội Mỹ trút xuống quê hương em. Nằm trên giường bệnh đau đớn, Sa-da-cô không hề khóc than mà luôn giữ nụ cười hồn nhiên trên môi. Khi nghe tin gấp đủ một nghìn con hạc giấy sẽ được một điều ước, em đã bắt tay vào gấp hạc với hy vọng khỏi bệnh để lại được tung tăng cắp sách đến trường cùng bạn bè. Đôi bàn tay nhỏ bé gầy guộc của em nâng niu từng mảnh giấy nhỏ, tỉ mỉ vuốt từng nếp gấp với tất cả niềm tin yêu cuộc sống. Dù cơ thể ngày một yếu đi, em vẫn kiên cường gấp được 644 con hạc trước khi nhắm mắt xuôi tay. Sự ra đi của em là lời cáo buộc đanh thép tội ác của chiến tranh hủy diệt.\n\nHình ảnh Sa-da-cô cùng những cánh hạc giấy mãi khắc sâu trong tâm trí em. Câu chuyện dạy em biết yêu hòa bình, ghét chiến tranh và khâm phục nghị lực phi thường của một cô bé đồng trang lứa. Em tự hứa sẽ học tập chăm ngoan để góp phần xây dựng một thế giới hòa bình, tươi đẹp và ngập tràn tình thương yêu.`,
          highlights: [
            { text: "nâng niu từng mảnh giấy nhỏ, tỉ mỉ vuốt từng nếp gấp", type: "vocabulary", explanation: "Từ láy 'tỉ mỉ' và động từ 'nâng niu' lột tả tình yêu cuộc sống và sự nâng niu hy vọng của cô bé." },
            { text: "đôi bàn tay nhỏ bé gầy guộc", type: "imagery", explanation: "Chi tiết ngoại hình tả đôi tay gầy guộc gợi nỗi xót thương về sự tàn phá của bệnh tật do chiến tranh." },
            { text: "là lời cáo buộc đanh thép tội ác của chiến tranh", type: "rhetorical", explanation: "Sử dụng ẩn dụ tu từ nhấn mạnh tầm quan trọng lịch sử và ý nghĩa của cái chết của nhân vật." }
          ],
          analysis: [
            "Bố cục 3 phần cân đối, giàu chất thơ và cảm xúc lay động trái tim người đọc.",
            "Tập trung phân tích hành động gấp hạc giấy biểu thị khát vọng sống bất diệt của tuổi thơ.",
            "Truyền tải bài học ý nghĩa sâu sắc về hòa bình và tình hữu nghị quốc tế giữa trẻ em khắp thế giới."
          ]
        };
      }
    }
  }

  // -------------------------------------------------------------
  // 4. CẢM XÚC CÂU CHUYỆN (cam-xuc-cau-chuyen)
  // -------------------------------------------------------------
  if (type === 'cam-xuc-cau-chuyen') {
    if (topicLower.includes('thanh âm của gió')) {
      return {
        format: isParagraph ? 'paragraph' : 'essay',
        content: isParagraph
          ? `Câu chuyện "Thanh âm của gió" mang lại cho em những cảm xúc vô cùng ngọt ngào và ấm áp về tình bạn và vẻ đẹp của thiên nhiên quê hương. Chuyện kể về chú Thỏ con tai dài cùng các bạn nhỏ đáng yêu trong thung lũng cùng nhau đi tìm kiếm và lắng nghe tiếng gió rì rào qua khe đá, qua ngọn cây. Lắng nghe câu chuyện, lòng em trào dâng cảm giác yên bình tựa như được nằm giữa đồng cỏ xanh ngát rực rỡ nắng mai. Bài học về sự thấu cảm, mở lòng lắng nghe âm thanh kỳ diệu quanh mình từ truyện đã dạy em biết trân trọng những điều bình dị nhất trong cuộc sống mỗi ngày.`
          : `Trong các bài học Tiếng Việt 5 mới, câu chuyện "Thanh âm của gió" luôn mang đến cho em những xúc cảm êm đềm và bài học nhân văn sâu sắc nhất. Tác phẩm đã mở ra trước mắt em một thế giới tuổi thơ trong trẻo hòa quyện cùng vẻ đẹp kỳ diệu của thiên nhiên quê hương.\n\nCâu chuyện đưa người đọc đến với thung lũng lộng gió xinh đẹp, nơi có nhóm bạn Thỏ tai dài, Cừu non và Bò già cùng chung sống. Ban đầu, gió rít ù ù qua khe núi làm các bạn lo lắng, hoang sợ. Thế nhưng, nhờ sự tinh tế và mở lòng của Thỏ con, muông thú đã cùng nhau nhắm mắt lắng nghe gió bằng cả tâm hồn. Phép màu đã xảy ra khi mọi người nhận ra tiếng gió rì rào qua vách đá tựa như tiếng trống trận dũng mãnh, xào xạc qua kẽ lá dịu êm như tiếng mẹ ru ngủ ấm áp. Đọc đến đây, em cảm thấy vô cùng xúc động trước sự thay đổi kỳ diệu đó. Tình bạn gắn kết của muôn loài hòa cùng bản hòa ca của gió trời đã tạo nên bức tranh quê hương thanh bình, đáng yêu vô cùng.\n\n"Thanh âm của gió" không chỉ làm giàu thêm trí tưởng tượng phong phú của em mà còn bồi đắp lòng thấu cảm, yêu mến thiên nhiên hoang dã quanh mình. Truyện nhắc nhở em hãy chậm lại để lắng nghe và trân quý những điều tuyệt diệu nhỏ bé của cuộc sống.`,
        highlights: [
          { text: "rì rào qua vách đá tựa như tiếng trống trận", type: "rhetorical", explanation: "Phép so sánh tiếng gió với tiếng trống trận giúp âm thanh trở nên hùng vĩ, sống động kỳ diệu." },
          { text: "êm đềm, ngọt ngào, xào xạc", type: "vocabulary", explanation: "Sử dụng từ láy giàu nhạc tính khơi gợi thính giác của người đọc một cách tự nhiên." },
          { text: "lòng em trào dâng cảm giác yên bình", type: "emotion", explanation: "Bộc lộ cảm nhận cảm xúc chân thành, thư thái khi đọc tác phẩm văn học thiếu nhi hay." }
        ],
        analysis: [
          "Bày tỏ cảm xúc sâu lắng về một câu chuyện văn học thiếu nhi trong chương trình 2018.",
          "Phân tích xuất sắc các chi tiết âm thanh và cảm xúc của nhân vật để làm sáng tỏ chủ đề tác phẩm.",
          "Bài học giáo dục đạo đức nhẹ nhàng về lòng thấu cảm và sự gắn kết con người với tự nhiên."
        ]
      };
    }
  }

  // -------------------------------------------------------------
  // 5. NÊU Ý KIẾN (neu-y-kien)
  // -------------------------------------------------------------
  if (type === 'neu-y-kien') {
    if (topicLower.includes('điện thoại') || topicLower.includes('di động')) {
      return {
        format: isParagraph ? 'paragraph' : 'essay',
        content: isParagraph
          ? `Theo em, học sinh tiểu học sử dụng điện thoại di động quá sớm là một thói quen có hại nhiều hơn có lợi. Điện thoại di động giúp liên lạc nhanh chóng với cha mẹ, nhưng việc lạm dụng nó sẽ gây ảnh hưởng nghiêm trọng đến sức khỏe mắt và hạn chế thời gian vận động ngoài trời của trẻ em. Nhiều bạn nhỏ mải mê chơi điện tử, xem video ngắn dẫn đến xao nhãng học tập, thậm chí giảm khả năng tập trung khi nghe giảng trên lớp. Vì thế, em hoàn toàn đồng tình với ý kiến cho rằng nhà trường và gia đình cần kiểm soát chặt chẽ việc sử dụng điện thoại của học sinh để bảo vệ sức khỏe và tuổi thơ trong sáng của các bạn.`
          : `Hiện nay, việc sử dụng điện thoại di động ngày càng phổ biến trong đời sống, thậm chí đối với cả học sinh tiểu học. Theo quan điểm của cá nhân em, việc học sinh tiểu học lạm dụng điện thoại di động quá sớm mang lại nhiều tác hại tiêu cực cho sức khỏe và học tập hơn là những lợi ích ngắn hạn của nó.\n\nTrước hết, chúng ta không thể phủ nhận điện thoại di động là phương tiện liên lạc thuận tiện giữa cha mẹ và con cái sau giờ học. Tuy nhiên, việc học sinh tiểu học sử dụng điện thoại chưa có sự kiểm soát sẽ dẫn đến việc xao nhãng học hành nghiêm trọng. Nhiều bạn nhỏ bị cuốn vào thế giới ảo của các trò chơi điện tử bạo lực hoặc các video ngắn vô bổ, quên mất việc làm bài tập về nhà và mất tập trung khi nghe giảng trên lớp. Thứ hai, sử dụng điện thoại liên tục nhiều giờ liền gây tác hại trực tiếp đến sức khỏe của học sinh, làm suy giảm thị lực và gây mệt mỏi tinh thần. Thay vì chạy nhảy vui đùa cùng bạn bè ngoài sân trường lộng gió, các bạn lại ngồi im một góc dán mắt vào màn hình, làm giảm sự năng động tự nhiên của tuổi thơ. Trái lại, những bạn hạn chế dùng điện thoại luôn có sức khỏe tốt hơn và hòa đồng hơn với tập thể.\n\nTóm lại, điện thoại di động là một công cụ hữu ích nhưng không phù hợp để học sinh tiểu học tự do sử dụng quá sớm. Gia đình và nhà trường cần có những biện pháp quản lý chặt chẽ để hướng các em vào các hoạt động học tập, vui chơi lành mạnh ngoài đời thực.`,
        highlights: [
          { text: "dán mắt vào màn hình, làm giảm sự năng động tự nhiên", type: "imagery", explanation: "Hình ảnh tả thực phản ánh thói quen lười vận động, phụ thuộc vào công nghệ của trẻ em ngày nay." },
          { text: "xao nhãng học hành nghiêm trọng", type: "vocabulary", explanation: "Từ láy 'xao nhãng' chỉ trạng thái mất tập trung học tập do bị phân tâm bởi điện thoại." },
          { text: "gia đình và nhà trường cần có những biện pháp quản lý", type: "rhetorical", explanation: "Lập luận sắc bén đưa ra giải pháp thiết thực, có tính thuyết phục cao để giải quyết vấn đề." }
        ],
        analysis: [
          "Bố cục bài nghị luận nêu ý kiến rõ ràng, lập luận chặt chẽ, lý lẽ thuyết phục sắc sảo.",
          "Dẫn chứng thực tế quen thuộc gần gũi với lứa tuổi học sinh lớp 5 dễ thấu cảm.",
          "Đưa ra quan điểm rõ ràng, phê phán thói quen xấu và đề xuất giải pháp giáo dục bổ ích."
        ]
      };
    }
  }

  // -------------------------------------------------------------
  // 6. DEFAULT FALLBACKS (If no keyword matches)
  // -------------------------------------------------------------
  const fallbackDatabase: Record<string, { essay: SampleEssayResult; paragraph: SampleEssayResult }> = {
    'ta-canh': {
      essay: {
        format: 'essay',
        content: `Quê hương em là một vùng trung du êm đềm, nơi có những đồi chè xanh mướt trải dài như những làn sóng xanh nối đuôi nhau đến tận chân trời. Mỗi buổi sớm mai, khi sương mù còn giăng mờ ảo trên những ngọn lá, cả đồi chè như khoác lên mình một chiếc áo choàng nhung mềm mại.\n\nKhi những tia nắng đầu tiên của ngày mới thức dậy, chúng tinh nghịch nhảy nhót qua từng kẽ lá, đánh thức những giọt sương đêm lấp lánh như những hạt ngọc nhỏ xíu của đất trời. Những búp chè non tơ, xanh mướt mọc nhọn hoắt như những nét vẽ của thiên nhiên đang vươn vai đón lấy ánh sáng ấm áp. Hương chè thơm dịu nhẹ, thoang thoảng trong làn gió mát lành thổi từ đỉnh đồi khiến lòng người thư thái lạ kỳ. Thấp thoáng xa xa, bóng những cô bác công nhân đeo gùi trên vai, đôi bàn tay nhanh thoăn thoắt hái những búp chè non như những cánh bướm dập dờn nhảy múa.\n\nĐồi chè quê hương không chỉ mang lại cuộc sống ấm no cho người dân mà còn là bức tranh thiên nhiên tuyệt mỹ in đậm trong tâm trí em. Mỗi khi đứng trước khoảng trời cao rộng rực rỡ nắng mai ấy, lòng em lại tràn ngập niềm tự hào và tình yêu quê hương thiết tha.`,
        highlights: [
          { text: "xanh mướt trải dài như những làn sóng xanh", type: "rhetorical", explanation: "Biện pháp so sánh ví đồi chè với làn sóng xanh giúp người đọc hình dung được sự bao la, trập trùng của đồi chè quê hương." },
          { text: "tinh nghịch nhảy nhót qua từng kẽ lá, đánh thức những giọt sương", type: "rhetorical", explanation: "Biện pháp nhân hóa khiến ánh nắng và những giọt sương trở nên sống động, có hồn như những người bạn nhỏ đáng yêu." },
          { text: "lấp lánh như những hạt ngọc nhỏ xíu", type: "imagery", explanation: "Hình ảnh miêu tả giọt sương buổi sớm rất lung linh, tạo cảm giác trong trẻo, tinh khôi và giàu sức sống." }
        ],
        analysis: [
          "Bố cục 3 phần rõ ràng, mở bài gián tiếp cuốn hút và kết bài mở rộng tự nhiên giàu cảm xúc.",
          "Sử dụng linh hoạt các tính từ màu sắc phong phú và từ láy gợi hình gợi âm sinh động.",
          "Phối hợp thành công biện pháp nghệ thuật so sánh và nhân hóa khiến đồi chè tràn đầy sức sống."
        ]
      },
      paragraph: {
        format: 'paragraph',
        content: `Buổi sáng trên đồi chè quê em đẹp như một bức tranh ngọc bích phẳng lặng. Những giọt sương đêm còn đọng lại trên búp chè non xanh mướt, lấp lánh dưới ánh nắng mai dịu ngọt như những hạt ngọc nhỏ xíu của đất trời. Gió thu mơn man luồn qua từng luống chè, đánh thức hương thơm thanh khiết, ngọt ngào lan tỏa khắp không gian rộng lớn. Từ trên cao nhìn xuống, những luống chè uốn lượn mềm mại tựa như những dải lụa xanh của đất, gợi lên một nhịp sống thanh bình, ấm no mỗi ngày.`,
        highlights: [
          { text: "đẹp như một bức tranh ngọc bích", type: "rhetorical", explanation: "So sánh đồi chè với bức tranh ngọc bích làm nổi bật vẻ đẹp quý giá, trong trẻo và đầy màu sắc của cảnh vật quê hương." },
          { text: "lấp lánh dưới ánh nắng mai", type: "imagery", explanation: "Chi tiết tả ánh sáng phản chiếu sương đêm lung linh làm bối cảnh thêm rực rỡ sắc màu." },
          { text: "Gió thu mơn man luồn qua", type: "rhetorical", explanation: "Nhân hóa làn gió 'mơn man luồn qua' mang lại cảm giác dễ chịu, gần gũi như những ngón tay vuốt ve nhẹ nhàng." }
        ],
        analysis: [
          "Đoạn văn tập trung tả cảnh đồi chè vào buổi sớm mai với các chi tiết tiêu biểu chọn lọc.",
          "Sử dụng ngôn từ khơi gợi xúc giác và khứu giác (mơn man, thanh khiết) để tăng tính sinh động.",
          "Nhịp điệu câu văn uyển chuyển, các câu văn có độ dài ngắn đan xen nhịp nhàng."
        ]
      }
    },
    'ke-chuyen-sang-tao': {
      essay: {
        format: 'essay',
        content: `Tôi là Sơn Tinh, vị thần cai quản vùng núi Ba Vì linh thiêng đất Việt. Đã nhiều năm trôi qua kể từ ngày tôi đánh bại Thủy Tinh để rước Mị Nương về núi, nhưng tiếng sóng nước gầm vang và trận chiến kinh thiên động địa năm ấy vẫn luôn in đậm trong tâm trí tôi như vừa mới hôm qua.\n\nNgày ấy, khi lễ vật của tôi được dâng lên trước tiên, vua Hùng đã gả Mị Nương cho tôi. Vừa rước dâu ra khỏi kinh thành, đất trời bỗng tối sầm lại. Thủy Tinh đùng đùng nổi giận, hô mưa gọi gió, dâng nước cuồn cuộn đuổi theo hòng cướp lại công chúa. Sóng nước dâng cao ngập ruộng đồng, cuốn trôi nhà cửa, dìm cả thành Phong Châu trong biển nước mênh mông gầm rít dữ dội. Thấy người dân khóc than trong tai họa lũ lụt, lòng tôi đau xót khôn nguôi. Tôi vội vàng vung gậy thần bốc từng quả đồi, dựng nên những dãy núi đá sừng sững chắn sóng nước dâng trào. Thủy Tinh dâng nước cao bao nhiêu, tôi lại dùng thần phép nâng núi cao bấy nhiêu. Trận chiến kéo dài ròng rã nhiều tháng trời, sấm chớp đùng đoàng xé toạc bầu trời xám xịt. Cuối cùng, kiệt sức trước sự kiên cường của tôi, Thủy Tinh đành ngậm ngùi rút quân, trả lại sự bình yên cho bờ cõi.\n\nChiến thắng ấy không chỉ bảo vệ hạnh phúc gia đình tôi mà còn là minh chứng cho sức mạnh kiên cường bảo vệ nhân dân trước thiên tai. Dù mỗi năm Thủy Tinh vẫn dâng nước trả thù, tôi luôn vững vàng canh giữ núi non, giữ trọn lời thề che chở cho nhân dân Việt Nam.`,
        highlights: [
          { text: "Tôi là Sơn Tinh, vị thần cai quản", type: "rhetorical", explanation: "Đóng vai nhân vật (ngôi kể thứ nhất) giúp câu chuyện trở nên sống động, tăng sức thuyết phục và tính chân thực." },
          { text: "dãy núi đá sừng sững chắn sóng", type: "imagery", explanation: "Hình ảnh dãy núi 'sừng sững' gợi tả sự vững chãi, oai nghiêm của thần núi Ba Vì bảo vệ con người." },
          { text: "Thủy Tinh dâng nước cao bao nhiêu, tôi lại dùng thần phép nâng núi cao bấy nhiêu", type: "rhetorical", explanation: "Cấu trúc song hành đối xứng nhấn mạnh sức mạnh kiên cường, ý chí không bao giờ chịu khuất phục." }
        ],
        analysis: [
          "Đóng vai nhân vật xuất sắc, ngôn ngữ kể chuyện giàu kịch tính, lôi cuốn.",
          "Diễn biến cốt truyện sáng tạo thêm yếu tố tâm lý nhân vật rõ nét, cuốn hút người đọc.",
          "Truyền tải thông điệp nhân văn về sự kiên cường và ý chí chiến thắng thiên tai lũ lụt của dân tộc."
        ]
      },
      paragraph: {
        format: 'paragraph',
        content: `Lúc ấy, giữa biển nước gầm réo dữ dội của Thủy Tinh dâng lên, tôi đứng trên đỉnh núi cao lộng gió, dũng dũng khí phách. Nhìn xuống dòng nước đục ngầu cuồn cuộn cuốn trôi ruộng đồng nhà cửa của dân lành, lòng tôi đau như cắt. Tôi liền vung cây gậy thần, hô vang khẩu lệnh để đất trời chuyển động. Kỳ diệu thay, từng quả đồi khổng lồ dưới chân tôi tựa như những người lính khổng lồ, lập tức nối đuôi nhau dựng thành lũy vững chắc, chặn đứng cơn thịnh nộ bão giông của Thủy Tinh.`,
        highlights: [
          { text: "lòng tôi đau như cắt", type: "emotion", explanation: "Bộc lộ sự thấu cảm, xót thương của người anh hùng Sơn Tinh trước nỗi đau của nhân dân." },
          { text: "tựa như những người lính khổng lồ", type: "rhetorical", explanation: "Phép so sánh ví đồi núi với người lính khổng lồ tạo hình ảnh oai hùng, hùng vĩ bảo vệ làng xóm." }
        ],
        analysis: [
          "Đoạn văn kể lại khoảnh khắc cao trào oai hùng nhất trong trận chiến dâng núi.",
          "Ngôn từ giàu tính tạo hình mạnh mẽ, câu văn kết cấu sinh động."
        ]
      }
    },
    'cam-xuc-nhan-vat': {
      essay: {
        format: 'essay',
        content: `Trong vô vàn bài thơ em đã học, bài thơ "Bếp lửa" của nhà thơ Bằng Việt luôn khơi gợi trong em những xúc cảm sâu sắc nhất về tình bà cháu ấm áp. Hình ảnh người bà tảo tần bên bếp lửa sương sớm đã in đậm vào trái tim em, trở thành biểu tượng thiêng liêng của tình yêu thương bao la.\n\nNgười bà hiện lên trong tâm trí em với gương mặt hiền từ, hằn sâu những nếp nhăn của thời gian và sương gió. Đôi bàn tay bà thô ráp, gầy guộc đầy những vết chai sần vì cả cuộc đời hy sinh nuôi nấng cháu con. Mỗi sớm mai, khi đất trời còn lạnh giá, bà đã thức dậy khơi lên ngọn lửa hồng ấm áp. Ngọn lửa ấy không chỉ luộc khoai, luộc sắn mà còn nhen nhóm lên những ước mơ, hy vọng khôn lớn của cháu. Dù trong hoàn cảnh chiến tranh gian khổ gieo neo, bà vẫn vững lòng gánh vác gia đình, trở thành chỗ dựa tinh thần vững chắc nhất cho cháu con vững lòng đi qua giông bão.\n\nTình yêu thương và đức hy sinh thầm lặng của bà như dòng nước mát lành tưới mát tâm hồn em. Đọc bài thơ, em thầm hứa với bản thân sẽ học tập thật chăm ngoan, rèn luyện thật tốt để xứng đáng với tình yêu thương vô bờ bến và bàn tay nâng đỡ đầy ấm áp của bà.`,
        highlights: [
          { text: "gương mặt hiền từ, hằn sâu những nếp nhăn", type: "imagery", explanation: "Chi tiết miêu tả ngoại hình chân thực lột tả sự lam lũ, vất vả của người bà suốt cuộc đời vì gia đình." },
          { text: "bàn tay nâng đỡ đầy ấm áp", type: "emotion", explanation: "Thể hiện tình cảm gắn bó thiêng liêng và cảm giác an toàn, che chở khi có bà đồng hành." },
          { text: "vững lòng", type: "vocabulary", explanation: "Từ 'vững lòng' biểu thị tinh thần kiên cường, gánh vác vượt qua gian khổ của người phụ nữ Việt Nam." }
        ],
        analysis: [
          "Bố cục rõ ràng 3 phần, cách mở bài trực tiếp giới thiệu nhân vật đầy lôi cuốn.",
          "Tập trung bày tỏ tình cảm chân thành với phẩm chất đạo đức hi sinh cao quý của người bà.",
          "Kết bài đúc rút được bài học thực tế sâu sắc gắn liền với bản thân học sinh."
        ]
      },
      paragraph: {
        format: 'paragraph',
        content: `Mỗi lần nghĩ về đôi bàn tay thô ráp, gầy guộc của bà chăm chút nhóm từng ngọn lửa sương sớm, lòng em lại dâng lên một nỗi niềm biết ơn và thấu cảm sâu sắc. Đôi bàn tay ấy tuy đã hằn in vết chai sần của thời gian nhưng chứa đựng hơi ấm tình thương kỳ diệu, ấp ủ nuôi dưỡng tâm hồn em khôn lớn qua bao tháng năm gieo neo tuổi thơ.`,
        highlights: [
          { text: "đôi bàn tay thô ráp, gầy guộc", type: "imagery", explanation: "Tả thực đôi tay lam lũ hao mòn sức khỏe của bà vì gia đình." },
          { text: "nỗi niềm biết ơn và thấu cảm sâu sắc", type: "emotion", explanation: "Xúc cảm chân thành, thấu hiểu tấm lòng bao dung của người lớn tuổi." }
        ],
        analysis: [
          "Đoạn văn ngắn bộc lộ cảm xúc lắng đọng hướng tới một chi tiết miêu tả tiêu biểu (đôi bàn tay bà).",
          "Nhịp điệu câu văn uyển chuyển, giàu tính triết lý tri ân."
        ]
      }
    },
    'cam-xuc-su-viec': {
      essay: {
        format: 'essay',
        content: `Mỗi năm học mới bắt đầu, ngày khai trường luôn gieo vào lòng em những cảm xúc náo nức, xốn xang nhất. Tiếng trống trường khai giảng giòn giã vang lên vang vọng cả không gian như đánh dấu một hành trình khám phá tri thức mới mẻ đầy hứa hẹn.\n\nSáng hôm ấy, bầu trời thu cao rộng xanh ngắt, nắng vàng rải nhẹ trên những con đường ngập tràn cờ hoa rực rỡ. Em khoác lên mình bộ đồng phục tinh khôi, cắp sách đến trường với trái tim thổn thức niềm vui khó tả. Cổng trường rộng mở chào đón học sinh ríu rít như bầy chim non tựu hội. Thầy cô nở nụ cười hiền hậu, dang rộng cánh tay đón chúng em bước vào lớp mới. Giây phút tiếng trống trường thiêng liêng rền vang ba hồi giòn giã, cả sân trường bừng sáng dưới hàng ngàn quả bóng bay đủ sắc màu bay vút lên nền trời xanh bao la. Giây phút ấy, lòng em bỗng dâng trào một cảm xúc tự hào, gắn bó sâu sắc với mái trường mến yêu.\n\nNgày khai trường đã trở thành một kỷ niệm đẹp đẽ, thiêng liêng nâng niu tuổi học trò của em. Em tự hứa sẽ học tập chăm chỉ để xứng đáng là học sinh chăm ngoan của trường, mang vinh quang về làm đẹp thêm mái trường mến yêu.`,
        highlights: [
          { text: "ríu rít như bầy chim non tựu hội", type: "rhetorical", explanation: "So sánh ví học sinh tựu trường như chim non gợi không khí nhộn nhịp, hồn nhiên của ngày khai giảng." },
          { text: "náo nức, xốn xang, tinh khôi", type: "vocabulary", explanation: "Từ láy 'náo nức' chỉ tâm trạng háo hức mong đợi ngày tựu trường của trẻ em." },
          { text: "trái tim thổn thức niềm vui khó tả", type: "emotion", explanation: "Biểu đạt tâm trạng rung động rộn ràng chân thật trước sự kiện trọng đại của năm học." }
        ],
        analysis: [
          "Dẫn dắt cảm xúc mạch lạc, bố cục chặt chẽ theo dòng thời gian buổi lễ.",
          "Kết hợp miêu tả cảnh vật mùa thu trong trẻo làm nổi bật tâm trạng vui tươi náo nức.",
          "Thể hiện lòng yêu trường mến lớp thiết thực của học sinh."
        ]
      },
      paragraph: {
        format: 'paragraph',
        content: `Khi hồi trống khai trường đầu tiên vang lên giòn giã vang vọng khắp sân trường ngập tràn cờ hoa, trái tim em bỗng thổn thức một niềm xúc động khó tả. Nhìn lá cờ đỏ sao vàng kiêu hãnh tung bay dưới trời thu trong vắt và nụ cười rạng rỡ của bạn bè, thầy cô, em cảm nhận sâu sắc một nhịp đập tự hào và tinh thần sẵn sàng chinh phục những chân trời tri thức mới phía trước.`,
        highlights: [
          { text: "tiếng trống khai trường vang lên giòn giã", type: "imagery", explanation: "Âm thanh trống trường gợi không khí trang nghiêm và rộn rã khai giảng năm học." },
          { text: "trái tim em bỗng thổn thức", type: "emotion", explanation: "Bộc lộ trực tiếp cảm xúc rung động thiêng liêng của nhân vật em học sinh." }
        ],
        analysis: [
          "Đoạn văn ngắn gọn, súc tích tập trung tả khoảnh khắc đánh trống khai giảng thiêng liêng.",
          "Diễn đạt mạch lạc trôi chảy, câu văn có tính biểu cảm cao."
        ]
      }
    },
    'neu-y-kien': {
      essay: {
        format: 'essay',
        content: `Trong cuộc sống hiện đại ngày nay, sách vẫn luôn là kho tàng tri thức vô giá của nhân loại. Vì vậy, em hoàn toàn đồng tình với ý kiến cho rằng việc xây dựng thói quen đọc sách mỗi ngày là vô cùng cần thiết đối với học sinh chúng ta.\n\nTrước hết, sách cung cấp một lượng tri thức khổng lồ về mọi lĩnh vực xung quanh cuộc sống từ khoa học, lịch sử đến nghệ thuật, giúp học sinh mở rộng chân trời hiểu biết mà không cần đi xa. Thứ hai, đọc sách thường xuyên giúp bồi dưỡng tâm hồn tinh tế, rèn luyện sự thấu cảm và lòng nhân ái thông qua những câu chuyện nhân văn sâu sắc. Trái lại, những người lười đọc sách, chỉ phụ thuộc vào trò chơi điện tử thường bị hạn chế về vốn từ vựng và giảm khả năng tập trung sâu sắc. Để thói quen đọc sách đạt kết quả tốt nhất, mỗi học sinh hãy bắt đầu chọn những quyển sách phù hợp lứa tuổi, dành ra mười lăm đến ba mươi phút đọc sách trước khi đi ngủ mỗi ngày.\n\nTóm lại, đọc sách chính là chìa khóa mở ra cánh cửa tương lai tươi đẹp. Xây dựng văn hóa đọc từ hôm nay sẽ giúp học sinh chúng ta ngày một hoàn thiện bản thân, trở thành những công dân có ích cho xã hội.`,
        highlights: [
          { text: "đọc sách chính là chìa khóa mở ra cánh cửa tương lai", type: "rhetorical", explanation: "Phép ẩn dụ ví sách với chiếc chìa khóa giúp nhấn mạnh tầm quan trọng quyết định của việc đọc sách đối với tương lai trẻ em." },
          { text: "lười đọc sách, chỉ phụ thuộc vào trò chơi điện tử", type: "rhetorical", explanation: "Lập luận so sánh phản đề để chứng minh tác hại của việc lười đọc sách." },
          { text: "mở rộng chân trời hiểu biết", type: "vocabulary", explanation: "Cụm từ đắt giá chỉ sự phát triển, thu nhận tri thức một cách phong phú." }
        ],
        analysis: [
          "Bố cục nghị luận ý kiến chuẩn mực, luận điểm mạch lạc khoa học.",
          "Lý lẽ đưa ra sắc bén đầy tính thuyết phục kết hợp dẫn chứng thực tế phù hợp.",
          "Lời kêu gọi hành động (CTA) thiết thực áp dụng trực tiếp được hàng ngày."
        ]
      },
      paragraph: {
        format: 'paragraph',
        content: `Việc hình thành thói quen đọc sách từ nhỏ là vô cùng cần thiết vì sách không chỉ là người thầy truyền thụ tri thức khổng lồ mà còn là người bạn tâm tình bồi đắp lòng nhân ái cho tâm hồn ta. Đọc một quyển sách hay mỗi ngày giúp nuôi dưỡng trí tưởng tượng phong phú, rèn luyện sự kiên nhẫn tập trung và làm giàu vốn từ ngữ giao tiếp hàng ngày của học sinh.`,
        highlights: [
          { text: "người thầy truyền thụ tri thức... người bạn tâm tình", type: "rhetorical", explanation: "Nhân hóa và so sánh ví sách như người thầy, người bạn làm tăng sự gần gũi thân thuộc của sách." },
          { text: "bồi đắp lòng nhân ái", type: "emotion", explanation: "Khía cạnh cảm xúc đạo đức khi tiếp xúc với các tác phẩm văn học ý nghĩa." }
        ],
        analysis: [
          "Đoạn văn ngắn gọn lập luận rõ ràng về ích lợi của việc đọc sách.",
          "Hành văn trôi chảy mạch lạc dễ hiểu phù hợp học sinh tiểu học."
        ]
      }
    }
  };

  const genreEntry = fallbackDatabase[type] || fallbackDatabase['ta-canh'];
  return genreEntry[format] || genreEntry['essay'];
}
