import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as CourseAction from '../../store/actions/course';

export default function CourseList() {
	const courses = useSelector(state => state.course.data);
	const dispatch = useDispatch();

	function addCourse() {
		dispatch(CourseAction.addCourseAction(Math.random()));
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
