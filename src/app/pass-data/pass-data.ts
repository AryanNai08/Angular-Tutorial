import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-pass-data',
  imports: [RouterLink],
  templateUrl: './pass-data.html',
  styleUrl: './pass-data.css',
})
export class PassData {
  name: string | null= '';
  course: string | null= '';
  city: string | null= '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.name = params['name'];
    });

    this.route.queryParams.subscribe((queryParams) => {
      this.course = queryParams['course'];
      this.city = queryParams['city'];
    });
  }

  goToProfile() {
    this.router.navigate(['/pass-data', 'Aryan B Nai']);
  }

  goWithQueryParams() {
    this.router.navigate(['/pass-data'], {
      queryParams: {
        course: 'Angular',
        city: 'Pune',
      },
    });
  }
}
