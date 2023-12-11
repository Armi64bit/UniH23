import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/app/services/university.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-university-statistics',
  templateUrl: './university-statistics.component.html',
  styleUrls: ['./university-statistics.component.css']
})
export class UniversityStatisticsComponent implements OnInit {
  universities: { nomUniversity: string, totalChambres: number | undefined, color: string }[] = [];

  constructor(private universityService: UniversityService) {}

  ngOnInit(): void {
    // Define the names of universities and their colors
    const universityData = [
      { nomUniversity: 'ESPRIT', color: 'blue' },
      { nomUniversity: 'TEKup', color: 'green' },
      { nomUniversity: 'SESAME', color: 'red' },
      // Add more universities as needed
    ];

    // Fetch data for each university
    universityData.forEach(({ nomUniversity, color }) => {
      this.universityService.getNombreTotalChambres(nomUniversity).subscribe((data) => {
        this.universities.push({
          nomUniversity,
          totalChambres: data,
          color,
        });

        // Render chart once data for all universities is available
        if (this.universities.length === universityData.length) {
          this.renderChart();
        }
      });
    });
  }

  renderChart(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.universities.map(uni => uni.nomUniversity),
        datasets: this.universities.map(uni => ({
          label: uni.nomUniversity,
          data: [uni.totalChambres || 0],
          backgroundColor: uni.color,
        })),
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
