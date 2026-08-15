//#region ../node_modules/ogl/src/math/functions/Vec3Func.js
/**
* Calculates the length of a vec3
*
* @param {vec3} a vector to calculate length of
* @returns {Number} length of a
*/
function length$1(a) {
	let x = a[0];
	let y = a[1];
	let z = a[2];
	return Math.sqrt(x * x + y * y + z * z);
}
/**
* Copy the values from one vec3 to another
*
* @param {vec3} out the receiving vector
* @param {vec3} a the source vector
* @returns {vec3} out
*/
function copy$5(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	return out;
}
/**
* Set the components of a vec3 to the given values
*
* @param {vec3} out the receiving vector
* @param {Number} x X component
* @param {Number} y Y component
* @param {Number} z Z component
* @returns {vec3} out
*/
function set$5(out, x, y, z) {
	out[0] = x;
	out[1] = y;
	out[2] = z;
	return out;
}
/**
* Adds two vec3's
*
* @param {vec3} out the receiving vector
* @param {vec3} a the first operand
* @param {vec3} b the second operand
* @returns {vec3} out
*/
function add$2(out, a, b) {
	out[0] = a[0] + b[0];
	out[1] = a[1] + b[1];
	out[2] = a[2] + b[2];
	return out;
}
/**
* Subtracts vector b from vector a
*
* @param {vec3} out the receiving vector
* @param {vec3} a the first operand
* @param {vec3} b the second operand
* @returns {vec3} out
*/
function subtract$2(out, a, b) {
	out[0] = a[0] - b[0];
	out[1] = a[1] - b[1];
	out[2] = a[2] - b[2];
	return out;
}
/**
* Multiplies two vec3's
*
* @param {vec3} out the receiving vector
* @param {vec3} a the first operand
* @param {vec3} b the second operand
* @returns {vec3} out
*/
function multiply$4(out, a, b) {
	out[0] = a[0] * b[0];
	out[1] = a[1] * b[1];
	out[2] = a[2] * b[2];
	return out;
}
/**
* Divides two vec3's
*
* @param {vec3} out the receiving vector
* @param {vec3} a the first operand
* @param {vec3} b the second operand
* @returns {vec3} out
*/
function divide$1(out, a, b) {
	out[0] = a[0] / b[0];
	out[1] = a[1] / b[1];
	out[2] = a[2] / b[2];
	return out;
}
/**
* Scales a vec3 by a scalar number
*
* @param {vec3} out the receiving vector
* @param {vec3} a the vector to scale
* @param {Number} b amount to scale the vector by
* @returns {vec3} out
*/
function scale$4(out, a, b) {
	out[0] = a[0] * b;
	out[1] = a[1] * b;
	out[2] = a[2] * b;
	return out;
}
/**
* Calculates the euclidian distance between two vec3's
*
* @param {vec3} a the first operand
* @param {vec3} b the second operand
* @returns {Number} distance between a and b
*/
function distance$1(a, b) {
	let x = b[0] - a[0];
	let y = b[1] - a[1];
	let z = b[2] - a[2];
	return Math.sqrt(x * x + y * y + z * z);
}
/**
* Calculates the squared euclidian distance between two vec3's
*
* @param {vec3} a the first operand
* @param {vec3} b the second operand
* @returns {Number} squared distance between a and b
*/
function squaredDistance$1(a, b) {
	let x = b[0] - a[0];
	let y = b[1] - a[1];
	let z = b[2] - a[2];
	return x * x + y * y + z * z;
}
/**
* Calculates the squared length of a vec3
*
* @param {vec3} a vector to calculate squared length of
* @returns {Number} squared length of a
*/
function squaredLength$1(a) {
	let x = a[0];
	let y = a[1];
	let z = a[2];
	return x * x + y * y + z * z;
}
/**
* Negates the components of a vec3
*
* @param {vec3} out the receiving vector
* @param {vec3} a vector to negate
* @returns {vec3} out
*/
function negate$1(out, a) {
	out[0] = -a[0];
	out[1] = -a[1];
	out[2] = -a[2];
	return out;
}
/**
* Returns the inverse of the components of a vec3
*
* @param {vec3} out the receiving vector
* @param {vec3} a vector to invert
* @returns {vec3} out
*/
function inverse$1(out, a) {
	out[0] = 1 / a[0];
	out[1] = 1 / a[1];
	out[2] = 1 / a[2];
	return out;
}
/**
* Normalize a vec3
*
* @param {vec3} out the receiving vector
* @param {vec3} a vector to normalize
* @returns {vec3} out
*/
function normalize$3(out, a) {
	let x = a[0];
	let y = a[1];
	let z = a[2];
	let len = x * x + y * y + z * z;
	if (len > 0) len = 1 / Math.sqrt(len);
	out[0] = a[0] * len;
	out[1] = a[1] * len;
	out[2] = a[2] * len;
	return out;
}
/**
* Calculates the dot product of two vec3's
*
* @param {vec3} a the first operand
* @param {vec3} b the second operand
* @returns {Number} dot product of a and b
*/
function dot$3(a, b) {
	return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
* Computes the cross product of two vec3's
*
* @param {vec3} out the receiving vector
* @param {vec3} a the first operand
* @param {vec3} b the second operand
* @returns {vec3} out
*/
function cross$1(out, a, b) {
	let ax = a[0], ay = a[1], az = a[2];
	let bx = b[0], by = b[1], bz = b[2];
	out[0] = ay * bz - az * by;
	out[1] = az * bx - ax * bz;
	out[2] = ax * by - ay * bx;
	return out;
}
/**
* Performs a linear interpolation between two vec3's
*
* @param {vec3} out the receiving vector
* @param {vec3} a the first operand
* @param {vec3} b the second operand
* @param {Number} t interpolation amount between the two inputs
* @returns {vec3} out
*/
function lerp$1(out, a, b, t) {
	let ax = a[0];
	let ay = a[1];
	let az = a[2];
	out[0] = ax + t * (b[0] - ax);
	out[1] = ay + t * (b[1] - ay);
	out[2] = az + t * (b[2] - az);
	return out;
}
/**
* Performs a frame rate independant, linear interpolation between two vec3's
*
* @param {vec3} out the receiving vector
* @param {vec3} a the first operand
* @param {vec3} b the second operand
* @param {Number} decay decay constant for interpolation. useful range between 1 and 25, from slow to fast.
* @param {Number} dt delta time
* @returns {vec3} out
*/
function smoothLerp$1(out, a, b, decay, dt) {
	const exp = Math.exp(-decay * dt);
	let ax = a[0];
	let ay = a[1];
	let az = a[2];
	out[0] = b[0] + (ax - b[0]) * exp;
	out[1] = b[1] + (ay - b[1]) * exp;
	out[2] = b[2] + (az - b[2]) * exp;
	return out;
}
/**
* Transforms the vec3 with a mat4.
* 4th vector component is implicitly '1'
*
* @param {vec3} out the receiving vector
* @param {vec3} a the vector to transform
* @param {mat4} m matrix to transform with
* @returns {vec3} out
*/
function transformMat4$1(out, a, m) {
	let x = a[0], y = a[1], z = a[2];
	let w = m[3] * x + m[7] * y + m[11] * z + m[15];
	w = w || 1;
	out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
	out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
	out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
	return out;
}
/**
* Same as above but doesn't apply translation.
* Useful for rays.
*/
function scaleRotateMat4(out, a, m) {
	let x = a[0], y = a[1], z = a[2];
	let w = m[3] * x + m[7] * y + m[11] * z + m[15];
	w = w || 1;
	out[0] = (m[0] * x + m[4] * y + m[8] * z) / w;
	out[1] = (m[1] * x + m[5] * y + m[9] * z) / w;
	out[2] = (m[2] * x + m[6] * y + m[10] * z) / w;
	return out;
}
/**
* Transforms the vec3 with a mat3.
*
* @param {vec3} out the receiving vector
* @param {vec3} a the vector to transform
* @param {mat3} m the 3x3 matrix to transform with
* @returns {vec3} out
*/
function transformMat3$1(out, a, m) {
	let x = a[0], y = a[1], z = a[2];
	out[0] = x * m[0] + y * m[3] + z * m[6];
	out[1] = x * m[1] + y * m[4] + z * m[7];
	out[2] = x * m[2] + y * m[5] + z * m[8];
	return out;
}
/**
* Transforms the vec3 with a quat
*
* @param {vec3} out the receiving vector
* @param {vec3} a the vector to transform
* @param {quat} q quaternion to transform with
* @returns {vec3} out
*/
function transformQuat(out, a, q) {
	let x = a[0], y = a[1], z = a[2];
	let qx = q[0], qy = q[1], qz = q[2], qw = q[3];
	let uvx = qy * z - qz * y;
	let uvy = qz * x - qx * z;
	let uvz = qx * y - qy * x;
	let uuvx = qy * uvz - qz * uvy;
	let uuvy = qz * uvx - qx * uvz;
	let uuvz = qx * uvy - qy * uvx;
	let w2 = qw * 2;
	uvx *= w2;
	uvy *= w2;
	uvz *= w2;
	uuvx *= 2;
	uuvy *= 2;
	uuvz *= 2;
	out[0] = x + uvx + uuvx;
	out[1] = y + uvy + uuvy;
	out[2] = z + uvz + uuvz;
	return out;
}
/**
* Get the angle between two 3D vectors
* @param {vec3} a The first operand
* @param {vec3} b The second operand
* @returns {Number} The angle in radians
*/
var angle = (function() {
	const tempA = [
		0,
		0,
		0
	];
	const tempB = [
		0,
		0,
		0
	];
	return function(a, b) {
		copy$5(tempA, a);
		copy$5(tempB, b);
		normalize$3(tempA, tempA);
		normalize$3(tempB, tempB);
		let cosine = dot$3(tempA, tempB);
		if (cosine > 1) return 0;
		else if (cosine < -1) return Math.PI;
		else return Math.acos(cosine);
	};
})();
/**
* Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
*
* @param {vec3} a The first vector.
* @param {vec3} b The second vector.
* @returns {Boolean} True if the vectors are equal, false otherwise.
*/
function exactEquals$1(a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
//#endregion
//#region ../node_modules/ogl/src/math/Vec3.js
var Vec3 = class Vec3 extends Array {
	constructor(x = 0, y = x, z = x) {
		super(x, y, z);
		return this;
	}
	get x() {
		return this[0];
	}
	get y() {
		return this[1];
	}
	get z() {
		return this[2];
	}
	set x(v) {
		this[0] = v;
	}
	set y(v) {
		this[1] = v;
	}
	set z(v) {
		this[2] = v;
	}
	set(x, y = x, z = x) {
		if (x.length) return this.copy(x);
		set$5(this, x, y, z);
		return this;
	}
	copy(v) {
		copy$5(this, v);
		return this;
	}
	add(va, vb) {
		if (vb) add$2(this, va, vb);
		else add$2(this, this, va);
		return this;
	}
	sub(va, vb) {
		if (vb) subtract$2(this, va, vb);
		else subtract$2(this, this, va);
		return this;
	}
	multiply(v) {
		if (v.length) multiply$4(this, this, v);
		else scale$4(this, this, v);
		return this;
	}
	divide(v) {
		if (v.length) divide$1(this, this, v);
		else scale$4(this, this, 1 / v);
		return this;
	}
	inverse(v = this) {
		inverse$1(this, v);
		return this;
	}
	len() {
		return length$1(this);
	}
	distance(v) {
		if (v) return distance$1(this, v);
		else return length$1(this);
	}
	squaredLen() {
		return squaredLength$1(this);
	}
	squaredDistance(v) {
		if (v) return squaredDistance$1(this, v);
		else return squaredLength$1(this);
	}
	negate(v = this) {
		negate$1(this, v);
		return this;
	}
	cross(va, vb) {
		if (vb) cross$1(this, va, vb);
		else cross$1(this, this, va);
		return this;
	}
	scale(v) {
		scale$4(this, this, v);
		return this;
	}
	normalize() {
		normalize$3(this, this);
		return this;
	}
	dot(v) {
		return dot$3(this, v);
	}
	equals(v) {
		return exactEquals$1(this, v);
	}
	applyMatrix3(mat3) {
		transformMat3$1(this, this, mat3);
		return this;
	}
	applyMatrix4(mat4) {
		transformMat4$1(this, this, mat4);
		return this;
	}
	scaleRotateMatrix4(mat4) {
		scaleRotateMat4(this, this, mat4);
		return this;
	}
	applyQuaternion(q) {
		transformQuat(this, this, q);
		return this;
	}
	angle(v) {
		return angle(this, v);
	}
	lerp(v, t) {
		lerp$1(this, this, v, t);
		return this;
	}
	smoothLerp(v, decay, dt) {
		smoothLerp$1(this, this, v, decay, dt);
		return this;
	}
	clone() {
		return new Vec3(this[0], this[1], this[2]);
	}
	fromArray(a, o = 0) {
		this[0] = a[o];
		this[1] = a[o + 1];
		this[2] = a[o + 2];
		return this;
	}
	toArray(a = [], o = 0) {
		a[o] = this[0];
		a[o + 1] = this[1];
		a[o + 2] = this[2];
		return a;
	}
	transformDirection(mat4) {
		const x = this[0];
		const y = this[1];
		const z = this[2];
		this[0] = mat4[0] * x + mat4[4] * y + mat4[8] * z;
		this[1] = mat4[1] * x + mat4[5] * y + mat4[9] * z;
		this[2] = mat4[2] * x + mat4[6] * y + mat4[10] * z;
		return this.normalize();
	}
};
//#endregion
//#region ../node_modules/ogl/src/core/Geometry.js
var tempVec3$6 = /* @__PURE__ */ new Vec3();
var ID$4 = 1;
var ATTR_ID = 1;
var isBoundsWarned = false;
var Geometry = class {
	constructor(gl, attributes = {}) {
		if (!gl.canvas) console.error("gl not passed as first argument to Geometry");
		this.gl = gl;
		this.attributes = attributes;
		this.id = ID$4++;
		this.VAOs = {};
		this.drawRange = {
			start: 0,
			count: 0
		};
		this.instancedCount = 0;
		this.gl.renderer.bindVertexArray(null);
		this.gl.renderer.currentGeometry = null;
		this.glState = this.gl.renderer.state;
		for (let key in attributes) this.addAttribute(key, attributes[key]);
	}
	addAttribute(key, attr) {
		this.attributes[key] = attr;
		attr.id = ATTR_ID++;
		attr.size = attr.size || 1;
		attr.type = attr.type || (attr.data.constructor === Float32Array ? this.gl.FLOAT : attr.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT);
		attr.target = key === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER;
		attr.normalized = attr.normalized || false;
		attr.stride = attr.stride || 0;
		attr.offset = attr.offset || 0;
		attr.count = attr.count || (attr.stride ? attr.data.byteLength / attr.stride : attr.data.length / attr.size);
		attr.divisor = attr.instanced || 0;
		attr.needsUpdate = false;
		attr.usage = attr.usage || this.gl.STATIC_DRAW;
		if (!attr.buffer) this.updateAttribute(attr);
		if (attr.divisor) {
			this.isInstanced = true;
			if (this.instancedCount && this.instancedCount !== attr.count * attr.divisor) {
				console.warn("geometry has multiple instanced buffers of different length");
				return this.instancedCount = Math.min(this.instancedCount, attr.count * attr.divisor);
			}
			this.instancedCount = attr.count * attr.divisor;
		} else if (key === "index") this.drawRange.count = attr.count;
		else if (!this.attributes.index) this.drawRange.count = Math.max(this.drawRange.count, attr.count);
	}
	updateAttribute(attr) {
		const isNewBuffer = !attr.buffer;
		if (isNewBuffer) attr.buffer = this.gl.createBuffer();
		if (this.glState.boundBuffer !== attr.buffer) {
			this.gl.bindBuffer(attr.target, attr.buffer);
			this.glState.boundBuffer = attr.buffer;
		}
		if (isNewBuffer) this.gl.bufferData(attr.target, attr.data, attr.usage);
		else this.gl.bufferSubData(attr.target, 0, attr.data);
		attr.needsUpdate = false;
	}
	setIndex(value) {
		this.addAttribute("index", value);
	}
	setDrawRange(start, count) {
		this.drawRange.start = start;
		this.drawRange.count = count;
	}
	setInstancedCount(value) {
		this.instancedCount = value;
	}
	createVAO(program) {
		this.VAOs[program.attributeOrder] = this.gl.renderer.createVertexArray();
		this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
		this.bindAttributes(program);
	}
	bindAttributes(program) {
		program.attributeLocations.forEach((location, { name, type }) => {
			if (!this.attributes[name]) {
				console.warn(`active attribute ${name} not being supplied`);
				return;
			}
			const attr = this.attributes[name];
			this.gl.bindBuffer(attr.target, attr.buffer);
			this.glState.boundBuffer = attr.buffer;
			let numLoc = 1;
			if (type === 35674) numLoc = 2;
			if (type === 35675) numLoc = 3;
			if (type === 35676) numLoc = 4;
			const size = attr.size / numLoc;
			const stride = numLoc === 1 ? 0 : numLoc * numLoc * 4;
			const offset = numLoc === 1 ? 0 : numLoc * 4;
			for (let i = 0; i < numLoc; i++) {
				this.gl.vertexAttribPointer(location + i, size, attr.type, attr.normalized, attr.stride + stride, attr.offset + i * offset);
				this.gl.enableVertexAttribArray(location + i);
				this.gl.renderer.vertexAttribDivisor(location + i, attr.divisor);
			}
		});
		if (this.attributes.index) this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
	}
	draw({ program, mode = this.gl.TRIANGLES }) {
		if (this.gl.renderer.currentGeometry !== `${this.id}_${program.attributeOrder}`) {
			if (!this.VAOs[program.attributeOrder]) this.createVAO(program);
			this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
			this.gl.renderer.currentGeometry = `${this.id}_${program.attributeOrder}`;
		}
		program.attributeLocations.forEach((location, { name }) => {
			const attr = this.attributes[name];
			if (attr.needsUpdate) this.updateAttribute(attr);
		});
		let indexBytesPerElement = 2;
		if (this.attributes.index?.type === this.gl.UNSIGNED_INT) indexBytesPerElement = 4;
		if (this.isInstanced) {
			if (this.attributes.index) this.gl.renderer.drawElementsInstanced(mode, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * indexBytesPerElement, this.instancedCount);
			else this.gl.renderer.drawArraysInstanced(mode, this.drawRange.start, this.drawRange.count, this.instancedCount);
		} else if (this.attributes.index) this.gl.drawElements(mode, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * indexBytesPerElement);
		else this.gl.drawArrays(mode, this.drawRange.start, this.drawRange.count);
	}
	getPosition() {
		const attr = this.attributes.position;
		if (attr.data) return attr;
		if (isBoundsWarned) return;
		console.warn("No position buffer data found to compute bounds");
		return isBoundsWarned = true;
	}
	computeBoundingBox(attr) {
		if (!attr) attr = this.getPosition();
		const array = attr.data;
		const stride = attr.size;
		if (!this.bounds) this.bounds = {
			min: new Vec3(),
			max: new Vec3(),
			center: new Vec3(),
			scale: new Vec3(),
			radius: Infinity
		};
		const min = this.bounds.min;
		const max = this.bounds.max;
		const center = this.bounds.center;
		const scale = this.bounds.scale;
		min.set(Infinity);
		max.set(-Infinity);
		for (let i = 0, l = array.length; i < l; i += stride) {
			const x = array[i];
			const y = array[i + 1];
			const z = array[i + 2];
			min.x = Math.min(x, min.x);
			min.y = Math.min(y, min.y);
			min.z = Math.min(z, min.z);
			max.x = Math.max(x, max.x);
			max.y = Math.max(y, max.y);
			max.z = Math.max(z, max.z);
		}
		scale.sub(max, min);
		center.add(min, max).divide(2);
	}
	computeBoundingSphere(attr) {
		if (!attr) attr = this.getPosition();
		const array = attr.data;
		const stride = attr.size;
		if (!this.bounds) this.computeBoundingBox(attr);
		let maxRadiusSq = 0;
		for (let i = 0, l = array.length; i < l; i += stride) {
			tempVec3$6.fromArray(array, i);
			maxRadiusSq = Math.max(maxRadiusSq, this.bounds.center.squaredDistance(tempVec3$6));
		}
		this.bounds.radius = Math.sqrt(maxRadiusSq);
	}
	remove() {
		for (let key in this.VAOs) {
			this.gl.renderer.deleteVertexArray(this.VAOs[key]);
			delete this.VAOs[key];
		}
		for (let key in this.attributes) {
			this.gl.deleteBuffer(this.attributes[key].buffer);
			delete this.attributes[key];
		}
	}
};
//#endregion
//#region ../node_modules/ogl/src/core/Program.js
var ID$3 = 1;
var arrayCacheF32 = {};
var Program = class {
	constructor(gl, { vertex, fragment, uniforms = {}, transparent = false, cullFace = gl.BACK, frontFace = gl.CCW, depthTest = true, depthWrite = true, depthFunc = gl.LEQUAL } = {}) {
		if (!gl.canvas) console.error("gl not passed as first argument to Program");
		this.gl = gl;
		this.uniforms = uniforms;
		this.id = ID$3++;
		if (!vertex) console.warn("vertex shader not supplied");
		if (!fragment) console.warn("fragment shader not supplied");
		this.transparent = transparent;
		this.cullFace = cullFace;
		this.frontFace = frontFace;
		this.depthTest = depthTest;
		this.depthWrite = depthWrite;
		this.depthFunc = depthFunc;
		this.blendFunc = {};
		this.blendEquation = {};
		this.stencilFunc = {};
		this.stencilOp = {};
		if (this.transparent && !this.blendFunc.src) {
			if (this.gl.renderer.premultipliedAlpha) this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
			else this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
		}
		this.vertexShader = gl.createShader(gl.VERTEX_SHADER);
		this.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
		this.program = gl.createProgram();
		gl.attachShader(this.program, this.vertexShader);
		gl.attachShader(this.program, this.fragmentShader);
		this.setShaders({
			vertex,
			fragment
		});
	}
	setShaders({ vertex, fragment }) {
		if (vertex) {
			this.gl.shaderSource(this.vertexShader, vertex);
			this.gl.compileShader(this.vertexShader);
			if (this.gl.getShaderInfoLog(this.vertexShader) !== "") console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}\nVertex Shader\n${addLineNumbers(vertex)}`);
		}
		if (fragment) {
			this.gl.shaderSource(this.fragmentShader, fragment);
			this.gl.compileShader(this.fragmentShader);
			if (this.gl.getShaderInfoLog(this.fragmentShader) !== "") console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}\nFragment Shader\n${addLineNumbers(fragment)}`);
		}
		this.gl.linkProgram(this.program);
		if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) return console.warn(this.gl.getProgramInfoLog(this.program));
		this.uniformLocations = /* @__PURE__ */ new Map();
		let numUniforms = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
		for (let uIndex = 0; uIndex < numUniforms; uIndex++) {
			let uniform = this.gl.getActiveUniform(this.program, uIndex);
			this.uniformLocations.set(uniform, this.gl.getUniformLocation(this.program, uniform.name));
			const split = uniform.name.match(/(\w+)/g);
			uniform.uniformName = split[0];
			uniform.nameComponents = split.slice(1);
		}
		this.attributeLocations = /* @__PURE__ */ new Map();
		const locations = [];
		const numAttribs = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
		for (let aIndex = 0; aIndex < numAttribs; aIndex++) {
			const attribute = this.gl.getActiveAttrib(this.program, aIndex);
			const location = this.gl.getAttribLocation(this.program, attribute.name);
			if (location === -1) continue;
			locations[location] = attribute.name;
			this.attributeLocations.set(attribute, location);
		}
		this.attributeOrder = locations.join("");
	}
	setBlendFunc(src, dst, srcAlpha, dstAlpha) {
		this.blendFunc.src = src;
		this.blendFunc.dst = dst;
		this.blendFunc.srcAlpha = srcAlpha;
		this.blendFunc.dstAlpha = dstAlpha;
		if (src) this.transparent = true;
	}
	setBlendEquation(modeRGB, modeAlpha) {
		this.blendEquation.modeRGB = modeRGB;
		this.blendEquation.modeAlpha = modeAlpha;
	}
	setStencilFunc(func, ref, mask) {
		this.stencilRef = ref;
		this.stencilFunc.func = func;
		this.stencilFunc.ref = ref;
		this.stencilFunc.mask = mask;
	}
	setStencilOp(stencilFail, depthFail, depthPass) {
		this.stencilOp.stencilFail = stencilFail;
		this.stencilOp.depthFail = depthFail;
		this.stencilOp.depthPass = depthPass;
	}
	applyState() {
		if (this.depthTest) this.gl.renderer.enable(this.gl.DEPTH_TEST);
		else this.gl.renderer.disable(this.gl.DEPTH_TEST);
		if (this.cullFace) this.gl.renderer.enable(this.gl.CULL_FACE);
		else this.gl.renderer.disable(this.gl.CULL_FACE);
		if (this.blendFunc.src) this.gl.renderer.enable(this.gl.BLEND);
		else this.gl.renderer.disable(this.gl.BLEND);
		if (this.cullFace) this.gl.renderer.setCullFace(this.cullFace);
		this.gl.renderer.setFrontFace(this.frontFace);
		this.gl.renderer.setDepthMask(this.depthWrite);
		this.gl.renderer.setDepthFunc(this.depthFunc);
		if (this.blendFunc.src) this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha);
		this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
		if (this.stencilFunc.func || this.stencilOp.stencilFail) this.gl.renderer.enable(this.gl.STENCIL_TEST);
		else this.gl.renderer.disable(this.gl.STENCIL_TEST);
		this.gl.renderer.setStencilFunc(this.stencilFunc.func, this.stencilFunc.ref, this.stencilFunc.mask);
		this.gl.renderer.setStencilOp(this.stencilOp.stencilFail, this.stencilOp.depthFail, this.stencilOp.depthPass);
	}
	use({ flipFaces = false } = {}) {
		let textureUnit = -1;
		if (!(this.gl.renderer.state.currentProgram === this.id)) {
			this.gl.useProgram(this.program);
			this.gl.renderer.state.currentProgram = this.id;
		}
		this.uniformLocations.forEach((location, activeUniform) => {
			let uniform = this.uniforms[activeUniform.uniformName];
			for (const component of activeUniform.nameComponents) {
				if (!uniform) break;
				if (component in uniform) uniform = uniform[component];
				else if (Array.isArray(uniform.value)) break;
				else {
					uniform = void 0;
					break;
				}
			}
			if (!uniform) return warn(`Active uniform ${activeUniform.name} has not been supplied`);
			if (uniform && uniform.value === void 0) return warn(`${activeUniform.name} uniform is missing a value parameter`);
			if (uniform.value.texture) {
				textureUnit = textureUnit + 1;
				uniform.value.update(textureUnit);
				return setUniform(this.gl, activeUniform.type, location, textureUnit);
			}
			if (uniform.value.length && uniform.value[0].texture) {
				const textureUnits = [];
				uniform.value.forEach((value) => {
					textureUnit = textureUnit + 1;
					value.update(textureUnit);
					textureUnits.push(textureUnit);
				});
				return setUniform(this.gl, activeUniform.type, location, textureUnits);
			}
			setUniform(this.gl, activeUniform.type, location, uniform.value);
		});
		this.applyState();
		if (flipFaces) this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
	}
	remove() {
		this.gl.deleteProgram(this.program);
	}
};
function setUniform(gl, type, location, value) {
	value = value.length ? flatten(value) : value;
	const setValue = gl.renderer.state.uniformLocations.get(location);
	if (value.length) {
		if (setValue === void 0 || setValue.length !== value.length) gl.renderer.state.uniformLocations.set(location, value.slice(0));
		else {
			if (arraysEqual(setValue, value)) return;
			setValue.set ? setValue.set(value) : setArray(setValue, value);
			gl.renderer.state.uniformLocations.set(location, setValue);
		}
	} else {
		if (setValue === value) return;
		gl.renderer.state.uniformLocations.set(location, value);
	}
	switch (type) {
		case 5126: return value.length ? gl.uniform1fv(location, value) : gl.uniform1f(location, value);
		case 35664: return gl.uniform2fv(location, value);
		case 35665: return gl.uniform3fv(location, value);
		case 35666: return gl.uniform4fv(location, value);
		case 35670:
		case 5124:
		case 35678:
		case 36306:
		case 35680:
		case 36289: return value.length ? gl.uniform1iv(location, value) : gl.uniform1i(location, value);
		case 35671:
		case 35667: return gl.uniform2iv(location, value);
		case 35672:
		case 35668: return gl.uniform3iv(location, value);
		case 35673:
		case 35669: return gl.uniform4iv(location, value);
		case 35674: return gl.uniformMatrix2fv(location, false, value);
		case 35675: return gl.uniformMatrix3fv(location, false, value);
		case 35676: return gl.uniformMatrix4fv(location, false, value);
	}
}
function addLineNumbers(string) {
	let lines = string.split("\n");
	for (let i = 0; i < lines.length; i++) lines[i] = i + 1 + ": " + lines[i];
	return lines.join("\n");
}
function flatten(a) {
	const arrayLen = a.length;
	const valueLen = a[0].length;
	if (valueLen === void 0) return a;
	const length = arrayLen * valueLen;
	let value = arrayCacheF32[length];
	if (!value) arrayCacheF32[length] = value = new Float32Array(length);
	for (let i = 0; i < arrayLen; i++) value.set(a[i], i * valueLen);
	return value;
}
function arraysEqual(a, b) {
	if (a.length !== b.length) return false;
	for (let i = 0, l = a.length; i < l; i++) if (a[i] !== b[i]) return false;
	return true;
}
function setArray(a, b) {
	for (let i = 0, l = a.length; i < l; i++) a[i] = b[i];
}
var warnCount = 0;
function warn(message) {
	if (warnCount > 100) return;
	console.warn(message);
	warnCount++;
	if (warnCount > 100) console.warn("More than 100 program warnings - stopping logs.");
}
//#endregion
//#region ../node_modules/ogl/src/core/Renderer.js
var tempVec3$5 = /* @__PURE__ */ new Vec3();
var ID$2 = 1;
var Renderer = class {
	constructor({ canvas = document.createElement("canvas"), width = 300, height = 150, dpr = 1, alpha = false, depth = true, stencil = false, antialias = false, premultipliedAlpha = false, preserveDrawingBuffer = false, powerPreference = "default", autoClear = true, webgl = 2 } = {}) {
		const attributes = {
			alpha,
			depth,
			stencil,
			antialias,
			premultipliedAlpha,
			preserveDrawingBuffer,
			powerPreference
		};
		this.dpr = dpr;
		this.alpha = alpha;
		this.color = true;
		this.depth = depth;
		this.stencil = stencil;
		this.premultipliedAlpha = premultipliedAlpha;
		this.autoClear = autoClear;
		this.id = ID$2++;
		if (webgl === 2) this.gl = canvas.getContext("webgl2", attributes);
		this.isWebgl2 = !!this.gl;
		if (!this.gl) this.gl = canvas.getContext("webgl", attributes);
		if (!this.gl) console.error("unable to create webgl context");
		this.gl.renderer = this;
		this.setSize(width, height);
		this.state = {};
		this.state.blendFunc = {
			src: this.gl.ONE,
			dst: this.gl.ZERO
		};
		this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD };
		this.state.cullFace = false;
		this.state.frontFace = this.gl.CCW;
		this.state.depthMask = true;
		this.state.depthFunc = this.gl.LEQUAL;
		this.state.premultiplyAlpha = false;
		this.state.flipY = false;
		this.state.unpackAlignment = 4;
		this.state.framebuffer = null;
		this.state.viewport = {
			x: 0,
			y: 0,
			width: null,
			height: null
		};
		this.state.textureUnits = [];
		this.state.activeTextureUnit = 0;
		this.state.boundBuffer = null;
		this.state.uniformLocations = /* @__PURE__ */ new Map();
		this.state.currentProgram = null;
		this.extensions = {};
		if (this.isWebgl2) {
			this.getExtension("EXT_color_buffer_float");
			this.getExtension("OES_texture_float_linear");
		} else {
			this.getExtension("OES_texture_float");
			this.getExtension("OES_texture_float_linear");
			this.getExtension("OES_texture_half_float");
			this.getExtension("OES_texture_half_float_linear");
			this.getExtension("OES_element_index_uint");
			this.getExtension("OES_standard_derivatives");
			this.getExtension("EXT_sRGB");
			this.getExtension("WEBGL_depth_texture");
			this.getExtension("WEBGL_draw_buffers");
		}
		this.getExtension("WEBGL_compressed_texture_astc");
		this.getExtension("EXT_texture_compression_bptc");
		this.getExtension("WEBGL_compressed_texture_s3tc");
		this.getExtension("WEBGL_compressed_texture_etc1");
		this.getExtension("WEBGL_compressed_texture_pvrtc");
		this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
		this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE");
		this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE");
		this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE");
		this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES");
		this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES");
		this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES");
		this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL");
		this.parameters = {};
		this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
		this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
	}
	setSize(width, height) {
		this.width = width;
		this.height = height;
		this.gl.canvas.width = width * this.dpr;
		this.gl.canvas.height = height * this.dpr;
		if (!this.gl.canvas.style) return;
		Object.assign(this.gl.canvas.style, {
			width: width + "px",
			height: height + "px"
		});
	}
	setViewport(width, height, x = 0, y = 0) {
		if (this.state.viewport.width === width && this.state.viewport.height === height) return;
		this.state.viewport.width = width;
		this.state.viewport.height = height;
		this.state.viewport.x = x;
		this.state.viewport.y = y;
		this.gl.viewport(x, y, width, height);
	}
	setScissor(width, height, x = 0, y = 0) {
		this.gl.scissor(x, y, width, height);
	}
	enable(id) {
		if (this.state[id] === true) return;
		this.gl.enable(id);
		this.state[id] = true;
	}
	disable(id) {
		if (this.state[id] === false) return;
		this.gl.disable(id);
		this.state[id] = false;
	}
	setBlendFunc(src, dst, srcAlpha, dstAlpha) {
		if (this.state.blendFunc.src === src && this.state.blendFunc.dst === dst && this.state.blendFunc.srcAlpha === srcAlpha && this.state.blendFunc.dstAlpha === dstAlpha) return;
		this.state.blendFunc.src = src;
		this.state.blendFunc.dst = dst;
		this.state.blendFunc.srcAlpha = srcAlpha;
		this.state.blendFunc.dstAlpha = dstAlpha;
		if (srcAlpha !== void 0) this.gl.blendFuncSeparate(src, dst, srcAlpha, dstAlpha);
		else this.gl.blendFunc(src, dst);
	}
	setBlendEquation(modeRGB, modeAlpha) {
		modeRGB = modeRGB || this.gl.FUNC_ADD;
		if (this.state.blendEquation.modeRGB === modeRGB && this.state.blendEquation.modeAlpha === modeAlpha) return;
		this.state.blendEquation.modeRGB = modeRGB;
		this.state.blendEquation.modeAlpha = modeAlpha;
		if (modeAlpha !== void 0) this.gl.blendEquationSeparate(modeRGB, modeAlpha);
		else this.gl.blendEquation(modeRGB);
	}
	setCullFace(value) {
		if (this.state.cullFace === value) return;
		this.state.cullFace = value;
		this.gl.cullFace(value);
	}
	setFrontFace(value) {
		if (this.state.frontFace === value) return;
		this.state.frontFace = value;
		this.gl.frontFace(value);
	}
	setDepthMask(value) {
		if (this.state.depthMask === value) return;
		this.state.depthMask = value;
		this.gl.depthMask(value);
	}
	setDepthFunc(value) {
		if (this.state.depthFunc === value) return;
		this.state.depthFunc = value;
		this.gl.depthFunc(value);
	}
	setStencilMask(value) {
		if (this.state.stencilMask === value) return;
		this.state.stencilMask = value;
		this.gl.stencilMask(value);
	}
	setStencilFunc(func, ref, mask) {
		if (this.state.stencilFunc === func && this.state.stencilRef === ref && this.state.stencilFuncMask === mask) return;
		this.state.stencilFunc = func || this.gl.ALWAYS;
		this.state.stencilRef = ref || 0;
		this.state.stencilFuncMask = mask || 0;
		this.gl.stencilFunc(func || this.gl.ALWAYS, ref || 0, mask || 0);
	}
	setStencilOp(stencilFail, depthFail, depthPass) {
		if (this.state.stencilFail === stencilFail && this.state.stencilDepthFail === depthFail && this.state.stencilDepthPass === depthPass) return;
		this.state.stencilFail = stencilFail;
		this.state.stencilDepthFail = depthFail;
		this.state.stencilDepthPass = depthPass;
		this.gl.stencilOp(stencilFail, depthFail, depthPass);
	}
	activeTexture(value) {
		if (this.state.activeTextureUnit === value) return;
		this.state.activeTextureUnit = value;
		this.gl.activeTexture(this.gl.TEXTURE0 + value);
	}
	bindFramebuffer({ target = this.gl.FRAMEBUFFER, buffer = null } = {}) {
		if (this.state.framebuffer === buffer) return;
		this.state.framebuffer = buffer;
		this.gl.bindFramebuffer(target, buffer);
	}
	getExtension(extension, webgl2Func, extFunc) {
		if (webgl2Func && this.gl[webgl2Func]) return this.gl[webgl2Func].bind(this.gl);
		if (!this.extensions[extension]) this.extensions[extension] = this.gl.getExtension(extension);
		if (!webgl2Func) return this.extensions[extension];
		if (!this.extensions[extension]) return null;
		return this.extensions[extension][extFunc].bind(this.extensions[extension]);
	}
	sortOpaque(a, b) {
		if (a.renderOrder !== b.renderOrder) return a.renderOrder - b.renderOrder;
		else if (a.program.id !== b.program.id) return a.program.id - b.program.id;
		else if (a.zDepth !== b.zDepth) return a.zDepth - b.zDepth;
		else return b.id - a.id;
	}
	sortTransparent(a, b) {
		if (a.renderOrder !== b.renderOrder) return a.renderOrder - b.renderOrder;
		if (a.zDepth !== b.zDepth) return b.zDepth - a.zDepth;
		else return b.id - a.id;
	}
	sortUI(a, b) {
		if (a.renderOrder !== b.renderOrder) return a.renderOrder - b.renderOrder;
		else if (a.program.id !== b.program.id) return a.program.id - b.program.id;
		else return b.id - a.id;
	}
	getRenderList({ scene, camera, frustumCull, sort }) {
		let renderList = [];
		if (camera && frustumCull) camera.updateFrustum();
		scene.traverse((node) => {
			if (!node.visible) return true;
			if (!node.draw) return;
			if (frustumCull && node.frustumCulled && camera) {
				if (!camera.frustumIntersectsMesh(node)) return;
			}
			renderList.push(node);
		});
		if (sort) {
			const opaque = [];
			const transparent = [];
			const ui = [];
			renderList.forEach((node) => {
				if (!node.program.transparent) opaque.push(node);
				else if (node.program.depthTest) transparent.push(node);
				else ui.push(node);
				node.zDepth = 0;
				if (node.renderOrder !== 0 || !node.program.depthTest || !camera) return;
				node.worldMatrix.getTranslation(tempVec3$5);
				tempVec3$5.applyMatrix4(camera.projectionViewMatrix);
				node.zDepth = tempVec3$5.z;
			});
			opaque.sort(this.sortOpaque);
			transparent.sort(this.sortTransparent);
			ui.sort(this.sortUI);
			renderList = opaque.concat(transparent, ui);
		}
		return renderList;
	}
	render({ scene, camera, target = null, update = true, sort = true, frustumCull = true, clear }) {
		if (target === null) {
			this.bindFramebuffer();
			this.setViewport(this.width * this.dpr, this.height * this.dpr);
		} else {
			this.bindFramebuffer(target);
			this.setViewport(target.width, target.height);
		}
		if (clear || this.autoClear && clear !== false) {
			if (this.depth && (!target || target.depth)) {
				this.enable(this.gl.DEPTH_TEST);
				this.setDepthMask(true);
			}
			if (this.stencil || !target || target.stencil) {
				this.enable(this.gl.STENCIL_TEST);
				this.setStencilMask(255);
			}
			this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0));
		}
		if (update) scene.updateMatrixWorld();
		if (camera) camera.updateMatrixWorld();
		this.getRenderList({
			scene,
			camera,
			frustumCull,
			sort
		}).forEach((node) => {
			node.draw({ camera });
		});
	}
};
//#endregion
//#region ../node_modules/ogl/src/math/functions/Vec4Func.js
/**
* Copy the values from one vec4 to another
*
* @param {vec4} out the receiving vector
* @param {vec4} a the source vector
* @returns {vec4} out
*/
function copy$4(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	return out;
}
/**
* Set the components of a vec4 to the given values
*
* @param {vec4} out the receiving vector
* @param {Number} x X component
* @param {Number} y Y component
* @param {Number} z Z component
* @param {Number} w W component
* @returns {vec4} out
*/
function set$4(out, x, y, z, w) {
	out[0] = x;
	out[1] = y;
	out[2] = z;
	out[3] = w;
	return out;
}
/**
* Scales a vec4 by a scalar number
*
* @param {vec4} out the receiving vector
* @param {vec4} a the vector to scale
* @param {Number} b amount to scale the vector by
* @returns {vec4} out
*/
function scale$3(out, a, b) {
	out[0] = a[0] * b;
	out[1] = a[1] * b;
	out[2] = a[2] * b;
	out[3] = a[3] * b;
	return out;
}
/**
* Normalize a vec4
*
* @param {vec4} out the receiving vector
* @param {vec4} a vector to normalize
* @returns {vec4} out
*/
function normalize$2(out, a) {
	let x = a[0];
	let y = a[1];
	let z = a[2];
	let w = a[3];
	let len = x * x + y * y + z * z + w * w;
	if (len > 0) len = 1 / Math.sqrt(len);
	out[0] = x * len;
	out[1] = y * len;
	out[2] = z * len;
	out[3] = w * len;
	return out;
}
/**
* Calculates the dot product of two vec4's
*
* @param {vec4} a the first operand
* @param {vec4} b the second operand
* @returns {Number} dot product of a and b
*/
function dot$2(a, b) {
	return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
//#endregion
//#region ../node_modules/ogl/src/math/functions/QuatFunc.js
/**
* Set a quat to the identity quaternion
*
* @param {quat} out the receiving quaternion
* @returns {quat} out
*/
function identity$3(out) {
	out[0] = 0;
	out[1] = 0;
	out[2] = 0;
	out[3] = 1;
	return out;
}
/**
* Sets a quat from the given angle and rotation axis,
* then returns it.
*
* @param {quat} out the receiving quaternion
* @param {vec3} axis the axis around which to rotate
* @param {Number} rad the angle in radians
* @returns {quat} out
**/
function setAxisAngle(out, axis, rad) {
	rad = rad * .5;
	let s = Math.sin(rad);
	out[0] = s * axis[0];
	out[1] = s * axis[1];
	out[2] = s * axis[2];
	out[3] = Math.cos(rad);
	return out;
}
/**
* Multiplies two quats
*
* @param {quat} out the receiving quaternion
* @param {quat} a the first operand
* @param {quat} b the second operand
* @returns {quat} out
*/
function multiply$3(out, a, b) {
	let ax = a[0], ay = a[1], az = a[2], aw = a[3];
	let bx = b[0], by = b[1], bz = b[2], bw = b[3];
	out[0] = ax * bw + aw * bx + ay * bz - az * by;
	out[1] = ay * bw + aw * by + az * bx - ax * bz;
	out[2] = az * bw + aw * bz + ax * by - ay * bx;
	out[3] = aw * bw - ax * bx - ay * by - az * bz;
	return out;
}
/**
* Rotates a quaternion by the given angle about the X axis
*
* @param {quat} out quat receiving operation result
* @param {quat} a quat to rotate
* @param {number} rad angle (in radians) to rotate
* @returns {quat} out
*/
function rotateX(out, a, rad) {
	rad *= .5;
	let ax = a[0], ay = a[1], az = a[2], aw = a[3];
	let bx = Math.sin(rad), bw = Math.cos(rad);
	out[0] = ax * bw + aw * bx;
	out[1] = ay * bw + az * bx;
	out[2] = az * bw - ay * bx;
	out[3] = aw * bw - ax * bx;
	return out;
}
/**
* Rotates a quaternion by the given angle about the Y axis
*
* @param {quat} out quat receiving operation result
* @param {quat} a quat to rotate
* @param {number} rad angle (in radians) to rotate
* @returns {quat} out
*/
function rotateY(out, a, rad) {
	rad *= .5;
	let ax = a[0], ay = a[1], az = a[2], aw = a[3];
	let by = Math.sin(rad), bw = Math.cos(rad);
	out[0] = ax * bw - az * by;
	out[1] = ay * bw + aw * by;
	out[2] = az * bw + ax * by;
	out[3] = aw * bw - ay * by;
	return out;
}
/**
* Rotates a quaternion by the given angle about the Z axis
*
* @param {quat} out quat receiving operation result
* @param {quat} a quat to rotate
* @param {number} rad angle (in radians) to rotate
* @returns {quat} out
*/
function rotateZ(out, a, rad) {
	rad *= .5;
	let ax = a[0], ay = a[1], az = a[2], aw = a[3];
	let bz = Math.sin(rad), bw = Math.cos(rad);
	out[0] = ax * bw + ay * bz;
	out[1] = ay * bw - ax * bz;
	out[2] = az * bw + aw * bz;
	out[3] = aw * bw - az * bz;
	return out;
}
/**
* Performs a spherical linear interpolation between two quat
*
* @param {quat} out the receiving quaternion
* @param {quat} a the first operand
* @param {quat} b the second operand
* @param {Number} t interpolation amount between the two inputs
* @returns {quat} out
*/
function slerp(out, a, b, t) {
	let ax = a[0], ay = a[1], az = a[2], aw = a[3];
	let bx = b[0], by = b[1], bz = b[2], bw = b[3];
	let omega, cosom, sinom, scale0, scale1;
	cosom = ax * bx + ay * by + az * bz + aw * bw;
	if (cosom < 0) {
		cosom = -cosom;
		bx = -bx;
		by = -by;
		bz = -bz;
		bw = -bw;
	}
	if (1 - cosom > 1e-6) {
		omega = Math.acos(cosom);
		sinom = Math.sin(omega);
		scale0 = Math.sin((1 - t) * omega) / sinom;
		scale1 = Math.sin(t * omega) / sinom;
	} else {
		scale0 = 1 - t;
		scale1 = t;
	}
	out[0] = scale0 * ax + scale1 * bx;
	out[1] = scale0 * ay + scale1 * by;
	out[2] = scale0 * az + scale1 * bz;
	out[3] = scale0 * aw + scale1 * bw;
	return out;
}
/**
* Calculates the inverse of a quat
*
* @param {quat} out the receiving quaternion
* @param {quat} a quat to calculate inverse of
* @returns {quat} out
*/
function invert$2(out, a) {
	let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
	let dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
	let invDot = dot ? 1 / dot : 0;
	out[0] = -a0 * invDot;
	out[1] = -a1 * invDot;
	out[2] = -a2 * invDot;
	out[3] = a3 * invDot;
	return out;
}
/**
* Calculates the conjugate of a quat
* If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
*
* @param {quat} out the receiving quaternion
* @param {quat} a quat to calculate conjugate of
* @returns {quat} out
*/
function conjugate(out, a) {
	out[0] = -a[0];
	out[1] = -a[1];
	out[2] = -a[2];
	out[3] = a[3];
	return out;
}
/**
* Creates a quaternion from the given 3x3 rotation matrix.
*
* NOTE: The resultant quaternion is not normalized, so you should be sure
* to renormalize the quaternion yourself where necessary.
*
* @param {quat} out the receiving quaternion
* @param {mat3} m rotation matrix
* @returns {quat} out
* @function
*/
function fromMat3(out, m) {
	let fTrace = m[0] + m[4] + m[8];
	let fRoot;
	if (fTrace > 0) {
		fRoot = Math.sqrt(fTrace + 1);
		out[3] = .5 * fRoot;
		fRoot = .5 / fRoot;
		out[0] = (m[5] - m[7]) * fRoot;
		out[1] = (m[6] - m[2]) * fRoot;
		out[2] = (m[1] - m[3]) * fRoot;
	} else {
		let i = 0;
		if (m[4] > m[0]) i = 1;
		if (m[8] > m[i * 3 + i]) i = 2;
		let j = (i + 1) % 3;
		let k = (i + 2) % 3;
		fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1);
		out[i] = .5 * fRoot;
		fRoot = .5 / fRoot;
		out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
		out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
		out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
	}
	return out;
}
/**
* Creates a quaternion from the given euler angle x, y, z.
*
* @param {quat} out the receiving quaternion
* @param {vec3} euler Angles to rotate around each axis in degrees.
* @param {String} order detailing order of operations. Default 'XYZ'.
* @returns {quat} out
* @function
*/
function fromEuler(out, euler, order = "YXZ") {
	let sx = Math.sin(euler[0] * .5);
	let cx = Math.cos(euler[0] * .5);
	let sy = Math.sin(euler[1] * .5);
	let cy = Math.cos(euler[1] * .5);
	let sz = Math.sin(euler[2] * .5);
	let cz = Math.cos(euler[2] * .5);
	if (order === "XYZ") {
		out[0] = sx * cy * cz + cx * sy * sz;
		out[1] = cx * sy * cz - sx * cy * sz;
		out[2] = cx * cy * sz + sx * sy * cz;
		out[3] = cx * cy * cz - sx * sy * sz;
	} else if (order === "YXZ") {
		out[0] = sx * cy * cz + cx * sy * sz;
		out[1] = cx * sy * cz - sx * cy * sz;
		out[2] = cx * cy * sz - sx * sy * cz;
		out[3] = cx * cy * cz + sx * sy * sz;
	} else if (order === "ZXY") {
		out[0] = sx * cy * cz - cx * sy * sz;
		out[1] = cx * sy * cz + sx * cy * sz;
		out[2] = cx * cy * sz + sx * sy * cz;
		out[3] = cx * cy * cz - sx * sy * sz;
	} else if (order === "ZYX") {
		out[0] = sx * cy * cz - cx * sy * sz;
		out[1] = cx * sy * cz + sx * cy * sz;
		out[2] = cx * cy * sz - sx * sy * cz;
		out[3] = cx * cy * cz + sx * sy * sz;
	} else if (order === "YZX") {
		out[0] = sx * cy * cz + cx * sy * sz;
		out[1] = cx * sy * cz + sx * cy * sz;
		out[2] = cx * cy * sz - sx * sy * cz;
		out[3] = cx * cy * cz - sx * sy * sz;
	} else if (order === "XZY") {
		out[0] = sx * cy * cz - cx * sy * sz;
		out[1] = cx * sy * cz - sx * cy * sz;
		out[2] = cx * cy * sz + sx * sy * cz;
		out[3] = cx * cy * cz + sx * sy * sz;
	}
	return out;
}
/**
* Copy the values from one quat to another
*
* @param {quat} out the receiving quaternion
* @param {quat} a the source quaternion
* @returns {quat} out
* @function
*/
var copy$3 = copy$4;
/**
* Set the components of a quat to the given values
*
* @param {quat} out the receiving quaternion
* @param {Number} x X component
* @param {Number} y Y component
* @param {Number} z Z component
* @param {Number} w W component
* @returns {quat} out
* @function
*/
var set$3 = set$4;
/**
* Calculates the dot product of two quat's
*
* @param {quat} a the first operand
* @param {quat} b the second operand
* @returns {Number} dot product of a and b
* @function
*/
var dot$1 = dot$2;
/**
* Normalize a quat
*
* @param {quat} out the receiving quaternion
* @param {quat} a quaternion to normalize
* @returns {quat} out
* @function
*/
var normalize$1 = normalize$2;
//#endregion
//#region ../node_modules/ogl/src/math/Quat.js
var Quat = class extends Array {
	constructor(x = 0, y = 0, z = 0, w = 1) {
		super(x, y, z, w);
		this.onChange = () => {};
		this._target = this;
		const triggerProps = [
			"0",
			"1",
			"2",
			"3"
		];
		return new Proxy(this, { set(target, property) {
			const success = Reflect.set(...arguments);
			if (success && triggerProps.includes(property)) target.onChange();
			return success;
		} });
	}
	get x() {
		return this[0];
	}
	get y() {
		return this[1];
	}
	get z() {
		return this[2];
	}
	get w() {
		return this[3];
	}
	set x(v) {
		this._target[0] = v;
		this.onChange();
	}
	set y(v) {
		this._target[1] = v;
		this.onChange();
	}
	set z(v) {
		this._target[2] = v;
		this.onChange();
	}
	set w(v) {
		this._target[3] = v;
		this.onChange();
	}
	identity() {
		identity$3(this._target);
		this.onChange();
		return this;
	}
	set(x, y, z, w) {
		if (x.length) return this.copy(x);
		set$3(this._target, x, y, z, w);
		this.onChange();
		return this;
	}
	rotateX(a) {
		rotateX(this._target, this._target, a);
		this.onChange();
		return this;
	}
	rotateY(a) {
		rotateY(this._target, this._target, a);
		this.onChange();
		return this;
	}
	rotateZ(a) {
		rotateZ(this._target, this._target, a);
		this.onChange();
		return this;
	}
	inverse(q = this._target) {
		invert$2(this._target, q);
		this.onChange();
		return this;
	}
	conjugate(q = this._target) {
		conjugate(this._target, q);
		this.onChange();
		return this;
	}
	copy(q) {
		copy$3(this._target, q);
		this.onChange();
		return this;
	}
	normalize(q = this._target) {
		normalize$1(this._target, q);
		this.onChange();
		return this;
	}
	multiply(qA, qB) {
		if (qB) multiply$3(this._target, qA, qB);
		else multiply$3(this._target, this._target, qA);
		this.onChange();
		return this;
	}
	dot(v) {
		return dot$1(this._target, v);
	}
	fromMatrix3(matrix3) {
		fromMat3(this._target, matrix3);
		this.onChange();
		return this;
	}
	fromEuler(euler, isInternal) {
		fromEuler(this._target, euler, euler.order);
		if (!isInternal) this.onChange();
		return this;
	}
	fromAxisAngle(axis, a) {
		setAxisAngle(this._target, axis, a);
		this.onChange();
		return this;
	}
	slerp(q, t) {
		slerp(this._target, this._target, q, t);
		this.onChange();
		return this;
	}
	fromArray(a, o = 0) {
		this._target[0] = a[o];
		this._target[1] = a[o + 1];
		this._target[2] = a[o + 2];
		this._target[3] = a[o + 3];
		this.onChange();
		return this;
	}
	toArray(a = [], o = 0) {
		a[o] = this[0];
		a[o + 1] = this[1];
		a[o + 2] = this[2];
		a[o + 3] = this[3];
		return a;
	}
};
//#endregion
//#region ../node_modules/ogl/src/math/functions/Mat4Func.js
var EPSILON = 1e-6;
/**
* Copy the values from one mat4 to another
*
* @param {mat4} out the receiving matrix
* @param {mat4} a the source matrix
* @returns {mat4} out
*/
function copy$2(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	out[4] = a[4];
	out[5] = a[5];
	out[6] = a[6];
	out[7] = a[7];
	out[8] = a[8];
	out[9] = a[9];
	out[10] = a[10];
	out[11] = a[11];
	out[12] = a[12];
	out[13] = a[13];
	out[14] = a[14];
	out[15] = a[15];
	return out;
}
/**
* Set the components of a mat4 to the given values
*
* @param {mat4} out the receiving matrix
* @returns {mat4} out
*/
function set$2(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	out[0] = m00;
	out[1] = m01;
	out[2] = m02;
	out[3] = m03;
	out[4] = m10;
	out[5] = m11;
	out[6] = m12;
	out[7] = m13;
	out[8] = m20;
	out[9] = m21;
	out[10] = m22;
	out[11] = m23;
	out[12] = m30;
	out[13] = m31;
	out[14] = m32;
	out[15] = m33;
	return out;
}
/**
* Set a mat4 to the identity matrix
*
* @param {mat4} out the receiving matrix
* @returns {mat4} out
*/
function identity$2(out) {
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = 1;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[10] = 1;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}
/**
* Inverts a mat4
*
* @param {mat4} out the receiving matrix
* @param {mat4} a the source matrix
* @returns {mat4} out
*/
function invert$1(out, a) {
	let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
	let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
	let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
	let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
	let b00 = a00 * a11 - a01 * a10;
	let b01 = a00 * a12 - a02 * a10;
	let b02 = a00 * a13 - a03 * a10;
	let b03 = a01 * a12 - a02 * a11;
	let b04 = a01 * a13 - a03 * a11;
	let b05 = a02 * a13 - a03 * a12;
	let b06 = a20 * a31 - a21 * a30;
	let b07 = a20 * a32 - a22 * a30;
	let b08 = a20 * a33 - a23 * a30;
	let b09 = a21 * a32 - a22 * a31;
	let b10 = a21 * a33 - a23 * a31;
	let b11 = a22 * a33 - a23 * a32;
	let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	if (!det) return null;
	det = 1 / det;
	out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
	out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
	out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
	out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
	out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
	out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
	out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
	return out;
}
/**
* Calculates the determinant of a mat4
*
* @param {mat4} a the source matrix
* @returns {Number} determinant of a
*/
function determinant(a) {
	let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
	let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
	let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
	let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
	let b00 = a00 * a11 - a01 * a10;
	let b01 = a00 * a12 - a02 * a10;
	let b02 = a00 * a13 - a03 * a10;
	let b03 = a01 * a12 - a02 * a11;
	let b04 = a01 * a13 - a03 * a11;
	let b05 = a02 * a13 - a03 * a12;
	let b06 = a20 * a31 - a21 * a30;
	let b07 = a20 * a32 - a22 * a30;
	let b08 = a20 * a33 - a23 * a30;
	let b09 = a21 * a32 - a22 * a31;
	let b10 = a21 * a33 - a23 * a31;
	return b00 * (a22 * a33 - a23 * a32) - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
* Multiplies two mat4s
*
* @param {mat4} out the receiving matrix
* @param {mat4} a the first operand
* @param {mat4} b the second operand
* @returns {mat4} out
*/
function multiply$2(out, a, b) {
	let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
	let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
	let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
	let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
	let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
	out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	b0 = b[4];
	b1 = b[5];
	b2 = b[6];
	b3 = b[7];
	out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	b0 = b[8];
	b1 = b[9];
	b2 = b[10];
	b3 = b[11];
	out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	b0 = b[12];
	b1 = b[13];
	b2 = b[14];
	b3 = b[15];
	out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	return out;
}
/**
* Translate a mat4 by the given vector
*
* @param {mat4} out the receiving matrix
* @param {mat4} a the matrix to translate
* @param {vec3} v vector to translate by
* @returns {mat4} out
*/
function translate$1(out, a, v) {
	let x = v[0], y = v[1], z = v[2];
	let a00, a01, a02, a03;
	let a10, a11, a12, a13;
	let a20, a21, a22, a23;
	if (a === out) {
		out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
		out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
		out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
		out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
	} else {
		a00 = a[0];
		a01 = a[1];
		a02 = a[2];
		a03 = a[3];
		a10 = a[4];
		a11 = a[5];
		a12 = a[6];
		a13 = a[7];
		a20 = a[8];
		a21 = a[9];
		a22 = a[10];
		a23 = a[11];
		out[0] = a00;
		out[1] = a01;
		out[2] = a02;
		out[3] = a03;
		out[4] = a10;
		out[5] = a11;
		out[6] = a12;
		out[7] = a13;
		out[8] = a20;
		out[9] = a21;
		out[10] = a22;
		out[11] = a23;
		out[12] = a00 * x + a10 * y + a20 * z + a[12];
		out[13] = a01 * x + a11 * y + a21 * z + a[13];
		out[14] = a02 * x + a12 * y + a22 * z + a[14];
		out[15] = a03 * x + a13 * y + a23 * z + a[15];
	}
	return out;
}
/**
* Scales the mat4 by the dimensions in the given vec3 not using vectorization
*
* @param {mat4} out the receiving matrix
* @param {mat4} a the matrix to scale
* @param {vec3} v the vec3 to scale the matrix by
* @returns {mat4} out
**/
function scale$2(out, a, v) {
	let x = v[0], y = v[1], z = v[2];
	out[0] = a[0] * x;
	out[1] = a[1] * x;
	out[2] = a[2] * x;
	out[3] = a[3] * x;
	out[4] = a[4] * y;
	out[5] = a[5] * y;
	out[6] = a[6] * y;
	out[7] = a[7] * y;
	out[8] = a[8] * z;
	out[9] = a[9] * z;
	out[10] = a[10] * z;
	out[11] = a[11] * z;
	out[12] = a[12];
	out[13] = a[13];
	out[14] = a[14];
	out[15] = a[15];
	return out;
}
/**
* Rotates a mat4 by the given angle around the given axis
*
* @param {mat4} out the receiving matrix
* @param {mat4} a the matrix to rotate
* @param {Number} rad the angle to rotate the matrix by
* @param {vec3} axis the axis to rotate around
* @returns {mat4} out
*/
function rotate$1(out, a, rad, axis) {
	let x = axis[0], y = axis[1], z = axis[2];
	let len = Math.hypot(x, y, z);
	let s, c, t;
	let a00, a01, a02, a03;
	let a10, a11, a12, a13;
	let a20, a21, a22, a23;
	let b00, b01, b02;
	let b10, b11, b12;
	let b20, b21, b22;
	if (Math.abs(len) < EPSILON) return null;
	len = 1 / len;
	x *= len;
	y *= len;
	z *= len;
	s = Math.sin(rad);
	c = Math.cos(rad);
	t = 1 - c;
	a00 = a[0];
	a01 = a[1];
	a02 = a[2];
	a03 = a[3];
	a10 = a[4];
	a11 = a[5];
	a12 = a[6];
	a13 = a[7];
	a20 = a[8];
	a21 = a[9];
	a22 = a[10];
	a23 = a[11];
	b00 = x * x * t + c;
	b01 = y * x * t + z * s;
	b02 = z * x * t - y * s;
	b10 = x * y * t - z * s;
	b11 = y * y * t + c;
	b12 = z * y * t + x * s;
	b20 = x * z * t + y * s;
	b21 = y * z * t - x * s;
	b22 = z * z * t + c;
	out[0] = a00 * b00 + a10 * b01 + a20 * b02;
	out[1] = a01 * b00 + a11 * b01 + a21 * b02;
	out[2] = a02 * b00 + a12 * b01 + a22 * b02;
	out[3] = a03 * b00 + a13 * b01 + a23 * b02;
	out[4] = a00 * b10 + a10 * b11 + a20 * b12;
	out[5] = a01 * b10 + a11 * b11 + a21 * b12;
	out[6] = a02 * b10 + a12 * b11 + a22 * b12;
	out[7] = a03 * b10 + a13 * b11 + a23 * b12;
	out[8] = a00 * b20 + a10 * b21 + a20 * b22;
	out[9] = a01 * b20 + a11 * b21 + a21 * b22;
	out[10] = a02 * b20 + a12 * b21 + a22 * b22;
	out[11] = a03 * b20 + a13 * b21 + a23 * b22;
	if (a !== out) {
		out[12] = a[12];
		out[13] = a[13];
		out[14] = a[14];
		out[15] = a[15];
	}
	return out;
}
/**
* Returns the translation vector component of a transformation
*  matrix. If a matrix is built with fromRotationTranslation,
*  the returned vector will be the same as the translation vector
*  originally supplied.
* @param  {vec3} out Vector to receive translation component
* @param  {mat4} mat Matrix to be decomposed (input)
* @return {vec3} out
*/
function getTranslation(out, mat) {
	out[0] = mat[12];
	out[1] = mat[13];
	out[2] = mat[14];
	return out;
}
/**
* Returns the scaling factor component of a transformation
*  matrix. If a matrix is built with fromRotationTranslationScale
*  with a normalized Quaternion paramter, the returned vector will be
*  the same as the scaling vector
*  originally supplied.
* @param  {vec3} out Vector to receive scaling factor component
* @param  {mat4} mat Matrix to be decomposed (input)
* @return {vec3} out
*/
function getScaling(out, mat) {
	let m11 = mat[0];
	let m12 = mat[1];
	let m13 = mat[2];
	let m21 = mat[4];
	let m22 = mat[5];
	let m23 = mat[6];
	let m31 = mat[8];
	let m32 = mat[9];
	let m33 = mat[10];
	out[0] = Math.hypot(m11, m12, m13);
	out[1] = Math.hypot(m21, m22, m23);
	out[2] = Math.hypot(m31, m32, m33);
	return out;
}
function getMaxScaleOnAxis(mat) {
	let m11 = mat[0];
	let m12 = mat[1];
	let m13 = mat[2];
	let m21 = mat[4];
	let m22 = mat[5];
	let m23 = mat[6];
	let m31 = mat[8];
	let m32 = mat[9];
	let m33 = mat[10];
	const x = m11 * m11 + m12 * m12 + m13 * m13;
	const y = m21 * m21 + m22 * m22 + m23 * m23;
	const z = m31 * m31 + m32 * m32 + m33 * m33;
	return Math.sqrt(Math.max(x, y, z));
}
/**
* Returns a quaternion representing the rotational component
*  of a transformation matrix. If a matrix is built with
*  fromRotationTranslation, the returned quaternion will be the
*  same as the quaternion originally supplied.
* @param {quat} out Quaternion to receive the rotation component
* @param {mat4} mat Matrix to be decomposed (input)
* @return {quat} out
*/
var getRotation = (function() {
	const temp = [
		1,
		1,
		1
	];
	return function(out, mat) {
		let scaling = temp;
		getScaling(scaling, mat);
		let is1 = 1 / scaling[0];
		let is2 = 1 / scaling[1];
		let is3 = 1 / scaling[2];
		let sm11 = mat[0] * is1;
		let sm12 = mat[1] * is2;
		let sm13 = mat[2] * is3;
		let sm21 = mat[4] * is1;
		let sm22 = mat[5] * is2;
		let sm23 = mat[6] * is3;
		let sm31 = mat[8] * is1;
		let sm32 = mat[9] * is2;
		let sm33 = mat[10] * is3;
		let trace = sm11 + sm22 + sm33;
		let S = 0;
		if (trace > 0) {
			S = Math.sqrt(trace + 1) * 2;
			out[3] = .25 * S;
			out[0] = (sm23 - sm32) / S;
			out[1] = (sm31 - sm13) / S;
			out[2] = (sm12 - sm21) / S;
		} else if (sm11 > sm22 && sm11 > sm33) {
			S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
			out[3] = (sm23 - sm32) / S;
			out[0] = .25 * S;
			out[1] = (sm12 + sm21) / S;
			out[2] = (sm31 + sm13) / S;
		} else if (sm22 > sm33) {
			S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
			out[3] = (sm31 - sm13) / S;
			out[0] = (sm12 + sm21) / S;
			out[1] = .25 * S;
			out[2] = (sm23 + sm32) / S;
		} else {
			S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
			out[3] = (sm12 - sm21) / S;
			out[0] = (sm31 + sm13) / S;
			out[1] = (sm23 + sm32) / S;
			out[2] = .25 * S;
		}
		return out;
	};
})();
/**
* From glTF-Transform
* https://github.com/donmccurdy/glTF-Transform/blob/main/packages/core/src/utils/math-utils.ts
*
* Decompose a mat4 to TRS properties.
*
* Equivalent to the Matrix4 decompose() method in three.js, and intentionally not using the
* gl-matrix version. See: https://github.com/toji/gl-matrix/issues/408
*
* @param {mat4} srcMat Matrix element, to be decomposed to TRS properties.
* @param {quat4} dstRotation Rotation element, to be overwritten.
* @param {vec3} dstTranslation Translation element, to be overwritten.
* @param {vec3} dstScale Scale element, to be overwritten
*/
function decompose(srcMat, dstRotation, dstTranslation, dstScale) {
	let sx = length$1([
		srcMat[0],
		srcMat[1],
		srcMat[2]
	]);
	const sy = length$1([
		srcMat[4],
		srcMat[5],
		srcMat[6]
	]);
	const sz = length$1([
		srcMat[8],
		srcMat[9],
		srcMat[10]
	]);
	if (determinant(srcMat) < 0) sx = -sx;
	dstTranslation[0] = srcMat[12];
	dstTranslation[1] = srcMat[13];
	dstTranslation[2] = srcMat[14];
	const _m1 = srcMat.slice();
	const invSX = 1 / sx;
	const invSY = 1 / sy;
	const invSZ = 1 / sz;
	_m1[0] *= invSX;
	_m1[1] *= invSX;
	_m1[2] *= invSX;
	_m1[4] *= invSY;
	_m1[5] *= invSY;
	_m1[6] *= invSY;
	_m1[8] *= invSZ;
	_m1[9] *= invSZ;
	_m1[10] *= invSZ;
	getRotation(dstRotation, _m1);
	dstScale[0] = sx;
	dstScale[1] = sy;
	dstScale[2] = sz;
}
/**
* From glTF-Transform
* https://github.com/donmccurdy/glTF-Transform/blob/main/packages/core/src/utils/math-utils.ts
*
* Compose TRS properties to a mat4.
*
* Equivalent to the Matrix4 compose() method in three.js, and intentionally not using the
* gl-matrix version. See: https://github.com/toji/gl-matrix/issues/408
*
* @param {mat4} dstMat Matrix element, to be modified and returned.
* @param {quat4} srcRotation Rotation element of matrix.
* @param {vec3} srcTranslation Translation element of matrix.
* @param {vec3} srcScale Scale element of matrix.
* @returns {mat4} dstMat, overwritten to mat4 equivalent of given TRS properties.
*/
function compose(dstMat, srcRotation, srcTranslation, srcScale) {
	const te = dstMat;
	const x = srcRotation[0], y = srcRotation[1], z = srcRotation[2], w = srcRotation[3];
	const x2 = x + x, y2 = y + y, z2 = z + z;
	const xx = x * x2, xy = x * y2, xz = x * z2;
	const yy = y * y2, yz = y * z2, zz = z * z2;
	const wx = w * x2, wy = w * y2, wz = w * z2;
	const sx = srcScale[0], sy = srcScale[1], sz = srcScale[2];
	te[0] = (1 - (yy + zz)) * sx;
	te[1] = (xy + wz) * sx;
	te[2] = (xz - wy) * sx;
	te[3] = 0;
	te[4] = (xy - wz) * sy;
	te[5] = (1 - (xx + zz)) * sy;
	te[6] = (yz + wx) * sy;
	te[7] = 0;
	te[8] = (xz + wy) * sz;
	te[9] = (yz - wx) * sz;
	te[10] = (1 - (xx + yy)) * sz;
	te[11] = 0;
	te[12] = srcTranslation[0];
	te[13] = srcTranslation[1];
	te[14] = srcTranslation[2];
	te[15] = 1;
	return te;
}
/**
* Calculates a 4x4 matrix from the given quaternion
*
* @param {mat4} out mat4 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat4} out
*/
function fromQuat$1(out, q) {
	let x = q[0], y = q[1], z = q[2], w = q[3];
	let x2 = x + x;
	let y2 = y + y;
	let z2 = z + z;
	let xx = x * x2;
	let yx = y * x2;
	let yy = y * y2;
	let zx = z * x2;
	let zy = z * y2;
	let zz = z * z2;
	let wx = w * x2;
	let wy = w * y2;
	let wz = w * z2;
	out[0] = 1 - yy - zz;
	out[1] = yx + wz;
	out[2] = zx - wy;
	out[3] = 0;
	out[4] = yx - wz;
	out[5] = 1 - xx - zz;
	out[6] = zy + wx;
	out[7] = 0;
	out[8] = zx + wy;
	out[9] = zy - wx;
	out[10] = 1 - xx - yy;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}
/**
* Generates a perspective projection matrix with the given bounds
*
* @param {mat4} out mat4 frustum matrix will be written into
* @param {number} fovy Vertical field of view in radians
* @param {number} aspect Aspect ratio. typically viewport width/height
* @param {number} near Near bound of the frustum
* @param {number} far Far bound of the frustum
* @returns {mat4} out
*/
function perspective(out, fovy, aspect, near, far) {
	let f = 1 / Math.tan(fovy / 2);
	let nf = 1 / (near - far);
	out[0] = f / aspect;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = f;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[10] = (far + near) * nf;
	out[11] = -1;
	out[12] = 0;
	out[13] = 0;
	out[14] = 2 * far * near * nf;
	out[15] = 0;
	return out;
}
/**
* Generates a orthogonal projection matrix with the given bounds
*
* @param {mat4} out mat4 frustum matrix will be written into
* @param {number} left Left bound of the frustum
* @param {number} right Right bound of the frustum
* @param {number} bottom Bottom bound of the frustum
* @param {number} top Top bound of the frustum
* @param {number} near Near bound of the frustum
* @param {number} far Far bound of the frustum
* @returns {mat4} out
*/
function ortho(out, left, right, bottom, top, near, far) {
	let lr = 1 / (left - right);
	let bt = 1 / (bottom - top);
	let nf = 1 / (near - far);
	out[0] = -2 * lr;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = -2 * bt;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[10] = 2 * nf;
	out[11] = 0;
	out[12] = (left + right) * lr;
	out[13] = (top + bottom) * bt;
	out[14] = (far + near) * nf;
	out[15] = 1;
	return out;
}
/**
* Generates a matrix that makes something look at something else.
*
* @param {mat4} out mat4 frustum matrix will be written into
* @param {vec3} eye Position of the viewer
* @param {vec3} target Point the viewer is looking at
* @param {vec3} up vec3 pointing up
* @returns {mat4} out
*/
function targetTo(out, eye, target, up) {
	let eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
	let z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
	let len = z0 * z0 + z1 * z1 + z2 * z2;
	if (len === 0) z2 = 1;
	else {
		len = 1 / Math.sqrt(len);
		z0 *= len;
		z1 *= len;
		z2 *= len;
	}
	let x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
	len = x0 * x0 + x1 * x1 + x2 * x2;
	if (len === 0) {
		if (upz) upx += 1e-6;
		else if (upy) upz += 1e-6;
		else upy += 1e-6;
		x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
		len = x0 * x0 + x1 * x1 + x2 * x2;
	}
	len = 1 / Math.sqrt(len);
	x0 *= len;
	x1 *= len;
	x2 *= len;
	out[0] = x0;
	out[1] = x1;
	out[2] = x2;
	out[3] = 0;
	out[4] = z1 * x2 - z2 * x1;
	out[5] = z2 * x0 - z0 * x2;
	out[6] = z0 * x1 - z1 * x0;
	out[7] = 0;
	out[8] = z0;
	out[9] = z1;
	out[10] = z2;
	out[11] = 0;
	out[12] = eyex;
	out[13] = eyey;
	out[14] = eyez;
	out[15] = 1;
	return out;
}
/**
* Adds two mat4's
*
* @param {mat4} out the receiving matrix
* @param {mat4} a the first operand
* @param {mat4} b the second operand
* @returns {mat4} out
*/
function add$1(out, a, b) {
	out[0] = a[0] + b[0];
	out[1] = a[1] + b[1];
	out[2] = a[2] + b[2];
	out[3] = a[3] + b[3];
	out[4] = a[4] + b[4];
	out[5] = a[5] + b[5];
	out[6] = a[6] + b[6];
	out[7] = a[7] + b[7];
	out[8] = a[8] + b[8];
	out[9] = a[9] + b[9];
	out[10] = a[10] + b[10];
	out[11] = a[11] + b[11];
	out[12] = a[12] + b[12];
	out[13] = a[13] + b[13];
	out[14] = a[14] + b[14];
	out[15] = a[15] + b[15];
	return out;
}
/**
* Subtracts matrix b from matrix a
*
* @param {mat4} out the receiving matrix
* @param {mat4} a the first operand
* @param {mat4} b the second operand
* @returns {mat4} out
*/
function subtract$1(out, a, b) {
	out[0] = a[0] - b[0];
	out[1] = a[1] - b[1];
	out[2] = a[2] - b[2];
	out[3] = a[3] - b[3];
	out[4] = a[4] - b[4];
	out[5] = a[5] - b[5];
	out[6] = a[6] - b[6];
	out[7] = a[7] - b[7];
	out[8] = a[8] - b[8];
	out[9] = a[9] - b[9];
	out[10] = a[10] - b[10];
	out[11] = a[11] - b[11];
	out[12] = a[12] - b[12];
	out[13] = a[13] - b[13];
	out[14] = a[14] - b[14];
	out[15] = a[15] - b[15];
	return out;
}
/**
* Multiply each element of the matrix by a scalar.
*
* @param {mat4} out the receiving matrix
* @param {mat4} a the matrix to scale
* @param {Number} b amount to scale the matrix's elements by
* @returns {mat4} out
*/
function multiplyScalar(out, a, b) {
	out[0] = a[0] * b;
	out[1] = a[1] * b;
	out[2] = a[2] * b;
	out[3] = a[3] * b;
	out[4] = a[4] * b;
	out[5] = a[5] * b;
	out[6] = a[6] * b;
	out[7] = a[7] * b;
	out[8] = a[8] * b;
	out[9] = a[9] * b;
	out[10] = a[10] * b;
	out[11] = a[11] * b;
	out[12] = a[12] * b;
	out[13] = a[13] * b;
	out[14] = a[14] * b;
	out[15] = a[15] * b;
	return out;
}
//#endregion
//#region ../node_modules/ogl/src/math/Mat4.js
var Mat4 = class extends Array {
	constructor(m00 = 1, m01 = 0, m02 = 0, m03 = 0, m10 = 0, m11 = 1, m12 = 0, m13 = 0, m20 = 0, m21 = 0, m22 = 1, m23 = 0, m30 = 0, m31 = 0, m32 = 0, m33 = 1) {
		super(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
		return this;
	}
	get x() {
		return this[12];
	}
	get y() {
		return this[13];
	}
	get z() {
		return this[14];
	}
	get w() {
		return this[15];
	}
	set x(v) {
		this[12] = v;
	}
	set y(v) {
		this[13] = v;
	}
	set z(v) {
		this[14] = v;
	}
	set w(v) {
		this[15] = v;
	}
	set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
		if (m00.length) return this.copy(m00);
		set$2(this, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
		return this;
	}
	translate(v, m = this) {
		translate$1(this, m, v);
		return this;
	}
	rotate(v, axis, m = this) {
		rotate$1(this, m, v, axis);
		return this;
	}
	scale(v, m = this) {
		scale$2(this, m, typeof v === "number" ? [
			v,
			v,
			v
		] : v);
		return this;
	}
	add(ma, mb) {
		if (mb) add$1(this, ma, mb);
		else add$1(this, this, ma);
		return this;
	}
	sub(ma, mb) {
		if (mb) subtract$1(this, ma, mb);
		else subtract$1(this, this, ma);
		return this;
	}
	multiply(ma, mb) {
		if (!ma.length) multiplyScalar(this, this, ma);
		else if (mb) multiply$2(this, ma, mb);
		else multiply$2(this, this, ma);
		return this;
	}
	identity() {
		identity$2(this);
		return this;
	}
	copy(m) {
		copy$2(this, m);
		return this;
	}
	fromPerspective({ fov, aspect, near, far } = {}) {
		perspective(this, fov, aspect, near, far);
		return this;
	}
	fromOrthogonal({ left, right, bottom, top, near, far }) {
		ortho(this, left, right, bottom, top, near, far);
		return this;
	}
	fromQuaternion(q) {
		fromQuat$1(this, q);
		return this;
	}
	setPosition(v) {
		this.x = v[0];
		this.y = v[1];
		this.z = v[2];
		return this;
	}
	inverse(m = this) {
		invert$1(this, m);
		return this;
	}
	compose(q, pos, scale) {
		compose(this, q, pos, scale);
		return this;
	}
	decompose(q, pos, scale) {
		decompose(this, q, pos, scale);
		return this;
	}
	getRotation(q) {
		getRotation(q, this);
		return this;
	}
	getTranslation(pos) {
		getTranslation(pos, this);
		return this;
	}
	getScaling(scale) {
		getScaling(scale, this);
		return this;
	}
	getMaxScaleOnAxis() {
		return getMaxScaleOnAxis(this);
	}
	lookAt(eye, target, up) {
		targetTo(this, eye, target, up);
		return this;
	}
	determinant() {
		return determinant(this);
	}
	fromArray(a, o = 0) {
		this[0] = a[o];
		this[1] = a[o + 1];
		this[2] = a[o + 2];
		this[3] = a[o + 3];
		this[4] = a[o + 4];
		this[5] = a[o + 5];
		this[6] = a[o + 6];
		this[7] = a[o + 7];
		this[8] = a[o + 8];
		this[9] = a[o + 9];
		this[10] = a[o + 10];
		this[11] = a[o + 11];
		this[12] = a[o + 12];
		this[13] = a[o + 13];
		this[14] = a[o + 14];
		this[15] = a[o + 15];
		return this;
	}
	toArray(a = [], o = 0) {
		a[o] = this[0];
		a[o + 1] = this[1];
		a[o + 2] = this[2];
		a[o + 3] = this[3];
		a[o + 4] = this[4];
		a[o + 5] = this[5];
		a[o + 6] = this[6];
		a[o + 7] = this[7];
		a[o + 8] = this[8];
		a[o + 9] = this[9];
		a[o + 10] = this[10];
		a[o + 11] = this[11];
		a[o + 12] = this[12];
		a[o + 13] = this[13];
		a[o + 14] = this[14];
		a[o + 15] = this[15];
		return a;
	}
};
//#endregion
//#region ../node_modules/ogl/src/math/functions/EulerFunc.js
function fromRotationMatrix(out, m, order = "YXZ") {
	if (order === "XYZ") {
		out[1] = Math.asin(Math.min(Math.max(m[8], -1), 1));
		if (Math.abs(m[8]) < .99999) {
			out[0] = Math.atan2(-m[9], m[10]);
			out[2] = Math.atan2(-m[4], m[0]);
		} else {
			out[0] = Math.atan2(m[6], m[5]);
			out[2] = 0;
		}
	} else if (order === "YXZ") {
		out[0] = Math.asin(-Math.min(Math.max(m[9], -1), 1));
		if (Math.abs(m[9]) < .99999) {
			out[1] = Math.atan2(m[8], m[10]);
			out[2] = Math.atan2(m[1], m[5]);
		} else {
			out[1] = Math.atan2(-m[2], m[0]);
			out[2] = 0;
		}
	} else if (order === "ZXY") {
		out[0] = Math.asin(Math.min(Math.max(m[6], -1), 1));
		if (Math.abs(m[6]) < .99999) {
			out[1] = Math.atan2(-m[2], m[10]);
			out[2] = Math.atan2(-m[4], m[5]);
		} else {
			out[1] = 0;
			out[2] = Math.atan2(m[1], m[0]);
		}
	} else if (order === "ZYX") {
		out[1] = Math.asin(-Math.min(Math.max(m[2], -1), 1));
		if (Math.abs(m[2]) < .99999) {
			out[0] = Math.atan2(m[6], m[10]);
			out[2] = Math.atan2(m[1], m[0]);
		} else {
			out[0] = 0;
			out[2] = Math.atan2(-m[4], m[5]);
		}
	} else if (order === "YZX") {
		out[2] = Math.asin(Math.min(Math.max(m[1], -1), 1));
		if (Math.abs(m[1]) < .99999) {
			out[0] = Math.atan2(-m[9], m[5]);
			out[1] = Math.atan2(-m[2], m[0]);
		} else {
			out[0] = 0;
			out[1] = Math.atan2(m[8], m[10]);
		}
	} else if (order === "XZY") {
		out[2] = Math.asin(-Math.min(Math.max(m[4], -1), 1));
		if (Math.abs(m[4]) < .99999) {
			out[0] = Math.atan2(m[6], m[5]);
			out[1] = Math.atan2(m[8], m[0]);
		} else {
			out[0] = Math.atan2(-m[9], m[10]);
			out[1] = 0;
		}
	}
	return out;
}
//#endregion
//#region ../node_modules/ogl/src/math/Euler.js
var tmpMat4 = /* @__PURE__ */ new Mat4();
var Euler = class extends Array {
	constructor(x = 0, y = x, z = x, order = "YXZ") {
		super(x, y, z);
		this.order = order;
		this.onChange = () => {};
		this._target = this;
		const triggerProps = [
			"0",
			"1",
			"2"
		];
		return new Proxy(this, { set(target, property) {
			const success = Reflect.set(...arguments);
			if (success && triggerProps.includes(property)) target.onChange();
			return success;
		} });
	}
	get x() {
		return this[0];
	}
	get y() {
		return this[1];
	}
	get z() {
		return this[2];
	}
	set x(v) {
		this._target[0] = v;
		this.onChange();
	}
	set y(v) {
		this._target[1] = v;
		this.onChange();
	}
	set z(v) {
		this._target[2] = v;
		this.onChange();
	}
	set(x, y = x, z = x) {
		if (x.length) return this.copy(x);
		this._target[0] = x;
		this._target[1] = y;
		this._target[2] = z;
		this.onChange();
		return this;
	}
	copy(v) {
		this._target[0] = v[0];
		this._target[1] = v[1];
		this._target[2] = v[2];
		this.onChange();
		return this;
	}
	reorder(order) {
		this._target.order = order;
		this.onChange();
		return this;
	}
	fromRotationMatrix(m, order = this.order) {
		fromRotationMatrix(this._target, m, order);
		this.onChange();
		return this;
	}
	fromQuaternion(q, order = this.order, isInternal) {
		tmpMat4.fromQuaternion(q);
		this._target.fromRotationMatrix(tmpMat4, order);
		if (!isInternal) this.onChange();
		return this;
	}
	fromArray(a, o = 0) {
		this._target[0] = a[o];
		this._target[1] = a[o + 1];
		this._target[2] = a[o + 2];
		return this;
	}
	toArray(a = [], o = 0) {
		a[o] = this[0];
		a[o + 1] = this[1];
		a[o + 2] = this[2];
		return a;
	}
};
//#endregion
//#region ../node_modules/ogl/src/core/Transform.js
var Transform = class {
	constructor() {
		this.parent = null;
		this.children = [];
		this.visible = true;
		this.matrix = new Mat4();
		this.worldMatrix = new Mat4();
		this.matrixAutoUpdate = true;
		this.worldMatrixNeedsUpdate = false;
		this.position = new Vec3();
		this.quaternion = new Quat();
		this.scale = new Vec3(1);
		this.rotation = new Euler();
		this.up = new Vec3(0, 1, 0);
		this.rotation._target.onChange = () => this.quaternion.fromEuler(this.rotation, true);
		this.quaternion._target.onChange = () => this.rotation.fromQuaternion(this.quaternion, void 0, true);
	}
	setParent(parent, notifyParent = true) {
		if (this.parent && parent !== this.parent) this.parent.removeChild(this, false);
		this.parent = parent;
		if (notifyParent && parent) parent.addChild(this, false);
	}
	addChild(child, notifyChild = true) {
		if (!~this.children.indexOf(child)) this.children.push(child);
		if (notifyChild) child.setParent(this, false);
	}
	removeChild(child, notifyChild = true) {
		if (!!~this.children.indexOf(child)) this.children.splice(this.children.indexOf(child), 1);
		if (notifyChild) child.setParent(null, false);
	}
	updateMatrixWorld(force) {
		if (this.matrixAutoUpdate) this.updateMatrix();
		if (this.worldMatrixNeedsUpdate || force) {
			if (this.parent === null) this.worldMatrix.copy(this.matrix);
			else this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix);
			this.worldMatrixNeedsUpdate = false;
			force = true;
		}
		for (let i = 0, l = this.children.length; i < l; i++) this.children[i].updateMatrixWorld(force);
	}
	updateMatrix() {
		this.matrix.compose(this.quaternion, this.position, this.scale);
		this.worldMatrixNeedsUpdate = true;
	}
	traverse(callback) {
		if (callback(this)) return;
		for (let i = 0, l = this.children.length; i < l; i++) this.children[i].traverse(callback);
	}
	decompose() {
		this.matrix.decompose(this.quaternion._target, this.position, this.scale);
		this.rotation.fromQuaternion(this.quaternion);
	}
	lookAt(target, invert = false) {
		if (invert) this.matrix.lookAt(this.position, target, this.up);
		else this.matrix.lookAt(target, this.position, this.up);
		this.matrix.getRotation(this.quaternion._target);
		this.rotation.fromQuaternion(this.quaternion);
	}
};
//#endregion
//#region ../node_modules/ogl/src/core/Camera.js
var tempMat4$4 = /* @__PURE__ */ new Mat4();
var tempVec3a$1 = /* @__PURE__ */ new Vec3();
var tempVec3b$1 = /* @__PURE__ */ new Vec3();
var Camera = class extends Transform {
	constructor(gl, { near = .1, far = 100, fov = 45, aspect = 1, left, right, bottom, top, zoom = 1 } = {}) {
		super();
		Object.assign(this, {
			near,
			far,
			fov,
			aspect,
			left,
			right,
			bottom,
			top,
			zoom
		});
		this.projectionMatrix = new Mat4();
		this.viewMatrix = new Mat4();
		this.projectionViewMatrix = new Mat4();
		this.worldPosition = new Vec3();
		this.type = left || right ? "orthographic" : "perspective";
		if (this.type === "orthographic") this.orthographic();
		else this.perspective();
	}
	perspective({ near = this.near, far = this.far, fov = this.fov, aspect = this.aspect } = {}) {
		Object.assign(this, {
			near,
			far,
			fov,
			aspect
		});
		this.projectionMatrix.fromPerspective({
			fov: fov * (Math.PI / 180),
			aspect,
			near,
			far
		});
		this.type = "perspective";
		return this;
	}
	orthographic({ near = this.near, far = this.far, left = this.left || -1, right = this.right || 1, bottom = this.bottom || -1, top = this.top || 1, zoom = this.zoom } = {}) {
		Object.assign(this, {
			near,
			far,
			left,
			right,
			bottom,
			top,
			zoom
		});
		left /= zoom;
		right /= zoom;
		bottom /= zoom;
		top /= zoom;
		this.projectionMatrix.fromOrthogonal({
			left,
			right,
			bottom,
			top,
			near,
			far
		});
		this.type = "orthographic";
		return this;
	}
	updateMatrixWorld() {
		super.updateMatrixWorld();
		this.viewMatrix.inverse(this.worldMatrix);
		this.worldMatrix.getTranslation(this.worldPosition);
		this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix);
		return this;
	}
	updateProjectionMatrix() {
		if (this.type === "perspective") return this.perspective();
		else return this.orthographic();
	}
	lookAt(target) {
		super.lookAt(target, true);
		return this;
	}
	project(v) {
		v.applyMatrix4(this.viewMatrix);
		v.applyMatrix4(this.projectionMatrix);
		return this;
	}
	unproject(v) {
		v.applyMatrix4(tempMat4$4.inverse(this.projectionMatrix));
		v.applyMatrix4(this.worldMatrix);
		return this;
	}
	updateFrustum() {
		if (!this.frustum) this.frustum = [
			new Vec3(),
			new Vec3(),
			new Vec3(),
			new Vec3(),
			new Vec3(),
			new Vec3()
		];
		const m = this.projectionViewMatrix;
		this.frustum[0].set(m[3] - m[0], m[7] - m[4], m[11] - m[8]).constant = m[15] - m[12];
		this.frustum[1].set(m[3] + m[0], m[7] + m[4], m[11] + m[8]).constant = m[15] + m[12];
		this.frustum[2].set(m[3] + m[1], m[7] + m[5], m[11] + m[9]).constant = m[15] + m[13];
		this.frustum[3].set(m[3] - m[1], m[7] - m[5], m[11] - m[9]).constant = m[15] - m[13];
		this.frustum[4].set(m[3] - m[2], m[7] - m[6], m[11] - m[10]).constant = m[15] - m[14];
		this.frustum[5].set(m[3] + m[2], m[7] + m[6], m[11] + m[10]).constant = m[15] + m[14];
		for (let i = 0; i < 6; i++) {
			const invLen = 1 / this.frustum[i].distance();
			this.frustum[i].multiply(invLen);
			this.frustum[i].constant *= invLen;
		}
	}
	frustumIntersectsMesh(node, worldMatrix = node.worldMatrix) {
		if (!node.geometry.attributes.position) return true;
		if (!node.geometry.bounds || node.geometry.bounds.radius === Infinity) node.geometry.computeBoundingSphere();
		if (!node.geometry.bounds) return true;
		const center = tempVec3a$1;
		center.copy(node.geometry.bounds.center);
		center.applyMatrix4(worldMatrix);
		const radius = node.geometry.bounds.radius * worldMatrix.getMaxScaleOnAxis();
		return this.frustumIntersectsSphere(center, radius);
	}
	frustumIntersectsSphere(center, radius) {
		const normal = tempVec3b$1;
		for (let i = 0; i < 6; i++) {
			const plane = this.frustum[i];
			if (normal.copy(plane).dot(center) + plane.constant < -radius) return false;
		}
		return true;
	}
};
//#endregion
//#region ../node_modules/ogl/src/math/functions/Mat3Func.js
/**
* Copies the upper-left 3x3 values into the given mat3.
*
* @param {mat3} out the receiving 3x3 matrix
* @param {mat4} a   the source 4x4 matrix
* @returns {mat3} out
*/
function fromMat4(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[4];
	out[4] = a[5];
	out[5] = a[6];
	out[6] = a[8];
	out[7] = a[9];
	out[8] = a[10];
	return out;
}
/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
function fromQuat(out, q) {
	let x = q[0], y = q[1], z = q[2], w = q[3];
	let x2 = x + x;
	let y2 = y + y;
	let z2 = z + z;
	let xx = x * x2;
	let yx = y * x2;
	let yy = y * y2;
	let zx = z * x2;
	let zy = z * y2;
	let zz = z * z2;
	let wx = w * x2;
	let wy = w * y2;
	let wz = w * z2;
	out[0] = 1 - yy - zz;
	out[3] = yx - wz;
	out[6] = zx + wy;
	out[1] = yx + wz;
	out[4] = 1 - xx - zz;
	out[7] = zy - wx;
	out[2] = zx - wy;
	out[5] = zy + wx;
	out[8] = 1 - xx - yy;
	return out;
}
/**
* Copy the values from one mat3 to another
*
* @param {mat3} out the receiving matrix
* @param {mat3} a the source matrix
* @returns {mat3} out
*/
function copy$1(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	out[4] = a[4];
	out[5] = a[5];
	out[6] = a[6];
	out[7] = a[7];
	out[8] = a[8];
	return out;
}
/**
* Set the components of a mat3 to the given values
*
* @param {mat3} out the receiving matrix
* @returns {mat3} out
*/
function set$1(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	out[0] = m00;
	out[1] = m01;
	out[2] = m02;
	out[3] = m10;
	out[4] = m11;
	out[5] = m12;
	out[6] = m20;
	out[7] = m21;
	out[8] = m22;
	return out;
}
/**
* Set a mat3 to the identity matrix
*
* @param {mat3} out the receiving matrix
* @returns {mat3} out
*/
function identity$1(out) {
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 1;
	out[5] = 0;
	out[6] = 0;
	out[7] = 0;
	out[8] = 1;
	return out;
}
/**
* Inverts a mat3
*
* @param {mat3} out the receiving matrix
* @param {mat3} a the source matrix
* @returns {mat3} out
*/
function invert(out, a) {
	let a00 = a[0], a01 = a[1], a02 = a[2];
	let a10 = a[3], a11 = a[4], a12 = a[5];
	let a20 = a[6], a21 = a[7], a22 = a[8];
	let b01 = a22 * a11 - a12 * a21;
	let b11 = -a22 * a10 + a12 * a20;
	let b21 = a21 * a10 - a11 * a20;
	let det = a00 * b01 + a01 * b11 + a02 * b21;
	if (!det) return null;
	det = 1 / det;
	out[0] = b01 * det;
	out[1] = (-a22 * a01 + a02 * a21) * det;
	out[2] = (a12 * a01 - a02 * a11) * det;
	out[3] = b11 * det;
	out[4] = (a22 * a00 - a02 * a20) * det;
	out[5] = (-a12 * a00 + a02 * a10) * det;
	out[6] = b21 * det;
	out[7] = (-a21 * a00 + a01 * a20) * det;
	out[8] = (a11 * a00 - a01 * a10) * det;
	return out;
}
/**
* Multiplies two mat3's
*
* @param {mat3} out the receiving matrix
* @param {mat3} a the first operand
* @param {mat3} b the second operand
* @returns {mat3} out
*/
function multiply$1(out, a, b) {
	let a00 = a[0], a01 = a[1], a02 = a[2];
	let a10 = a[3], a11 = a[4], a12 = a[5];
	let a20 = a[6], a21 = a[7], a22 = a[8];
	let b00 = b[0], b01 = b[1], b02 = b[2];
	let b10 = b[3], b11 = b[4], b12 = b[5];
	let b20 = b[6], b21 = b[7], b22 = b[8];
	out[0] = b00 * a00 + b01 * a10 + b02 * a20;
	out[1] = b00 * a01 + b01 * a11 + b02 * a21;
	out[2] = b00 * a02 + b01 * a12 + b02 * a22;
	out[3] = b10 * a00 + b11 * a10 + b12 * a20;
	out[4] = b10 * a01 + b11 * a11 + b12 * a21;
	out[5] = b10 * a02 + b11 * a12 + b12 * a22;
	out[6] = b20 * a00 + b21 * a10 + b22 * a20;
	out[7] = b20 * a01 + b21 * a11 + b22 * a21;
	out[8] = b20 * a02 + b21 * a12 + b22 * a22;
	return out;
}
/**
* Translate a mat3 by the given vector
*
* @param {mat3} out the receiving matrix
* @param {mat3} a the matrix to translate
* @param {vec2} v vector to translate by
* @returns {mat3} out
*/
function translate(out, a, v) {
	let a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], x = v[0], y = v[1];
	out[0] = a00;
	out[1] = a01;
	out[2] = a02;
	out[3] = a10;
	out[4] = a11;
	out[5] = a12;
	out[6] = x * a00 + y * a10 + a20;
	out[7] = x * a01 + y * a11 + a21;
	out[8] = x * a02 + y * a12 + a22;
	return out;
}
/**
* Rotates a mat3 by the given angle
*
* @param {mat3} out the receiving matrix
* @param {mat3} a the matrix to rotate
* @param {Number} rad the angle to rotate the matrix by
* @returns {mat3} out
*/
function rotate(out, a, rad) {
	let a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], s = Math.sin(rad), c = Math.cos(rad);
	out[0] = c * a00 + s * a10;
	out[1] = c * a01 + s * a11;
	out[2] = c * a02 + s * a12;
	out[3] = c * a10 - s * a00;
	out[4] = c * a11 - s * a01;
	out[5] = c * a12 - s * a02;
	out[6] = a20;
	out[7] = a21;
	out[8] = a22;
	return out;
}
/**
* Scales the mat3 by the dimensions in the given vec2
*
* @param {mat3} out the receiving matrix
* @param {mat3} a the matrix to rotate
* @param {vec2} v the vec2 to scale the matrix by
* @returns {mat3} out
**/
function scale$1(out, a, v) {
	let x = v[0], y = v[1];
	out[0] = x * a[0];
	out[1] = x * a[1];
	out[2] = x * a[2];
	out[3] = y * a[3];
	out[4] = y * a[4];
	out[5] = y * a[5];
	out[6] = a[6];
	out[7] = a[7];
	out[8] = a[8];
	return out;
}
/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
function normalFromMat4(out, a) {
	let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
	let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
	let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
	let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
	let b00 = a00 * a11 - a01 * a10;
	let b01 = a00 * a12 - a02 * a10;
	let b02 = a00 * a13 - a03 * a10;
	let b03 = a01 * a12 - a02 * a11;
	let b04 = a01 * a13 - a03 * a11;
	let b05 = a02 * a13 - a03 * a12;
	let b06 = a20 * a31 - a21 * a30;
	let b07 = a20 * a32 - a22 * a30;
	let b08 = a20 * a33 - a23 * a30;
	let b09 = a21 * a32 - a22 * a31;
	let b10 = a21 * a33 - a23 * a31;
	let b11 = a22 * a33 - a23 * a32;
	let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	if (!det) return null;
	det = 1 / det;
	out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	return out;
}
//#endregion
//#region ../node_modules/ogl/src/math/Mat3.js
var Mat3 = class extends Array {
	constructor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1) {
		super(m00, m01, m02, m10, m11, m12, m20, m21, m22);
		return this;
	}
	set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
		if (m00.length) return this.copy(m00);
		set$1(this, m00, m01, m02, m10, m11, m12, m20, m21, m22);
		return this;
	}
	translate(v, m = this) {
		translate(this, m, v);
		return this;
	}
	rotate(v, m = this) {
		rotate(this, m, v);
		return this;
	}
	scale(v, m = this) {
		scale$1(this, m, v);
		return this;
	}
	multiply(ma, mb) {
		if (mb) multiply$1(this, ma, mb);
		else multiply$1(this, this, ma);
		return this;
	}
	identity() {
		identity$1(this);
		return this;
	}
	copy(m) {
		copy$1(this, m);
		return this;
	}
	fromMatrix4(m) {
		fromMat4(this, m);
		return this;
	}
	fromQuaternion(q) {
		fromQuat(this, q);
		return this;
	}
	fromBasis(vec3a, vec3b, vec3c) {
		this.set(vec3a[0], vec3a[1], vec3a[2], vec3b[0], vec3b[1], vec3b[2], vec3c[0], vec3c[1], vec3c[2]);
		return this;
	}
	inverse(m = this) {
		invert(this, m);
		return this;
	}
	getNormalMatrix(m) {
		normalFromMat4(this, m);
		return this;
	}
};
//#endregion
//#region ../node_modules/ogl/src/core/Mesh.js
var ID$1 = 0;
var Mesh = class extends Transform {
	constructor(gl, { geometry, program, mode = gl.TRIANGLES, frustumCulled = true, renderOrder = 0 } = {}) {
		super();
		if (!gl.canvas) console.error("gl not passed as first argument to Mesh");
		this.gl = gl;
		this.id = ID$1++;
		this.geometry = geometry;
		this.program = program;
		this.mode = mode;
		this.frustumCulled = frustumCulled;
		this.renderOrder = renderOrder;
		this.modelViewMatrix = new Mat4();
		this.normalMatrix = new Mat3();
		this.beforeRenderCallbacks = [];
		this.afterRenderCallbacks = [];
	}
	onBeforeRender(f) {
		this.beforeRenderCallbacks.push(f);
		return this;
	}
	onAfterRender(f) {
		this.afterRenderCallbacks.push(f);
		return this;
	}
	draw({ camera } = {}) {
		if (camera) {
			if (!this.program.uniforms.modelMatrix) Object.assign(this.program.uniforms, {
				modelMatrix: { value: null },
				viewMatrix: { value: null },
				modelViewMatrix: { value: null },
				normalMatrix: { value: null },
				projectionMatrix: { value: null },
				cameraPosition: { value: null }
			});
			this.program.uniforms.projectionMatrix.value = camera.projectionMatrix;
			this.program.uniforms.cameraPosition.value = camera.worldPosition;
			this.program.uniforms.viewMatrix.value = camera.viewMatrix;
			this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
			this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
			this.program.uniforms.modelMatrix.value = this.worldMatrix;
			this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix;
			this.program.uniforms.normalMatrix.value = this.normalMatrix;
		}
		this.beforeRenderCallbacks.forEach((f) => f && f({
			mesh: this,
			camera
		}));
		let flipFaces = this.program.cullFace && this.worldMatrix.determinant() < 0;
		this.program.use({ flipFaces });
		this.geometry.draw({
			mode: this.mode,
			program: this.program
		});
		this.afterRenderCallbacks.forEach((f) => f && f({
			mesh: this,
			camera
		}));
	}
};
//#endregion
//#region ../node_modules/ogl/src/core/Texture.js
var emptyPixel = /* @__PURE__ */ new Uint8Array(4);
function isPowerOf2(value) {
	return (value & value - 1) === 0;
}
var ID = 1;
var Texture = class {
	constructor(gl, { image, target = gl.TEXTURE_2D, type = gl.UNSIGNED_BYTE, format = gl.RGBA, internalFormat = format, wrapS = gl.CLAMP_TO_EDGE, wrapT = gl.CLAMP_TO_EDGE, wrapR = gl.CLAMP_TO_EDGE, generateMipmaps = target === (gl.TEXTURE_2D || gl.TEXTURE_CUBE_MAP), minFilter = generateMipmaps ? gl.NEAREST_MIPMAP_LINEAR : gl.LINEAR, magFilter = gl.LINEAR, premultiplyAlpha = false, unpackAlignment = 4, flipY = target == (gl.TEXTURE_2D || gl.TEXTURE_3D) ? true : false, anisotropy = 0, level = 0, width, height = width, length = 1 } = {}) {
		this.gl = gl;
		this.id = ID++;
		this.image = image;
		this.target = target;
		this.type = type;
		this.format = format;
		this.internalFormat = internalFormat;
		this.minFilter = minFilter;
		this.magFilter = magFilter;
		this.wrapS = wrapS;
		this.wrapT = wrapT;
		this.wrapR = wrapR;
		this.generateMipmaps = generateMipmaps;
		this.premultiplyAlpha = premultiplyAlpha;
		this.unpackAlignment = unpackAlignment;
		this.flipY = flipY;
		this.anisotropy = Math.min(anisotropy, this.gl.renderer.parameters.maxAnisotropy);
		this.level = level;
		this.width = width;
		this.height = height;
		this.length = length;
		this.texture = this.gl.createTexture();
		this.store = { image: null };
		this.glState = this.gl.renderer.state;
		this.state = {};
		this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR;
		this.state.magFilter = this.gl.LINEAR;
		this.state.wrapS = this.gl.REPEAT;
		this.state.wrapT = this.gl.REPEAT;
		this.state.anisotropy = 0;
	}
	bind() {
		if (this.glState.textureUnits[this.glState.activeTextureUnit] === this.id) return;
		this.gl.bindTexture(this.target, this.texture);
		this.glState.textureUnits[this.glState.activeTextureUnit] = this.id;
	}
	update(textureUnit = 0) {
		const needsUpdate = !(this.image === this.store.image && !this.needsUpdate);
		if (needsUpdate || this.glState.textureUnits[textureUnit] !== this.id) {
			this.gl.renderer.activeTexture(textureUnit);
			this.bind();
		}
		if (!needsUpdate) return;
		this.needsUpdate = false;
		if (this.flipY !== this.glState.flipY) {
			this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY);
			this.glState.flipY = this.flipY;
		}
		if (this.premultiplyAlpha !== this.glState.premultiplyAlpha) {
			this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
			this.glState.premultiplyAlpha = this.premultiplyAlpha;
		}
		if (this.unpackAlignment !== this.glState.unpackAlignment) {
			this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment);
			this.glState.unpackAlignment = this.unpackAlignment;
		}
		if (this.minFilter !== this.state.minFilter) {
			this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter);
			this.state.minFilter = this.minFilter;
		}
		if (this.magFilter !== this.state.magFilter) {
			this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter);
			this.state.magFilter = this.magFilter;
		}
		if (this.wrapS !== this.state.wrapS) {
			this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS);
			this.state.wrapS = this.wrapS;
		}
		if (this.wrapT !== this.state.wrapT) {
			this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT);
			this.state.wrapT = this.wrapT;
		}
		if (this.wrapR !== this.state.wrapR) {
			this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_R, this.wrapR);
			this.state.wrapR = this.wrapR;
		}
		if (this.anisotropy && this.anisotropy !== this.state.anisotropy) {
			this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy);
			this.state.anisotropy = this.anisotropy;
		}
		if (this.image) {
			if (this.image.width) {
				this.width = this.image.width;
				this.height = this.image.height;
			}
			if (this.target === this.gl.TEXTURE_CUBE_MAP) for (let i = 0; i < 6; i++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, this.level, this.internalFormat, this.format, this.type, this.image[i]);
			else if (ArrayBuffer.isView(this.image)) {
				if (this.target === this.gl.TEXTURE_2D) this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
				else if (this.target === this.gl.TEXTURE_2D_ARRAY || this.target === this.gl.TEXTURE_3D) this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, this.image);
			} else if (this.image.isCompressedTexture) for (let level = 0; level < this.image.length; level++) this.gl.compressedTexImage2D(this.target, level, this.internalFormat, this.image[level].width, this.image[level].height, 0, this.image[level].data);
			else if (this.target === this.gl.TEXTURE_2D) this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
			else this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, this.image);
			if (this.generateMipmaps) {
				if (!this.gl.renderer.isWebgl2 && (!isPowerOf2(this.image.width) || !isPowerOf2(this.image.height))) {
					this.generateMipmaps = false;
					this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE;
					this.minFilter = this.gl.LINEAR;
				} else this.gl.generateMipmap(this.target);
			}
			this.onUpdate && this.onUpdate();
		} else if (this.target === this.gl.TEXTURE_CUBE_MAP) for (let i = 0; i < 6; i++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, emptyPixel);
		else if (this.width) {
			if (this.target === this.gl.TEXTURE_2D) this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null);
			else this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, null);
		} else this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, emptyPixel);
		this.store.image = this.image;
	}
};
//#endregion
//#region ../node_modules/ogl/src/core/RenderTarget.js
var RenderTarget = class {
	constructor(gl, { width = gl.canvas.width, height = gl.canvas.height, target = gl.FRAMEBUFFER, color = 1, depth = true, stencil = false, depthTexture = false, wrapS = gl.CLAMP_TO_EDGE, wrapT = gl.CLAMP_TO_EDGE, wrapR = gl.CLAMP_TO_EDGE, minFilter = gl.LINEAR, magFilter = minFilter, type = gl.UNSIGNED_BYTE, format = gl.RGBA, internalFormat = format, unpackAlignment, premultiplyAlpha } = {}) {
		this.gl = gl;
		this.width = width;
		this.height = height;
		this.depth = depth;
		this.stencil = stencil;
		this.buffer = this.gl.createFramebuffer();
		this.target = target;
		this.gl.renderer.bindFramebuffer(this);
		this.textures = [];
		const drawBuffers = [];
		for (let i = 0; i < color; i++) {
			this.textures.push(new Texture(gl, {
				width,
				height,
				wrapS,
				wrapT,
				wrapR,
				minFilter,
				magFilter,
				type,
				format,
				internalFormat,
				unpackAlignment,
				premultiplyAlpha,
				flipY: false,
				generateMipmaps: false
			}));
			this.textures[i].update();
			this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + i, this.gl.TEXTURE_2D, this.textures[i].texture, 0);
			drawBuffers.push(this.gl.COLOR_ATTACHMENT0 + i);
		}
		if (drawBuffers.length > 1) this.gl.renderer.drawBuffers(drawBuffers);
		this.texture = this.textures[0];
		if (depthTexture && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension("WEBGL_depth_texture"))) {
			this.depthTexture = new Texture(gl, {
				width,
				height,
				minFilter: this.gl.NEAREST,
				magFilter: this.gl.NEAREST,
				format: this.stencil ? this.gl.DEPTH_STENCIL : this.gl.DEPTH_COMPONENT,
				internalFormat: gl.renderer.isWebgl2 ? this.stencil ? this.gl.DEPTH24_STENCIL8 : this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT,
				type: this.stencil ? this.gl.UNSIGNED_INT_24_8 : this.gl.UNSIGNED_INT
			});
			this.depthTexture.update();
			this.gl.framebufferTexture2D(this.target, this.stencil ? this.gl.DEPTH_STENCIL_ATTACHMENT : this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0);
		} else {
			if (depth && !stencil) {
				this.depthBuffer = this.gl.createRenderbuffer();
				this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer);
				this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, width, height);
				this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer);
			}
			if (stencil && !depth) {
				this.stencilBuffer = this.gl.createRenderbuffer();
				this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer);
				this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, width, height);
				this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer);
			}
			if (depth && stencil) {
				this.depthStencilBuffer = this.gl.createRenderbuffer();
				this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer);
				this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, width, height);
				this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer);
			}
		}
		this.gl.renderer.bindFramebuffer({ target: this.target });
	}
	setSize(width, height) {
		if (this.width === width && this.height === height) return;
		this.width = width;
		this.height = height;
		this.gl.renderer.bindFramebuffer(this);
		for (let i = 0; i < this.textures.length; i++) {
			this.textures[i].width = width;
			this.textures[i].height = height;
			this.textures[i].needsUpdate = true;
			this.textures[i].update();
			this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + i, this.gl.TEXTURE_2D, this.textures[i].texture, 0);
		}
		if (this.depthTexture) {
			this.depthTexture.width = width;
			this.depthTexture.height = height;
			this.depthTexture.needsUpdate = true;
			this.depthTexture.update();
			this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0);
		} else {
			if (this.depthBuffer) {
				this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer);
				this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, width, height);
			}
			if (this.stencilBuffer) {
				this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer);
				this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, width, height);
			}
			if (this.depthStencilBuffer) {
				this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer);
				this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, width, height);
			}
		}
		this.gl.renderer.bindFramebuffer({ target: this.target });
	}
};
//#endregion
//#region ../node_modules/ogl/src/math/functions/ColorFunc.js
var NAMES = {
	black: "#000000",
	white: "#ffffff",
	red: "#ff0000",
	green: "#00ff00",
	blue: "#0000ff",
	fuchsia: "#ff00ff",
	cyan: "#00ffff",
	yellow: "#ffff00",
	orange: "#ff8000"
};
function hexToRGB(hex) {
	if (hex.length === 4) hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
	const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	if (!rgb) console.warn(`Unable to convert hex string ${hex} to rgb values`);
	return [
		parseInt(rgb[1], 16) / 255,
		parseInt(rgb[2], 16) / 255,
		parseInt(rgb[3], 16) / 255
	];
}
function numberToRGB(num) {
	num = parseInt(num);
	return [
		(num >> 16 & 255) / 255,
		(num >> 8 & 255) / 255,
		(num & 255) / 255
	];
}
function parseColor(color) {
	if (color === void 0) return [
		0,
		0,
		0
	];
	if (arguments.length === 3) return arguments;
	if (!isNaN(color)) return numberToRGB(color);
	if (color[0] === "#") return hexToRGB(color);
	if (NAMES[color.toLowerCase()]) return hexToRGB(NAMES[color.toLowerCase()]);
	console.warn("Color format not recognised");
	return [
		0,
		0,
		0
	];
}
//#endregion
//#region ../node_modules/ogl/src/math/Color.js
var Color = class extends Array {
	constructor(color) {
		if (Array.isArray(color)) return super(...color);
		return super(...parseColor(...arguments));
	}
	get r() {
		return this[0];
	}
	get g() {
		return this[1];
	}
	get b() {
		return this[2];
	}
	set r(v) {
		this[0] = v;
	}
	set g(v) {
		this[1] = v;
	}
	set b(v) {
		this[2] = v;
	}
	set(color) {
		if (Array.isArray(color)) return this.copy(color);
		return this.copy(parseColor(...arguments));
	}
	copy(v) {
		this[0] = v[0];
		this[1] = v[1];
		this[2] = v[2];
		return this;
	}
};
//#endregion
//#region ../node_modules/ogl/src/math/functions/Vec2Func.js
/**
* Copy the values from one vec2 to another
*
* @param {vec2} out the receiving vector
* @param {vec2} a the source vector
* @returns {vec2} out
*/
function copy(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	return out;
}
/**
* Set the components of a vec2 to the given values
*
* @param {vec2} out the receiving vector
* @param {Number} x X component
* @param {Number} y Y component
* @returns {vec2} out
*/
function set(out, x, y) {
	out[0] = x;
	out[1] = y;
	return out;
}
/**
* Adds two vec2's
*
* @param {vec2} out the receiving vector
* @param {vec2} a the first operand
* @param {vec2} b the second operand
* @returns {vec2} out
*/
function add(out, a, b) {
	out[0] = a[0] + b[0];
	out[1] = a[1] + b[1];
	return out;
}
/**
* Subtracts vector b from vector a
*
* @param {vec2} out the receiving vector
* @param {vec2} a the first operand
* @param {vec2} b the second operand
* @returns {vec2} out
*/
function subtract(out, a, b) {
	out[0] = a[0] - b[0];
	out[1] = a[1] - b[1];
	return out;
}
/**
* Multiplies two vec2's
*
* @param {vec2} out the receiving vector
* @param {vec2} a the first operand
* @param {vec2} b the second operand
* @returns {vec2} out
*/
function multiply(out, a, b) {
	out[0] = a[0] * b[0];
	out[1] = a[1] * b[1];
	return out;
}
/**
* Divides two vec2's
*
* @param {vec2} out the receiving vector
* @param {vec2} a the first operand
* @param {vec2} b the second operand
* @returns {vec2} out
*/
function divide(out, a, b) {
	out[0] = a[0] / b[0];
	out[1] = a[1] / b[1];
	return out;
}
/**
* Scales a vec2 by a scalar number
*
* @param {vec2} out the receiving vector
* @param {vec2} a the vector to scale
* @param {Number} b amount to scale the vector by
* @returns {vec2} out
*/
function scale(out, a, b) {
	out[0] = a[0] * b;
	out[1] = a[1] * b;
	return out;
}
/**
* Calculates the euclidian distance between two vec2's
*
* @param {vec2} a the first operand
* @param {vec2} b the second operand
* @returns {Number} distance between a and b
*/
function distance(a, b) {
	var x = b[0] - a[0], y = b[1] - a[1];
	return Math.sqrt(x * x + y * y);
}
/**
* Calculates the squared euclidian distance between two vec2's
*
* @param {vec2} a the first operand
* @param {vec2} b the second operand
* @returns {Number} squared distance between a and b
*/
function squaredDistance(a, b) {
	var x = b[0] - a[0], y = b[1] - a[1];
	return x * x + y * y;
}
/**
* Calculates the length of a vec2
*
* @param {vec2} a vector to calculate length of
* @returns {Number} length of a
*/
function length(a) {
	var x = a[0], y = a[1];
	return Math.sqrt(x * x + y * y);
}
/**
* Calculates the squared length of a vec2
*
* @param {vec2} a vector to calculate squared length of
* @returns {Number} squared length of a
*/
function squaredLength(a) {
	var x = a[0], y = a[1];
	return x * x + y * y;
}
/**
* Negates the components of a vec2
*
* @param {vec2} out the receiving vector
* @param {vec2} a vector to negate
* @returns {vec2} out
*/
function negate(out, a) {
	out[0] = -a[0];
	out[1] = -a[1];
	return out;
}
/**
* Returns the inverse of the components of a vec2
*
* @param {vec2} out the receiving vector
* @param {vec2} a vector to invert
* @returns {vec2} out
*/
function inverse(out, a) {
	out[0] = 1 / a[0];
	out[1] = 1 / a[1];
	return out;
}
/**
* Normalize a vec2
*
* @param {vec2} out the receiving vector
* @param {vec2} a vector to normalize
* @returns {vec2} out
*/
function normalize(out, a) {
	var x = a[0], y = a[1];
	var len = x * x + y * y;
	if (len > 0) len = 1 / Math.sqrt(len);
	out[0] = a[0] * len;
	out[1] = a[1] * len;
	return out;
}
/**
* Calculates the dot product of two vec2's
*
* @param {vec2} a the first operand
* @param {vec2} b the second operand
* @returns {Number} dot product of a and b
*/
function dot(a, b) {
	return a[0] * b[0] + a[1] * b[1];
}
/**
* Computes the cross product of two vec2's
* Note that the cross product returns a scalar
*
* @param {vec2} a the first operand
* @param {vec2} b the second operand
* @returns {Number} cross product of a and b
*/
function cross(a, b) {
	return a[0] * b[1] - a[1] * b[0];
}
/**
* Performs a linear interpolation between two vec2's
*
* @param {vec2} out the receiving vector
* @param {vec2} a the first operand
* @param {vec2} b the second operand
* @param {Number} t interpolation amount between the two inputs
* @returns {vec2} out
*/
function lerp(out, a, b, t) {
	var ax = a[0], ay = a[1];
	out[0] = ax + t * (b[0] - ax);
	out[1] = ay + t * (b[1] - ay);
	return out;
}
/**
* Performs a frame rate independant, linear interpolation between two vec2's
*
* @param {vec2} out the receiving vector
* @param {vec2} a the first operand
* @param {vec2} b the second operand
* @param {Number} decay decay constant for interpolation. useful range between 1 and 25, from slow to fast.
* @param {Number} dt delta time
* @returns {vec2} out
*/
function smoothLerp(out, a, b, decay, dt) {
	const exp = Math.exp(-decay * dt);
	let ax = a[0];
	let ay = a[1];
	out[0] = b[0] + (ax - b[0]) * exp;
	out[1] = b[1] + (ay - b[1]) * exp;
	return out;
}
/**
* Transforms the vec2 with a mat3
* 3rd vector component is implicitly '1'
*
* @param {vec2} out the receiving vector
* @param {vec2} a the vector to transform
* @param {mat3} m matrix to transform with
* @returns {vec2} out
*/
function transformMat3(out, a, m) {
	var x = a[0], y = a[1];
	out[0] = m[0] * x + m[3] * y + m[6];
	out[1] = m[1] * x + m[4] * y + m[7];
	return out;
}
/**
* Transforms the vec2 with a mat4
* 3rd vector component is implicitly '0'
* 4th vector component is implicitly '1'
*
* @param {vec2} out the receiving vector
* @param {vec2} a the vector to transform
* @param {mat4} m matrix to transform with
* @returns {vec2} out
*/
function transformMat4(out, a, m) {
	let x = a[0];
	let y = a[1];
	out[0] = m[0] * x + m[4] * y + m[12];
	out[1] = m[1] * x + m[5] * y + m[13];
	return out;
}
/**
* Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
*
* @param {vec2} a The first vector.
* @param {vec2} b The second vector.
* @returns {Boolean} True if the vectors are equal, false otherwise.
*/
function exactEquals(a, b) {
	return a[0] === b[0] && a[1] === b[1];
}
//#endregion
//#region ../node_modules/ogl/src/math/Vec2.js
var Vec2 = class Vec2 extends Array {
	constructor(x = 0, y = x) {
		super(x, y);
		return this;
	}
	get x() {
		return this[0];
	}
	get y() {
		return this[1];
	}
	set x(v) {
		this[0] = v;
	}
	set y(v) {
		this[1] = v;
	}
	set(x, y = x) {
		if (x.length) return this.copy(x);
		set(this, x, y);
		return this;
	}
	copy(v) {
		copy(this, v);
		return this;
	}
	add(va, vb) {
		if (vb) add(this, va, vb);
		else add(this, this, va);
		return this;
	}
	sub(va, vb) {
		if (vb) subtract(this, va, vb);
		else subtract(this, this, va);
		return this;
	}
	multiply(v) {
		if (v.length) multiply(this, this, v);
		else scale(this, this, v);
		return this;
	}
	divide(v) {
		if (v.length) divide(this, this, v);
		else scale(this, this, 1 / v);
		return this;
	}
	inverse(v = this) {
		inverse(this, v);
		return this;
	}
	len() {
		return length(this);
	}
	distance(v) {
		if (v) return distance(this, v);
		else return length(this);
	}
	squaredLen() {
		return this.squaredDistance();
	}
	squaredDistance(v) {
		if (v) return squaredDistance(this, v);
		else return squaredLength(this);
	}
	negate(v = this) {
		negate(this, v);
		return this;
	}
	cross(va, vb) {
		if (vb) return cross(va, vb);
		return cross(this, va);
	}
	scale(v) {
		scale(this, this, v);
		return this;
	}
	normalize() {
		normalize(this, this);
		return this;
	}
	dot(v) {
		return dot(this, v);
	}
	equals(v) {
		return exactEquals(this, v);
	}
	applyMatrix3(mat3) {
		transformMat3(this, this, mat3);
		return this;
	}
	applyMatrix4(mat4) {
		transformMat4(this, this, mat4);
		return this;
	}
	lerp(v, a) {
		lerp(this, this, v, a);
		return this;
	}
	smoothLerp(v, decay, dt) {
		smoothLerp(this, this, v, decay, dt);
		return this;
	}
	clone() {
		return new Vec2(this[0], this[1]);
	}
	fromArray(a, o = 0) {
		this[0] = a[o];
		this[1] = a[o + 1];
		return this;
	}
	toArray(a = [], o = 0) {
		a[o] = this[0];
		a[o + 1] = this[1];
		return a;
	}
};
//#endregion
//#region ../node_modules/ogl/src/math/Vec4.js
var Vec4 = class extends Array {
	constructor(x = 0, y = x, z = x, w = x) {
		super(x, y, z, w);
		return this;
	}
	get x() {
		return this[0];
	}
	get y() {
		return this[1];
	}
	get z() {
		return this[2];
	}
	get w() {
		return this[3];
	}
	set x(v) {
		this[0] = v;
	}
	set y(v) {
		this[1] = v;
	}
	set z(v) {
		this[2] = v;
	}
	set w(v) {
		this[3] = v;
	}
	set(x, y = x, z = x, w = x) {
		if (x.length) return this.copy(x);
		set$4(this, x, y, z, w);
		return this;
	}
	copy(v) {
		copy$4(this, v);
		return this;
	}
	normalize() {
		normalize$2(this, this);
		return this;
	}
	multiply(v) {
		scale$3(this, this, v);
		return this;
	}
	dot(v) {
		return dot$2(this, v);
	}
	fromArray(a, o = 0) {
		this[0] = a[o];
		this[1] = a[o + 1];
		this[2] = a[o + 2];
		this[3] = a[o + 3];
		return this;
	}
	toArray(a = [], o = 0) {
		a[o] = this[0];
		a[o + 1] = this[1];
		a[o + 2] = this[2];
		a[o + 3] = this[3];
		return a;
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/Plane.js
var Plane = class Plane extends Geometry {
	constructor(gl, { width = 1, height = 1, widthSegments = 1, heightSegments = 1, attributes = {} } = {}) {
		const wSegs = widthSegments;
		const hSegs = heightSegments;
		const num = (wSegs + 1) * (hSegs + 1);
		const numIndices = wSegs * hSegs * 6;
		const position = new Float32Array(num * 3);
		const normal = new Float32Array(num * 3);
		const uv = new Float32Array(num * 2);
		const index = numIndices > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
		Plane.buildPlane(position, normal, uv, index, width, height, 0, wSegs, hSegs);
		Object.assign(attributes, {
			position: {
				size: 3,
				data: position
			},
			normal: {
				size: 3,
				data: normal
			},
			uv: {
				size: 2,
				data: uv
			},
			index: { data: index }
		});
		super(gl, attributes);
	}
	static buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, u = 0, v = 1, w = 2, uDir = 1, vDir = -1, i = 0, ii = 0) {
		const io = i;
		const segW = width / wSegs;
		const segH = height / hSegs;
		for (let iy = 0; iy <= hSegs; iy++) {
			let y = iy * segH - height / 2;
			for (let ix = 0; ix <= wSegs; ix++, i++) {
				let x = ix * segW - width / 2;
				position[i * 3 + u] = x * uDir;
				position[i * 3 + v] = y * vDir;
				position[i * 3 + w] = depth / 2;
				normal[i * 3 + u] = 0;
				normal[i * 3 + v] = 0;
				normal[i * 3 + w] = depth >= 0 ? 1 : -1;
				uv[i * 2] = ix / wSegs;
				uv[i * 2 + 1] = 1 - iy / hSegs;
				if (iy === hSegs || ix === wSegs) continue;
				let a = io + ix + iy * (wSegs + 1);
				let b = io + ix + (iy + 1) * (wSegs + 1);
				let c = io + ix + (iy + 1) * (wSegs + 1) + 1;
				let d = io + ix + iy * (wSegs + 1) + 1;
				index[ii * 6] = a;
				index[ii * 6 + 1] = b;
				index[ii * 6 + 2] = d;
				index[ii * 6 + 3] = b;
				index[ii * 6 + 4] = c;
				index[ii * 6 + 5] = d;
				ii++;
			}
		}
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/Box.js
var Box = class extends Geometry {
	constructor(gl, { width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1, attributes = {} } = {}) {
		const wSegs = widthSegments;
		const hSegs = heightSegments;
		const dSegs = depthSegments;
		const num = (wSegs + 1) * (hSegs + 1) * 2 + (wSegs + 1) * (dSegs + 1) * 2 + (hSegs + 1) * (dSegs + 1) * 2;
		const numIndices = (wSegs * hSegs * 2 + wSegs * dSegs * 2 + hSegs * dSegs * 2) * 6;
		const position = new Float32Array(num * 3);
		const normal = new Float32Array(num * 3);
		const uv = new Float32Array(num * 2);
		const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
		let i = 0;
		let ii = 0;
		Plane.buildPlane(position, normal, uv, index, depth, height, width, dSegs, hSegs, 2, 1, 0, -1, -1, i, ii);
		i += (dSegs + 1) * (hSegs + 1);
		ii += dSegs * hSegs;
		Plane.buildPlane(position, normal, uv, index, depth, height, -width, dSegs, hSegs, 2, 1, 0, 1, -1, i, ii);
		i += (dSegs + 1) * (hSegs + 1);
		ii += dSegs * hSegs;
		Plane.buildPlane(position, normal, uv, index, width, depth, height, dSegs, wSegs, 0, 2, 1, 1, 1, i, ii);
		i += (wSegs + 1) * (dSegs + 1);
		ii += wSegs * dSegs;
		Plane.buildPlane(position, normal, uv, index, width, depth, -height, dSegs, wSegs, 0, 2, 1, 1, -1, i, ii);
		i += (wSegs + 1) * (dSegs + 1);
		ii += wSegs * dSegs;
		Plane.buildPlane(position, normal, uv, index, width, height, -depth, wSegs, hSegs, 0, 1, 2, -1, -1, i, ii);
		i += (wSegs + 1) * (hSegs + 1);
		ii += wSegs * hSegs;
		Plane.buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, 0, 1, 2, 1, -1, i, ii);
		Object.assign(attributes, {
			position: {
				size: 3,
				data: position
			},
			normal: {
				size: 3,
				data: normal
			},
			uv: {
				size: 2,
				data: uv
			},
			index: { data: index }
		});
		super(gl, attributes);
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/Sphere.js
var Sphere = class extends Geometry {
	constructor(gl, { radius = .5, widthSegments = 16, heightSegments = Math.ceil(widthSegments * .5), phiStart = 0, phiLength = Math.PI * 2, thetaStart = 0, thetaLength = Math.PI, attributes = {} } = {}) {
		const wSegs = widthSegments;
		const hSegs = heightSegments;
		const pStart = phiStart;
		const pLength = phiLength;
		const tStart = thetaStart;
		const tLength = thetaLength;
		const num = (wSegs + 1) * (hSegs + 1);
		const numIndices = wSegs * hSegs * 6;
		const position = new Float32Array(num * 3);
		const normal = new Float32Array(num * 3);
		const uv = new Float32Array(num * 2);
		const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
		let i = 0;
		let iv = 0;
		let ii = 0;
		let te = tStart + tLength;
		const grid = [];
		let n = new Vec3();
		for (let iy = 0; iy <= hSegs; iy++) {
			let vRow = [];
			let v = iy / hSegs;
			for (let ix = 0; ix <= wSegs; ix++, i++) {
				let u = ix / wSegs;
				let x = -radius * Math.cos(pStart + u * pLength) * Math.sin(tStart + v * tLength);
				let y = radius * Math.cos(tStart + v * tLength);
				let z = radius * Math.sin(pStart + u * pLength) * Math.sin(tStart + v * tLength);
				position[i * 3] = x;
				position[i * 3 + 1] = y;
				position[i * 3 + 2] = z;
				n.set(x, y, z).normalize();
				normal[i * 3] = n.x;
				normal[i * 3 + 1] = n.y;
				normal[i * 3 + 2] = n.z;
				uv[i * 2] = u;
				uv[i * 2 + 1] = 1 - v;
				vRow.push(iv++);
			}
			grid.push(vRow);
		}
		for (let iy = 0; iy < hSegs; iy++) for (let ix = 0; ix < wSegs; ix++) {
			let a = grid[iy][ix + 1];
			let b = grid[iy][ix];
			let c = grid[iy + 1][ix];
			let d = grid[iy + 1][ix + 1];
			if (iy !== 0 || tStart > 0) {
				index[ii * 3] = a;
				index[ii * 3 + 1] = b;
				index[ii * 3 + 2] = d;
				ii++;
			}
			if (iy !== hSegs - 1 || te < Math.PI) {
				index[ii * 3] = b;
				index[ii * 3 + 1] = c;
				index[ii * 3 + 2] = d;
				ii++;
			}
		}
		Object.assign(attributes, {
			position: {
				size: 3,
				data: position
			},
			normal: {
				size: 3,
				data: normal
			},
			uv: {
				size: 2,
				data: uv
			},
			index: { data: index }
		});
		super(gl, attributes);
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/Cylinder.js
var Cylinder = class extends Geometry {
	constructor(gl, { radiusTop = .5, radiusBottom = .5, height = 1, radialSegments = 8, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2, attributes = {} } = {}) {
		const rSegs = radialSegments;
		const hSegs = heightSegments;
		const tStart = thetaStart;
		const tLength = thetaLength;
		const numCaps = openEnded ? 0 : radiusBottom && radiusTop ? 2 : 1;
		const num = (rSegs + 1) * (hSegs + 1 + numCaps) + numCaps;
		const numIndices = rSegs * hSegs * 6 + numCaps * rSegs * 3;
		const position = new Float32Array(num * 3);
		const normal = new Float32Array(num * 3);
		const uv = new Float32Array(num * 2);
		const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
		let i = 0;
		let ii = 0;
		const indexArray = [];
		addHeight();
		if (!openEnded) {
			if (radiusTop) addCap(true);
			if (radiusBottom) addCap(false);
		}
		function addHeight() {
			let x, y;
			const n = new Vec3();
			const slope = (radiusBottom - radiusTop) / height;
			for (y = 0; y <= hSegs; y++) {
				const indexRow = [];
				const v = y / hSegs;
				const r = v * (radiusBottom - radiusTop) + radiusTop;
				for (x = 0; x <= rSegs; x++) {
					const u = x / rSegs;
					const theta = u * tLength + tStart;
					const sinTheta = Math.sin(theta);
					const cosTheta = Math.cos(theta);
					position.set([
						r * sinTheta,
						(.5 - v) * height,
						r * cosTheta
					], i * 3);
					n.set(sinTheta, slope, cosTheta).normalize();
					normal.set([
						n.x,
						n.y,
						n.z
					], i * 3);
					uv.set([u, 1 - v], i * 2);
					indexRow.push(i++);
				}
				indexArray.push(indexRow);
			}
			for (x = 0; x < rSegs; x++) for (y = 0; y < hSegs; y++) {
				const a = indexArray[y][x];
				const b = indexArray[y + 1][x];
				const c = indexArray[y + 1][x + 1];
				const d = indexArray[y][x + 1];
				index.set([
					a,
					b,
					d,
					b,
					c,
					d
				], ii * 3);
				ii += 2;
			}
		}
		function addCap(isTop) {
			let x;
			const r = isTop === true ? radiusTop : radiusBottom;
			const sign = isTop === true ? 1 : -1;
			const centerIndex = i;
			position.set([
				0,
				.5 * height * sign,
				0
			], i * 3);
			normal.set([
				0,
				sign,
				0
			], i * 3);
			uv.set([.5, .5], i * 2);
			i++;
			for (x = 0; x <= rSegs; x++) {
				const theta = x / rSegs * tLength + tStart;
				const cosTheta = Math.cos(theta);
				const sinTheta = Math.sin(theta);
				position.set([
					r * sinTheta,
					.5 * height * sign,
					r * cosTheta
				], i * 3);
				normal.set([
					0,
					sign,
					0
				], i * 3);
				uv.set([cosTheta * .5 + .5, sinTheta * .5 * sign + .5], i * 2);
				i++;
			}
			for (x = 0; x < rSegs; x++) {
				const j = centerIndex + x + 1;
				if (isTop) index.set([
					j,
					j + 1,
					centerIndex
				], ii * 3);
				else index.set([
					j + 1,
					j,
					centerIndex
				], ii * 3);
				ii++;
			}
		}
		Object.assign(attributes, {
			position: {
				size: 3,
				data: position
			},
			normal: {
				size: 3,
				data: normal
			},
			uv: {
				size: 2,
				data: uv
			},
			index: { data: index }
		});
		super(gl, attributes);
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/Triangle.js
var Triangle = class extends Geometry {
	constructor(gl, { attributes = {} } = {}) {
		Object.assign(attributes, {
			position: {
				size: 2,
				data: new Float32Array([
					-1,
					-1,
					3,
					-1,
					-1,
					3
				])
			},
			uv: {
				size: 2,
				data: new Float32Array([
					0,
					0,
					2,
					0,
					0,
					2
				])
			}
		});
		super(gl, attributes);
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/Torus.js
var Torus = class extends Geometry {
	constructor(gl, { radius = .5, tube = .2, radialSegments = 8, tubularSegments = 6, arc = Math.PI * 2, attributes = {} } = {}) {
		const num = (radialSegments + 1) * (tubularSegments + 1);
		const numIndices = radialSegments * tubularSegments * 6;
		const vertices = new Float32Array(num * 3);
		const normals = new Float32Array(num * 3);
		const uvs = new Float32Array(num * 2);
		const indices = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
		const center = new Vec3();
		const vertex = new Vec3();
		const normal = new Vec3();
		let idx = 0;
		for (let j = 0; j <= radialSegments; j++) for (let i = 0; i <= tubularSegments; i++, idx++) {
			const u = i / tubularSegments * arc;
			const v = j / radialSegments * Math.PI * 2;
			vertex.x = (radius + tube * Math.cos(v)) * Math.cos(u);
			vertex.y = (radius + tube * Math.cos(v)) * Math.sin(u);
			vertex.z = tube * Math.sin(v);
			vertices.set([
				vertex.x,
				vertex.y,
				vertex.z
			], idx * 3);
			center.x = radius * Math.cos(u);
			center.y = radius * Math.sin(u);
			normal.sub(vertex, center).normalize();
			normals.set([
				normal.x,
				normal.y,
				normal.z
			], idx * 3);
			uvs.set([i / tubularSegments, j / radialSegments], idx * 2);
		}
		idx = 0;
		for (let j = 1; j <= radialSegments; j++) for (let i = 1; i <= tubularSegments; i++, idx++) {
			const a = (tubularSegments + 1) * j + i - 1;
			const b = (tubularSegments + 1) * (j - 1) + i - 1;
			const c = (tubularSegments + 1) * (j - 1) + i;
			const d = (tubularSegments + 1) * j + i;
			indices.set([
				a,
				b,
				d,
				b,
				c,
				d
			], idx * 6);
		}
		Object.assign(attributes, {
			position: {
				size: 3,
				data: vertices
			},
			normal: {
				size: 3,
				data: normals
			},
			uv: {
				size: 2,
				data: uvs
			},
			index: { data: indices }
		});
		super(gl, attributes);
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/Orbit.js
var STATE = {
	NONE: -1,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2,
	DOLLY_PAN: 3
};
var tempVec3$4 = /* @__PURE__ */ new Vec3();
var tempVec2a$1 = /* @__PURE__ */ new Vec2();
var tempVec2b$1 = /* @__PURE__ */ new Vec2();
function Orbit(object, { element = document, enabled = true, target = new Vec3(), ease = .25, inertia = .85, enableRotate = true, rotateSpeed = .1, autoRotate = false, autoRotateSpeed = 1, enableZoom = true, zoomSpeed = 1, zoomStyle = "dolly", enablePan = true, panSpeed = .1, minPolarAngle = 0, maxPolarAngle = Math.PI, minAzimuthAngle = -Infinity, maxAzimuthAngle = Infinity, minDistance = 0, maxDistance = Infinity } = {}) {
	this.enabled = enabled;
	this.target = target;
	this.zoomStyle = zoomStyle;
	ease = ease || 1;
	inertia = inertia || 0;
	this.minDistance = minDistance;
	this.maxDistance = maxDistance;
	const sphericalDelta = {
		radius: 1,
		phi: 0,
		theta: 0
	};
	const sphericalTarget = {
		radius: 1,
		phi: 0,
		theta: 0
	};
	const spherical = {
		radius: 1,
		phi: 0,
		theta: 0
	};
	const panDelta = new Vec3();
	const offset = new Vec3();
	offset.copy(object.position).sub(this.target);
	spherical.radius = sphericalTarget.radius = offset.distance();
	spherical.theta = sphericalTarget.theta = Math.atan2(offset.x, offset.z);
	spherical.phi = sphericalTarget.phi = Math.acos(Math.min(Math.max(offset.y / sphericalTarget.radius, -1), 1));
	this.offset = offset;
	this.update = () => {
		if (autoRotate) handleAutoRotate();
		sphericalTarget.radius *= sphericalDelta.radius;
		sphericalTarget.theta += sphericalDelta.theta;
		sphericalTarget.phi += sphericalDelta.phi;
		sphericalTarget.theta = Math.max(minAzimuthAngle, Math.min(maxAzimuthAngle, sphericalTarget.theta));
		sphericalTarget.phi = Math.max(minPolarAngle, Math.min(maxPolarAngle, sphericalTarget.phi));
		sphericalTarget.radius = Math.max(this.minDistance, Math.min(this.maxDistance, sphericalTarget.radius));
		spherical.phi += (sphericalTarget.phi - spherical.phi) * ease;
		spherical.theta += (sphericalTarget.theta - spherical.theta) * ease;
		spherical.radius += (sphericalTarget.radius - spherical.radius) * ease;
		this.target.add(panDelta);
		let sinPhiRadius = spherical.radius * Math.sin(Math.max(1e-6, spherical.phi));
		offset.x = sinPhiRadius * Math.sin(spherical.theta);
		offset.y = spherical.radius * Math.cos(spherical.phi);
		offset.z = sinPhiRadius * Math.cos(spherical.theta);
		object.position.copy(this.target).add(offset);
		object.lookAt(this.target);
		sphericalDelta.theta *= inertia;
		sphericalDelta.phi *= inertia;
		panDelta.multiply(inertia);
		sphericalDelta.radius = 1;
	};
	this.forcePosition = () => {
		offset.copy(object.position).sub(this.target);
		spherical.radius = sphericalTarget.radius = offset.distance();
		spherical.theta = sphericalTarget.theta = Math.atan2(offset.x, offset.z);
		spherical.phi = sphericalTarget.phi = Math.acos(Math.min(Math.max(offset.y / sphericalTarget.radius, -1), 1));
		object.lookAt(this.target);
	};
	const rotateStart = new Vec2();
	const panStart = new Vec2();
	const dollyStart = new Vec2();
	let state = STATE.NONE;
	this.mouseButtons = {
		ORBIT: 0,
		ZOOM: 1,
		PAN: 2
	};
	function getZoomScale() {
		return Math.pow(.95, zoomSpeed);
	}
	function panLeft(distance, m) {
		tempVec3$4.set(m[0], m[1], m[2]);
		tempVec3$4.multiply(-distance);
		panDelta.add(tempVec3$4);
	}
	function panUp(distance, m) {
		tempVec3$4.set(m[4], m[5], m[6]);
		tempVec3$4.multiply(distance);
		panDelta.add(tempVec3$4);
	}
	const pan = (deltaX, deltaY) => {
		let el = element === document ? document.body : element;
		tempVec3$4.copy(object.position).sub(this.target);
		let targetDistance = tempVec3$4.distance();
		targetDistance *= Math.tan((object.fov || 45) / 2 * Math.PI / 180);
		panLeft(2 * deltaX * targetDistance / el.clientHeight, object.matrix);
		panUp(2 * deltaY * targetDistance / el.clientHeight, object.matrix);
	};
	const dolly = (dollyScale) => {
		if (this.zoomStyle === "dolly") sphericalDelta.radius /= dollyScale;
		else {
			object.fov /= dollyScale;
			if (object.type === "orthographic") object.orthographic();
			else object.perspective();
		}
	};
	function handleAutoRotate() {
		const angle = 2 * Math.PI / 60 / 60 * autoRotateSpeed;
		sphericalDelta.theta -= angle;
	}
	function handleMoveRotate(x, y) {
		tempVec2a$1.set(x, y);
		tempVec2b$1.sub(tempVec2a$1, rotateStart).multiply(rotateSpeed);
		let el = element === document ? document.body : element;
		sphericalDelta.theta -= 2 * Math.PI * tempVec2b$1.x / el.clientHeight;
		sphericalDelta.phi -= 2 * Math.PI * tempVec2b$1.y / el.clientHeight;
		rotateStart.copy(tempVec2a$1);
	}
	function handleMouseMoveDolly(e) {
		tempVec2a$1.set(e.clientX, e.clientY);
		tempVec2b$1.sub(tempVec2a$1, dollyStart);
		if (tempVec2b$1.y > 0) dolly(getZoomScale());
		else if (tempVec2b$1.y < 0) dolly(1 / getZoomScale());
		dollyStart.copy(tempVec2a$1);
	}
	function handleMovePan(x, y) {
		tempVec2a$1.set(x, y);
		tempVec2b$1.sub(tempVec2a$1, panStart).multiply(panSpeed);
		pan(tempVec2b$1.x, tempVec2b$1.y);
		panStart.copy(tempVec2a$1);
	}
	function handleTouchStartDollyPan(e) {
		if (enableZoom) {
			let dx = e.touches[0].pageX - e.touches[1].pageX;
			let dy = e.touches[0].pageY - e.touches[1].pageY;
			let distance = Math.sqrt(dx * dx + dy * dy);
			dollyStart.set(0, distance);
		}
		if (enablePan) {
			let x = .5 * (e.touches[0].pageX + e.touches[1].pageX);
			let y = .5 * (e.touches[0].pageY + e.touches[1].pageY);
			panStart.set(x, y);
		}
	}
	function handleTouchMoveDollyPan(e) {
		if (enableZoom) {
			let dx = e.touches[0].pageX - e.touches[1].pageX;
			let dy = e.touches[0].pageY - e.touches[1].pageY;
			let distance = Math.sqrt(dx * dx + dy * dy);
			tempVec2a$1.set(0, distance);
			tempVec2b$1.set(0, Math.pow(tempVec2a$1.y / dollyStart.y, zoomSpeed));
			dolly(tempVec2b$1.y);
			dollyStart.copy(tempVec2a$1);
		}
		if (enablePan) handleMovePan(.5 * (e.touches[0].pageX + e.touches[1].pageX), .5 * (e.touches[0].pageY + e.touches[1].pageY));
	}
	const onMouseDown = (e) => {
		if (!this.enabled) return;
		switch (e.button) {
			case this.mouseButtons.ORBIT:
				if (enableRotate === false) return;
				rotateStart.set(e.clientX, e.clientY);
				state = STATE.ROTATE;
				break;
			case this.mouseButtons.ZOOM:
				if (enableZoom === false) return;
				dollyStart.set(e.clientX, e.clientY);
				state = STATE.DOLLY;
				break;
			case this.mouseButtons.PAN:
				if (enablePan === false) return;
				panStart.set(e.clientX, e.clientY);
				state = STATE.PAN;
		}
		if (state !== STATE.NONE) {
			window.addEventListener("mousemove", onMouseMove, false);
			window.addEventListener("mouseup", onMouseUp, false);
		}
	};
	const onMouseMove = (e) => {
		if (!this.enabled) return;
		switch (state) {
			case STATE.ROTATE:
				if (enableRotate === false) return;
				handleMoveRotate(e.clientX, e.clientY);
				break;
			case STATE.DOLLY:
				if (enableZoom === false) return;
				handleMouseMoveDolly(e);
				break;
			case STATE.PAN:
				if (enablePan === false) return;
				handleMovePan(e.clientX, e.clientY);
		}
	};
	const onMouseUp = () => {
		window.removeEventListener("mousemove", onMouseMove, false);
		window.removeEventListener("mouseup", onMouseUp, false);
		state = STATE.NONE;
	};
	const onMouseWheel = (e) => {
		if (!this.enabled || !enableZoom || state !== STATE.NONE && state !== STATE.ROTATE) return;
		e.stopPropagation();
		e.preventDefault();
		if (e.deltaY < 0) dolly(1 / getZoomScale());
		else if (e.deltaY > 0) dolly(getZoomScale());
	};
	const onTouchStart = (e) => {
		if (!this.enabled) return;
		e.preventDefault();
		switch (e.touches.length) {
			case 1:
				if (enableRotate === false) return;
				rotateStart.set(e.touches[0].pageX, e.touches[0].pageY);
				state = STATE.ROTATE;
				break;
			case 2:
				if (enableZoom === false && enablePan === false) return;
				handleTouchStartDollyPan(e);
				state = STATE.DOLLY_PAN;
				break;
			default: state = STATE.NONE;
		}
	};
	const onTouchMove = (e) => {
		if (!this.enabled) return;
		e.preventDefault();
		e.stopPropagation();
		switch (e.touches.length) {
			case 1:
				if (enableRotate === false) return;
				handleMoveRotate(e.touches[0].pageX, e.touches[0].pageY);
				break;
			case 2:
				if (enableZoom === false && enablePan === false) return;
				handleTouchMoveDollyPan(e);
				break;
			default: state = STATE.NONE;
		}
	};
	const onTouchEnd = () => {
		if (!this.enabled) return;
		state = STATE.NONE;
	};
	const onContextMenu = (e) => {
		if (!this.enabled) return;
		e.preventDefault();
	};
	function addHandlers() {
		element.addEventListener("contextmenu", onContextMenu, false);
		element.addEventListener("mousedown", onMouseDown, false);
		element.addEventListener("wheel", onMouseWheel, { passive: false });
		element.addEventListener("touchstart", onTouchStart, { passive: false });
		element.addEventListener("touchend", onTouchEnd, false);
		element.addEventListener("touchmove", onTouchMove, { passive: false });
	}
	this.remove = function() {
		element.removeEventListener("contextmenu", onContextMenu);
		element.removeEventListener("mousedown", onMouseDown);
		element.removeEventListener("wheel", onMouseWheel);
		element.removeEventListener("touchstart", onTouchStart);
		element.removeEventListener("touchend", onTouchEnd);
		element.removeEventListener("touchmove", onTouchMove);
		window.removeEventListener("mousemove", onMouseMove);
		window.removeEventListener("mouseup", onMouseUp);
	};
	addHandlers();
}
//#endregion
//#region ../node_modules/ogl/src/extras/Raycast.js
var tempVec2a = /* @__PURE__ */ new Vec2();
var tempVec2b = /* @__PURE__ */ new Vec2();
var tempVec2c = /* @__PURE__ */ new Vec2();
var tempVec3a = /* @__PURE__ */ new Vec3();
var tempVec3b = /* @__PURE__ */ new Vec3();
var tempVec3c = /* @__PURE__ */ new Vec3();
var tempVec3d = /* @__PURE__ */ new Vec3();
var tempVec3e = /* @__PURE__ */ new Vec3();
var tempVec3f = /* @__PURE__ */ new Vec3();
var tempVec3g = /* @__PURE__ */ new Vec3();
var tempVec3h = /* @__PURE__ */ new Vec3();
var tempVec3i = /* @__PURE__ */ new Vec3();
var tempVec3j = /* @__PURE__ */ new Vec3();
var tempVec3k = /* @__PURE__ */ new Vec3();
var tempMat4$3 = /* @__PURE__ */ new Mat4();
var Raycast = class {
	constructor() {
		this.origin = new Vec3();
		this.direction = new Vec3();
	}
	castMouse(camera, mouse = [0, 0]) {
		if (camera.type === "orthographic") {
			const { left, right, bottom, top, zoom } = camera;
			const x = left / zoom + (right - left) / zoom * (mouse[0] * .5 + .5);
			const y = bottom / zoom + (top - bottom) / zoom * (mouse[1] * .5 + .5);
			this.origin.set(x, y, 0);
			this.origin.applyMatrix4(camera.worldMatrix);
			this.direction.x = -camera.worldMatrix[8];
			this.direction.y = -camera.worldMatrix[9];
			this.direction.z = -camera.worldMatrix[10];
		} else {
			camera.worldMatrix.getTranslation(this.origin);
			this.direction.set(mouse[0], mouse[1], .5);
			camera.unproject(this.direction);
			this.direction.sub(this.origin).normalize();
		}
	}
	intersectBounds(meshes, { maxDistance, output = [] } = {}) {
		if (!Array.isArray(meshes)) meshes = [meshes];
		const invWorldMat4 = tempMat4$3;
		const origin = tempVec3a;
		const direction = tempVec3b;
		const hits = output;
		hits.length = 0;
		meshes.forEach((mesh) => {
			if (!mesh.geometry.bounds || mesh.geometry.bounds.radius === Infinity) mesh.geometry.computeBoundingSphere();
			const bounds = mesh.geometry.bounds;
			invWorldMat4.inverse(mesh.worldMatrix);
			let localMaxDistance;
			if (maxDistance) {
				direction.copy(this.direction).scaleRotateMatrix4(invWorldMat4);
				localMaxDistance = maxDistance * direction.len();
			}
			origin.copy(this.origin).applyMatrix4(invWorldMat4);
			direction.copy(this.direction).transformDirection(invWorldMat4);
			if (maxDistance) {
				if (origin.distance(bounds.center) - bounds.radius > localMaxDistance) return;
			}
			let localDistance = 0;
			if (mesh.geometry.raycast === "sphere") {
				if (origin.distance(bounds.center) > bounds.radius) {
					localDistance = this.intersectSphere(bounds, origin, direction);
					if (!localDistance) return;
				}
			} else if (origin.x < bounds.min.x || origin.x > bounds.max.x || origin.y < bounds.min.y || origin.y > bounds.max.y || origin.z < bounds.min.z || origin.z > bounds.max.z) {
				localDistance = this.intersectBox(bounds, origin, direction);
				if (!localDistance) return;
			}
			if (maxDistance && localDistance > localMaxDistance) return;
			if (!mesh.hit) mesh.hit = {
				localPoint: new Vec3(),
				point: new Vec3()
			};
			mesh.hit.localPoint.copy(direction).multiply(localDistance).add(origin);
			mesh.hit.point.copy(mesh.hit.localPoint).applyMatrix4(mesh.worldMatrix);
			mesh.hit.distance = mesh.hit.point.distance(this.origin);
			hits.push(mesh);
		});
		hits.sort((a, b) => a.hit.distance - b.hit.distance);
		return hits;
	}
	intersectMeshes(meshes, { cullFace = true, maxDistance, includeUV = true, includeNormal = true, output = [] } = {}) {
		const hits = this.intersectBounds(meshes, {
			maxDistance,
			output
		});
		if (!hits.length) return hits;
		const invWorldMat4 = tempMat4$3;
		const origin = tempVec3a;
		const direction = tempVec3b;
		const a = tempVec3c;
		const b = tempVec3d;
		const c = tempVec3e;
		const closestFaceNormal = tempVec3f;
		const faceNormal = tempVec3g;
		const barycoord = tempVec3h;
		const uvA = tempVec2a;
		const uvB = tempVec2b;
		const uvC = tempVec2c;
		for (let i = hits.length - 1; i >= 0; i--) {
			const mesh = hits[i];
			invWorldMat4.inverse(mesh.worldMatrix);
			let localMaxDistance;
			if (maxDistance) {
				direction.copy(this.direction).scaleRotateMatrix4(invWorldMat4);
				localMaxDistance = maxDistance * direction.len();
			}
			origin.copy(this.origin).applyMatrix4(invWorldMat4);
			direction.copy(this.direction).transformDirection(invWorldMat4);
			let localDistance = 0;
			let closestA, closestB, closestC;
			const geometry = mesh.geometry;
			const attributes = geometry.attributes;
			const index = attributes.index;
			const position = attributes.position;
			const start = Math.max(0, geometry.drawRange.start);
			const end = Math.min(index ? index.count : position.count, geometry.drawRange.start + geometry.drawRange.count);
			const stride = position.size;
			for (let j = start; j < end; j += 3) {
				const ai = index ? index.data[j] : j;
				const bi = index ? index.data[j + 1] : j + 1;
				const ci = index ? index.data[j + 2] : j + 2;
				a.fromArray(position.data, ai * stride);
				b.fromArray(position.data, bi * stride);
				c.fromArray(position.data, ci * stride);
				const distance = this.intersectTriangle(a, b, c, cullFace, origin, direction, faceNormal);
				if (!distance) continue;
				if (maxDistance && distance > localMaxDistance) continue;
				if (!localDistance || distance < localDistance) {
					localDistance = distance;
					closestA = ai;
					closestB = bi;
					closestC = ci;
					closestFaceNormal.copy(faceNormal);
				}
			}
			if (!localDistance) hits.splice(i, 1);
			mesh.hit.localPoint.copy(direction).multiply(localDistance).add(origin);
			mesh.hit.point.copy(mesh.hit.localPoint).applyMatrix4(mesh.worldMatrix);
			mesh.hit.distance = mesh.hit.point.distance(this.origin);
			if (!mesh.hit.faceNormal) {
				mesh.hit.localFaceNormal = new Vec3();
				mesh.hit.faceNormal = new Vec3();
				mesh.hit.uv = new Vec2();
				mesh.hit.localNormal = new Vec3();
				mesh.hit.normal = new Vec3();
			}
			mesh.hit.localFaceNormal.copy(closestFaceNormal);
			mesh.hit.faceNormal.copy(mesh.hit.localFaceNormal).transformDirection(mesh.worldMatrix);
			if (includeUV || includeNormal) {
				a.fromArray(position.data, closestA * 3);
				b.fromArray(position.data, closestB * 3);
				c.fromArray(position.data, closestC * 3);
				this.getBarycoord(mesh.hit.localPoint, a, b, c, barycoord);
			}
			if (includeUV && attributes.uv) {
				uvA.fromArray(attributes.uv.data, closestA * 2);
				uvB.fromArray(attributes.uv.data, closestB * 2);
				uvC.fromArray(attributes.uv.data, closestC * 2);
				mesh.hit.uv.set(uvA.x * barycoord.x + uvB.x * barycoord.y + uvC.x * barycoord.z, uvA.y * barycoord.x + uvB.y * barycoord.y + uvC.y * barycoord.z);
			}
			if (includeNormal && attributes.normal) {
				a.fromArray(attributes.normal.data, closestA * 3);
				b.fromArray(attributes.normal.data, closestB * 3);
				c.fromArray(attributes.normal.data, closestC * 3);
				mesh.hit.localNormal.set(a.x * barycoord.x + b.x * barycoord.y + c.x * barycoord.z, a.y * barycoord.x + b.y * barycoord.y + c.y * barycoord.z, a.z * barycoord.x + b.z * barycoord.y + c.z * barycoord.z);
				mesh.hit.normal.copy(mesh.hit.localNormal).transformDirection(mesh.worldMatrix);
			}
		}
		hits.sort((a, b) => a.hit.distance - b.hit.distance);
		return hits;
	}
	intersectPlane(plane, origin = this.origin, direction = this.direction) {
		const xminp = tempVec3a;
		xminp.sub(plane.origin, origin);
		const a = xminp.dot(plane.normal);
		const b = direction.dot(plane.normal);
		if (b == 0) return 0;
		const delta = a / b;
		if (delta <= 0) return 0;
		return origin.add(direction.scale(delta));
	}
	intersectSphere(sphere, origin = this.origin, direction = this.direction) {
		const ray = tempVec3c;
		ray.sub(sphere.center, origin);
		const tca = ray.dot(direction);
		const d2 = ray.dot(ray) - tca * tca;
		const radius2 = sphere.radius * sphere.radius;
		if (d2 > radius2) return 0;
		const thc = Math.sqrt(radius2 - d2);
		const t0 = tca - thc;
		const t1 = tca + thc;
		if (t0 < 0 && t1 < 0) return 0;
		if (t0 < 0) return t1;
		return t0;
	}
	intersectBox(box, origin = this.origin, direction = this.direction) {
		let tmin, tmax, tYmin, tYmax, tZmin, tZmax;
		const invdirx = 1 / direction.x;
		const invdiry = 1 / direction.y;
		const invdirz = 1 / direction.z;
		const min = box.min;
		const max = box.max;
		tmin = ((invdirx >= 0 ? min.x : max.x) - origin.x) * invdirx;
		tmax = ((invdirx >= 0 ? max.x : min.x) - origin.x) * invdirx;
		tYmin = ((invdiry >= 0 ? min.y : max.y) - origin.y) * invdiry;
		tYmax = ((invdiry >= 0 ? max.y : min.y) - origin.y) * invdiry;
		if (tmin > tYmax || tYmin > tmax) return 0;
		if (tYmin > tmin) tmin = tYmin;
		if (tYmax < tmax) tmax = tYmax;
		tZmin = ((invdirz >= 0 ? min.z : max.z) - origin.z) * invdirz;
		tZmax = ((invdirz >= 0 ? max.z : min.z) - origin.z) * invdirz;
		if (tmin > tZmax || tZmin > tmax) return 0;
		if (tZmin > tmin) tmin = tZmin;
		if (tZmax < tmax) tmax = tZmax;
		if (tmax < 0) return 0;
		return tmin >= 0 ? tmin : tmax;
	}
	intersectTriangle(a, b, c, backfaceCulling = true, origin = this.origin, direction = this.direction, normal = tempVec3g) {
		const edge1 = tempVec3h;
		const edge2 = tempVec3i;
		const diff = tempVec3j;
		edge1.sub(b, a);
		edge2.sub(c, a);
		normal.cross(edge1, edge2);
		let DdN = direction.dot(normal);
		if (!DdN) return 0;
		let sign;
		if (DdN > 0) {
			if (backfaceCulling) return 0;
			sign = 1;
		} else {
			sign = -1;
			DdN = -DdN;
		}
		diff.sub(origin, a);
		let DdQxE2 = sign * direction.dot(edge2.cross(diff, edge2));
		if (DdQxE2 < 0) return 0;
		let DdE1xQ = sign * direction.dot(edge1.cross(diff));
		if (DdE1xQ < 0) return 0;
		if (DdQxE2 + DdE1xQ > DdN) return 0;
		let QdN = -sign * diff.dot(normal);
		if (QdN < 0) return 0;
		return QdN / DdN;
	}
	getBarycoord(point, a, b, c, target = tempVec3h) {
		const v0 = tempVec3i;
		const v1 = tempVec3j;
		const v2 = tempVec3k;
		v0.sub(c, a);
		v1.sub(b, a);
		v2.sub(point, a);
		const dot00 = v0.dot(v0);
		const dot01 = v0.dot(v1);
		const dot02 = v0.dot(v2);
		const dot11 = v1.dot(v1);
		const dot12 = v1.dot(v2);
		const denom = dot00 * dot11 - dot01 * dot01;
		if (denom === 0) return target.set(-2, -1, -1);
		const invDenom = 1 / denom;
		const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
		const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
		return target.set(1 - u - v, v, u);
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/Curve.js
var CATMULLROM = "catmullrom";
var CUBICBEZIER = "cubicbezier";
var QUADRATICBEZIER = "quadraticbezier";
var _a0 = /* @__PURE__ */ new Vec3();
var _a1 = /* @__PURE__ */ new Vec3();
var _a2 = /* @__PURE__ */ new Vec3();
var _a3 = /* @__PURE__ */ new Vec3();
/**
* Get the control points of cubic bezier curve.
* @param {*} i
* @param {*} a
* @param {*} b
*/
function getCtrlPoint(points, i, a = .168, b = .168) {
	if (i < 1) _a0.sub(points[1], points[0]).scale(a).add(points[0]);
	else _a0.sub(points[i + 1], points[i - 1]).scale(a).add(points[i]);
	if (i > points.length - 3) {
		const last = points.length - 1;
		_a1.sub(points[last - 1], points[last]).scale(b).add(points[last]);
	} else _a1.sub(points[i], points[i + 2]).scale(b).add(points[i + 1]);
	return [_a0.clone(), _a1.clone()];
}
function getQuadraticBezierPoint(t, p0, c0, p1) {
	const k = 1 - t;
	_a0.copy(p0).scale(k ** 2);
	_a1.copy(c0).scale(2 * k * t);
	_a2.copy(p1).scale(t ** 2);
	const ret = new Vec3();
	ret.add(_a0, _a1).add(_a2);
	return ret;
}
function getCubicBezierPoint(t, p0, c0, c1, p1) {
	const k = 1 - t;
	_a0.copy(p0).scale(k ** 3);
	_a1.copy(c0).scale(3 * k ** 2 * t);
	_a2.copy(c1).scale(3 * k * t ** 2);
	_a3.copy(p1).scale(t ** 3);
	const ret = new Vec3();
	ret.add(_a0, _a1).add(_a2).add(_a3);
	return ret;
}
var Curve = class Curve {
	constructor({ points = [
		new Vec3(0, 0, 0),
		new Vec3(0, 1, 0),
		new Vec3(1, 1, 0),
		new Vec3(1, 0, 0)
	], divisions = 12, type = CATMULLROM } = {}) {
		this.points = points;
		this.divisions = divisions;
		this.type = type;
	}
	_getQuadraticBezierPoints(divisions = this.divisions) {
		const points = [];
		const count = this.points.length;
		if (count < 3) {
			console.warn("Not enough points provided.");
			return [];
		}
		const p0 = this.points[0];
		let c0 = this.points[1], p1 = this.points[2];
		for (let i = 0; i <= divisions; i++) {
			const p = getQuadraticBezierPoint(i / divisions, p0, c0, p1);
			points.push(p);
		}
		let offset = 3;
		while (count - offset > 0) {
			p0.copy(p1);
			c0 = p1.scale(2).sub(c0);
			p1 = this.points[offset];
			for (let i = 1; i <= divisions; i++) {
				const p = getQuadraticBezierPoint(i / divisions, p0, c0, p1);
				points.push(p);
			}
			offset++;
		}
		return points;
	}
	_getCubicBezierPoints(divisions = this.divisions) {
		const points = [];
		const count = this.points.length;
		if (count < 4) {
			console.warn("Not enough points provided.");
			return [];
		}
		let p0 = this.points[0], c0 = this.points[1], c1 = this.points[2], p1 = this.points[3];
		for (let i = 0; i <= divisions; i++) {
			const p = getCubicBezierPoint(i / divisions, p0, c0, c1, p1);
			points.push(p);
		}
		let offset = 4;
		while (count - offset > 1) {
			p0.copy(p1);
			c0 = p1.scale(2).sub(c1);
			c1 = this.points[offset];
			p1 = this.points[offset + 1];
			for (let i = 1; i <= divisions; i++) {
				const p = getCubicBezierPoint(i / divisions, p0, c0, c1, p1);
				points.push(p);
			}
			offset += 2;
		}
		return points;
	}
	_getCatmullRomPoints(divisions = this.divisions, a = .168, b = .168) {
		const points = [];
		if (this.points.length <= 2) return this.points;
		let p0;
		this.points.forEach((p, i) => {
			if (i === 0) p0 = p;
			else {
				const [c0, c1] = getCtrlPoint(this.points, i - 1, a, b);
				const c = new Curve({
					points: [
						p0,
						c0,
						c1,
						p
					],
					type: CUBICBEZIER
				});
				points.pop();
				points.push(...c.getPoints(divisions));
				p0 = p;
			}
		});
		return points;
	}
	getPoints(divisions = this.divisions, a = .168, b = .168) {
		const type = this.type;
		if (type === QUADRATICBEZIER) return this._getQuadraticBezierPoints(divisions);
		if (type === CUBICBEZIER) return this._getCubicBezierPoints(divisions);
		if (type === CATMULLROM) return this._getCatmullRomPoints(divisions, a, b);
		return this.points;
	}
};
Curve.CATMULLROM = CATMULLROM;
Curve.CUBICBEZIER = CUBICBEZIER;
Curve.QUADRATICBEZIER = QUADRATICBEZIER;
//#endregion
//#region ../node_modules/ogl/src/extras/path/BaseSegment.js
/**
* Abstract base class for path segments.
* This class contains common methods for all segments types.
*/
var BaseSegment = class {
	constructor() {
		this._len = -1;
		this.tiltStart = 0;
		this.tiltEnd = 0;
	}
	/**
	* Get segment length.
	* @returns {number} segment length
	*/
	getLength() {
		if (this._len < 0) this.updateLength();
		return this._len;
	}
	/**
	* Get tilt angle at t
	* @param {number} t Distance at time t in range [0 .. 1]
	* @returns {number} Tilt angle at t
	*/
	getTiltAt(t) {
		return this.tiltStart * (1 - t) * this.tiltEnd * t;
	}
	/**
	* Creates a clone of this instance
	* @returns {BaseSegment} cloned instance
	*/
	clone() {
		return new this.constructor().copy(this);
	}
	/**
	* Copies another segment object to this instance.
	* @param {BaseSegment} source reference object
	* @returns {BaseSegment} copy of source object
	*/
	copy(source) {
		this._len = source._len;
		this.tiltStart = source.tiltStart;
		this.tiltEnd = source.tiltEnd;
		return this;
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/path/utils.js
var T_VALUES = [
	-.06405689286260563,
	.06405689286260563,
	-.1911188674736163,
	.1911188674736163,
	-.3150426796961634,
	.3150426796961634,
	-.4337935076260451,
	.4337935076260451,
	-.5454214713888396,
	.5454214713888396,
	-.6480936519369755,
	.6480936519369755,
	-.7401241915785544,
	.7401241915785544,
	-.820001985973903,
	.820001985973903,
	-.8864155270044011,
	.8864155270044011,
	-.9382745520027328,
	.9382745520027328,
	-.9747285559713095,
	.9747285559713095,
	-.9951872199970213,
	.9951872199970213
];
var C_VALUES = [
	.12793819534675216,
	.12793819534675216,
	.1258374563468283,
	.1258374563468283,
	.12167047292780339,
	.12167047292780339,
	.1155056680537256,
	.1155056680537256,
	.10744427011596563,
	.10744427011596563,
	.09761865210411388,
	.09761865210411388,
	.08619016153195327,
	.08619016153195327,
	.0733464814110803,
	.0733464814110803,
	.05929858491543678,
	.05929858491543678,
	.04427743881741981,
	.04427743881741981,
	.028531388628933663,
	.028531388628933663,
	.0123412297999872,
	.0123412297999872
];
/**
* Convert Degree To Radian
* @param {number} a Angle in Degrees
* @returns {number} a Angle in Radians
*/
var toRadian = (a) => a * Math.PI / 180;
/**
* Convert Radian To Degree
* @param {number} a Angle in Radians
* @returns {number} a Angle in Radian
*/
var toDegrees = (a) => 180 * a / Math.PI;
var clamp = (val, min, max) => Math.max(min, Math.min(val, max));
/**
* Fills a rotation matrix with the given sine and cosine of the angle around the given axis
* This function helps to avoid inverse trigonometry
* @param {Mat4} out mat4 receiving operation result
* @param {Vec3} axis the axis to rotate around. Should be normalized
* @param {number} sin sine of rotation angle
* @param {number} cos cosine of rotation angle
* @returns {Mat4} out
*/
function mat4fromRotationSinCos(out, axis, sin, cos) {
	const x = axis[0];
	const y = axis[1];
	const z = axis[2];
	const t = 1 - cos;
	out[0] = x * x * t + cos;
	out[1] = y * x * t + z * sin;
	out[2] = z * x * t - y * sin;
	out[3] = 0;
	out[4] = x * y * t - z * sin;
	out[5] = y * y * t + cos;
	out[6] = z * y * t + x * sin;
	out[7] = 0;
	out[8] = x * z * t + y * sin;
	out[9] = y * z * t - x * sin;
	out[10] = z * z * t + cos;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}
/**
* Rotates the normal and binormal around its tangent by the given angle.
*
* see: https://en.wikipedia.org/wiki/Rodrigues%27_rotation_formula
* @param {number} angle rotation angle
* @param {Vec3} norm unit normal vector
* @param {Vec3} binorm unit binormal vector
* @param {Vec3} outNorm optional normal output vector. If not present then normal vector changes in place
* @param {Vec3} outBinorm optional binormal output vector. If not present then binormal vector changes in place
*/
function rotateNormalBinormal(angle, norm, binorm, outNorm = norm, outBinorm = binorm) {
	const s = Math.sin(angle);
	const c = Math.cos(angle);
	const nx = c * norm.x + s * binorm.x;
	const ny = c * norm.y + s * binorm.y;
	const nz = c * norm.z + s * binorm.z;
	const bx = c * binorm.x - s * norm.x;
	const by = c * binorm.y - s * norm.y;
	const bz = c * binorm.z - s * norm.z;
	outNorm.set(nx, ny, nz);
	outBinorm.set(bx, by, bz);
}
//#endregion
//#region ../node_modules/ogl/src/extras/path/CubicBezierSegment.js
var tempVec3$3 = /* @__PURE__ */ new Vec3();
function cubicBezier(t, p0, p1, p2, p3) {
	const k = 1 - t;
	return k * k * k * p0 + 3 * k * k * t * p1 + 3 * k * t * t * p2 + t * t * t * p3;
}
function cubicBezierDeriv(t, p0, p1, p2, p3) {
	const k = 1 - t;
	return 3 * k * k * (p1 - p0) + 6 * k * t * (p2 - p1) + 3 * t * t * (p3 - p2);
}
var CubicBezierSegment = class extends BaseSegment {
	constructor(p0, p1, p2, p3, tiltStart = 0, tiltEnd = 0) {
		super();
		this.p0 = p0;
		this.p1 = p1;
		this.p2 = p2;
		this.p3 = p3;
		this.tiltStart = tiltStart;
		this.tiltEnd = tiltEnd;
		this._len = -1;
	}
	/**
	* Updates the segment length. You must call this method every time you change the curve's control points.
	*/
	updateLength() {
		const z = .5;
		const len = T_VALUES.length;
		let sum = 0;
		for (let i = 0, t; i < len; i++) {
			t = z * T_VALUES[i] + z;
			sum += C_VALUES[i] * this.getDerivativeAt(t, tempVec3$3).len();
		}
		this._len = z * sum;
	}
	/**
	* Get point at relative position in curve according to segment length.
	* @param {number} t Distance at time t in range [0 .. 1]
	* @param {Vec3} out Optional Vec3 to output
	* @returns {Vec3} Point at relative position
	*/
	getPointAt(t, out = new Vec3()) {
		out.x = cubicBezier(t, this.p0.x, this.p1.x, this.p2.x, this.p3.x);
		out.y = cubicBezier(t, this.p0.y, this.p1.y, this.p2.y, this.p3.y);
		out.z = cubicBezier(t, this.p0.z, this.p1.z, this.p2.z, this.p3.z);
		return out;
	}
	getDerivativeAt(t, out = new Vec3()) {
		out.x = cubicBezierDeriv(t, this.p0.x, this.p1.x, this.p2.x, this.p3.x);
		out.y = cubicBezierDeriv(t, this.p0.y, this.p1.y, this.p2.y, this.p3.y);
		out.z = cubicBezierDeriv(t, this.p0.z, this.p1.z, this.p2.z, this.p3.z);
		return out;
	}
	/**
	* Returns a unit vector tangent at t
	* @param {number} t Distance at time t in range [0 .. 1]
	* @param {Vec3} out Optional Vec3 to output
	* @returns {Vec3} A unit vector
	*/
	getTangentAt(t, out = new Vec3()) {
		return this.getDerivativeAt(t, out).normalize();
	}
	lastPoint() {
		return this.p3;
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/path/QuadraticBezierSegment.js
var tempVec3$2 = /* @__PURE__ */ new Vec3();
function quadraticBezier(t, p0, p1, p2) {
	const k = 1 - t;
	return k * k * p0 + 2 * k * t * p1 + t * t * p2;
}
function quadraticBezierDeriv(t, p0, p1, p2) {
	return 2 * (1 - t) * (p1 - p0) + 2 * t * (p2 - p1);
}
var QuadraticBezierSegment = class extends BaseSegment {
	constructor(p0, p1, p2, tiltStart = 0, tiltEnd = 0) {
		super();
		this.p0 = p0;
		this.p1 = p1;
		this.p2 = p2;
		this.tiltStart = tiltStart;
		this.tiltEnd = tiltEnd;
		this._len = -1;
	}
	/**
	* Updates the segment length. You must call this method every time you change the curve's control points.
	*/
	updateLength() {
		const z = .5;
		const len = T_VALUES.length;
		let sum = 0;
		for (let i = 0, t; i < len; i++) {
			t = z * T_VALUES[i] + z;
			sum += C_VALUES[i] * this.getDerivativeAt(t, tempVec3$2).len();
		}
		this._len = z * sum;
	}
	/**
	* Get point at relative position in curve according to segment length.
	* @param {number} t Distance at time t in range [0 .. 1]
	* @param {Vec3} out Optional Vec3 to output
	* @returns {Vec3} Point at relative position
	*/
	getPointAt(t, out = new Vec3()) {
		out.x = quadraticBezier(t, this.p0.x, this.p1.x, this.p2.x);
		out.y = quadraticBezier(t, this.p0.y, this.p1.y, this.p2.y);
		out.z = quadraticBezier(t, this.p0.z, this.p1.z, this.p2.z);
		return out;
	}
	getDerivativeAt(t, out = new Vec3()) {
		out.x = quadraticBezierDeriv(t, this.p0.x, this.p1.x, this.p2.x);
		out.y = quadraticBezierDeriv(t, this.p0.y, this.p1.y, this.p2.y);
		out.z = quadraticBezierDeriv(t, this.p0.z, this.p1.z, this.p2.z);
		return out;
	}
	/**
	* Returns a unit vector tangent at t
	* @param {number} t Distance at time t in range [0 .. 1]
	* @param {Vec3} out Optional Vec3 to output
	* @returns {Vec3} A unit vector
	*/
	getTangentAt(t, out = new Vec3()) {
		return this.getDerivativeAt(t, out).normalize();
	}
	lastPoint() {
		return this.p2;
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/path/LineSegment.js
var tempVec3$1 = /* @__PURE__ */ new Vec3();
var LineSegment = class extends BaseSegment {
	constructor(p0, p1, tiltStart = 0, tiltEnd = 0) {
		super();
		this.p0 = p0;
		this.p1 = p1;
		this.tiltStart = tiltStart;
		this.tiltEnd = tiltEnd;
		this._len = -1;
	}
	/**
	* Updates the segment length. You must call this method every time you change the curve's control points.
	*/
	updateLength() {
		this._len = tempVec3$1.sub(this.p1, this.p0).len();
	}
	/**
	* Get point at relative position in curve according to segment length.
	* @param {number} t Distance at time t in range [0 .. 1]
	* @param {Vec3} out Optional Vec3 to output
	* @returns {Vec3} Point at relative position
	*/
	getPointAt(t, out = new Vec3()) {
		lerp$1(out, this.p0, this.p1, t);
		return out;
	}
	/**
	* Returns a unit vector tangent at t
	* @param {number} t Distance at time t in range [0 .. 1]
	* @param {Vec3} out Optional Vec3 to output
	* @returns {Vec3} A unit vector
	*/
	getTangentAt(t, out = new Vec3()) {
		return out.sub(this.p1, this.p0).normalize();
	}
	lastPoint() {
		return this.p1;
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/path/Path.js
var tempVec3 = /* @__PURE__ */ new Vec3();
var tempMat4$2 = /* @__PURE__ */ new Mat4();
function throwIfNullProperty(property, message) {
	if (this[property] == null) throw new Error(message);
}
var Path = class {
	constructor() {
		this._segments = [];
		this._lengthOffsets = null;
		this._totalLength = -1;
		this._lastPoint = null;
		this._lastTilt = 0;
		this._assertLastPoint = throwIfNullProperty.bind(this, "_lastPoint", "Can`t get previous point of curve. Did you forget moveTo command?");
		this.tiltFunction = null;
	}
	moveTo(p, tilt = 0) {
		this._totalLength = -1;
		this._lastPoint = p;
		this._lastTilt = tilt;
	}
	bezierCurveTo(cp1, cp2, p, tilt = 0) {
		this._assertLastPoint();
		const seg = new CubicBezierSegment(this._lastPoint, cp1, cp2, p, this._lastTilt, tilt);
		this.addSegment(seg);
		return this;
	}
	quadraticCurveTo(cp, p, tilt = 0) {
		this._assertLastPoint();
		const seg = new QuadraticBezierSegment(this._lastPoint, cp, p, this._lastTilt, tilt);
		this.addSegment(seg);
		return this;
	}
	lineTo(p, tilt = 0) {
		this._assertLastPoint();
		const seg = new LineSegment(this._lastPoint, p, this._lastTilt, tilt);
		this.addSegment(seg);
		return this;
	}
	addSegment(segment) {
		this._totalLength = -1;
		this._lastPoint = segment.lastPoint();
		this._lastTilt = segment.tiltEnd;
		this._segments.push(segment);
		return this;
	}
	getSegments() {
		return this._segments;
	}
	updateLength() {
		const n = this._segments.length;
		this._lengthOffsets = new Array(n);
		let offset = 0;
		for (let i = 0; i < n; i++) {
			this._lengthOffsets[i] = offset;
			offset += this._segments[i].getLength();
		}
		this._totalLength = offset;
	}
	getLength() {
		if (this._totalLength < 0) this.updateLength();
		return this._totalLength;
	}
	/**
	* Finding a path segment at a given absolute length distance
	* @param {number} len absolute length distance
	* @returns {[number, number]} [_segment index_, _relative segment distance_]
	*/
	findSegmentIndexAtLength(len) {
		const totalLength = this.getLength();
		if (len <= 0) return [0, 0];
		if (len >= totalLength) return [this._segments.length - 1, 1];
		let start = 0;
		let end = this._lengthOffsets.length - 1;
		let index = -1;
		let mid;
		while (start <= end) {
			mid = Math.ceil((start + end) / 2);
			if (mid === 0 || mid === this._lengthOffsets.length - 1 || len >= this._lengthOffsets[mid] && len < this._lengthOffsets[mid + 1]) {
				index = mid;
				break;
			} else if (len < this._lengthOffsets[mid]) end = mid - 1;
			else start = mid + 1;
		}
		const segLen = this._segments[index].getLength();
		const t = (len - this._lengthOffsets[index]) / segLen;
		return [index, t];
	}
	getPointAtLength(len, out = new Vec3()) {
		const [i, t] = this.findSegmentIndexAtLength(len);
		return this._segments[i].getPointAt(t, out);
	}
	getPointAt(t, out = new Vec3()) {
		const totalLength = this.getLength();
		return this.getPointAtLength(t * totalLength, out);
	}
	getTangentAtLength(len, out = new Vec3()) {
		const [i, t] = this.findSegmentIndexAtLength(len);
		return this._segments[i].getTangentAt(t, out);
	}
	getTangentAt(t, out = new Vec3()) {
		const totalLength = this.getLength();
		return this.getTangentAtLength(t * totalLength, out);
	}
	getTiltAtLength(len) {
		const [i, t] = this.findSegmentIndexAtLength(len);
		return this._segments[i].getTiltAt(t);
	}
	getTiltAt(t) {
		const totalLength = this.getLength();
		return this.getTiltAtLength(t * totalLength);
	}
	/**
	* Get sequence of points using `getPointAt(t)`
	* @param {number} divisions number of subdivisions
	* @returns {Vec3[]} array of points
	*/
	getPoints(divisions = 64) {
		const points = new Array(divisions + 1);
		for (let i = 0; i <= divisions; i++) points[i] = this.getPointAt(i / divisions);
		return points;
	}
	/**
	* Generates the Frenet Frames.
	* See http://www.cs.indiana.edu/pub/techreports/TR425.pdf
	* @param {number} divisions number of subdivisions
	* @returns {{tangents: Vec3[], normals: Vec3[], binormals: Vec3[]}} Object with tangents, normals and binormals arrays
	*/
	computeFrenetFrames(divisions = 64, closed = false) {
		const tangents = new Array(divisions + 1);
		const tilts = new Array(divisions + 1);
		const tiltFunction = this.tiltFunction ?? ((a) => a);
		const totalLength = this.getLength();
		for (let i = 0; i <= divisions; i++) {
			const [si, st] = this.findSegmentIndexAtLength(totalLength * i / divisions);
			const segment = this._segments[si];
			tangents[i] = segment.getTangentAt(st);
			tilts[i] = tiltFunction(segment.getTiltAt(st), i / divisions, this);
		}
		const tx = Math.abs(tangents[0].x);
		const ty = Math.abs(tangents[0].y);
		const tz = Math.abs(tangents[0].z);
		const normal = new Vec3();
		if (tx < ty && tx < tz) normal.set(1, 0, 0);
		else if (ty < tx && ty < tz) normal.set(0, 1, 0);
		else normal.set(0, 0, 1);
		const normals = new Array(divisions + 1);
		const binormals = new Array(divisions + 1);
		normals[0] = new Vec3();
		binormals[0] = new Vec3();
		tempVec3.cross(tangents[0], normal).normalize();
		normals[0].cross(tangents[0], tempVec3);
		binormals[0].cross(tangents[0], normals[0]);
		for (let i = 1; i < tangents.length; i++) {
			normals[i] = normals[i - 1].clone();
			binormals[i] = new Vec3();
			tempVec3.cross(tangents[i - 1], tangents[i]);
			const crossLen = tempVec3.len();
			if (crossLen > Number.EPSILON) {
				tempVec3.scale(1 / crossLen);
				const cosTheta = clamp(tangents[i - 1].dot(tangents[i]), -1, 1);
				mat4fromRotationSinCos(tempMat4$2, tempVec3, clamp(crossLen, -1, 1), cosTheta);
				normals[i].applyMatrix4(tempMat4$2);
			}
			binormals[i].cross(tangents[i], normals[i]);
		}
		for (let i = 0; i < tilts.length; i++) rotateNormalBinormal(toRadian(tilts[i]), normals[i], binormals[i]);
		if (closed === true) {
			const normalLast = normals[normals.length - 1];
			let step = Math.acos(clamp(normals[0].dot(normalLast), -1, 1)) / (normals.length - 1);
			if (tangents[0].dot(tempVec3.cross(normals[0], normalLast)) > 0) step = -step;
			for (let i = 1; i < normals.length - 1; i++) {
				const angle = step * i;
				rotateNormalBinormal(angle, normals[i], binormals[i]);
				tilts[i] += toDegrees(angle);
			}
			normals[normals.length - 1] = normals[0].clone();
			binormals[binormals.length - 1] = binormals[0].clone();
		}
		return {
			tangents,
			normals,
			binormals,
			tilts
		};
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/Tube.js
var vertex$7 = /* @__PURE__ */ new Vec3();
var normal = /* @__PURE__ */ new Vec3();
var uv = /* @__PURE__ */ new Vec2();
var point = /* @__PURE__ */ new Vec3();
var Tube = class extends Geometry {
	constructor(gl, { path, radius = 1, tubularSegments = 64, radialSegments = 8, closed = false, attributes = {} } = {}) {
		super(gl, attributes);
		this.path = path;
		this.radius = radius;
		this.tubularSegments = tubularSegments;
		this.radialSegments = radialSegments;
		this.closed = closed;
		this.frenetFrames = path.computeFrenetFrames(tubularSegments, closed);
		const numVertices = (tubularSegments + 1) * (radialSegments + 1);
		const numIndices = tubularSegments * radialSegments * 6;
		this.positions = new Float32Array(numVertices * 3);
		this.normals = new Float32Array(numVertices * 3);
		this.uvs = new Float32Array(numVertices * 2);
		this.indices = numVertices > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
		this._generateAttributes();
		this._generateIndices();
		this.addAttribute("position", {
			size: 3,
			data: this.positions
		});
		this.addAttribute("normal", {
			size: 3,
			data: this.normals
		});
		this.addAttribute("uv", {
			size: 2,
			data: this.uvs
		});
		this.setIndex({ data: this.indices });
	}
	_generateAttributes() {
		for (let i = 0; i <= this.tubularSegments; i++) {
			let ci = i;
			if (i === this.tubularSegments) ci = this.closed ? 0 : this.tubularSegments;
			this.path.getPointAt(ci / this.tubularSegments, point);
			const N = this.frenetFrames.normals[ci];
			const B = this.frenetFrames.binormals[ci];
			for (let j = 0; j <= this.radialSegments; j++) {
				const v = j / this.radialSegments * Math.PI * 2;
				const sin = Math.sin(v);
				const cos = -Math.cos(v);
				const idx = i * (this.radialSegments + 1) + j;
				normal.x = cos * N.x + sin * B.x;
				normal.y = cos * N.y + sin * B.y;
				normal.z = cos * N.z + sin * B.z;
				this.normals.set(normal, idx * 3);
				vertex$7.x = point.x + this.radius * normal.x;
				vertex$7.y = point.y + this.radius * normal.y;
				vertex$7.z = point.z + this.radius * normal.z;
				this.positions.set(vertex$7, idx * 3);
				uv.x = i / this.tubularSegments;
				uv.y = j / this.radialSegments;
				this.uvs.set(uv, idx * 2);
			}
		}
	}
	_generateIndices() {
		for (let j = 1; j <= this.tubularSegments; j++) for (let i = 1; i <= this.radialSegments; i++) {
			const a = (this.radialSegments + 1) * (j - 1) + (i - 1);
			const b = (this.radialSegments + 1) * j + (i - 1);
			const c = (this.radialSegments + 1) * j + i;
			const d = (this.radialSegments + 1) * (j - 1) + i;
			const idx = (j - 1) * this.radialSegments + (i - 1);
			this.indices.set([
				a,
				b,
				d,
				b,
				c,
				d
			], idx * 6);
		}
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/Post.js
var Post = class {
	constructor(gl, { width, height, dpr, wrapS = gl.CLAMP_TO_EDGE, wrapT = gl.CLAMP_TO_EDGE, minFilter = gl.LINEAR, magFilter = gl.LINEAR, geometry = new Triangle(gl), targetOnly = null, depth = true } = {}) {
		this.gl = gl;
		this.passes = [];
		this.geometry = geometry;
		this.uniform = { value: null };
		this.targetOnly = targetOnly;
		if (dpr) this.dpr = dpr;
		if (width) this.width = width;
		if (height) this.height = height;
		dpr = this.dpr || this.gl.renderer.dpr;
		this.resolutionWidth = Math.floor(this.width || this.gl.renderer.width * dpr);
		this.resolutionHeight = Math.floor(this.height || this.gl.renderer.height * dpr);
		let options = {
			dpr: this.dpr,
			width: this.resolutionWidth,
			height: this.resolutionHeight,
			wrapS,
			wrapT,
			minFilter,
			magFilter,
			depth
		};
		const fbo = this.fbo = {
			read: new RenderTarget(this.gl, options),
			write: new RenderTarget(this.gl, options),
			swap: () => {
				let temp = fbo.read;
				fbo.read = fbo.write;
				fbo.write = temp;
			}
		};
	}
	addPass({ vertex = defaultVertex$3, fragment = defaultFragment$3, uniforms = {}, textureUniform = "tMap", enabled = true } = {}) {
		uniforms[textureUniform] = { value: this.fbo.read.texture };
		const program = new Program(this.gl, {
			vertex,
			fragment,
			uniforms
		});
		const pass = {
			mesh: new Mesh(this.gl, {
				geometry: this.geometry,
				program
			}),
			program,
			uniforms,
			enabled,
			textureUniform
		};
		this.passes.push(pass);
		return pass;
	}
	resize({ width, height, dpr } = {}) {
		if (dpr) this.dpr = dpr;
		if (width) this.width = width;
		if (height) this.height = height;
		dpr = this.dpr || this.gl.renderer.dpr;
		this.resolutionWidth = Math.floor(this.width || this.gl.renderer.width * dpr);
		this.resolutionHeight = Math.floor(this.height || this.gl.renderer.height * dpr);
		this.fbo.read.setSize(this.resolutionWidth, this.resolutionHeight);
		this.fbo.write.setSize(this.resolutionWidth, this.resolutionHeight);
	}
	render({ scene, camera, texture, target = null, update = true, sort = true, frustumCull = true, beforePostCallbacks }) {
		const enabledPasses = this.passes.filter((pass) => pass.enabled);
		if (!texture) {
			this.gl.renderer.render({
				scene,
				camera,
				target: enabledPasses.length || !target && this.targetOnly ? this.fbo.write : target,
				update,
				sort,
				frustumCull
			});
			this.fbo.swap();
			if (beforePostCallbacks) beforePostCallbacks.forEach((f) => f && f());
		}
		enabledPasses.forEach((pass, i) => {
			pass.mesh.program.uniforms[pass.textureUniform].value = !i && texture ? texture : this.fbo.read.texture;
			this.gl.renderer.render({
				scene: pass.mesh,
				target: i === enabledPasses.length - 1 && (target || !this.targetOnly) ? target : this.fbo.write,
				clear: true
			});
			this.fbo.swap();
		});
		this.uniform.value = this.fbo.read.texture;
	}
};
var defaultVertex$3 = `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`;
var defaultFragment$3 = `
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`;
//#endregion
//#region ../node_modules/ogl/src/extras/Animation.js
var prevPos = /* @__PURE__ */ new Vec3();
var prevRot = /* @__PURE__ */ new Quat();
var prevScl = /* @__PURE__ */ new Vec3();
var nextPos = /* @__PURE__ */ new Vec3();
var nextRot = /* @__PURE__ */ new Quat();
var nextScl = /* @__PURE__ */ new Vec3();
var Animation = class {
	constructor({ objects, data }) {
		this.objects = objects;
		this.data = data;
		this.elapsed = 0;
		this.weight = 1;
		this.duration = data.frames.length - 1;
	}
	update(totalWeight = 1, isSet) {
		const weight = isSet ? 1 : this.weight / totalWeight;
		const elapsed = this.elapsed % this.duration;
		const floorFrame = Math.floor(elapsed);
		const blend = elapsed - floorFrame;
		const prevKey = this.data.frames[floorFrame];
		const nextKey = this.data.frames[(floorFrame + 1) % this.duration];
		this.objects.forEach((object, i) => {
			prevPos.fromArray(prevKey.position, i * 3);
			prevRot.fromArray(prevKey.quaternion, i * 4);
			prevScl.fromArray(prevKey.scale, i * 3);
			nextPos.fromArray(nextKey.position, i * 3);
			nextRot.fromArray(nextKey.quaternion, i * 4);
			nextScl.fromArray(nextKey.scale, i * 3);
			prevPos.lerp(nextPos, blend);
			prevRot.slerp(nextRot, blend);
			prevScl.lerp(nextScl, blend);
			object.position.lerp(prevPos, weight);
			object.quaternion.slerp(prevRot, weight);
			object.scale.lerp(prevScl, weight);
		});
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/Skin.js
var tempMat4$1 = /* @__PURE__ */ new Mat4();
var Skin = class extends Mesh {
	constructor(gl, { rig, geometry, program, mode = gl.TRIANGLES } = {}) {
		super(gl, {
			geometry,
			program,
			mode
		});
		this.createBones(rig);
		this.createBoneTexture();
		this.animations = [];
		Object.assign(this.program.uniforms, {
			boneTexture: { value: this.boneTexture },
			boneTextureSize: { value: this.boneTextureSize }
		});
	}
	createBones(rig) {
		this.root = new Transform();
		this.bones = [];
		if (!rig.bones || !rig.bones.length) return;
		for (let i = 0; i < rig.bones.length; i++) {
			const bone = new Transform();
			bone.position.fromArray(rig.bindPose.position, i * 3);
			bone.quaternion.fromArray(rig.bindPose.quaternion, i * 4);
			bone.scale.fromArray(rig.bindPose.scale, i * 3);
			this.bones.push(bone);
		}
		rig.bones.forEach((data, i) => {
			this.bones[i].name = data.name;
			if (data.parent === -1) return this.bones[i].setParent(this.root);
			this.bones[i].setParent(this.bones[data.parent]);
		});
		this.root.updateMatrixWorld(true);
		this.bones.forEach((bone) => {
			bone.bindInverse = new Mat4(...bone.worldMatrix).inverse();
		});
	}
	createBoneTexture() {
		if (!this.bones.length) return;
		const size = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(this.bones.length * 4)) / Math.LN2)));
		this.boneMatrices = new Float32Array(size * size * 4);
		this.boneTextureSize = size;
		this.boneTexture = new Texture(this.gl, {
			image: this.boneMatrices,
			generateMipmaps: false,
			type: this.gl.FLOAT,
			internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA32F : this.gl.RGBA,
			minFilter: this.gl.NEAREST,
			magFilter: this.gl.NEAREST,
			flipY: false,
			width: size
		});
	}
	addAnimation(data) {
		const animation = new Animation({
			objects: this.bones,
			data
		});
		this.animations.push(animation);
		return animation;
	}
	update() {
		let total = 0;
		this.animations.forEach((animation) => total += animation.weight);
		this.animations.forEach((animation, i) => {
			animation.update(total, i === 0);
		});
	}
	draw({ camera } = {}) {
		this.root.updateMatrixWorld(true);
		this.bones.forEach((bone, i) => {
			tempMat4$1.multiply(bone.worldMatrix, bone.bindInverse);
			this.boneMatrices.set(tempMat4$1, i * 16);
		});
		if (this.boneTexture) this.boneTexture.needsUpdate = true;
		super.draw({ camera });
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/Text.js
function Text({ font, text, width = Infinity, align = "left", size = 1, letterSpacing = 0, lineHeight = 1.4, wordSpacing = 0, wordBreak = false }) {
	const _this = this;
	let glyphs, buffers, baseline, scale;
	const newline = /\n/;
	const whitespace = /\s/;
	parseFont();
	createGeometry();
	function parseFont() {
		glyphs = {};
		font.chars.forEach((d) => glyphs[d.char] = d);
	}
	function createGeometry() {
		font.common.lineHeight;
		baseline = font.common.base;
		scale = size / baseline;
		let numChars = text.replace(/[ \n]/g, "").length;
		buffers = {
			position: new Float32Array(numChars * 4 * 3),
			uv: new Float32Array(numChars * 4 * 2),
			id: new Float32Array(numChars * 4),
			index: new Uint16Array(numChars * 6)
		};
		for (let i = 0; i < numChars; i++) {
			buffers.id.set([
				i,
				i,
				i,
				i
			], i * 4);
			buffers.index.set([
				i * 4,
				i * 4 + 2,
				i * 4 + 1,
				i * 4 + 1,
				i * 4 + 2,
				i * 4 + 3
			], i * 6);
		}
		layout();
	}
	function layout() {
		const lines = [];
		let cursor = 0;
		let wordCursor = 0;
		let wordWidth = 0;
		let line = newLine();
		function newLine() {
			const line = {
				width: 0,
				glyphs: []
			};
			lines.push(line);
			wordCursor = cursor;
			wordWidth = 0;
			return line;
		}
		let maxTimes = 100;
		let count = 0;
		while (cursor < text.length && count < maxTimes) {
			count++;
			const char = text[cursor];
			if (!line.width && whitespace.test(char)) {
				cursor++;
				wordCursor = cursor;
				wordWidth = 0;
				continue;
			}
			if (newline.test(char)) {
				cursor++;
				line = newLine();
				continue;
			}
			const glyph = glyphs[char] || glyphs[" "];
			if (line.glyphs.length) {
				const prevGlyph = line.glyphs[line.glyphs.length - 1][0];
				let kern = getKernPairOffset(glyph.id, prevGlyph.id) * scale;
				line.width += kern;
				wordWidth += kern;
			}
			line.glyphs.push([glyph, line.width]);
			let advance = 0;
			if (whitespace.test(char)) {
				wordCursor = cursor;
				wordWidth = 0;
				advance += wordSpacing * size;
			} else advance += letterSpacing * size;
			advance += glyph.xadvance * scale;
			line.width += advance;
			wordWidth += advance;
			if (line.width > width) {
				if (wordBreak && line.glyphs.length > 1) {
					line.width -= advance;
					line.glyphs.pop();
					line = newLine();
					continue;
				} else if (!wordBreak && wordWidth !== line.width) {
					let numGlyphs = cursor - wordCursor + 1;
					line.glyphs.splice(-numGlyphs, numGlyphs);
					cursor = wordCursor;
					line.width -= wordWidth;
					line = newLine();
					continue;
				}
			}
			cursor++;
			count = 0;
		}
		if (!line.width) lines.pop();
		populateBuffers(lines);
	}
	function populateBuffers(lines) {
		const texW = font.common.scaleW;
		const texH = font.common.scaleH;
		let y = .07 * size;
		let j = 0;
		for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
			let line = lines[lineIndex];
			for (let i = 0; i < line.glyphs.length; i++) {
				const glyph = line.glyphs[i][0];
				let x = line.glyphs[i][1];
				if (align === "center") x -= line.width * .5;
				else if (align === "right") x -= line.width;
				if (whitespace.test(glyph.char)) continue;
				x += glyph.xoffset * scale;
				y -= glyph.yoffset * scale;
				let w = glyph.width * scale;
				let h = glyph.height * scale;
				buffers.position.set([
					x,
					y - h,
					0,
					x,
					y,
					0,
					x + w,
					y - h,
					0,
					x + w,
					y,
					0
				], j * 4 * 3);
				let u = glyph.x / texW;
				let uw = glyph.width / texW;
				let v = 1 - glyph.y / texH;
				let vh = glyph.height / texH;
				buffers.uv.set([
					u,
					v - vh,
					u,
					v,
					u + uw,
					v - vh,
					u + uw,
					v
				], j * 4 * 2);
				y += glyph.yoffset * scale;
				j++;
			}
			y -= size * lineHeight;
		}
		_this.buffers = buffers;
		_this.numLines = lines.length;
		_this.height = _this.numLines * size * lineHeight;
		_this.width = Math.max(...lines.map((line) => line.width));
	}
	function getKernPairOffset(id1, id2) {
		for (let i = 0; i < font.kernings.length; i++) {
			let k = font.kernings[i];
			if (k.first < id1) continue;
			if (k.second < id2) continue;
			if (k.first > id1) return 0;
			if (k.first === id1 && k.second > id2) return 0;
			return k.amount;
		}
		return 0;
	}
	this.resize = function(options) {
		({width} = options);
		layout();
	};
	this.update = function(options) {
		({text} = options);
		createGeometry();
	};
}
//#endregion
//#region ../node_modules/ogl/src/extras/NormalProgram.js
var vertex$6 = `
    precision highp float;
    precision highp int;

    attribute vec3 position;
    attribute vec3 normal;

    uniform mat3 normalMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    varying vec3 vNormal;

    void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;
var fragment$6 = `
    precision highp float;
    precision highp int;

    varying vec3 vNormal;

    void main() {
        gl_FragColor.rgb = normalize(vNormal);
        gl_FragColor.a = 1.0;
    }
`;
function NormalProgram(gl) {
	return new Program(gl, {
		vertex: vertex$6,
		fragment: fragment$6,
		cullFace: false
	});
}
//#endregion
//#region ../node_modules/ogl/src/extras/Flowmap.js
var Flowmap = class {
	constructor(gl, { size = 128, falloff = .3, alpha = 1, dissipation = .98, type } = {}) {
		const _this = this;
		this.gl = gl;
		this.uniform = { value: null };
		this.mask = {
			read: null,
			write: null,
			swap: () => {
				let temp = _this.mask.read;
				_this.mask.read = _this.mask.write;
				_this.mask.write = temp;
				_this.uniform.value = _this.mask.read.texture;
			}
		};
		createFBOs();
		this.aspect = 1;
		this.mouse = new Vec2();
		this.velocity = new Vec2();
		this.mesh = initProgram();
		function createFBOs() {
			if (!type) type = gl.HALF_FLOAT || gl.renderer.extensions["OES_texture_half_float"].HALF_FLOAT_OES;
			let minFilter = (() => {
				if (gl.renderer.isWebgl2) return gl.LINEAR;
				if (gl.renderer.extensions[`OES_texture_${type === gl.FLOAT ? "" : "half_"}float_linear`]) return gl.LINEAR;
				return gl.NEAREST;
			})();
			const options = {
				width: size,
				height: size,
				type,
				format: gl.RGBA,
				internalFormat: gl.renderer.isWebgl2 ? type === gl.FLOAT ? gl.RGBA32F : gl.RGBA16F : gl.RGBA,
				minFilter,
				depth: false
			};
			_this.mask.read = new RenderTarget(gl, options);
			_this.mask.write = new RenderTarget(gl, options);
			_this.mask.swap();
		}
		function initProgram() {
			return new Mesh(gl, {
				geometry: new Triangle(gl),
				program: new Program(gl, {
					vertex: vertex$5,
					fragment: fragment$5,
					uniforms: {
						tMap: _this.uniform,
						uFalloff: { value: falloff * .5 },
						uAlpha: { value: alpha },
						uDissipation: { value: dissipation },
						uAspect: { value: 1 },
						uMouse: { value: _this.mouse },
						uVelocity: { value: _this.velocity }
					},
					depthTest: false
				})
			});
		}
	}
	update() {
		this.mesh.program.uniforms.uAspect.value = this.aspect;
		this.gl.renderer.render({
			scene: this.mesh,
			target: this.mask.write,
			clear: false
		});
		this.mask.swap();
	}
};
var vertex$5 = `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`;
var fragment$5 = `
    precision highp float;

    uniform sampler2D tMap;

    uniform float uFalloff;
    uniform float uAlpha;
    uniform float uDissipation;
    
    uniform float uAspect;
    uniform vec2 uMouse;
    uniform vec2 uVelocity;

    varying vec2 vUv;

    void main() {
        vec4 color = texture2D(tMap, vUv) * uDissipation;

        vec2 cursor = vUv - uMouse;
        cursor.x *= uAspect;

        vec3 stamp = vec3(uVelocity * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(uVelocity)), 3.0));
        float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;

        color.rgb = mix(color.rgb, stamp, vec3(falloff));

        gl_FragColor = color;
    }
`;
//#endregion
//#region ../node_modules/ogl/src/extras/GPGPU.js
var GPGPU = class {
	constructor(gl, { data = /* @__PURE__ */ new Float32Array(16), geometry = new Triangle(gl), type }) {
		this.gl = gl;
		const initialData = data;
		this.passes = [];
		this.geometry = geometry;
		this.dataLength = initialData.length / 4;
		this.size = Math.pow(2, Math.ceil(Math.log(Math.ceil(Math.sqrt(this.dataLength))) / Math.LN2));
		this.coords = new Float32Array(this.dataLength * 2);
		for (let i = 0; i < this.dataLength; i++) {
			const x = i % this.size / this.size;
			const y = Math.floor(i / this.size) / this.size;
			this.coords.set([x, y], i * 2);
		}
		const floatArray = (() => {
			if (initialData.length === this.size * this.size * 4) return initialData;
			else {
				const a = new Float32Array(this.size * this.size * 4);
				a.set(initialData);
				return a;
			}
		})();
		this.uniform = { value: new Texture(gl, {
			image: floatArray,
			target: gl.TEXTURE_2D,
			type: gl.FLOAT,
			format: gl.RGBA,
			internalFormat: gl.renderer.isWebgl2 ? gl.RGBA32F : gl.RGBA,
			wrapS: gl.CLAMP_TO_EDGE,
			wrapT: gl.CLAMP_TO_EDGE,
			generateMipmaps: false,
			minFilter: gl.NEAREST,
			magFilter: gl.NEAREST,
			width: this.size,
			flipY: false
		}) };
		const options = {
			width: this.size,
			height: this.size,
			type: type || gl.HALF_FLOAT || gl.renderer.extensions["OES_texture_half_float"].HALF_FLOAT_OES,
			format: gl.RGBA,
			internalFormat: gl.renderer.isWebgl2 ? type === gl.FLOAT ? gl.RGBA32F : gl.RGBA16F : gl.RGBA,
			minFilter: gl.NEAREST,
			depth: false,
			unpackAlignment: 1
		};
		this.fbo = {
			read: new RenderTarget(gl, options),
			write: new RenderTarget(gl, options),
			swap: () => {
				let temp = this.fbo.read;
				this.fbo.read = this.fbo.write;
				this.fbo.write = temp;
				this.uniform.value = this.fbo.read.texture;
			}
		};
	}
	addPass({ vertex = defaultVertex$2, fragment = defaultFragment$2, uniforms = {}, textureUniform = "tMap", enabled = true } = {}) {
		uniforms[textureUniform] = this.uniform;
		const program = new Program(this.gl, {
			vertex,
			fragment,
			uniforms
		});
		const pass = {
			mesh: new Mesh(this.gl, {
				geometry: this.geometry,
				program
			}),
			program,
			uniforms,
			enabled,
			textureUniform
		};
		this.passes.push(pass);
		return pass;
	}
	render() {
		this.passes.filter((pass) => pass.enabled).forEach((pass, i) => {
			this.gl.renderer.render({
				scene: pass.mesh,
				target: this.fbo.write,
				clear: false
			});
			this.fbo.swap();
		});
	}
};
var defaultVertex$2 = `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`;
var defaultFragment$2 = `
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`;
//#endregion
//#region ../node_modules/ogl/src/extras/Polyline.js
var tmp = /* @__PURE__ */ new Vec3();
var Polyline = class {
	constructor(gl, { points, vertex = defaultVertex$1, fragment = defaultFragment$1, uniforms = {}, attributes = {} }) {
		this.gl = gl;
		this.points = points;
		this.count = points.length;
		this.position = new Float32Array(this.count * 3 * 2);
		this.prev = new Float32Array(this.count * 3 * 2);
		this.next = new Float32Array(this.count * 3 * 2);
		const side = new Float32Array(this.count * 1 * 2);
		const uv = new Float32Array(this.count * 2 * 2);
		const index = new Uint16Array((this.count - 1) * 3 * 2);
		for (let i = 0; i < this.count; i++) {
			side.set([-1, 1], i * 2);
			const v = i / (this.count - 1);
			uv.set([
				0,
				v,
				1,
				v
			], i * 4);
			if (i === this.count - 1) continue;
			const ind = i * 2;
			index.set([
				ind + 0,
				ind + 1,
				ind + 2
			], (ind + 0) * 3);
			index.set([
				ind + 2,
				ind + 1,
				ind + 3
			], (ind + 1) * 3);
		}
		const geometry = this.geometry = new Geometry(gl, Object.assign(attributes, {
			position: {
				size: 3,
				data: this.position
			},
			prev: {
				size: 3,
				data: this.prev
			},
			next: {
				size: 3,
				data: this.next
			},
			side: {
				size: 1,
				data: side
			},
			uv: {
				size: 2,
				data: uv
			},
			index: {
				size: 1,
				data: index
			}
		}));
		this.updateGeometry();
		if (!uniforms.uResolution) this.resolution = uniforms.uResolution = { value: new Vec2() };
		if (!uniforms.uDPR) this.dpr = uniforms.uDPR = { value: 1 };
		if (!uniforms.uThickness) this.thickness = uniforms.uThickness = { value: 1 };
		if (!uniforms.uColor) this.color = uniforms.uColor = { value: new Color("#000") };
		if (!uniforms.uMiter) this.miter = uniforms.uMiter = { value: 1 };
		this.resize();
		const program = this.program = new Program(gl, {
			vertex,
			fragment,
			uniforms
		});
		this.mesh = new Mesh(gl, {
			geometry,
			program
		});
	}
	updateGeometry() {
		this.points.forEach((p, i) => {
			p.toArray(this.position, i * 3 * 2);
			p.toArray(this.position, i * 3 * 2 + 3);
			if (!i) {
				tmp.copy(p).sub(this.points[i + 1]).add(p);
				tmp.toArray(this.prev, i * 3 * 2);
				tmp.toArray(this.prev, i * 3 * 2 + 3);
			} else {
				p.toArray(this.next, (i - 1) * 3 * 2);
				p.toArray(this.next, (i - 1) * 3 * 2 + 3);
			}
			if (i === this.points.length - 1) {
				tmp.copy(p).sub(this.points[i - 1]).add(p);
				tmp.toArray(this.next, i * 3 * 2);
				tmp.toArray(this.next, i * 3 * 2 + 3);
			} else {
				p.toArray(this.prev, (i + 1) * 3 * 2);
				p.toArray(this.prev, (i + 1) * 3 * 2 + 3);
			}
		});
		this.geometry.attributes.position.needsUpdate = true;
		this.geometry.attributes.prev.needsUpdate = true;
		this.geometry.attributes.next.needsUpdate = true;
	}
	resize() {
		if (this.resolution) this.resolution.value.set(this.gl.canvas.width, this.gl.canvas.height);
		if (this.dpr) this.dpr.value = this.gl.renderer.dpr;
	}
};
var defaultVertex$1 = `
    precision highp float;

    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;
    uniform float uMiter;

    varying vec2 vUv;

    vec4 getPosition() {
        mat4 mvp = projectionMatrix * modelViewMatrix;
        vec4 current = mvp * vec4(position, 1);
        vec4 nextPos = mvp * vec4(next, 1);
        vec4 prevPos = mvp * vec4(prev, 1);

        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    
        vec2 currentScreen = current.xy / current.w * aspect;
        vec2 nextScreen = nextPos.xy / nextPos.w * aspect;
        vec2 prevScreen = prevPos.xy / prevPos.w * aspect;
    
        vec2 dir1 = normalize(currentScreen - prevScreen);
        vec2 dir2 = normalize(nextScreen - currentScreen);
        vec2 dir = normalize(dir1 + dir2);
    
        vec2 normal = vec2(-dir.y, dir.x);
        normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);
        normal /= aspect;

        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;
    
        return current;
    }

    void main() {
        vUv = uv;
        gl_Position = getPosition();
    }
`;
var defaultFragment$1 = `
    precision highp float;

    uniform vec3 uColor;
    
    varying vec2 vUv;

    void main() {
        gl_FragColor.rgb = uColor;
        gl_FragColor.a = 1.0;
    }
`;
//#endregion
//#region ../node_modules/ogl/src/extras/Shadow.js
var Shadow = class {
	constructor(gl, { light = new Camera(gl), width = 1024, height = width }) {
		this.gl = gl;
		this.light = light;
		this.target = new RenderTarget(gl, {
			width,
			height
		});
		this.targetUniform = { value: this.target.texture };
		this.depthProgram = new Program(gl, {
			vertex: defaultVertex,
			fragment: defaultFragment,
			cullFace: false
		});
		this.castMeshes = [];
	}
	add({ mesh, receive = true, cast = true, vertex = defaultVertex, fragment = defaultFragment, uniformProjection = "shadowProjectionMatrix", uniformView = "shadowViewMatrix", uniformTexture = "tShadow" }) {
		if (receive && !mesh.program.uniforms[uniformProjection]) {
			mesh.program.uniforms[uniformProjection] = { value: this.light.projectionMatrix };
			mesh.program.uniforms[uniformView] = { value: this.light.viewMatrix };
			mesh.program.uniforms[uniformTexture] = this.targetUniform;
		}
		if (!cast) return;
		this.castMeshes.push(mesh);
		mesh.colorProgram = mesh.program;
		if (mesh.depthProgram) return;
		if (vertex === defaultVertex && fragment === defaultFragment) {
			mesh.depthProgram = this.depthProgram;
			return;
		}
		mesh.depthProgram = new Program(this.gl, {
			vertex,
			fragment,
			cullFace: false
		});
	}
	setSize({ width = 1024, height = width }) {
		this.target = new RenderTarget(this.gl, {
			width,
			height
		});
		this.targetUniform.value = this.target.texture;
	}
	render({ scene }) {
		scene.traverse((node) => {
			if (!node.draw) return;
			if (!!~this.castMeshes.indexOf(node)) node.program = node.depthProgram;
			else {
				node.isForceVisibility = node.visible;
				node.visible = false;
			}
		});
		this.gl.renderer.render({
			scene,
			camera: this.light,
			target: this.target
		});
		scene.traverse((node) => {
			if (!node.draw) return;
			if (!!~this.castMeshes.indexOf(node)) node.program = node.colorProgram;
			else node.visible = node.isForceVisibility;
		});
	}
};
var defaultVertex = `
    attribute vec3 position;
    attribute vec2 uv;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;
var defaultFragment = `
    precision highp float;

    vec4 packRGBA (float v) {
        vec4 pack = fract(vec4(1.0, 255.0, 65025.0, 16581375.0) * v);
        pack -= pack.yzww * vec2(1.0 / 255.0, 0.0).xxxy;
        return pack;
    }

    void main() {
        gl_FragColor = packRGBA(gl_FragCoord.z);
    }
`;
//#endregion
//#region ../node_modules/ogl/src/extras/KTXTexture.js
var KTXTexture = class extends Texture {
	constructor(gl, { buffer, wrapS = gl.CLAMP_TO_EDGE, wrapT = gl.CLAMP_TO_EDGE, anisotropy = 0, minFilter, magFilter } = {}) {
		super(gl, {
			generateMipmaps: false,
			wrapS,
			wrapT,
			anisotropy,
			minFilter,
			magFilter
		});
		if (buffer) return this.parseBuffer(buffer);
	}
	parseBuffer(buffer) {
		const ktx = new KhronosTextureContainer(buffer);
		ktx.mipmaps.isCompressedTexture = true;
		this.image = ktx.mipmaps;
		this.internalFormat = ktx.glInternalFormat;
		if (ktx.numberOfMipmapLevels > 1) {
			if (this.minFilter === this.gl.LINEAR) this.minFilter = this.gl.NEAREST_MIPMAP_LINEAR;
		} else if (this.minFilter === this.gl.NEAREST_MIPMAP_LINEAR) this.minFilter = this.gl.LINEAR;
	}
};
function KhronosTextureContainer(buffer) {
	const idCheck = [
		171,
		75,
		84,
		88,
		32,
		49,
		49,
		187,
		13,
		10,
		26,
		10
	];
	const id = new Uint8Array(buffer, 0, 12);
	for (let i = 0; i < id.length; i++) if (id[i] !== idCheck[i]) return console.error("File missing KTX identifier");
	const size = Uint32Array.BYTES_PER_ELEMENT;
	const head = new DataView(buffer, 12, 13 * size);
	const littleEndian = head.getUint32(0, true) === 67305985;
	if (head.getUint32(1 * size, littleEndian) !== 0) return console.warn("only compressed formats currently supported");
	this.glInternalFormat = head.getUint32(4 * size, littleEndian);
	let width = head.getUint32(6 * size, littleEndian);
	let height = head.getUint32(7 * size, littleEndian);
	this.numberOfFaces = head.getUint32(10 * size, littleEndian);
	this.numberOfMipmapLevels = Math.max(1, head.getUint32(11 * size, littleEndian));
	const bytesOfKeyValueData = head.getUint32(12 * size, littleEndian);
	this.mipmaps = [];
	let offset = 64 + bytesOfKeyValueData;
	for (let level = 0; level < this.numberOfMipmapLevels; level++) {
		const levelSize = new Int32Array(buffer, offset, 1)[0];
		offset += 4;
		for (let face = 0; face < this.numberOfFaces; face++) {
			const data = new Uint8Array(buffer, offset, levelSize);
			this.mipmaps.push({
				data,
				width,
				height
			});
			offset += levelSize;
			offset += 3 - (levelSize + 3) % 4;
		}
		width = width >> 1;
		height = height >> 1;
	}
}
//#endregion
//#region ../node_modules/ogl/src/extras/TextureLoader.js
var cache = {};
var supportedExtensions = [];
var TextureLoader = class {
	static load(gl, { src, wrapS = gl.CLAMP_TO_EDGE, wrapT = gl.CLAMP_TO_EDGE, anisotropy = 0, format = gl.RGBA, internalFormat = format, generateMipmaps = true, minFilter = generateMipmaps ? gl.NEAREST_MIPMAP_LINEAR : gl.LINEAR, magFilter = gl.LINEAR, premultiplyAlpha = false, unpackAlignment = 4, flipY = true } = {}) {
		const support = this.getSupportedExtensions(gl);
		let ext = "none";
		if (typeof src === "string") ext = src.split(".").pop().split("?")[0].toLowerCase();
		if (typeof src === "object") {
			for (const prop in src) if (support.includes(prop.toLowerCase())) {
				ext = prop.toLowerCase();
				src = src[prop];
				break;
			}
		}
		const cacheID = src + wrapS + wrapT + anisotropy + format + internalFormat + generateMipmaps + minFilter + magFilter + premultiplyAlpha + unpackAlignment + flipY + gl.renderer.id;
		if (cache[cacheID]) return cache[cacheID];
		let texture;
		switch (ext) {
			case "ktx":
			case "pvrtc":
			case "s3tc":
			case "etc":
			case "etc1":
			case "astc":
				texture = new KTXTexture(gl, {
					src,
					wrapS,
					wrapT,
					anisotropy,
					minFilter,
					magFilter
				});
				texture.loaded = this.loadKTX(src, texture);
				break;
			case "webp":
			case "jpg":
			case "jpeg":
			case "png":
				texture = new Texture(gl, {
					wrapS,
					wrapT,
					anisotropy,
					format,
					internalFormat,
					generateMipmaps,
					minFilter,
					magFilter,
					premultiplyAlpha,
					unpackAlignment,
					flipY
				});
				texture.loaded = this.loadImage(gl, src, texture, flipY);
				break;
			default:
				console.warn("No supported format supplied");
				texture = new Texture(gl);
		}
		texture.ext = ext;
		cache[cacheID] = texture;
		return texture;
	}
	static getSupportedExtensions(gl) {
		if (supportedExtensions.length) return supportedExtensions;
		const extensions = {
			pvrtc: gl.renderer.getExtension("WEBGL_compressed_texture_pvrtc") || gl.renderer.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
			s3tc: gl.renderer.getExtension("WEBGL_compressed_texture_s3tc"),
			etc1: gl.renderer.getExtension("WEBGL_compressed_texture_etc1"),
			astc: gl.renderer.getExtension("WEBGL_compressed_texture_astc"),
			bc7: gl.renderer.getExtension("EXT_texture_compression_bptc")
		};
		for (const ext in extensions) if (extensions[ext]) supportedExtensions.push(ext);
		supportedExtensions.push("png", "jpg", "webp");
		return supportedExtensions;
	}
	static loadKTX(src, texture) {
		return fetch(src).then((res) => res.arrayBuffer()).then((buffer) => texture.parseBuffer(buffer));
	}
	static loadImage(gl, src, texture, flipY) {
		return decodeImage(src, flipY).then((imgBmp) => {
			if (!gl.renderer.isWebgl2 && (!powerOfTwo(imgBmp.width) || !powerOfTwo(imgBmp.height))) {
				if (texture.generateMipmaps) texture.generateMipmaps = false;
				if (texture.minFilter === gl.NEAREST_MIPMAP_LINEAR) texture.minFilter = gl.LINEAR;
				if (texture.wrapS === gl.REPEAT) texture.wrapS = texture.wrapT = gl.CLAMP_TO_EDGE;
			}
			texture.image = imgBmp;
			texture.onUpdate = () => {
				if (imgBmp.close) imgBmp.close();
				texture.onUpdate = null;
			};
			return imgBmp;
		});
	}
	static clearCache() {
		cache = {};
	}
};
function powerOfTwo(value) {
	return Math.log2(value) % 1 === 0;
}
function decodeImage(src, flipY) {
	return new Promise((resolve, reject) => {
		if (isCreateImageBitmap()) fetch(src, { mode: "cors" }).then((r) => r.blob()).then((b) => createImageBitmap(b, {
			imageOrientation: flipY ? "flipY" : "none",
			premultiplyAlpha: "none"
		})).then(resolve).catch((err) => reject(err));
		else {
			const img = new Image();
			img.crossOrigin = "";
			img.src = src;
			img.onerror = ({ type }) => reject(`${type}: Loading image`);
			img.onload = () => resolve(img);
		}
	});
}
function isCreateImageBitmap() {
	if (!navigator.userAgent.toLowerCase().includes("chrome")) return false;
	try {
		createImageBitmap;
	} catch (e) {
		return false;
	}
	return true;
}
//#endregion
//#region ../node_modules/ogl/src/extras/GLTFAnimation.js
var tmpVec3A = /* @__PURE__ */ new Vec3();
var tmpVec3B = /* @__PURE__ */ new Vec3();
var tmpVec3C = /* @__PURE__ */ new Vec3();
var tmpVec3D = /* @__PURE__ */ new Vec3();
var tmpQuatA = /* @__PURE__ */ new Quat();
var tmpQuatB = /* @__PURE__ */ new Quat();
var tmpQuatC = /* @__PURE__ */ new Quat();
var tmpQuatD = /* @__PURE__ */ new Quat();
var GLTFAnimation = class {
	constructor(data, weight = 1) {
		this.data = data;
		this.elapsed = 0;
		this.weight = weight;
		this.loop = true;
		this.startTime = data.reduce((a, { times }) => Math.min(a, times[0]), Infinity);
		this.endTime = data.reduce((a, { times }) => Math.max(a, times[times.length - 1]), 0);
		this.duration = this.endTime - this.startTime;
	}
	update(totalWeight = 1, isSet) {
		const weight = isSet ? 1 : this.weight / totalWeight;
		const elapsed = !this.duration ? 0 : (this.loop ? this.elapsed % this.duration : Math.min(this.elapsed, this.duration - .001)) + this.startTime;
		this.data.forEach(({ node, transform, interpolation, times, values }) => {
			if (!this.duration) {
				let val = tmpVec3A;
				let size = 3;
				if (transform === "quaternion") {
					val = tmpQuatA;
					size = 4;
				}
				val.fromArray(values, 0);
				if (size === 4) node[transform].slerp(val, weight);
				else node[transform].lerp(val, weight);
				return;
			}
			const prevIndex = Math.max(1, times.findIndex((t) => t > elapsed)) - 1;
			const nextIndex = prevIndex + 1;
			let alpha = (elapsed - times[prevIndex]) / (times[nextIndex] - times[prevIndex]);
			if (interpolation === "STEP") alpha = 0;
			let prevVal = tmpVec3A;
			let prevTan = tmpVec3B;
			let nextTan = tmpVec3C;
			let nextVal = tmpVec3D;
			let size = 3;
			if (transform === "quaternion") {
				prevVal = tmpQuatA;
				prevTan = tmpQuatB;
				nextTan = tmpQuatC;
				nextVal = tmpQuatD;
				size = 4;
			}
			if (interpolation === "CUBICSPLINE") {
				prevVal.fromArray(values, prevIndex * size * 3 + size * 1);
				prevTan.fromArray(values, prevIndex * size * 3 + size * 2);
				nextTan.fromArray(values, nextIndex * size * 3 + size * 0);
				nextVal.fromArray(values, nextIndex * size * 3 + size * 1);
				prevVal = this.cubicSplineInterpolate(alpha, prevVal, prevTan, nextTan, nextVal);
				if (size === 4) prevVal.normalize();
			} else {
				prevVal.fromArray(values, prevIndex * size);
				nextVal.fromArray(values, nextIndex * size);
				if (size === 4) prevVal.slerp(nextVal, alpha);
				else prevVal.lerp(nextVal, alpha);
			}
			if (size === 4) node[transform].slerp(prevVal, weight);
			else node[transform].lerp(prevVal, weight);
		});
	}
	cubicSplineInterpolate(t, prevVal, prevTan, nextTan, nextVal) {
		const t2 = t * t;
		const t3 = t2 * t;
		const s2 = 3 * t2 - 2 * t3;
		const s3 = t3 - t2;
		const s0 = 1 - s2;
		const s1 = s3 - t2 + t;
		for (let i = 0; i < prevVal.length; i++) prevVal[i] = s0 * prevVal[i] + s1 * (1 - t) * prevTan[i] + s2 * nextVal[i] + s3 * t * nextTan[i];
		return prevVal;
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/GLTFSkin.js
var tempMat4 = /* @__PURE__ */ new Mat4();
var identity = /* @__PURE__ */ new Mat4();
var GLTFSkin = class extends Mesh {
	constructor(gl, { skeleton, geometry, program, mode = gl.TRIANGLES } = {}) {
		super(gl, {
			geometry,
			program,
			mode
		});
		this.skeleton = skeleton;
		this.program = program;
		this.createBoneTexture();
	}
	createBoneTexture() {
		if (!this.skeleton.joints.length) return;
		const size = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(this.skeleton.joints.length * 4)) / Math.LN2)));
		this.boneMatrices = new Float32Array(size * size * 4);
		this.boneTextureSize = size;
		this.boneTexture = new Texture(this.gl, {
			image: this.boneMatrices,
			generateMipmaps: false,
			type: this.gl.FLOAT,
			internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA32F : this.gl.RGBA,
			minFilter: this.gl.NEAREST,
			magFilter: this.gl.NEAREST,
			flipY: false,
			width: size
		});
	}
	updateUniforms() {
		this.skeleton.joints.forEach((bone, i) => {
			tempMat4.multiply(bone.worldMatrix, bone.bindInverse);
			this.boneMatrices.set(tempMat4, i * 16);
		});
		this.boneTexture.needsUpdate = true;
		this.program.uniforms.boneTexture.value = this.boneTexture;
		this.program.uniforms.boneTextureSize.value = this.boneTextureSize;
	}
	draw({ camera } = {}) {
		if (!this.program.uniforms.boneTexture) Object.assign(this.program.uniforms, {
			boneTexture: { value: this.boneTexture },
			boneTextureSize: { value: this.boneTextureSize }
		});
		this.updateUniforms();
		const _worldMatrix = this.worldMatrix;
		this.worldMatrix = identity;
		super.draw({ camera });
		this.worldMatrix = _worldMatrix;
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/InstancedMesh.js
var InstancedMesh = class extends Mesh {
	constructor(...args) {
		super(...args);
		this.frustumCulled = false;
		this.isInstancedMesh = true;
	}
	addFrustumCull() {
		this.instanceTransforms = null;
		this.instanceLightmapScaleOffset = null;
		this.totalInstanceCount = 0;
		this.frustumCullFunction = null;
		this.instanceRenderList = null;
		if (!this.geometry.attributes.instanceMatrix) console.error(`mesh ${this.name ? `"${this.name}" ` : ``}missing instanceMatrix attribute; unable to frustum cull`);
		const matrixData = this.geometry.attributes.instanceMatrix.data;
		this.instanceTransforms = [];
		for (let i = 0, j = 0; i < matrixData.length; i += 16, j++) {
			const transform = new Transform();
			transform.index = j;
			transform.matrix.fromArray(matrixData, i);
			transform.decompose();
			this.instanceTransforms.push(transform);
			transform.setParent(this.parent);
		}
		this.totalInstanceCount = this.instanceTransforms.length;
		if (!!this.geometry.attributes.lightmapScaleOffset) {
			const lightmapData = this.geometry.attributes.lightmapScaleOffset.data;
			for (let i = 0, j = 0; i < lightmapData.length; i += 4, j++) this.instanceTransforms[j].lightmapData = new Vec4().fromArray(lightmapData, i);
		}
		this.frustumCullFunction = ({ camera }) => {
			this.instanceRenderList = [];
			this.instanceTransforms.forEach((transform) => {
				if (!camera.frustumIntersectsMesh(this, transform.worldMatrix)) return;
				this.instanceRenderList.push(transform);
			});
			this.instanceRenderList.forEach((transform, i) => {
				transform.matrix.toArray(this.geometry.attributes.instanceMatrix.data, i * 16);
				if (transform.lightmapData) {
					transform.lightmapData.toArray(this.geometry.attributes.lightmapScaleOffset.data, i * 4);
					this.geometry.attributes.lightmapScaleOffset.needsUpdate = true;
				}
			});
			this.geometry.instancedCount = this.instanceRenderList.length;
			this.geometry.attributes.instanceMatrix.needsUpdate = true;
		};
		this.onBeforeRender(this.frustumCullFunction);
	}
	removeFrustumCull() {
		this.offBeforeRender(this.frustumCullFunction);
		this.geometry.instancedCount = this.totalInstanceCount;
		this.instanceTransforms.forEach((transform, i) => {
			transform.matrix.toArray(this.geometry.attributes.instanceMatrix.data, i * 16);
			if (transform.lightmapData) {
				transform.lightmapData.toArray(this.geometry.attributes.lightmapScaleOffset.data, i * 4);
				this.geometry.attributes.lightmapScaleOffset.needsUpdate = true;
			}
		});
		this.geometry.attributes.instanceMatrix.needsUpdate = true;
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/GLTFLoader.js
var TYPE_ARRAY = {
	5120: Int8Array,
	5121: Uint8Array,
	5122: Int16Array,
	5123: Uint16Array,
	5125: Uint32Array,
	5126: Float32Array,
	"image/jpeg": Uint8Array,
	"image/png": Uint8Array,
	"image/webp": Uint8Array
};
var TYPE_SIZE = {
	SCALAR: 1,
	VEC2: 2,
	VEC3: 3,
	VEC4: 4,
	MAT2: 4,
	MAT3: 9,
	MAT4: 16
};
var ATTRIBUTES = {
	POSITION: "position",
	NORMAL: "normal",
	TANGENT: "tangent",
	TEXCOORD_0: "uv",
	TEXCOORD_1: "uv2",
	COLOR_0: "color",
	WEIGHTS_0: "skinWeight",
	JOINTS_0: "skinIndex"
};
var TRANSFORMS = {
	translation: "position",
	rotation: "quaternion",
	scale: "scale"
};
var GLTFLoader = class {
	static setDracoManager(manager) {
		this.dracoManager = manager;
	}
	static setBasisManager(manager) {
		this.basisManager = manager;
	}
	static async load(gl, src) {
		const dir = src.split("/").slice(0, -1).join("/") + "/";
		const desc = await this.parseDesc(src);
		return this.parse(gl, desc, dir);
	}
	static async parse(gl, desc, dir) {
		if (desc.asset === void 0 || desc.asset.version[0] < 2) console.warn("Only GLTF >=2.0 supported. Attempting to parse.");
		if (desc.extensionsRequired?.includes("KHR_draco_mesh_compression") && !this.dracoManager) console.warn("KHR_draco_mesh_compression extension required but no manager supplied. Use .setDracoManager()");
		if (desc.extensionsRequired?.includes("KHR_texture_basisu") && !this.basisManager) console.warn("KHR_texture_basisu extension required but no manager supplied. Use .setBasisManager()");
		const buffers = await this.loadBuffers(desc, dir);
		gl.renderer.bindVertexArray(null);
		const bufferViews = this.parseBufferViews(gl, desc, buffers);
		const images = await this.parseImages(gl, desc, dir, bufferViews);
		const textures = this.parseTextures(gl, desc, images);
		const materials = this.parseMaterials(gl, desc, textures);
		const skins = this.parseSkins(gl, desc, bufferViews);
		const meshes = await this.parseMeshes(gl, desc, bufferViews, materials, skins);
		const [nodes, cameras] = this.parseNodes(gl, desc, meshes, skins, images);
		this.populateSkins(skins, nodes);
		const animations = this.parseAnimations(gl, desc, nodes, bufferViews);
		const scenes = this.parseScenes(desc, nodes);
		const scene = scenes[desc.scene];
		const lights = this.parseLights(gl, desc, nodes, scenes);
		for (let i = nodes.length; i >= 0; i--) if (!nodes[i]) nodes.splice(i, 1);
		return {
			json: desc,
			buffers,
			bufferViews,
			cameras,
			images,
			textures,
			materials,
			meshes,
			nodes,
			lights,
			animations,
			scenes,
			scene
		};
	}
	static parseDesc(src) {
		return fetch(src, { mode: "cors" }).then((res) => res.arrayBuffer()).then((data) => {
			const textDecoder = new TextDecoder();
			if (textDecoder.decode(new Uint8Array(data, 0, 4)) === "glTF") return this.unpackGLB(data);
			else return JSON.parse(textDecoder.decode(data));
		});
	}
	static unpackGLB(glb) {
		const header = new Uint32Array(glb, 0, 3);
		if (header[0] !== 1179937895) throw new Error("Invalid glTF asset.");
		else if (header[1] !== 2) throw new Error(`Unsupported glTF binary version, "${header[1]}".`);
		const jsonChunkHeader = new Uint32Array(glb, 12, 2);
		const jsonByteOffset = 20;
		const jsonByteLength = jsonChunkHeader[0];
		if (jsonChunkHeader[1] !== 1313821514) throw new Error("Unexpected GLB layout.");
		const jsonText = new TextDecoder().decode(glb.slice(jsonByteOffset, jsonByteOffset + jsonByteLength));
		const json = JSON.parse(jsonText);
		if (jsonByteOffset + jsonByteLength === glb.byteLength) return json;
		const binaryChunkHeader = new Uint32Array(glb, jsonByteOffset + jsonByteLength, 2);
		if (binaryChunkHeader[1] !== 5130562) throw new Error("Unexpected GLB layout.");
		const binaryByteOffset = jsonByteOffset + jsonByteLength + 8;
		const binaryByteLength = binaryChunkHeader[0];
		const binary = glb.slice(binaryByteOffset, binaryByteOffset + binaryByteLength);
		json.buffers[0].binary = binary;
		return json;
	}
	static resolveURI(uri, dir) {
		if (typeof uri !== "string" || uri === "") return "";
		if (/^https?:\/\//i.test(dir) && /^\//.test(uri)) dir = dir.replace(/(^https?:\/\/[^\/]+).*/i, "$1");
		if (/^(https?:)?\/\//i.test(uri)) return uri;
		if (/^data:.*,.*$/i.test(uri)) return uri;
		if (/^blob:.*$/i.test(uri)) return uri;
		return dir + uri;
	}
	static loadBuffers(desc, dir) {
		if (!desc.buffers) return null;
		return Promise.all(desc.buffers.map((buffer) => {
			if (buffer.binary) return buffer.binary;
			const uri = this.resolveURI(buffer.uri, dir);
			return fetch(uri, { mode: "cors" }).then((res) => res.arrayBuffer());
		}));
	}
	static parseBufferViews(gl, desc, buffers) {
		if (!desc.bufferViews) return null;
		const bufferViews = desc.bufferViews;
		desc.meshes && desc.meshes.forEach(({ primitives }) => {
			primitives.forEach(({ attributes, indices, extensions }) => {
				for (const attr in attributes) {
					const accessor = desc.accessors[attributes[attr]];
					if (accessor.bufferView === void 0 && !!extensions) {
						if (extensions.KHR_draco_mesh_compression) {
							accessor.bufferView = extensions.KHR_draco_mesh_compression.bufferView;
							bufferViews[accessor.bufferView].isDraco = true;
						}
					}
					bufferViews[accessor.bufferView].isAttribute = true;
				}
				if (indices !== void 0) {
					const accessor = desc.accessors[indices];
					if (accessor.bufferView === void 0 && !!extensions) {
						if (extensions.KHR_draco_mesh_compression) {
							accessor.bufferView = extensions.KHR_draco_mesh_compression.bufferView;
							bufferViews[accessor.bufferView].isDraco = true;
						}
					}
					bufferViews[accessor.bufferView].isAttribute = true;
					bufferViews[accessor.bufferView].target = gl.ELEMENT_ARRAY_BUFFER;
				}
			});
		});
		desc.accessors.forEach(({ bufferView: bufferViewIndex, componentType }) => {
			if (bufferViewIndex === void 0) return;
			bufferViews[bufferViewIndex].componentType = componentType;
		});
		desc.images && desc.images.forEach(({ uri, bufferView: bufferViewIndex, mimeType }) => {
			if (bufferViewIndex === void 0) return;
			bufferViews[bufferViewIndex].mimeType = mimeType;
		});
		bufferViews.forEach(({ buffer: bufferIndex, byteOffset = 0, byteLength, byteStride, target = gl.ARRAY_BUFFER, name, extensions, extras, componentType, mimeType, isAttribute, isDraco }, i) => {
			bufferViews[i].data = buffers[bufferIndex].slice(byteOffset, byteOffset + byteLength);
			if (!isAttribute || isDraco) return;
			const buffer = gl.createBuffer();
			gl.bindBuffer(target, buffer);
			gl.renderer.state.boundBuffer = buffer;
			gl.bufferData(target, bufferViews[i].data, gl.STATIC_DRAW);
			bufferViews[i].buffer = buffer;
		});
		return bufferViews;
	}
	static parseImages(gl, desc, dir, bufferViews) {
		if (!desc.images) return null;
		return Promise.all(desc.images.map(async ({ uri, bufferView: bufferViewIndex, mimeType, name }) => {
			if (mimeType === "image/ktx2") {
				const { data } = bufferViews[bufferViewIndex];
				return await this.basisManager.parseTexture(data);
			}
			const image = new Image();
			image.name = name;
			if (uri) image.src = this.resolveURI(uri, dir);
			else if (bufferViewIndex !== void 0) {
				const { data } = bufferViews[bufferViewIndex];
				const blob = new Blob([data], { type: mimeType });
				image.src = URL.createObjectURL(blob);
			}
			image.ready = new Promise((res) => {
				image.onload = () => res();
			});
			return image;
		}));
	}
	static parseTextures(gl, desc, images) {
		if (!desc.textures) return null;
		return desc.textures.map((textureInfo) => this.createTexture(gl, desc, images, textureInfo));
	}
	static createTexture(gl, desc, images, { sampler: samplerIndex, source: sourceIndex, name, extensions, extras }) {
		if (sourceIndex === void 0 && !!extensions) {
			if (extensions.EXT_texture_webp) sourceIndex = extensions.EXT_texture_webp.source;
			if (extensions.KHR_texture_basisu) sourceIndex = extensions.KHR_texture_basisu.source;
		}
		const image = images[sourceIndex];
		if (image.texture) return image.texture;
		const options = {
			flipY: false,
			wrapS: gl.REPEAT,
			wrapT: gl.REPEAT
		};
		const sampler = samplerIndex !== void 0 ? desc.samplers[samplerIndex] : null;
		if (sampler) [
			"magFilter",
			"minFilter",
			"wrapS",
			"wrapT"
		].forEach((prop) => {
			if (sampler[prop]) options[prop] = sampler[prop];
		});
		if (image.isBasis) {
			options.image = image;
			options.internalFormat = image.internalFormat;
			if (image.isCompressedTexture) {
				options.generateMipmaps = false;
				if (image.length > 1) this.minFilter = gl.NEAREST_MIPMAP_LINEAR;
			}
			const texture = new Texture(gl, options);
			texture.name = name;
			image.texture = texture;
			return texture;
		}
		const texture = new Texture(gl, options);
		texture.name = name;
		image.texture = texture;
		image.ready.then(() => {
			texture.image = image;
		});
		return texture;
	}
	static parseMaterials(gl, desc, textures) {
		if (!desc.materials) return null;
		return desc.materials.map(({ name, extensions, extras, pbrMetallicRoughness = {}, normalTexture, occlusionTexture, emissiveTexture, emissiveFactor = [
			0,
			0,
			0
		], alphaMode = "OPAQUE", alphaCutoff = .5, doubleSided = false }) => {
			const { baseColorFactor = [
				1,
				1,
				1,
				1
			], baseColorTexture, metallicFactor = 1, roughnessFactor = 1, metallicRoughnessTexture } = pbrMetallicRoughness;
			if (baseColorTexture) baseColorTexture.texture = textures[baseColorTexture.index];
			if (normalTexture) normalTexture.texture = textures[normalTexture.index];
			if (metallicRoughnessTexture) metallicRoughnessTexture.texture = textures[metallicRoughnessTexture.index];
			if (occlusionTexture) occlusionTexture.texture = textures[occlusionTexture.index];
			if (emissiveTexture) emissiveTexture.texture = textures[emissiveTexture.index];
			return {
				name,
				extensions,
				extras,
				baseColorFactor,
				baseColorTexture,
				metallicFactor,
				roughnessFactor,
				metallicRoughnessTexture,
				normalTexture,
				occlusionTexture,
				emissiveTexture,
				emissiveFactor,
				alphaMode,
				alphaCutoff,
				doubleSided
			};
		});
	}
	static parseSkins(gl, desc, bufferViews) {
		if (!desc.skins) return null;
		return desc.skins.map(({ inverseBindMatrices, skeleton, joints }) => {
			return {
				inverseBindMatrices: this.parseAccessor(inverseBindMatrices, desc, bufferViews),
				skeleton,
				joints
			};
		});
	}
	static parseMeshes(gl, desc, bufferViews, materials, skins) {
		if (!desc.meshes) return null;
		return Promise.all(desc.meshes.map(async ({ primitives, weights, name, extensions, extras = {} }, meshIndex) => {
			let numInstances = 0;
			let skinIndices = [];
			let isLightmap = false;
			desc.nodes && desc.nodes.forEach(({ mesh, skin, extras }) => {
				if (mesh === meshIndex) {
					numInstances++;
					if (skin !== void 0) skinIndices.push(skin);
					if (extras && extras.lightmap_scale_offset) isLightmap = true;
				}
			});
			if (!!skinIndices.length) {
				primitives = await Promise.all(skinIndices.map(async (skinIndex) => {
					return (await this.parsePrimitives(gl, primitives, desc, bufferViews, materials, 1, isLightmap)).map(({ geometry, program, mode }) => {
						const mesh = new GLTFSkin(gl, {
							skeleton: skins[skinIndex],
							geometry,
							program,
							mode
						});
						mesh.name = name;
						mesh.extras = extras;
						if (extensions) mesh.extensions = extensions;
						mesh.frustumCulled = false;
						return mesh;
					});
				}));
				primitives.instanceCount = 0;
				primitives.numInstances = numInstances;
			} else primitives = (await this.parsePrimitives(gl, primitives, desc, bufferViews, materials, numInstances, isLightmap)).map(({ geometry, program, mode }) => {
				const mesh = new (geometry.attributes.instanceMatrix ? InstancedMesh : Mesh)(gl, {
					geometry,
					program,
					mode
				});
				mesh.name = name;
				mesh.extras = extras;
				if (extensions) mesh.extensions = extensions;
				mesh.numInstances = numInstances;
				return mesh;
			});
			return {
				primitives,
				weights,
				name
			};
		}));
	}
	static parsePrimitives(gl, primitives, desc, bufferViews, materials, numInstances, isLightmap) {
		return Promise.all(primitives.map(async ({ attributes, indices, material: materialIndex, mode = 4, targets, extensions, extras }) => {
			const program = new NormalProgram(gl);
			if (materialIndex !== void 0) program.gltfMaterial = materials[materialIndex];
			const geometry = new Geometry(gl);
			if (extras) geometry.extras = extras;
			if (extensions) geometry.extensions = extensions;
			if (extensions && extensions.KHR_draco_mesh_compression) {
				const bufferViewIndex = extensions.KHR_draco_mesh_compression.bufferView;
				const gltfAttributeMap = extensions.KHR_draco_mesh_compression.attributes;
				const attributeMap = {};
				const attributeTypeMap = {};
				const attributeTypeNameMap = {};
				const attributeNormalizedMap = {};
				for (const attr in attributes) {
					const accessor = desc.accessors[attributes[attr]];
					const attributeName = ATTRIBUTES[attr];
					attributeMap[attributeName] = gltfAttributeMap[attr];
					attributeTypeMap[attributeName] = accessor.componentType;
					attributeTypeNameMap[attributeName] = TYPE_ARRAY[accessor.componentType].name;
					attributeNormalizedMap[attributeName] = accessor.normalized === true;
				}
				const { data } = bufferViews[bufferViewIndex];
				const geometryData = await this.dracoManager.decodeGeometry(data, {
					attributeIds: attributeMap,
					attributeTypes: attributeTypeNameMap
				});
				for (let i = 0; i < geometryData.attributes.length; i++) {
					const result = geometryData.attributes[i];
					const name = result.name;
					const data = result.array;
					const size = result.itemSize;
					const type = attributeTypeMap[name];
					const normalized = attributeNormalizedMap[name];
					const buffer = gl.createBuffer();
					gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
					gl.renderer.state.boundBuffer = buffer;
					gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
					geometry.addAttribute(name, {
						data,
						size,
						type,
						normalized,
						buffer
					});
				}
				if (geometryData.index) {
					const data = geometryData.index.array;
					const size = geometryData.index.itemSize;
					const buffer = gl.createBuffer();
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
					gl.renderer.state.boundBuffer = buffer;
					gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, gl.STATIC_DRAW);
					geometry.addAttribute("index", {
						data,
						size,
						type: 5125,
						normalized: false,
						buffer
					});
				}
			} else {
				for (const attr in attributes) geometry.addAttribute(ATTRIBUTES[attr], this.parseAccessor(attributes[attr], desc, bufferViews));
				if (indices !== void 0) geometry.addAttribute("index", this.parseAccessor(indices, desc, bufferViews));
			}
			if (numInstances > 1) geometry.addAttribute("instanceMatrix", {
				instanced: 1,
				size: 16,
				data: new Float32Array(numInstances * 16)
			});
			if (isLightmap) geometry.addAttribute("lightmapScaleOffset", {
				instanced: 1,
				size: 4,
				data: new Float32Array(numInstances * 4)
			});
			return {
				geometry,
				program,
				mode
			};
		}));
	}
	static parseAccessor(index, desc, bufferViews) {
		const { bufferView: bufferViewIndex, byteOffset = 0, componentType, normalized = false, count, type, min, max, sparse } = desc.accessors[index];
		const { data, buffer, byteOffset: bufferByteOffset = 0, byteStride = 0, target } = bufferViews[bufferViewIndex];
		const size = TYPE_SIZE[type];
		const TypeArray = TYPE_ARRAY[componentType];
		const componentStride = byteStride / TypeArray.BYTES_PER_ELEMENT;
		const isInterleaved = !!byteStride && componentStride !== size;
		let filteredData;
		if (isInterleaved) {
			const typedData = new TypeArray(data, byteOffset);
			filteredData = new TypeArray(count * size);
			for (let i = 0; i < count; i++) {
				const start = componentStride * i;
				const end = start + size;
				filteredData.set(typedData.slice(start, end), i * size);
			}
		} else filteredData = new TypeArray(data, byteOffset, count * size);
		return {
			data: filteredData,
			size,
			type: componentType,
			normalized,
			buffer,
			stride: byteStride,
			offset: byteOffset,
			count,
			min,
			max
		};
	}
	static parseNodes(gl, desc, meshes, skins, images) {
		if (!desc.nodes) return null;
		const cameras = [];
		const nodes = desc.nodes.map(({ camera, children, skin: skinIndex, matrix, mesh: meshIndex, rotation, scale, translation, weights, name, extensions, extras }) => {
			const isCamera = camera !== void 0;
			const node = isCamera ? new Camera(gl) : new Transform();
			if (isCamera) {
				const cameraOpts = desc.cameras[camera];
				if (cameraOpts.type === "perspective") {
					const { yfov: fov, znear: near, zfar: far } = cameraOpts.perspective;
					node.perspective({
						fov: fov * (180 / Math.PI),
						near,
						far
					});
				} else {
					const { xmag, ymag, znear: near, zfar: far } = cameraOpts.orthographic;
					node.orthographic({
						near,
						far,
						left: -xmag,
						right: xmag,
						top: -ymag,
						bottom: ymag
					});
				}
				cameras.push(node);
			}
			if (name) node.name = name;
			if (extras) node.extras = extras;
			if (extensions) node.extensions = extensions;
			if (extras && extras.lightmapTexture !== void 0) extras.lightmapTexture.texture = this.createTexture(gl, desc, images, { source: extras.lightmapTexture.index });
			if (matrix) {
				node.matrix.copy(matrix);
				node.decompose();
			} else {
				if (rotation) node.quaternion.copy(rotation);
				if (scale) node.scale.copy(scale);
				if (translation) node.position.copy(translation);
				node.updateMatrix();
			}
			let isInstanced = false;
			let isFirstInstance = true;
			let isInstancedMatrix = false;
			let isSkin = skinIndex !== void 0;
			if (meshIndex !== void 0) {
				if (isSkin) {
					meshes[meshIndex].primitives[meshes[meshIndex].primitives.instanceCount].forEach((mesh) => {
						if (extras) Object.assign(mesh.extras, extras);
						mesh.setParent(node);
					});
					meshes[meshIndex].primitives.instanceCount++;
					if (meshes[meshIndex].primitives.instanceCount === meshes[meshIndex].primitives.numInstances) {
						delete meshes[meshIndex].primitives.numInstances;
						delete meshes[meshIndex].primitives.instanceCount;
					}
				} else meshes[meshIndex].primitives.forEach((mesh) => {
					if (extras) Object.assign(mesh.extras, extras);
					if (mesh.geometry.isInstanced) {
						isInstanced = true;
						if (!mesh.instanceCount) mesh.instanceCount = 0;
						else isFirstInstance = false;
						if (mesh.geometry.attributes.instanceMatrix) {
							isInstancedMatrix = true;
							node.matrix.toArray(mesh.geometry.attributes.instanceMatrix.data, mesh.instanceCount * 16);
						}
						if (mesh.geometry.attributes.lightmapScaleOffset) mesh.geometry.attributes.lightmapScaleOffset.data.set(extras.lightmap_scale_offset, mesh.instanceCount * 4);
						mesh.instanceCount++;
						if (mesh.instanceCount === mesh.numInstances) {
							delete mesh.numInstances;
							delete mesh.instanceCount;
							if (mesh.geometry.attributes.instanceMatrix) mesh.geometry.attributes.instanceMatrix.needsUpdate = true;
							if (mesh.geometry.attributes.lightmapScaleOffset) mesh.geometry.attributes.lightmapScaleOffset.needsUpdate = true;
						}
					}
					if (isInstanced) {
						if (isFirstInstance) mesh.setParent(node);
					} else mesh.setParent(node);
				});
			}
			if (isInstancedMatrix) {
				if (!isFirstInstance) return null;
				node.matrix.identity();
				node.decompose();
			}
			return node;
		});
		desc.nodes.forEach(({ children = [] }, i) => {
			children.forEach((childIndex) => {
				if (!nodes[childIndex]) return;
				nodes[childIndex].setParent(nodes[i]);
			});
		});
		meshes.forEach(({ primitives }, i) => {
			primitives.forEach((primitive, i) => {
				if (primitive.isInstancedMesh) primitive.addFrustumCull();
			});
		});
		return [nodes, cameras];
	}
	static populateSkins(skins, nodes) {
		if (!skins) return;
		skins.forEach((skin) => {
			skin.joints = skin.joints.map((i, index) => {
				const joint = nodes[i];
				joint.skin = skin;
				joint.bindInverse = new Mat4(...skin.inverseBindMatrices.data.slice(index * 16, (index + 1) * 16));
				return joint;
			});
			if (skin.skeleton) skin.skeleton = nodes[skin.skeleton];
		});
	}
	static parseAnimations(gl, desc, nodes, bufferViews) {
		if (!desc.animations) return null;
		return desc.animations.map(({ channels, samplers, name }, animationIndex) => {
			return {
				name,
				animation: new GLTFAnimation(channels.map(({ sampler: samplerIndex, target }) => {
					const { input: inputIndex, interpolation = "LINEAR", output: outputIndex } = samplers[samplerIndex];
					const { node: nodeIndex, path } = target;
					const node = nodes[nodeIndex];
					const transform = TRANSFORMS[path];
					const times = this.parseAccessor(inputIndex, desc, bufferViews).data;
					const values = this.parseAccessor(outputIndex, desc, bufferViews).data;
					if (!node.animations) node.animations = [];
					if (!node.animations.includes(animationIndex)) node.animations.push(animationIndex);
					return {
						node,
						transform,
						interpolation,
						times,
						values
					};
				}))
			};
		});
	}
	static parseScenes(desc, nodes) {
		if (!desc.scenes) return null;
		return desc.scenes.map(({ nodes: nodesIndices = [], name, extensions, extras }) => {
			const scene = nodesIndices.reduce((map, i) => {
				if (nodes[i]) map.push(nodes[i]);
				return map;
			}, []);
			scene.extras = extras;
			return scene;
		});
	}
	static parseLights(gl, desc, nodes, scenes) {
		const lights = {
			directional: [],
			point: [],
			spot: []
		};
		scenes.forEach((scene) => scene.forEach((node) => node.updateMatrixWorld()));
		const lightsDescArray = desc.extensions?.KHR_lights_punctual?.lights || [];
		nodes.forEach((node) => {
			if (!node?.extensions?.KHR_lights_punctual) return;
			const lightIndex = node.extensions.KHR_lights_punctual.light;
			const lightDesc = lightsDescArray[lightIndex];
			const light = {
				name: lightDesc.name || "",
				color: { value: new Vec3().set(lightDesc.color || 1) }
			};
			if (lightDesc.intensity !== void 0) light.color.value.multiply(lightDesc.intensity);
			switch (lightDesc.type) {
				case "directional":
					light.direction = { value: new Vec3(0, 0, 1).transformDirection(node.worldMatrix) };
					break;
				case "point":
					light.position = { value: new Vec3().applyMatrix4(node.worldMatrix) };
					light.distance = { value: lightDesc.range };
					light.decay = { value: 2 };
					break;
				case "spot": Object.assign(light, lightDesc);
			}
			lights[lightDesc.type].push(light);
		});
		return lights;
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/DracoManager.js
var id$1 = 0;
var DracoManager = class {
	constructor(workerSrc) {
		this.onMessage = this.onMessage.bind(this);
		this.queue = /* @__PURE__ */ new Map();
		this.initWorker(workerSrc);
	}
	initWorker(workerSrc) {
		this.worker = new Worker(workerSrc);
		this.worker.onmessage = this.onMessage;
	}
	onMessage({ data }) {
		const { id, error, geometry } = data;
		if (error) {
			console.log(error, id);
			return;
		}
		const geometryResolve = this.queue.get(id);
		this.queue.delete(id);
		geometryResolve(geometry);
	}
	decodeGeometry(buffer, config) {
		id$1++;
		this.worker.postMessage({
			id: id$1,
			buffer,
			config
		});
		let geometryResolve;
		const promise = new Promise((res) => geometryResolve = res);
		this.queue.set(id$1, geometryResolve);
		return promise;
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/BasisManager.js
var supportedFormat;
var id = 0;
var BasisManager = class {
	constructor(workerSrc, gl) {
		if (!supportedFormat) supportedFormat = this.getSupportedFormat(gl);
		this.onMessage = this.onMessage.bind(this);
		this.queue = /* @__PURE__ */ new Map();
		this.initWorker(workerSrc);
	}
	getSupportedFormat(gl = document.createElement("canvas").getContext("webgl")) {
		if (!!gl.getExtension("WEBGL_compressed_texture_astc")) return "astc";
		else if (!!gl.getExtension("EXT_texture_compression_bptc")) return "bptc";
		else if (!!gl.getExtension("WEBGL_compressed_texture_s3tc")) return "s3tc";
		else if (!!gl.getExtension("WEBGL_compressed_texture_etc1")) return "etc1";
		else if (!!gl.getExtension("WEBGL_compressed_texture_pvrtc") || !!gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc")) return "pvrtc";
		return "none";
	}
	initWorker(workerSrc) {
		this.worker = new Worker(workerSrc);
		this.worker.onmessage = this.onMessage;
	}
	onMessage({ data }) {
		const { id, error, image } = data;
		if (error) {
			console.log(error, id);
			return;
		}
		const textureResolve = this.queue.get(id);
		this.queue.delete(id);
		image.isBasis = true;
		textureResolve(image);
	}
	parseTexture(buffer) {
		id++;
		this.worker.postMessage({
			id,
			buffer,
			supportedFormat
		});
		let textureResolve;
		const promise = new Promise((res) => textureResolve = res);
		this.queue.set(id, textureResolve);
		return promise;
	}
};
//#endregion
//#region ../node_modules/ogl/src/extras/WireMesh.js
var WireMesh = class extends Mesh {
	constructor(gl, { geometry, wireColor = new Color(0, .75, .5), ...meshProps } = {}) {
		const wireProgram = new Program(gl, {
			vertex: vertex$4,
			fragment: fragment$4,
			uniforms: { wireColor: { value: wireColor } }
		});
		const positionArray = geometry.attributes.position.data;
		const indices = [];
		const hashSet = /* @__PURE__ */ new Set();
		function addUniqueIndices(idx) {
			for (let i = 0; i < idx.length; i += 2) if (isUniqueEdgePosition(idx[i] * 3, idx[i + 1] * 3, positionArray, hashSet)) indices.push(idx[i], idx[i + 1]);
		}
		if (geometry.attributes.index) {
			const idata = geometry.attributes.index.data;
			for (let i = 0; i < idata.length; i += 3) addUniqueIndices([
				idata[i],
				idata[i + 1],
				idata[i + 1],
				idata[i + 2],
				idata[i + 2],
				idata[i]
			]);
		} else {
			const numVertices = Math.floor(positionArray.length / 3);
			for (let i = 0; i < numVertices; i += 3) addUniqueIndices([
				i,
				i + 1,
				i + 1,
				i + 2,
				i + 2,
				i
			]);
		}
		const indicesTyped = indices.length > 65536 ? new Uint32Array(indices) : new Uint16Array(indices);
		const wireGeometry = new Geometry(gl, {
			position: { ...geometry.attributes.position },
			index: { data: indicesTyped }
		});
		super(gl, {
			...meshProps,
			mode: gl.LINES,
			geometry: wireGeometry,
			program: wireProgram
		});
	}
};
function isUniqueEdgePosition(start, end, pos, hashSet) {
	const hash1 = [
		pos[start],
		pos[start + 1],
		pos[start + 2],
		pos[end],
		pos[end + 1],
		pos[end + 2]
	].join("#");
	const hash2 = [
		pos[end],
		pos[end + 1],
		pos[end + 2],
		pos[start],
		pos[start + 1],
		pos[start + 2]
	].join("#");
	const oldSize = hashSet.size;
	hashSet.add(hash1);
	hashSet.add(hash2);
	return hashSet.size - oldSize === 2;
}
var vertex$4 = `
attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
var fragment$4 = `
precision highp float;
uniform vec3 wireColor;

void main() {    
    gl_FragColor = vec4(wireColor, 1.0);
}
`;
//#endregion
//#region ../node_modules/ogl/src/extras/helpers/AxesHelper.js
var AxesHelper = class extends Mesh {
	constructor(gl, { size = 1, symmetric = false, xColor = new Vec3(.96, .21, .32), yColor = new Vec3(.44, .64, .11), zColor = new Vec3(.18, .52, .89), ...meshProps } = {}) {
		const a = symmetric ? -size : 0;
		const b = size;
		const vertices = new Float32Array([
			a,
			0,
			0,
			b,
			0,
			0,
			0,
			a,
			0,
			0,
			b,
			0,
			0,
			0,
			a,
			0,
			0,
			b
		]);
		const colors = new Float32Array([
			...xColor,
			...xColor,
			...yColor,
			...yColor,
			...zColor,
			...zColor
		]);
		const geometry = new Geometry(gl, {
			position: {
				size: 3,
				data: vertices
			},
			color: {
				size: 3,
				data: colors
			}
		});
		const program = new Program(gl, {
			vertex: vertex$3,
			fragment: fragment$3
		});
		super(gl, {
			...meshProps,
			mode: gl.LINES,
			geometry,
			program
		});
	}
};
var vertex$3 = `
attribute vec3 position;
attribute vec3 color;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec3 vColor;

void main() {    
    vColor = color;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
var fragment$3 = `
precision highp float;
varying vec3 vColor;

void main() {    
    gl_FragColor = vec4(vColor, 1.0);
}
`;
//#endregion
//#region ../node_modules/ogl/src/extras/helpers/GridHelper.js
var GridHelper = class extends Mesh {
	constructor(gl, { size = 10, divisions = 10, color = new Vec3(.75, .75, .75), ...meshProps } = {}) {
		const numVertices = (size + 1) * 2 * 2;
		const vertices = new Float32Array(numVertices * 3);
		const hs = size / 2;
		for (let i = 0; i <= divisions; i++) {
			const o = i / divisions * size - hs;
			vertices.set([
				o,
				0,
				-hs,
				o,
				0,
				hs
			], i * 12);
			vertices.set([
				-hs,
				0,
				o,
				hs,
				0,
				o
			], i * 12 + 6);
		}
		const geometry = new Geometry(gl, { position: {
			size: 3,
			data: vertices
		} });
		const program = new Program(gl, {
			vertex: vertex$2,
			fragment: fragment$2,
			uniforms: { color: { value: color } }
		});
		super(gl, {
			...meshProps,
			mode: gl.LINES,
			geometry,
			program
		});
	}
};
var vertex$2 = `
attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
var fragment$2 = `
precision highp float;
uniform vec3 color;

void main() {    
    gl_FragColor = vec4(color, 1.0);
}
`;
//#endregion
//#region ../node_modules/ogl/src/extras/helpers/VertexNormalsHelper.js
var VertexNormalsHelper = class extends Mesh {
	constructor(object, { size = .1, color = new Vec3(.86, .16, .86), ...meshProps } = {}) {
		const gl = object.gl;
		const nNormals = object.geometry.attributes.normal.count;
		const positionsArray = new Float32Array(nNormals * 2 * 3);
		const normalsArray = new Float32Array(nNormals * 2 * 3);
		const sizeArray = new Float32Array(nNormals * 2);
		const normalData = object.geometry.attributes.normal.data;
		const positionData = object.geometry.attributes.position.data;
		const sizeData = new Float32Array([0, size]);
		for (let i = 0; i < nNormals; i++) {
			const i6 = i * 6;
			const i3 = i * 3;
			const pSub = positionData.subarray(i3, i3 + 3);
			positionsArray.set(pSub, i6);
			positionsArray.set(pSub, i6 + 3);
			const nSub = normalData.subarray(i3, i3 + 3);
			normalsArray.set(nSub, i6);
			normalsArray.set(nSub, i6 + 3);
			sizeArray.set(sizeData, i * 2);
		}
		const geometry = new Geometry(gl, {
			position: {
				size: 3,
				data: positionsArray
			},
			normal: {
				size: 3,
				data: normalsArray
			},
			size: {
				size: 1,
				data: sizeArray
			}
		});
		const program = new Program(gl, {
			vertex: vertex$1,
			fragment: fragment$1,
			uniforms: {
				color: { value: color },
				worldNormalMatrix: { value: new Mat3() },
				objectWorldMatrix: { value: object.worldMatrix }
			}
		});
		super(gl, {
			...meshProps,
			mode: gl.LINES,
			geometry,
			program
		});
		this.object = object;
	}
	draw(arg) {
		this.program.uniforms.worldNormalMatrix.value.getNormalMatrix(this.object.worldMatrix);
		super.draw(arg);
	}
};
var vertex$1 = `
attribute vec3 position;
attribute vec3 normal;
attribute float size;

uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 objectWorldMatrix;
uniform mat3 worldNormalMatrix;

void main() {
    vec3 n = normalize(worldNormalMatrix * normal) * size;
    vec3 p = (objectWorldMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * viewMatrix * vec4(p + n, 1.0);
}
`;
var fragment$1 = `
precision highp float;
uniform vec3 color;

void main() {    
    gl_FragColor = vec4(color, 1.0);
}
`;
//#endregion
//#region ../node_modules/ogl/src/extras/helpers/FaceNormalsHelper.js
var vA = /* @__PURE__ */ new Vec3();
var vB = /* @__PURE__ */ new Vec3();
var vC = /* @__PURE__ */ new Vec3();
var vCenter = /* @__PURE__ */ new Vec3();
var vNormal = /* @__PURE__ */ new Vec3();
var FaceNormalsHelper = class extends Mesh {
	constructor(object, { size = .1, color = new Vec3(.15, .86, .86), ...meshProps } = {}) {
		const gl = object.gl;
		const positionData = object.geometry.attributes.position.data;
		const sizeData = new Float32Array([0, size]);
		const indexAttr = object.geometry.attributes.index;
		const getIndex = indexAttr ? (i) => indexAttr.data[i] : (i) => i;
		const numVertices = indexAttr ? indexAttr.data.length : Math.floor(positionData.length / 3);
		const nNormals = Math.floor(numVertices / 3);
		const positionsArray = new Float32Array(nNormals * 2 * 3);
		const normalsArray = new Float32Array(nNormals * 2 * 3);
		const sizeArray = new Float32Array(nNormals * 2);
		for (let i = 0; i < numVertices; i += 3) {
			vA.fromArray(positionData, getIndex(i + 0) * 3);
			vB.fromArray(positionData, getIndex(i + 1) * 3);
			vC.fromArray(positionData, getIndex(i + 2) * 3);
			vCenter.add(vA, vB).add(vC).multiply(1 / 3);
			vA.sub(vA, vB);
			vC.sub(vC, vB);
			vNormal.cross(vC, vA).normalize();
			const i2 = i * 2;
			positionsArray.set(vCenter, i2);
			positionsArray.set(vCenter, i2 + 3);
			normalsArray.set(vNormal, i2);
			normalsArray.set(vNormal, i2 + 3);
			sizeArray.set(sizeData, i / 3 * 2);
		}
		const geometry = new Geometry(gl, {
			position: {
				size: 3,
				data: positionsArray
			},
			normal: {
				size: 3,
				data: normalsArray
			},
			size: {
				size: 1,
				data: sizeArray
			}
		});
		const program = new Program(gl, {
			vertex,
			fragment,
			uniforms: {
				color: { value: color },
				worldNormalMatrix: { value: new Mat3() },
				objectWorldMatrix: { value: object.worldMatrix }
			}
		});
		super(gl, {
			...meshProps,
			mode: gl.LINES,
			geometry,
			program
		});
		this.object = object;
	}
	draw(arg) {
		this.program.uniforms.worldNormalMatrix.value.getNormalMatrix(this.object.worldMatrix);
		super.draw(arg);
	}
};
var vertex = `
attribute vec3 position;
attribute vec3 normal;
attribute float size;

uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 objectWorldMatrix;
uniform mat3 worldNormalMatrix;

void main() {
    vec3 n = normalize(worldNormalMatrix * normal) * size;
    vec3 p = (objectWorldMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * viewMatrix * vec4(p + n, 1.0);
}
`;
var fragment = `
precision highp float;
uniform vec3 color;

void main() {    
    gl_FragColor = vec4(color, 1.0);
}
`;
//#endregion
//#region ../node_modules/ogl/src/extras/Texture3D.js
var Texture3D = class extends Texture {
	constructor(gl, args) {
		super(gl, {
			...args,
			target: gl.TEXTURE_3D,
			width: args.width ? args.width : 2,
			height: args.height ? args.height : 2
		});
		const image = new Image();
		image.crossOrigin = "*";
		image.src = args.src;
		image.onload = () => {
			let canvas = document.createElement("canvas");
			canvas.width = image.width;
			canvas.height = image.height;
			let ctx = canvas.getContext("2d");
			ctx.scale(1, -1);
			ctx.translate(0, -image.height);
			ctx.drawImage(image, 0, 0);
			const imageData = ctx.getImageData(0, 0, image.width, image.height).data;
			canvas = null;
			ctx = null;
			let elementCount;
			switch (this.format) {
				case gl.RED:
					elementCount = 1;
					break;
				case gl.RG:
					elementCount = 2;
					break;
				case gl.RGB:
					elementCount = 3;
					break;
				default: elementCount = 4;
			}
			const dataCount = this.width * this.height * this.length * elementCount;
			const data = this.type === gl.UNSIGNED_BYTE ? new Uint8Array(dataCount) : new Float32Array(dataCount);
			let dataIterator = 0;
			for (let z = 0; z < this.length; z++) for (let y = 0; y < this.height; y++) for (let x = 0; x < this.width; x++) {
				let zOffsetX = z % args.tileCountX * this.width;
				let zOffsetY = Math.floor(z / args.tileCountX) * (this.width * this.height * args.tileCountX);
				let index = x + zOffsetX + (y * image.width + zOffsetY);
				let texel = [
					imageData[index * 4],
					imageData[index * 4 + 1],
					imageData[index * 4 + 2],
					imageData[index * 4 + 3]
				];
				for (let i = 0; i < elementCount; i++) if (this.type === this.gl.UNSIGNED_BYTE) data[dataIterator++] = texel[i];
				else data[dataIterator++] = texel[i] / 255;
			}
			this.image = data;
			this.needsUpdate = true;
		};
	}
};
//#endregion
export { Animation, AxesHelper, BasisManager, Box, Camera, Color, Curve, Cylinder, DracoManager, Euler, FaceNormalsHelper, Flowmap, GLTFAnimation, GLTFLoader, GLTFSkin, GPGPU, Geometry, GridHelper, InstancedMesh, KTXTexture, Mat3, Mat4, Mesh, NormalProgram, Orbit, Path, Plane, Polyline, Post, Program, Quat, Raycast, RenderTarget, Renderer, Shadow, Skin, Sphere, Text, Texture, Texture3D, TextureLoader, Torus, Transform, Triangle, Tube, Vec2, Vec3, Vec4, VertexNormalsHelper, WireMesh };
