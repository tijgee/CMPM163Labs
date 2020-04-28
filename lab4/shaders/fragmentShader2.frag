varying vec3 vUv;

uniform vec3 colorX;
uniform vec3 colorY;


void main() {
  
	gl_FragColor = vec4(mix(colorX, colorY, vUv.x), 1.0);
}