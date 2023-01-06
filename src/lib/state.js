import { Vector3 } from 'three';
import { writable } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';
// Fixed, Pris, Rev, Sph
export const jointPositions = [
	new Vector3(0, 10, -20),
	new Vector3(20, 10, 0),
	new Vector3(0, 10, 20),
	new Vector3(-20, 10, 0)
];
export const jointDescriptions = [
	{
		description:
			'Fixed joints prevent any relative movement between bodies. Note how the cubes are locked into the same rotation and the distance between them never changes.',
		examples: [],
		link: 'https://rapier.rs/docs/user_guides/javascript/joints#fixed-joint'
	},
	{
		description:
			'Prismatic joints prevent any relative rotation, while allowing for relative translations along one axis.',
		examples: ['sliding doors', 'umbrella latch'],
		link: 'https://rapier.rs/docs/user_guides/javascript/joints#prismatic-joint'
	},
	{
		description:
			'Revolute joints prevent any relative movement between bodies, except for relative rotations along one axis.',
		examples: ['wheels', 'fans', 'hinges'],
		link: 'https://rapier.rs/docs/user_guides/javascript/joints#revolute-joint'
	},
	{
		description:
			'Spherical joints prevent any relative translational motion at a single point between two bodies.',
		examples: ['ragdoll arms', 'pendulums'],
		link: 'https://rapier.rs/docs/user_guides/javascript/joints#spherical-joint'
	}
];

const initTargetIdx = () => {
	const { subscribe, update } = writable(0);
	const minIdx = 0;
	const maxIdx = jointPositions.length - 1;
	return {
		subscribe,
		increment: () => {
			update((idx) => {
				return idx < maxIdx ? idx + 1 : (idx = minIdx);
			});
		},
		decrement: () => {
			update((idx) => {
				return idx > minIdx ? idx - 1 : (idx = maxIdx);
			});
		}
	};
};
export const targetIdx = initTargetIdx();
export const targetX = tweened(jointPositions[0].x, { duration: 1000, easing: cubicOut });
export const targetY = tweened(jointPositions[0].y, { duration: 1000, easing: cubicOut });
export const targetZ = tweened(jointPositions[0].z, { duration: 1000, easing: cubicOut });

export function lookAtTarget(i) {
	targetX.set(jointPositions[i].x);
	targetZ.set(jointPositions[i].z);
}
