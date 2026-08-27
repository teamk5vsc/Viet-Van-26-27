import { SampleEssayResult } from '../types';

export function getDynamicMockEssay(
  topic: string,
  type: string,
  format: 'essay' | 'paragraph'
): SampleEssayResult {
  const cleanTopic = topic || '';
  const topicLower = cleanTopic.toLowerCase();
  const isParagraph = format === 'paragraph';

  // Helper to get random item from array (provides variety on rewrite)
  const getRandomOption = (options: SampleEssayResult[]): SampleEssayResult => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  // -------------------------------------------------------------
  // 1. KỂ CHUYỆN SÁNG TẠO (ke-chuyen-sang-tao)
  // -------------------------------------------------------------
  if (type === 'ke-chuyen-sang-tao') {
    if (topicLower.includes('cánh đồng hoa')) {
      const options: SampleEssayResult[] = [
        // Option 1: Vai Ja Ka (Mặc định)
        {
          format: 'essay',
          content: `Tôi là Ja Ka, một cậu bé lớn lên cùng buôn làng Tây Nguyên yên bình. Mỗi chiều đi học về, tôi lại cùng nhóm bạn thân thiết gồm Mư Hoa, Ja Prok và Mư Nhơ tụ họp vui chơi thỏa thích trên đồng cỏ xanh mướt đầu làng. Đó là thiên đường tuổi thơ cho đến khi bãi rác bốc mùi xú uế xuất hiện, phá hỏng không gian trong lành.\n\nChứng kiến cảnh tượng đồng cỏ yêu dấu ngày một hoang tàn, lòng tôi trĩu nặng buồn bã. May sao, Mư Hoa đã nảy ra một ý tưởng vô cùng sáng tạo: chúng tôi sẽ trồng hoa phủ kín nơi này để mọi người không nỡ vứt rác nữa. Nghĩ là làm, tôi cùng Ja Prok gom rác lại một góc rồi đào hố chôn lấp cẩn thận. Mư Hoa và Mư Nhơ tíu tít chia nhau xới đất gieo những hạt mầm đầu tiên. Thấy hành động đẹp của chúng tôi, các cô bác trong làng cũng hào hứng hưởng ứng nhiệt tình, cùng đem cuốc xẻng ra phụ giúp. Suốt ba tháng ròng rã, chúng tôi cùng nhau tưới tắm, chăm sóc. Để rồi một ngày nắng ấm, từ bãi đất ngập rác ngày nào giờ đã hóa thành một thảm hoa rực rỡ, lung linh khoe sắc trước gió ngàn.\n\nCánh đồng hoa rực rỡ sắc màu không chỉ làm đẹp buôn làng mà còn gắn kết tình cảm xóm giềng ấm áp. Kỷ niệm chung tay lao động ấy giúp tôi nhận ra rằng, chỉ cần đồng lòng quyết tâm, chúng ta có thể biến những điều xấu xí thành vẻ đẹp kỳ diệu bảo vệ môi trường quê hương.`,
          highlights: [
            { text: "thảm hoa rực rỡ, lung linh khoe sắc trước gió ngàn", type: "imagery", explanation: "Từ ngữ gợi hình miêu tả vẻ đẹp lung linh của đồng hoa sau quá trình chăm sóc gian khổ." },
            { text: "tíu tít chia nhau xới đất gieo những hạt mầm", type: "vocabulary", explanation: "Từ láy 'tíu tít' lột tả bầu không khí lao động hào hứng, vui tươi của nhóm bạn nhỏ." },
            { text: "biến những điều xấu xí thành vẻ đẹp kỳ diệu", type: "rhetorical", explanation: "Nghệ thuật tương phản đối lập làm nổi bật ý nghĩa nhân văn sâu sắc của câu chuyện cải tạo môi trường." }
          ],
          analysis: [
            "Kể câu chuyện bám sát cốt truyện SGK Tiếng Việt 5 (Cánh đồng hoa) với đầy đủ các nhân vật Ja Ka, Mư Hoa, Ja Prok, Mư Nhơ.",
            "Bố cục bài văn 3 phần hoàn chỉnh, lời văn giàu hình ảnh so sánh sinh động.",
            "Truyền tải thông điệp sâu sắc về tinh thần đoàn kết cộng đồng và ý thức bảo vệ môi trường xanh."
          ]
        },
        // Option 2: Vai Mư Hoa (hoặc Mơ Hoa do học sinh gõ nhầm)
        {
          format: 'essay',
          content: `Tôi là Mư Hoa (ở buôn làng các bạn đôi lúc vẫn gọi yêu là Mơ Hoa). Là một cô bé yêu thiên nhiên, tôi trân quý từng gốc cây ngọn cỏ trên đồng cỏ đầu làng nơi tôi cùng các bạn Ja Ka, Ja Prok và Mư Nhơ thường múa hát tưng bừng. Khi đồng cỏ yêu thích bị mọi người xả rác bừa bãi bốc mùi hôi thối, lòng tôi đau xót khôn nguôi.\n\nQuyết tâm cứu lấy thiên đường tuổi thơ, tôi đã nảy ra suy nghĩ: "Nếu nơi đây là một cánh đồng hoa rực rỡ, chắc chắn mọi người sẽ không nỡ đổ rác nữa". Tôi đem ý tưởng này bàn với nhóm bạn và nhận được sự đồng ý ngay lập tức. Ja Ka và Ja Prok xung phong dọn dẹp đống rác bẩn thỉu. Tôi cùng Mư Nhơ đi xin hạt giống hoa cúc, hoa mười giờ đem về gieo trồng. Nhìn thấy đôi bàn tay nhỏ bé của chúng tôi cặm cụi dưới nắng chiều, dân làng vô cùng cảm động và đã chung tay phụ giúp xới đất gieo hạt. Kỳ diệu thay, sau những ngày tháng kiên trì tưới tắm dưới cái nắng Tây Nguyên, cánh đồng hoa lung linh khoe sắc rực rỡ như một bức tranh thổ cẩm khổng lồ trải dài trước buôn làng.\n\nNhìn du khách thích thú đứng ngắm hoa, tôi mỉm cười hạnh phúc. Câu chuyện dạy tôi bài học quý giá rằng tình yêu quê hương luôn bắt đầu từ những hành động nhỏ bé và sự sáng tạo kiên cường để đẩy lùi những điều xấu xí.`,
          highlights: [
            { text: "rực rỡ như một bức tranh thổ cẩm khổng lồ", type: "rhetorical", explanation: "Phép so sánh độc đáo mang đậm bản sắc Tây Nguyên, ví cánh đồng hoa với tranh thổ cẩm nhiều sắc màu." },
            { text: "cặm cụi dưới nắng chiều", type: "vocabulary", explanation: "Từ láy 'cặm cụi' lột tả nghị lực lao động âm thầm đầy cố gắng của cô bé Mư Hoa cùng các bạn." },
            { text: "lòng tôi đau xót khôn nguôi", type: "emotion", explanation: "Bộc lộ tình yêu quê hương và sự nhạy cảm tinh tế trước thiên nhiên bị hủy hoại." }
          ],
          analysis: [
            "Đóng vai nhân vật Mư Hoa kể chuyện tự nhiên, giải quyết trực tiếp yêu cầu đóng vai của học sinh.",
            "Tình tiết phát triển mạch lạc, trung thực với nguyên bản văn bản đọc trong sách giáo khoa TV 5 Tập 1.",
            "Ngôn từ giàu tính nhạc điệu và văn phong biểu cảm trong sáng thích hợp đạt điểm 10."
          ]
        },
        // Option 3: Kể theo ngôi thứ ba (Variety)
        {
          format: 'essay',
          content: `Ở một buôn làng Tây Nguyên tươi đẹp, đầu làng có một đồng cỏ xanh mướt là nơi nhóm bạn Ja Ka, Mư Hoa, Ja Prok và Mư Nhơ thường tụ hội vui chơi, múa hát tưng bừng. Thế nhưng, vẻ thanh bình ấy dần biến mất khi bãi rác xuất hiện, ngày một phình to ra và bốc mùi khó chịu.\n\nKhông đành lòng nhìn đồng cỏ bị phá hủy, cô bé Mư Hoa đã nảy ra sáng kiến trồng hoa che phủ đất trống để ngăn chặn việc xả rác. Nhóm bạn nhỏ lập tức đồng lòng cùng hành động. Ja Ka và Ja Prok nhanh nhẹn thu dọn rác bẩn, còn Mư Hoa và Mư Nhơ đi gom hạt giống hoa. Sự chăm chỉ của các bạn đã lay động cả buôn làng. Các cô bác kéo nhau mang cuốc xẻng ra xới đất gieo hạt. Trải qua ba tháng chăm sóc kiên trì, đồng cỏ xưa đã lột xác ngoạn mục thành một cánh đồng hoa rực rỡ muôn màu muôn sắc. Khách tham quan khắp nơi đổ về ngắm cảnh, buôn làng ngập tràn niềm vui sướng hân hoan.\n\nCâu chuyện về cánh đồng hoa của nhóm bạn Ja Ka đã lan tỏa bài học vàng về ý thức bảo vệ môi trường. Nó là minh chứng hùng hồn cho thấy tinh thần đoàn kết và tư duy sáng tạo của tuổi trẻ có thể làm nên những đổi thay kỳ diệu cho quê hương.`,
          highlights: [
            { text: "xanh mướt, hoang tàn, rực rỡ, hân hoan", type: "vocabulary", explanation: "Sử dụng các tính từ miêu tả trạng thái đối lập để nhấn mạnh sự thay đổi tuyệt vời của cảnh vật đầu làng." },
            { text: "lột xác ngoạn mục thành một cánh đồng hoa rực rỡ", type: "rhetorical", explanation: "Sử dụng biện pháp ẩn dụ 'lột xác' để mô tả sự chuyển biến to lớn từ bãi rác thành vườn hoa." },
            { text: "đồng lòng cùng hành động... lay động cả buôn làng", type: "rhetorical", explanation: "Lặp từ 'động' khéo léo để nhấn mạnh tính lan tỏa của hành vi bảo vệ môi trường." }
          ],
          analysis: [
            "Kể câu chuyện bằng ngôi thứ ba giúp bài viết có cái nhìn khách quan, miêu tả toàn cảnh.",
            "Từ ngữ tinh tế, mô tả rõ nét quá trình chung tay từ nhóm nhỏ lan rộng ra toàn buôn làng.",
            "Rút ra ý nghĩa sư phạm cao quý về bài học giáo dục bảo vệ thiên nhiên quanh em."
          ]
        }
      ];

      // If topic specifically mentions "mơ hoa" or "mư hoa"
      if (topicLower.includes('mơ hoa') || topicLower.includes('mư hoa')) {
        const option = options[1];
        return isParagraph ? convertEssayToParagraph(option) : option;
      }
      // If topic mentions "ja ka"
      if (topicLower.includes('ja ka')) {
        const option = options[0];
        return isParagraph ? convertEssayToParagraph(option) : option;
      }
      // Otherwise, return a random option to provide variety
      const chosen = getRandomOption(options);
      return isParagraph ? convertEssayToParagraph(chosen) : chosen;
    }

    if (topicLower.includes('thanh âm của gió')) {
      const options: SampleEssayResult[] = [
        // Option 1: Vai người anh trai (Mặc định)
        {
          format: 'essay',
          content: `Tôi vẫn nhớ như in những buổi chiều thu thanh bình bên dòng suối nhỏ dưới chân đồi. Chiều hôm ấy, tôi cùng bé Bống và nhóm bạn Điệp, Văn, Thành lùa đàn trâu ra bờ suối gặm cỏ. Trong khi chúng tôi đang mải mê chơi đùa, bé Bống chợt reo lên và phát hiện ra một trò chơi lắng nghe gió vô cùng kỳ diệu.\n\nBống bảo chúng tôi hãy nhắm mắt lại, lấy hai tay bịt tai lại rồi mở ra liên tục theo nhịp. Ban đầu tôi nghĩ đó chỉ là trò đùa trẻ con, nhưng khi làm thử, lòng tôi bỗng kinh ngạc vô cùng. Mỗi lần bịt tai rồi mở ra, tiếng gió rì rào luồn qua khe đá bỗng nghe rầm rì như lời thì thầm kể chuyện cổ tích. Tiếng gió xạc xào qua rặng tre lại du dương tựa như tiếng sáo trúc êm ái xua tan mọi mệt mỏi. Gió mang theo cả hương hoa dại ngọt ngào thổi mơn man lên da thịt. Tối hôm đó, hai anh em tôi tíu tít kể lại trò chơi cho bố nghe. Bố bật cười hiền hậu, bịt tai rồi mở ra thử nghiệm và cũng hào hứng reo lên như một đứa trẻ.\n\nTrò chơi lắng nghe tiếng gió của bé Bống giúp tôi nhận ra thiên nhiên quanh mình luôn chứa đựng những thanh âm kỳ diệu. Chỉ cần mở lòng thấu cảm, nhẫn nại lắng nghe, ta sẽ cảm nhận được tiếng nói yêu thương của đất trời quê hương.`,
          highlights: [
            { text: "rì rào luồn qua khe đá bỗng nghe rầm rì như lời thì thầm", type: "rhetorical", explanation: "Nghệ thuật so sánh tiếng gió với lời thì thầm tạo hình ảnh bí ẩn, gần gũi như truyện cổ tích." },
            { text: "xạc xào qua rặng tre lại du dương tựa như tiếng sáo trúc", type: "rhetorical", explanation: "So sánh tiếng gió rặng tre với tiếng sáo trúc du dương gợi tả thính giác sinh động." },
            { text: "mơn man, xạc xào, ngọt ngào", type: "vocabulary", explanation: "Các từ láy gợi tả xúc giác và âm thanh êm dịu của gió mùa thu." }
          ],
          analysis: [
            "Kể câu chuyện bám sát cốt truyện 'Thanh âm của gió' (trích truyện Văn Thành Lê) với các nhân vật Bống, Điệp, Văn, Thành, Bố.",
            "Bộc lộ tình cảm gia đình ấm áp và sự thấu cảm với các thanh âm của thiên nhiên hoang sơ.",
            "Lựa chọn ngôi kể thứ nhất tự nhiên, giàu tính nhạc điệu và biểu cảm."
          ]
        },
        // Option 2: Vai bé Bống
        {
          format: 'essay',
          content: `Tôi là Bống, một cô bé thích khám phá những điều thú vị xung quanh. Chiều hôm ấy là một buổi chiều thật đáng nhớ khi tôi cùng anh trai và các bạn Điệp, Văn, Thành đi chăn trâu bên suối. Nhìn ngắm cánh đồng cỏ lộng gió, tôi đã vô tình tìm ra cách để nghe thấy khúc hát của chị gió trời.\n\nKhi gió thổi lướt qua tai mát rượi, tôi thử lấy hai tay bịt chặt tai lại rồi buông ra liên tục. Thật kỳ diệu, tôi reo vang gọi anh trai và các bạn chạy lại xem cùng. Tiếng gió ù ù ban đầu bỗng chốc hóa thành những thanh âm biến hóa khôn lường. Lúc thì rì rào thầm thì như tiếng đọc sách nhỏ nhẹ bên khe đá, lúc lại xào xạc vang lên như tiếng đàn tranh của ai đó gảy giữa núi đồi. Mọi người đều thích thú làm theo, tiếng cười đùa vang dội khắp bờ suối. Khi hoàng hôn buông xuống, hai anh em chạy ùa về nhà kể ngay cho bố nghe. Nhìn thấy bố cũng hào hứng bịt tai lại để nghe tiếng gió rì rào cùng hai con dưới ánh đèn ấm áp, lòng tôi tràn ngập niềm vui sướng lâng lâng.\n\nTừ buổi chiều hôm đó, tôi càng thêm yêu quý gió và thiên nhiên quê hương. Tôi hiểu rằng gió luôn có tiếng nói riêng để bầu bạn với con người, chỉ cần chúng ta chịu lắng nghe bằng cả trái tim chân thành.`,
          highlights: [
            { text: "lúc lại xào xạc vang lên như tiếng đàn tranh", type: "rhetorical", explanation: "Ví tiếng gió xào xạc với đàn tranh làm nổi bật sự êm ái, nghệ thuật của thanh âm tự nhiên." },
            { text: "lòng tôi tràn ngập niềm vui sướng lâng lâng", type: "emotion", explanation: "Từ láy 'lâng lâng' mô tả trạng thái hạnh phúc tuyệt vời khi chia sẻ niềm vui với gia đình." },
            { text: "bịt chặt tai lại rồi buông ra", type: "imagery", explanation: "Chi tiết tả hành động đặc trưng tạo nên trò chơi nghe gió vô cùng sáng tạo của bé Bống." }
          ],
          analysis: [
            "Đóng vai nhân vật bé Bống kể lại câu chuyện một cách hồn nhiên, trong trẻo đúng lứa tuổi lớp 5.",
            "Cốt truyện trung thành tuyệt đối với tác phẩm gốc trong SGK Kết nối tri thức Tập 1.",
            "Hướng học sinh mở rộng trí tưởng tượng và biết sẻ chia hạnh phúc với gia đình."
          ]
        }
      ];

      if (topicLower.includes('bống') || topicLower.includes('bé bống')) {
        const option = options[1];
        return isParagraph ? convertEssayToParagraph(option) : option;
      }
      const chosen = getRandomOption(options);
      return isParagraph ? convertEssayToParagraph(chosen) : chosen;
    }

    if (topicLower.includes('rùa và thỏ')) {
      const options: SampleEssayResult[] = [
        // Option 1: Vai Rùa (Mặc định)
        {
          format: 'essay',
          content: `Tôi là Rùa, người chiến thắng chú Thỏ kiêu ngạo trong cuộc chạy đua huyền thoại năm xưa. Chiến thắng ấy đến nay vẫn được muông thú nhắc lại như một bài học sâu sắc về lòng kiên trì và sự nỗ lực bền bỉ.\n\nNgày ấy, Thỏ cậy đôi chân dài nhanh nhẹn chạy nhanh như gió nên thường chế giễu những loài chậm chạp như tôi. Không chịu nổi thói kiêu căng ấy, tôi nhận lời đua chạy với Thỏ. Khi cuộc đua bắt đầu, Thỏ vọt đi như một tia chớp, rồi chủ quan dừng lại hái hoa bắt bướm và nằm ngủ mơ màng dưới gốc cây. Tôi biết mình chậm chạp nên cặm cụi bò từng bước một không ngừng nghỉ. Dù mồ hôi ướt đẫm, tôi vẫn kiên trì tiến bước hướng về phía trước. Khi Thỏ giật mình thức giấc thì tôi đã đặt bước chân quyết định chạm vạch đích trong tiếng reo hò của cả khu rừng.\n\nCuộc đua huyền thoại đã chứng minh rằng: Chậm chạp nhưng kiên trì, nhẫn nại sẽ luôn chiến thắng sự nhanh nhẹn nhưng kiêu ngạo, lười biếng.`,
          highlights: [
            { text: "cặm cụi bò từng bước một không ngừng nghỉ", type: "vocabulary", explanation: "Từ láy 'cặm cụi' miêu tả chân thực thái độ kiên nhẫn, chịu khó của Rùa." },
            { text: "vọt đi như một tia chớp", type: "rhetorical", explanation: "Phép so sánh làm nổi bật ưu thế tốc độ vượt trội của Thỏ nhưng tương phản với sự lười biếng sau đó." }
          ],
          analysis: [
            "Ngôi kể thứ nhất chân thực, đóng vai Rùa kể câu chuyện ngụ ngôn quen thuộc.",
            "Lý luận và bài học rút ra rõ ràng, thích hợp giáo dục phẩm chất đạo đức học sinh."
          ]
        },
        // Option 2: Vai Thỏ hối hận (Variety)
        {
          format: 'essay',
          content: `Tôi là Thỏ, kẻ bại trận kiêu ngạo trong cuộc chạy đua lịch sử với anh Rùa. Thất bại muối mặt năm ấy là gáo nước lạnh giúp tôi tỉnh ngộ, nhận ra thói chủ quan tự phụ nguy hiểm đến nhường nào.\n\nNgày ấy, tôi sở hữu đôi chân dài thoăn thoắt đứng đầu rừng xanh nên sinh thói kiêu căng ngạo mạn. Thấy anh Rùa còng lưng chậm chạp bò từng bước, tôi thách đấu đua chạy đầy tự mãn. Khi xuất phát, tôi phóng vụt đi bỏ xa anh Rùa một quãng dài. Nghĩ bụng anh Rùa có bò cả ngày cũng không đuổi kịp, tôi ung dung hái hoa, ngắm cảnh rồi ngủ thiếp đi dưới bóng mát. Khi giật mình tỉnh giấc nghe tiếng hô reo cổ vũ của muông thú, tôi cuống cuồng vắt chân lên cổ chạy nhưng đã muộn: anh Rùa đã kiêu hãnh chạm vạch đích trước. Giờ đây nghĩ lại, lòng tôi vẫn ngượng ngùng hối hận vô cùng.\n\nThất bại trước anh Rùa dạy tôi bài học đắt giá: Sự kiêu ngạo và lười biếng sẽ phá hỏng tài năng. Tôi tự hứa sẽ luôn khiêm tốn và kiên trì rèn luyện từng ngày.`,
          highlights: [
            { text: "cuống cuồng vắt chân lên cổ chạy", type: "vocabulary", explanation: "Thành ngữ và từ láy tả trạng thái hoảng sợ, vội vã của Thỏ khi thức giấc." },
            { text: "lòng tôi vẫn ngượng ngùng hối hận vô cùng", type: "emotion", explanation: "Bày tỏ cảm xúc ăn năn, nhận thức được bài học từ sai lầm của bản thân." }
          ],
          analysis: [
            "Góc nhìn mới lạ (đóng vai Thỏ bại trận) giúp câu chuyện trở nên sáng tạo, giàu tính giáo dục tự kiểm điểm.",
            "Hành văn trôi chảy, sử dụng linh hoạt thành ngữ dân gian."
          ]
        }
      ];

      if (topicLower.includes('thỏ') || topicLower.includes('chú thỏ')) {
        const option = options[1];
        return isParagraph ? convertEssayToParagraph(option) : option;
      }
      const chosen = getRandomOption(options);
      return isParagraph ? convertEssayToParagraph(chosen) : chosen;
    }
  }

  // -------------------------------------------------------------
  // 2. VĂN TẢ CẢNH (ta-canh)
  // -------------------------------------------------------------
  if (type === 'ta-canh') {
    if (topicLower.includes('sơn đoòng')) {
      return {
        format: isParagraph ? 'paragraph' : 'essay',
        content: isParagraph
          ? `Bên trong hang Sơn Đoòng vĩ đại, em như lạc vào một thế giới cổ tích kỳ ảo, nơi thiên nhiên tạc nên những khối thạch nhũ khổng lồ cao sừng sững tựa như những cột chống trời nghìn năm tuổi. Từ trần hang cao vút, ánh nắng mặt trời lọt qua những hố sụt lớn chiếu rọi xuống, đánh thức một khu rừng nguyên sinh xanh mướt mát với những loài cây dương xỉ cổ đại sinh trưởng ngay trong lòng đất sâu thẳm. Tiếng dòng sông ngầm chảy rầm rì luồn qua các kẽ đá tạo nên một thanh âm hoang sơ, huyền bí, làm lòng em tràn ngập niềm tự hào và xúc động sâu sắc trước kỳ quan thiên nhiên vô song của đất nước Việt Nam thân yêu.`
          : `Việt Nam quê hương ta có biết bao danh lam thắng cảnh kỳ vĩ, nhưng nơi khiến em ao ước được đặt chân đến nhất chính là hang Sơn Đoòng - hang động tự nhiên lớn nhất thế giới, một kỳ quan vô song ẩn sâu trong lòng di sản Phong Nha - Kẻ Bàng.\n\nNhìn từ bên ngoài, lối vào hang khuất sau những vách núi đá vôi dựng đứng dựng đứng và tán rừng rậm rạp, tỏa ra một luồng gió mát lạnh thổi ngược lên khiến lòng người bồi hồi háo hức. Bước chân vào bên trong hang, một không gian khổng lồ hiện ra làm em vô cùng kinh ngạc. Vòm hang cao rộng đến mức có thể chứa được cả một tòa nhà chọc trời năm mươi tầng. Những khối măng đá và thạch nhũ nghìn năm tuổi rủ xuống từ trần hang lấp lánh như những hạt kim cương dưới ánh đèn pin của đoàn thám hiểm. Điểm đặc sắc nhất của Sơn Đoòng chính là hai hố sụt khổng lồ do trần hang sụp đổ từ xa xưa. Nhờ có ánh sáng mặt trời rọi qua hố sụt, ngay trong lòng đất sâu đã hình thành một khu rừng nguyên sinh tươi tốt với những loài cây dương xỉ cổ đại xanh mướt mát rượi. Dưới lòng hang, tiếng một dòng sông ngầm chảy rầm rì, luồn lách qua đá cuội tạo nên bản nhạc du dương, hoang sơ của đất trời đại ngàn.\n\nĐược chiêm ngưỡng vẻ kỳ vĩ của Sơn Đoòng qua trang sách, em thêm tự hào về đất nước mình. Hang Sơn Đoòng mãi là biểu tượng của vẻ đẹp thiên nhiên bất tận mà mỗi người Việt Nam luôn trân quý và có ý thức bảo tồn giữ gìn bảo vệ.`,
        highlights: [
          { text: "cao sừng sững tựa như những cột chống trời", type: "rhetorical", explanation: "So sánh thạch nhũ với cột chống trời giúp người đọc hình dung được sự đồ sộ, kỳ vĩ của hang động." },
          { text: "rầm rì, sừng sững, xanh mướt", type: "vocabulary", explanation: "Từ láy 'rầm rì' gợi âm thanh sông ngầm trầm ấm, bí ẩn chảy mãi không ngừng." },
          { text: "lòng em tràn ngập niềm tự hào và xúc động sâu sắc", type: "emotion", explanation: "Bày tỏ tình yêu quê hương đất nước qua sự kinh ngạc, kính phục thiên nhiên vĩ đại." }
        ],
        analysis: [
          "Tả cảnh Sơn Đoòng bám sát nội dung bài học về địa danh thiên nhiên trong SGK Tiếng Việt 5.",
          "Sử dụng từ ngữ tả hình khối, kích thước khổng lồ để tôn vinh sự kỳ vĩ của hang động.",
          "Bài viết cấu trúc 3 phần chặt chẽ, kết bài khơi dậy ý thức gìn giữ di sản dân tộc."
        ]
      };
    }

    if (topicLower.includes('hạ long')) {
      return {
        format: isParagraph ? 'paragraph' : 'essay',
        content: isParagraph
          ? `Ngắm nhìn vịnh Hạ Long từ trên cao, em cứ ngỡ mình đang chiêm ngưỡng một bức tranh thủy mặc khổng lồ của tạo hóa với hàng ngàn hòn đảo đá nhấp nhô trên làn nước xanh lục bảo mát rượi. Những hòn đảo đá vôi mang đủ hình dáng ngộ nghĩnh kỳ lạ, lúc giống như chú gà chọi đứng chênh vênh giữa sóng nước, lúc lại tựa như một chiếc đỉnh hương khổng lồ tĩnh lặng giữa biển khơi bao la. Gió biển thổi vi vu mang theo hơi muối mặn mà phả vào má em đầy dễ chịu. Đứng trước cảnh sắc non nước hữu tình ấy, lòng em tràn đầy niềm tự hào và tình yêu thiết tha dành cho giang sơn đất nước Việt Nam thân yêu.`
          : `Trong những chuyến du lịch cùng gia đình, điểm đến để lại trong em ấn tượng sâu sắc và khơi gợi nhiều niềm tự hào nhất chính là vịnh Hạ Long - một trong những kỳ quan thiên nhiên thế giới tại quê hương Việt Nam.\n\nNhìn từ trên tàu du lịch, vịnh Hạ Long hiện ra như một bức tranh thủy mặc khổng lồ sơn thủy hữu tình. Nổi bật trên làn nước màu xanh lục bảo trong vắt là hàng ngàn hòn đảo đá vôi nhấp nhô trùng điệp. Những hòn đảo đá vôi ấy đã qua hàng triệu năm kiến tạo mang đủ hình dáng kỳ thú. Kìa là hòn Trống Mái oai phong đứng chênh vênh đối mặt nhau giữa sóng nước mênh mông, kia lại là hòn Đỉnh Hương sừng sững tựa như chiếc lư hương khổng lồ dâng lên trời đất. Tàu lướt nhẹ trên sóng êm đềm, gió biển thổi vi vu qua khe núi mang theo vị mặn mòi, mát rượi của biển khơi phả vào da thịt em khoan khoái. Phía xa xa, những con thuyền buồm rực rỡ sắc màu no gió đang rẽ sóng ra khơi, vẽ nên một nhịp sống năng động mà thanh bình trên vịnh. Khi ánh hoàng hôn buông xuống, cả không gian vịnh nhuộm một màu vàng cam lộng lẫy, các hòn đảo đá như những bóng khổng lồ tĩnh lặng canh giữ biển khơi.\n\nNgắm nhìn vịnh Hạ Long tươi đẹp, em thêm yêu mến và tự hào về đất nước mình. Em tự hứa sẽ luôn tuyên truyền, bảo vệ môi trường biển để Hạ Long mãi giữ được vẻ đẹp kỳ vĩ, trong xanh cho bạn bè năm châu cùng chiêm ngưỡng.`,
        highlights: [
          { text: "nhấp nhô trên làn nước xanh lục bảo mát rượi", type: "imagery", explanation: "Sử dụng từ ngữ chỉ màu sắc 'xanh lục bảo' gợi tả độ trong xanh, quý giá và lung linh của nước biển Hạ Long." },
          { text: "đứng chênh vênh giữa sóng nước", type: "vocabulary", explanation: "Từ láy 'chênh vênh' lột tả thế đứng độc đáo, ngộ nghĩnh của hòn Trống Mái giữa biển." },
          { text: "như một bức tranh thủy mặc khổng lồ", type: "rhetorical", explanation: "So sánh vịnh Hạ Long với bức tranh thủy mặc tôn vinh vẻ đẹp nghệ thuật, cổ kính và kỳ vĩ do thiên nhiên tạo tác." }
        ],
        analysis: [
          "Bố cục rõ ràng 3 phần, cách mở bài gián tiếp đầy cuốn hút và kết bài nêu rõ thông điệp bảo vệ môi trường biển.",
          "Trình tự miêu tả sinh động: từ xa đến gần, thay đổi theo thời gian từ nắng mai đến hoàng hôn buông.",
          "Ngôn từ giàu nhạc điệu, kết hợp so sánh và nhân hóa xuất sắc đạt điểm giỏi."
        ]
      };
    }
  }

  // -------------------------------------------------------------
  // 3. CẢM XÚC NHÂN VẬT (cam-xuc-nhan-vat)
  // -------------------------------------------------------------
  if (type === 'cam-xuc-nhan-vat') {
    if (topicLower.includes('dế mèn')) {
      return {
        format: isParagraph ? 'paragraph' : 'essay',
        content: isParagraph
          ? `Nhân vật Dế Mèn trong truyện "Dế Mèn phiêu lưu ký" của nhà văn Tô Hoài luôn khơi gợi trong em những cảm xúc sâu sắc và bài học quý giá về cuộc sống. Ấn tượng nhất với em chính là sự chuyển biến tích cực trong tâm hồn Mèn từ một kẻ kiêu căng, ngạo mạn làm hại Dế Choắt đáng thương trở thành một người anh hùng nghĩa hiệp, biết ăn ăn hối cải và giàu lòng nhân ái. Đọc những dòng chữ miêu tả giọt nước mắt ân hận của Mèn bên nấm mộ Dế Choắt, lòng em lại trào dâng niềm thấu cảm khôn nguôi. Chính sự hướng thiện và tinh thần ham học hỏi, khám phá thế giới rộng lớn đã biến Mèn thành một người bạn đồng hành thân thuộc, dạy em bài học làm người đáng quý.`
          : `Trong thế giới văn học thiếu nhi phong phú, hình ảnh chú Dế Mèn trong tác phẩm "Dế Mèn phiêu lưu ký" của nhà văn Tô Hoài luôn là nhân vật để lại trong em nhiều cảm xúc nhất. Hành trình trưởng thành đầy sóng gió của Mèn đã gieo vào lòng em những bài học quý giá về lòng khiêm tốn và tình yêu thương đồng loại.\n\nỞ những chương đầu, Dế Mèn hiện lên là một chàng dế thanh niên oai vệ nhưng vô cùng kiêu căng, hợm hĩnh. Với đôi càng mẫm bóng, những cái vuốt chân nhọn hoắt cứng ngắc, Mèn tự phụ coi mình là đệ nhất thiên hạ. Chú bắt nạt chị Cào Cào, trêu chọc anh Gọng Vó và khinh thường người hàng xóm yếu ớt Dế Choắt. Sự ngạo mạn ấy đã dẫn đến bi kịch đau lòng: trò đùa tai hại trêu chị Cốc của Mèn đã cướp đi sinh mạng của Dế Choắt đáng thương. Chứng kiến cái chết của người bạn tội nghiệp, lòng Mèn đau xót như cắt. Chú đứng lặng trước nấm mộ bạn, khóc nức nở trong sự ăn ăn hối cải muộn màng. Giọt nước mắt ấy chính là cột mốc thức tỉnh, gột rửa đi tính kiêu ngạo của Mèn. Từ đó, chú quyết chí đi ngao du thiên hạ, làm nhiều việc nghĩa hiệp giúp đỡ kẻ yếu như cứu chị Nhà Trò thoát khỏi bọn Nhện hung ác, ước mơ kết nghĩa anh em bốn bể một nhà.\n\nNhân vật Dế Mèn dạy em bài học đắt giá rằng sự kiêu ngạo ngông cuồng có thể gây hại cho người khác và cho chính mình. Em thầm cảm ơn Dế Mèn vì đã truyền cho em ngọn lửa dũng cảm, biết nhận sai và nỗ lực sửa mình để trở thành một con người tử tế, biết yêu thương mọi người xung quanh.`,
        highlights: [
          { text: "khóc nức nở trong sự ăn ăn hối cải muộn màng", type: "vocabulary", explanation: "Sử dụng từ ngữ gợi tả mạnh mẽ hành động và tâm trạng ân hận sâu sắc của nhân vật." },
          { text: "đôi càng mẫm bóng, cái vuốt chân nhọn hoắt", type: "imagery", explanation: "Miêu tả ngoại hình sinh động tái hiện hình dáng oai vệ đặc trưng của dế mèn." },
          { text: "giọt nước mắt ấy chính là cột mốc thức tỉnh, gột rửa", type: "rhetorical", explanation: "Hình ảnh ẩn dụ ví giọt nước mắt như nguồn nước thanh lọc tâm hồn kiêu ngạo." }
        ],
        analysis: [
          "Bày tỏ cảm nghĩ về nhân vật Dế Mèn bám sát bài đọc trích giảng đầu năm lớp 5.",
          "Phân tích rõ nét sự phát triển nhân cách của Mèn từ kiêu ngạo sang hướng thiện cứu người.",
          "Rút ra bài học cuộc sống sâu sắc gắn kết cuộc sống thực tế của học sinh."
        ]
      };
    }

    if (topicLower.includes('sa-da-cô') || topicLower.includes('hạc giấy')) {
      return {
        format: isParagraph ? 'paragraph' : 'essay',
        content: isParagraph
          ? `Hình ảnh cô bé Sa-da-cô Xa-xa-ki trong truyện "Những con hạc giấy" luôn để lại trong em nỗi xúc động sâu sắc và niềm thương cảm khôn nguôi về tội ác chiến tranh. Em vô cùng khâm phục tinh thần lạc quan, yêu đời của cô bé nhỏ khi kiên trì gấp từng cánh hạc giấy mỏng manh với niềm tin chiến thắng căn bệnh hiểm nghèo do bom nguyên tử để lại. Mặc dù Sa-da-cô đã ra đi khi ước nguyện chưa hoàn thành, nhưng 644 con hạc giấy của em cùng hàng ngàn con hạc khác do trẻ em khắp thế giới gửi đến đã trở thành biểu tượng thiêng liêng của ước mơ hòa bình, nhắc nhở em luôn trân quý cuộc sống hòa bình tươi đẹp hôm nay.`
          : `Trong chương trình Tiếng Việt lớp 5, câu chuyện "Những con hạc giấy" luôn lấy đi của em nhiều nước mắt nhất. Hình ảnh cô bé Sa-da-cô Xa-xa-ki dũng cảm chiến đấu với căn bệnh hiểm nghèo đã khơi dậy trong em niềm thấu cảm sâu sắc và khát vọng hòa bình mãnh liệt.\n\nSa-da-cô là một cô bé ngây thơ, đáng yêu sống ở thành phố Hi-rô-si-ma nước Nhật. Tai họa ập xuống khi em bị nhiễm phóng xạ từ quả bom nguyên tử mà quân đội Mỹ trút xuống quê hương em. Nằm trên giường bệnh đau đớn, Sa-da-cô không hề khóc than mà luôn giữ nụ cười hồn nhiên trên môi. Khi nghe tin gấp đủ một nghìn con hạc giấy sẽ được một điều ước, em đã bắt tay vào gấp hạc với hy vọng khỏi bệnh để lại được tung tăng cắp sách đến trường cùng bạn bè. Đôi bàn tay nhỏ bé gầy guộc của em nâng niu từng mảnh giấy nhỏ, tỉ mỉ vuốt từng nếp gấp với tất cả niềm tin yêu cuộc sống. Dù cơ thể ngày một yếu đi, em vẫn kiên cường gấp được 644 con hạc trước khi nhắm mắt xuôi tay. Sự ra đi của em là lời cáo buộc đanh thép tội ác của chiến tranh hủy diệt.\n\nHình ảnh Sa-da-cô cùng những cánh hạc giấy mãi khắc sâu trong tâm trí em. Câu chuyện dạy em biết yêu hòa bình, ghét chiến tranh và khâm phục nghị lực phi thường của một cô bé đồng trang lứa. Em tự hứa sẽ học tập chăm ngoan để góp phần xây dựng một thế giới hòa bình, tươi đẹp và ngập tràn tình thương yêu.`,
        highlights: [
          { text: "nâng niu từng mảnh giấy nhỏ, tỉ mỉ vuốt từng nếp gấp", type: "vocabulary", explanation: "Từ láy 'tỉ mỉ' và động từ 'nâng niu' lột tả tình yêu cuộc sống và sự nâng niu hy vọng của cô bé." },
          { text: "đôi bàn tay nhỏ bé gầy guộc", type: "imagery", explanation: "Chi tiết ngoại hình tả đôi tay gầy guộc gợi nỗi xót thương về sự tàn phá của bệnh tật do chiến tranh." },
          { text: "là lời cáo buộc đanh thép tội ác của chiến tranh", type: "rhetorical", explanation: "Sử dụng ẩn dụ tu từ nhấn mạnh tầm quan trọng lịch sử và ý nghĩa của cái chết của nhân vật." }
        ],
        analysis: [
          "Bày tỏ cảm xúc chân thành về nhân vật lịch sử chiến tranh Sa-da-cô.",
          "Ngôn từ hàm súc, giàu tính biểu cảm cao quý hướng đến ước mơ hòa bình.",
          "Cấu trúc cân đối, dẫn chứng lịch sử chính xác phù hợp văn mẫu lớp 5."
        ]
      };
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
          ? `Câu chuyện "Thanh âm của gió" mang lại cho em những cảm xúc vô cùng ngọt ngào và ấm áp về tình bạn và vẻ đẹp của thiên nhiên quê hương. Chuyện kể về bé Bống tinh nghịch cùng anh trai chăn trâu bên suối, phát hiện ra trò chơi nghe gió rì rào qua khe đá, xạc xào qua ngọn tre bằng cách bịt tai liên tục. Lắng nghe câu chuyện, lòng em trào dâng cảm giác yên bình tựa như được nằm giữa đồng cỏ xanh ngát rực rỡ nắng mai. Bài học về sự thấu cảm mở lòng lắng nghe âm thanh kì diệu quanh mình từ truyện đã dạy em biết trân trọng những điều bình dị nhất của tự nhiên.`
          : `Trong các bài học Tiếng Việt 5 mới, câu chuyện "Thanh âm của gió" luôn mang đến cho em những xúc cảm êm đềm và bài học nhân văn sâu sắc nhất. Tác phẩm đã mở ra trước mắt em một thế giới tuổi thơ trong trẻo hòa quyện cùng vẻ đẹp kỳ diệu của thiên nhiên quê hương.\n\nCâu chuyện đưa người đọc đến với buổi chiều chăn trâu bên dòng suối nhỏ của bé Bống, người anh trai và nhóm bạn Điệp, Văn, Thành. Sự phát hiện tình cờ của bé Bống về trò chơi bịt tai rồi mở ra liên tục đã khơi màn cho một cuộc phiêu lưu thính giác vô cùng lý thú. Nhờ đó, cả nhóm bạn nhận ra tiếng gió rì rào qua vách đá tựa như tiếng trống trận dũng mãnh, xào xạc qua kẽ tre dịu êm như tiếng mẹ ru ngủ ấm áp. Đọc đến đây, em cảm thấy vô cùng xúc động trước thế giới tưởng tượng hồn nhiên đó. Buổi tối kể lại cho bố nghe, cả gia đình cùng bịt tai nghe gió dưới ánh sáng ấm áp càng làm tình thương thân yêu bừng sáng.\n\n"Thanh âm của gió" không chỉ làm giàu thêm trí tưởng tượng phong phú của em mà còn bồi đắp lòng thấu cảm, yêu mến thiên nhiên hoang dã quanh mình. Truyện nhắc nhở em hãy chậm lại để lắng nghe và trân quý những điều tuyệt diệu nhỏ bé của cuộc sống.`,
        highlights: [
          { text: "rì rào qua vách đá tựa như tiếng trống trận", type: "rhetorical", explanation: "Phép so sánh tiếng gió với tiếng trống trận giúp âm thanh trở nên hùng vĩ, sống động kỳ diệu." },
          { text: "êm đềm, ngọt ngào, xào xạc", type: "vocabulary", explanation: "Sử dụng từ láy giàu nhạc tính khơi gợi thính giác của người đọc một cách tự nhiên." },
          { text: "lòng em trào dâng cảm giác yên bình", type: "emotion", explanation: "Bộc lộ cảm nhận cảm xúc chân thành, thư thái khi đọc tác phẩm văn học thiếu nhi hay." }
        ],
        analysis: [
          "Bày tỏ cảm nghĩ về tác phẩm 'Thanh âm của gió' trung thực với các nhân vật và cốt truyện trong SGK lớp 5.",
          "Mô tả sinh động hoạt động lắng nghe và liên tưởng tiếng gió của trẻ thơ chăn trâu.",
          "Rút ra giá trị triết lý nhân văn cao quý về lòng trân trọng cuộc sống và tình cảm gia đình."
        ]
      };
    }

    if (topicLower.includes('cánh đồng hoa')) {
      return {
        format: isParagraph ? 'paragraph' : 'essay',
        content: isParagraph
          ? `Câu chuyện "Cánh đồng hoa" để lại trong em niềm khâm phục to lớn trước sáng kiến trồng hoa đầy ý nghĩa của cô bé Mư Hoa cùng các bạn Ja Ka, Ja Prok và Mư Nhơ. Trước nguy cơ đồng cỏ quê hương tươi đẹp biến thành bãi rác ô nhiễm, các bạn nhỏ đã dũng cảm dọn dẹp và phủ kín đất trống bằng những hạt giống hoa rực rỡ màu sắc. Sự chung sức bền bỉ của các bạn và sự giúp đỡ nhiệt tình của cả buôn làng đã gặt hái quả ngọt sau ba tháng chăm sóc. Câu chuyện là bài học quý giá, truyền cho em cảm hứng sâu sắc về tinh thần đoàn kết và ý thức trách nhiệm làm đẹp môi trường sống quê hương.`
          : `Trong các tác phẩm văn học đã học học kì này, câu chuyện "Cánh đồng hoa" luôn đọng lại trong em những rung động sâu sắc nhất. Tác phẩm đã kể lại một hành trình lao động tuyệt vời của tình bạn và ý chí bảo vệ quê hương xanh - sạch - đẹp.\n\nMở đầu câu chuyện là khung cảnh thanh bình trên đồng cỏ đầu làng của bốn người bạn Ja Ka, Mư Hoa, Ja Prok và Mư Nhơ. Nhưng khi bãi rác xuất hiện bốc mùi khó ngửi, Mư Hoa đã nảy ra ý tưởng biến đồng cỏ hoang tàn thành cánh đồng hoa rực rỡ để không ai nỡ vứt rác tại đây nữa. Đọc đến quá trình các bạn nhỏ cuốc đất, gieo hạt, nhổ cỏ dại dưới nắng hè nóng bức, em vô cùng khâm phục ý chí bền bỉ của các bạn. Hành động đẹp ấy lan tỏa sâu sắc khiến các cô bác trong buôn làng mang cuốc xẻng ra phụ giúp đắc lực. Kết quả ngọt ngào hiện ra sau ba tháng cặm cụi, đồng hoa rực rỡ sắc màu bừng nở trong tiếng reo vui của muông thú và sự yêu thích của khách tham quan.\n\nCâu chuyện "Cánh đồng hoa" truyền tải thông điệp sâu sắc rằng mỗi hành động nhỏ bé nếu có sự đồng lòng, kiên trì đều có thể tạo nên những điều kỳ diệu cho cộng đồng. Em tự hứa sẽ noi gương các bạn nhỏ bảo vệ cảnh quan sạch đẹp quanh mình.`,
        highlights: [
          { text: "cánh đồng hoa rực rỡ sắc màu bừng nở", type: "imagery", explanation: "Hình ảnh vườn hoa nở rộ rực rỡ biểu tượng cho thành công mỹ mãn của tinh thần đoàn kết." },
          { text: "cặm cụi, bền bỉ, nóng bức", type: "vocabulary", explanation: "Từ láy 'cặm cụi' chỉ tinh thần lao động không mỏi mệt của các bạn nhỏ buôn làng." },
          { text: "em vô cùng khâm phục ý chí bền bỉ", type: "emotion", explanation: "Bày tỏ xúc cảm kính phục, yêu mến tinh thần bảo vệ quê hương của các bạn." }
        ],
        analysis: [
          "Bày tỏ cảm xúc đầy đủ các nhân vật Ja Ka, Mư Hoa, Ja Prok, Mư Nhơ theo đúng cốt truyện SGK TV 5.",
          "Phân tích rõ sự chuyển dịch từ bãi rác ô nhiễm thành vườn hoa du lịch nhờ sức mạnh đoàn kết.",
          "Văn phong biểu cảm trong sáng giàu tính giáo dục môi trường."
        ]
      };
    }

    if (topicLower.includes('hộp quà') || topicLower.includes('thiên thanh')) {
      return {
        format: isParagraph ? 'paragraph' : 'essay',
        content: isParagraph
          ? `Câu chuyện "Hộp quà màu thiên thanh" đã gieo vào lòng em niềm xúc động sâu sắc về tình thầy trò thiêng liêng cao quý. Chuyện kể về món quà bí mật của lớp học dành tặng cô giáo chủ nhiệm nhân ngày tổng kết năm học: một chiếc hộp màu xanh thiên thanh chứa đựng 35 bức thư tâm tình của các bạn nhỏ. Nhìn hình ảnh bạn Tân nắn nót viết thư hứa học tốt để tri ân sự thấu cảm, bao dung của cô khi Tân đi học muộn do bẻ ngô giúp mẹ, lòng em lại trào dâng nỗi nghẹn ngào ấm áp. Hộp quà giản dị ấy chứa đựng bài học lớn lao về lòng biết ơn và sự ghi nhận nỗ lực rèn luyện của tuổi học trò.`
          : `Trong các bài đọc cuối năm lớp 5, câu chuyện "Hộp quà màu thiên thanh" để lại trong em những xúc cảm ấm áp và lòng biết ơn thầy cô giáo sâu sắc nhất. Tác phẩm đã ngợi ca mối quan hệ thầy trò gắn bó yêu thương qua một món quà tri ân vô cùng độc đáo.\n\nCâu chuyện bắt đầu từ kế hoạch bí mật của hai bạn Quang và Huệ rủ bạn Tân viết thư gửi tặng cô giáo chủ nhiệm trước lễ tổng kết năm học. Đọc câu chuyện, em vô cùng xúc động khi theo dõi dòng ký ức của Tân viết trong bức thư. Đó là kỷ niệm Tân đi học trễ do mải bẻ ngô giúp mẹ dưới đồng sâu. Thay vì trách phạt nặng nề, cô giáo đã ân cần khuyên nhủ bằng tình yêu thương trìu mến rộng mở, giúp Tân tự giác nhận lỗi và nỗ lực sửa đổi dậy sớm học bài. Ngày lễ tổng kết, chiếc hộp quà màu thiên thanh chứa 35 bức thư chân tình của các bạn học sinh được trao tận tay cô giáo trong sự xúc động nghẹn ngào của cô. Giây phút ấy, em cảm nhận được sợi dây kết nối thiêng liêng giữa người lái đò thầm lặng và bầy em nhỏ thơ ngây.\n\n"Hộp quà màu thiên thanh" đã đánh thức lòng biết ơn sâu sắc trong trái tim em. Em thầm tự hứa sẽ nỗ lực học tập rèn luyện thật tốt để dâng tặng thầy cô những bông hoa điểm 10 rực rỡ nhất, xứng đáng với công ơn giáo dục cao cả của thầy cô.`,
        highlights: [
          { text: "cô giáo đã ân cần khuyên nhủ bằng tình yêu thương trìu mến", type: "emotion", explanation: "Từ ngữ bộc lộ sự bao dung, nhân hậu của cô giáo chủ nhiệm hiền từ." },
          { text: "sợi dây kết nối thiêng liêng giữa người lái đò thầm lặng", type: "rhetorical", explanation: "Ẩn dụ ví cô giáo như người lái đò thầm lặng đưa đò sang sông mang đầy tính nhân văn biết ơn." },
          { text: "thiên thanh, nắn nót, nghẹn ngào", type: "vocabulary", explanation: "Sử dụng các từ láy và tính từ màu sắc gợi xúc cảm tri ân chân thành, sâu lắng." }
        ],
        analysis: [
          "Bày tỏ cảm xúc câu chuyện đúng chuẩn các nhân vật Tân, Quang, Huệ và cô giáo chủ nhiệm trong SGK Tập 2.",
          "Phân tích chi tiết ý nghĩa chiếc hộp màu thiên thanh chứa thư tâm tình thay cho quà cáp vật chất.",
          "Kết bài liên hệ trách nhiệm bản thân học sinh thiết thực, sâu sắc."
        ]
      };
    }
  }

  // Helper to convert essay object to paragraph format if requested
  function convertEssayToParagraph(essay: SampleEssayResult): SampleEssayResult {
    // Simplify format and strip newlines from content to make it a single paragraph
    const singleParagraphContent = essay.content
      .replace(/\n\n/g, ' ')
      .replace(/\n/g, ' ');
    return {
      format: 'paragraph',
      content: singleParagraphContent,
      highlights: essay.highlights,
      analysis: essay.analysis
    };
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
        content: `Trong cuộc sống hiện đại ngày nay, sách vẫn luôn là kho tàng tri thức vô giá của nhân loại. Vì vậy, em hoàn toàn đồng tình với ý kiến cho rằng việc xây dựng thói quen đọc sách mỗi ngày là vô cùng cần thiết đối với học sinh chúng ta.\n\nTrước hết, sách cung cấp một lượng tri thức khổng lồ về mọi lĩnh vực xung quanh cuộc sống từ khoa học, lịch sử đến nghệ thuật, giúp học sinh mở rộng chân trời hiểu biết mà không cần đi xa. Thứ hai, đọc sách thường xuyên giúp bồi dưỡng tâm hồn tinh tế, rằn luyện sự thấu cảm và lòng nhân ái thông qua những câu chuyện nhân văn sâu sắc. Trái lại, những người lười đọc sách, chỉ phụ thuộc vào trò chơi điện tử thường bị hạn chế về vốn từ vựng và giảm khả năng tập trung sâu sắc. Để thói quen đọc sách đạt kết quả tốt nhất, mỗi học sinh hãy bắt đầu chọn những quyển sách phù hợp lứa tuổi, dành ra mười lăm đến ba mươi phút đọc sách trước khi đi ngủ mỗi ngày.\n\nTóm lại, đọc sách chính là chìa khóa mở ra cánh cửa tương lai tươi đẹp. Xây dựng văn hóa đọc từ hôm nay sẽ giúp học sinh chúng ta ngày một hoàn thiện bản thân, trở thành những công dân có ích cho xã hội.`,
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
