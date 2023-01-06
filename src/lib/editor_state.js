import { writable, derived } from 'svelte/store';
export const jointOptions = ['Fixed', 'Prismatic', 'Revolute', 'RevoluteFan', 'Spherical'];

const jointConfigs = {
	Fixed: {
		anchorAPosition: { x: 0, y: 2, z: 0 },
		frameARotation: { x: 0, y: 0, z: 0 },
		anchorBPosition: { x: 0, y: -2, z: 0 },
		frameBRotation: { x: 0, y: 0, z: 0 }
	},
	Prismatic: {
		anchorAPosition: { x: 0, y: 2, z: 0 },
		anchorBPosition: { x: 0, y: 1, z: 0 },
		axisRotation: { x: 0, y: 2, z: 0 },
		limits: [0, 4]
	},
	Revolute: {
		anchorAPosition: { x: 0, y: 1.8, z: 0 },
		anchorBPosition: { x: 0, y: -1.8, z: 0.25 },
		axisRotation: { x: 0, y: 0, z: 1 },
		limits: []
	},
	RevoluteFan: {
		anchorAPosition: { x: 0, y: 2.5, z: 0 },
		anchorBPosition: { x: 0, y: 0, z: -0.25 },
		axisRotation: { x: 0, y: 0, z: 1 },
		limits: []
	},
	Spherical: {
		anchorAPosition: { x: 0, y: -0.5, z: 0 },
		anchorBPosition: { x: 0, y: 2.5, z: 0 }
	}
};

export const selection = writable('Fixed');
export const fixedJointConfig = writable(jointConfigs.Fixed);
export const revoluteJointConfig = writable(jointConfigs.Revolute);
export const revoluteFanConfig = writable(jointConfigs.RevoluteFan);
export const prismaticJointConfig = writable(jointConfigs.Prismatic);
export const sphericalJointConfig = writable(jointConfigs.Spherical);
export const revoluteAxisChanged = derived(revoluteJointConfig, (rjc) =>
	Object.values(rjc.axisRotation).reduce((prev, curr) => (curr += prev), 0)
);
export const revoluteFanAxisChanged = derived(revoluteFanConfig, (rfc) =>
	Object.values(rfc.axisRotation).reduce((prev, curr) => (curr += prev), 0)
);
export const prismaticAxisChanged = derived(prismaticJointConfig, (pjc) =>
	Object.values(pjc.axisRotation).reduce((prev, curr) => (curr += prev), 0)
);
export const fixedFrameRotationChanged = derived(fixedJointConfig, (fjc) =>
	[...Object.values(fjc.frameARotation), ...Object.values(fjc.frameBRotation)].reduce(
		(prev, curr) => (curr += prev),
		0
	)
);
