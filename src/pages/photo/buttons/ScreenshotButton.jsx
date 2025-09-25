import html2canvas from 'html2canvas';
import './ScreenshotButton.css';

export function ScreenshotButton({ imageContentRef }) {
  function handleScreenshot() {
    if (!imageContentRef.current) return;

    // Clone the image-content element
    const photo = imageContentRef.current.cloneNode(true);
    photo.classList.remove("image-content");
    photo.classList.add("final-photo");
    photo.style.backgroundImage = imageContentRef.current.style.backgroundImage;
    document.body.append(photo);

    // Take screenshot
    html2canvas(photo, { scale: 2 }).then((canvas) => {
      const imageUrl = canvas.toDataURL("image/png");

      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const filename = `juvLayout-${timestamp}.png`;

      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = filename;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch(error => {
      console.log('לא הצלחנו לצלם את התמונה כרגע, נסה שוב מאוחר יותר');
      console.log(`שגיאה: ${error}`);
    });

    // Clean up
    photo.remove();
  }

  return <button className="screenshot-button" onClick={handleScreenshot}>צלם</button>;
}