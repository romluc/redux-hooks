import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CourseList() {
	const courses = useSelector(state => state.data);
	const dispatch = useDispatch();

	function addCourseAction() {
		return { type: 'ADD_COURSE', title: 'GraphQL' };
	}
	function addCourse() {
		dispatch(addCourseAction('GraphQL'));
	}
	return (
		<>
			<ul>
				{courses.map(course => (
					<li key={course}>{course}</li>
				))}
			</ul>
			<button type='button' onClick={addCourse}>
				Add course
			</button>
		</>
	);
}
