const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;

async function processImage(inputPath) {
  let outputPath;
  try {
    outputPath = inputPath.replace(
      path.extname(inputPath),
      '-processed.jpg'
    );

    await sharp(inputPath)
      .resize(450, 350, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 85 })
      .toFile(outputPath);

    await new Promise(resolve => setTimeout(resolve, 100));

    try {
      await fs.unlink(inputPath);
    } catch (unlinkError) {
      console.warn('Could not delete original file (may be locked):', unlinkError.message);
    }

    return outputPath;
  } catch (error) {
    console.error('Image processing error:', error);
    
    if (outputPath) {
      try {
        await fs.unlink(outputPath);
      } catch (cleanupError) {
        // Ignore cleanup errors
      }
    }
    
    throw new Error('Failed to process image: ' + error.message);
  }
}

module.exports = { processImage };
