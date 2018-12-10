module.exports = {
  commons: {
    modalCloseButton: 'ಮುಚ್ಚಿ',
    modalContent: 'ನೀವು ಆಟದೊಂದಿಗೆ ಮಾಡಲಾಗುತ್ತದೆ. ನೀವು ಫಲಿತಾಂಶವನ್ನು CSV ಗೆ ರಫ್ತು ಮಾಡಲು ಬಯಸುವಿರಾ?',
    modalExitButton: 'ನಿರ್ಗಮನ',
    exportButton : 'CSV ಗೆ ರಫ್ತು ಮಾಡಿ',
    backButton : 'ಹಿಂದೆ',
    startButton : "ಪ್ರಾರಂಭಿಸಿ",
    continueButton : 'ಮುಂದುವರೆಯಿರಿ',
    exported: 'ರಫ್ತು ಮಾಡಲಾಗಿದೆ'
  },
  landingPage: {
    title: 'ರೋಗಿಯ ID ಯನ್ನು ನಮೂದಿಸಿ',
    placeholder: 'ರೋಗಿಯ ID',
    buttonText: 'ಪ್ರಾರಂಭಿಸಿ'
  },
  gamePage: {
    game1: 'ಭಾವನೆ ಗುರುತಿಸುವಿಕೆ',
    game2: 'ಪರಿಣಾಮಕಾರಿ ಗೋ-ಇಲ್ಲ-ಗೋ',
    game3: 'ಪದ ಪ್ರಭಾವಶಾಲಿ ಗೋ-ಇಲ್ಲ-ಗೋ',
    game4: 'IOWA ಜೂಜಾಟ'
  },
  game1: {
    instructionTitle: 'ಭಾವನೆಯ ಗುರುತಿಸುವಿಕೆ',
    instruction: 'ಮುಖಗಳನ್ನು ನೋಡಿ ಮತ್ತು ಮುಖವು ವ್ಯಕ್ತಪಡಿಸುವ ಭಾವನೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.',
    joy: 'ಸಂತೋಷ',
    sadness: 'ದುಃಖ',
    anger: 'ಕೋಪ',
    neutral: 'ತಟಸ್ಥ',
    disgust: 'ಅಸಹ್ಯ',
    fear: 'ಭಯ',
    surprise: 'ಸುಳಿವು',
  },
  game2: {
    instructionTitle: 'ಪರಿಣಾಮಕಾರಿ ಗೋ-ಇಲ್ಲ-ಗೋ',
    inGameExit: 'ನೀನು ನಿಜವಾಗಲೂ ಹೊರಗೆ ಹೂಗಬಯಸುತ್ತೀಯಾ? ಆಟವನ್ನು ಪುನರಾರಂಭಿಸಲಾಗುವುದಿಲ್ಲ.',
    instructions : [
      {
        instruction : 'ಈ ಕೆಲಸದಲ್ಲಿ ನೀವು ಮುಖಗಳ ಸರಣಿಗಳನ್ನು ನೋಡುತ್ತೀರಿ, ನೀವು ಸಂತೋಷದ ಮುಖವನ್ನು ನೋಡಿದಾಗ ಮಾತ್ರ ಸ್ಪೇಸ್ ಬಾರ್ ಅನ್ನು ಒತ್ತಿರಿ, ನೀವು ಕೋಪದ ಮುಖವನ್ನು ನೋಡಿದಾಗ ಪ್ರತಿಕ್ರಿಯಿಸಬೇಡಿ'
      },
      {
        instruction : 'ಹೊಂದಿಸಿ 2, ನೀವು ಸಂತೋಷದ ಮುಖವನ್ನು ನೋಡಿದಾಗ ಸ್ಪೇಸ್ ಬಾರ್ ಅನ್ನು ಒತ್ತಿ, ನೀವು ತಟಸ್ಥ ಮುಖವನ್ನು ನೋಡಿದಾಗ ಏನನ್ನೂ ಮಾಡಬೇಡಿ'
      },
      {
        instruction : 'ಹೊಂದಿಸಿ 3, ನೀವು ನ್ಯೂಟ್ಯಾಲ್ ಮುಖವನ್ನು ನೋಡಿದಾಗ ಸ್ಪೇಸ್ ಬಾರ್ ಅನ್ನು ಒತ್ತಿರಿ, ನೀವು ಸಂತೋಷದ ಮುಖವನ್ನು ನೋಡಿದಾಗ ಏನೂ ಮಾಡಬೇಡಿ'
      },
      {
        instruction : 'ಹೊಂದಿಸಿ 4, ನೀವು ತಟಸ್ಥ ಮುಖವನ್ನು ನೋಡಿದಾಗ ಸ್ಪೇಸ್ ಬಾರ್ ಅನ್ನು ಒತ್ತಿರಿ, ನೀವು ಕೋಪದ ಮುಖವನ್ನು ನೋಡಿದಾಗ ಏನೂ ಮಾಡಬೇಡಿ'
      },
      {
        instruction : 'ಹೊಂದಿಸಿ 5, ಕೋಪದ ಮುಖವನ್ನು ನೀವು ನೋಡಿದಾಗ ಸ್ಪೇಸ್ ಬಾರ್ ಒತ್ತಿರಿ, ನೀವು ಸಂತೋಷದ ಮುಖವನ್ನು ನೋಡಿದಾಗ ಏನನ್ನೂ ಮಾಡಬೇಡಿ'
      },
      {
        instruction : 'ಹೊಂದಿಸಿ 6, ಕೋಪದ ಮುಖವನ್ನು ನೀವು ನೋಡಿದಾಗ ಸ್ಪೇಸ್ ಬಾರ್ ಒತ್ತಿರಿ, ನೀವು ತಟಸ್ಥ ಮುಖವನ್ನು ನೋಡಿದಾಗ ಏನೂ ಮಾಡಬೇಡಿ'
      }
    ]
  }
}