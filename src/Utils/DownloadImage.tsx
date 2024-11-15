export const DownloadImage = (svgElement: SVGElement | null, format: 'svg' | 'png') => {
  if (!svgElement) return;

  const svgData = new XMLSerializer().serializeToString(svgElement);

  if (format === 'svg') {
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qrCode.svg';
    link.click();
    URL.revokeObjectURL(url);
  } else if (format === 'png') {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      if(ctx != null) ctx.drawImage(img, 0, 0);

      const pngData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = pngData;
      link.download = 'qrCode.png';
      link.click();
      URL.revokeObjectURL(url);
    };

    img.src = url;
  }
};
