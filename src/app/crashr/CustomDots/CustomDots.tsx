

interface CustomDotProps  {
    index:number;
    currentSlide:number;
    
}


const CustomDot = (props:CustomDotProps) => {
    const { index, currentSlide } = props;
    // Add your custom content here, such as images, icons, or any JSX.
    return (
      <div
        className={`custom-dot ${index === currentSlide ? 'active' : ''}`}
        
      >
        {/* Your custom content, e.g., an image */}
        <img src={`your-dot-image-${index}.png`} alt={`Dot ${index}`} />
      </div>
    );
  };
  
  export default CustomDot