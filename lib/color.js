const hsv2rgb = (h, s, v) => {
  var f, hi, p, q, rgb, t
  while (h < 0) {
    h += 360
  }
  h %= 360
  if (+s === 0) {
    v *= 255
    return [v, v, v]
  }
  hi = +((h / 60) >> 0)
  f = h / 60 - hi
  p = v * (1 - s)
  q = v * (1 - f * s)
  t = v * (1 - (1 - f) * s)
  rgb = [1, 1, 1]
  if (hi === 0) {
    rgb = [v, t, p]
  } else if (hi === 1) {
    rgb = [q, v, p]
  } else if (hi === 2) {
    rgb = [p, v, t]
  } else if (hi === 3) {
    rgb = [p, q, v]
  } else if (hi === 4) {
    rgb = [t, p, v]
  } else if (hi === 5) {
    rgb = [v, p, q]
  }
  rgb[0] = (rgb[0] * 255) >> 0
  rgb[1] = (rgb[1] * 255) >> 0
  rgb[2] = (rgb[2] * 255) >> 0
  return rgb
}

const rgb2css = (r, g, b) => {
  if (typeof r === 'object') {
    g = r[1]
    b = r[2]
    r = r[0]
  }
  return '#' + dec2hex(r) + dec2hex(g) + dec2hex(b)
}

const dec2hex = (n) => {
  n = parseInt(n)
  const c = 'abcdef'
  var b = n / 16
  var r = n % 16
  b = b - r / 16
  b = b >= 0 && b <= 9 ? b : c.charAt(b - 10)
  return r >= 0 && r <= 9 ? b + '' + r : b + '' + c.charAt(r - 10)
}

function rgb2hsv(s) {
  var hsv, i, max, min, rgb, _i, _ref
  if (s.length !== 6) {
    return '#00000'
  }
  rgb = [0, 0, 0]
  rgb[0] = parseInt(s.substring(0, 2), 16)
  rgb[1] = parseInt(s.substring(2, 4), 16)
  rgb[2] = parseInt(s.substring(4, 6), 16)
  max = 0
  min = 256
  for (
    i = _i = 0, _ref = rgb.length;
    0 <= _ref ? _i < _ref : _i > _ref;
    i = 0 <= _ref ? ++_i : --_i
  ) {
    if (max < rgb[i]) {
      max = rgb[i]
    }
    if (min > rgb[i]) {
      min = rgb[i]
    }
  }
  hsv = [0, 0, 0]
  if (max === min) {
    hsv[0] = 0
  } else if (max === rgb[0]) {
    hsv[0] = ((60 * (rgb[1] - rgb[2])) / (max - min) + 360) % 360
  } else if (max === rgb[1]) {
    hsv[0] = (60 * (rgb[2] - rgb[0])) / (max - min) + 120
  } else {
    if (max === rgb[2]) {
      hsv[0] = (60 * (rgb[0] - rgb[1])) / (max - min) + 240
    }
  }
  if (max === 0) {
    hsv[1] = 0
  } else {
    hsv[1] = 255 * ((max - min) / max)
  }
  hsv[2] = max
  return hsv
}

export { hsv2rgb, rgb2css, rgb2hsv }