import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { ApiService } from 'src/app/service/api.service';
import { Observable } from 'rxjs';
// /course.service
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

	courses: Course[];

  selectedCourse: Course;

  constructor(private courseService: ApiService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  addToCart(product: Course){
    this.courseService.postCourseToCart(product);
    window.alert("Your product has been added to cart!");
  }


}
