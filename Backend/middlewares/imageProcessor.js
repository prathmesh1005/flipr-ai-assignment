const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;

/**
 * Process uploaded image: resize to 450x350 and optimize
 * @param {string} inputPath - Path to the uploaded image
 * @returns {Promise<string>} - Path to the processed image
 */
async function processImage(inputPath) {
  let outputPath;
  try {
    outputPath = inputPath.replace(
      path.extname(inputPath),
      '-processed.jpg'
    );

    // Process image
    await sharp(inputPath)
      .resize(450, 350, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 85 })
      .toFile(outputPath);

    // Wait a bit for file handles to be released
    await new Promise(resolve => setTimeout(resolve, 100));

    // Try to delete original file, but don't fail if it's locked
    try {
      await fs.unlink(inputPath);
    } catch (unlinkError) {
      console.warn('Could not delete original file (may be locked):', unlinkError.message);
      // Continue anyway - processed file was created successfully
    }

    return outputPath;
  } catch (error) {
    console.error('Image processing error:', error);
    
    // Clean up processed file if it was created
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
