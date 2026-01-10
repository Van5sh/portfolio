export const vertexShader = `
attribute vec2 a_position;
attribute vec2 a_texCoord;

varying vec2 v_texCoord;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoord = a_texCoord;
}`;

export const fragmentShader = `
precision mediump float;

varying vec2 v_texCoord;
uniform sampler2D u_image;

void main() {
  gl_FragColor = texture2D(u_image, v_texCoord);
}`;