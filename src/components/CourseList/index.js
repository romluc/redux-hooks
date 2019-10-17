import React from 'react';
import { useSelector } from 'react-redux';

export default function CourseList() {
	const courses = useSelector(state => state.data);

	return (
		<ul>
			{courses.map(course => (
				<li key={course}>{course}</li>
			))}
		</ul>
	);
}
