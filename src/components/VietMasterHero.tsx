import React from 'react';

export default function VietMasterHero() {
  return (
    <div
      className="relative overflow-hidden mx-auto"
      style={{
        width: 'min(100%, 1100px)',
        aspectRatio: '2.4 / 1',
        borderRadius: '24px',
        boxShadow: '0 8px 24px rgba(140,80,20,0.18)',
      }}
    >
      <img
        src="/hero-illustration.jpg"
        alt="Mỗi bài văn là một cuộc phiêu lưu! Ý tưởng đã sẵn sàng — mình cùng viết nhé. Cú Văn cùng hai bạn nhỏ đang đọc và viết văn."
        loading="eager"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
