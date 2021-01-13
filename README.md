# 🏙️ Times Square

## Features

- Uses whole spectrum of colors
- Semantic highlighting
- Between all foreground colors and background:
  - Same perceptual constranst using [HSLuv](https://www.hsluv.org) algorithm
  - AA 7.0 constrast for better readability and accessibility
  - No more than 7.0 contrast for reduced eye strain

## Colors

![colors](./media/colors.png)

## Screenshots

### Sublime Text

- Times Square color scheme
- Times Square theme

![sublime](./media/sublime-screenshot.png)

### iTerm

- Times Square color scheme
- [Starship](https://starship.rs)

![iterm](./media/iterm-screenshot.png)

## Instalation

```bash
# For Sublime Text on macOS
yarn install-on-sublime

# For iTerm on macOS
yarn install-on-iterm

# For other platforms
cp ./build/Times\ Square.sublime-color-scheme path/to/your/sublime-text/packages/folder
cp ./build/Times\ Square.sublime-theme path/to/your/sublime-text/packages/folder
```