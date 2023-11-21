// statisticetudiant.component.ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, finalize } from 'rxjs/operators';
import Chart from 'chart.js/auto';
import { forkJoin } from 'rxjs';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-statisticetudiant',
  templateUrl: './statisticetudiant.component.html',
  styleUrls: ['./statisticetudiant.component.css']
})

export class StatisticetudiantComponent implements OnInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  universities = ['Esprit', 'Sesame', 'Tekup'];
  statistics: any[] = [];
  totalStudents: number = 0;

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit() {
    this.getStatistics();
  }

  getStatistics() {
    const requests = this.universities.map(university =>
      this.etudiantService.getStudentsStatistics(university)
    );
  
    forkJoin(requests)
      .pipe(
        finalize(() => {
          console.log('Statistics data:', this.statistics);
          this.calculateTotalStudents();
          this.renderChart();
        })
      )
      .subscribe(dataArray => {
        // Assuming dataArray is an array of responses, each containing an array with a count
        this.statistics = dataArray.map(data => data[0]);
      });
  }
  
  calculateTotalStudents() {
    this.totalStudents = this.statistics.length > 0 ? this.statistics.reduce((sum, stat) => sum + stat[1], 0) : 0;
  }
  
  renderChart() {
    const datasets = this.universities.map((university, index) => ({
      label: university,
      data: [this.statistics[index][1]], // Access the count directly
      backgroundColor: this.getBackgroundColor(index),
    }));
  
    const chartData = {
      labels: ['Number of Students'],
      datasets: datasets,
    };
  
    const chartOptions = {
      scales: {
        y: {
          beginAtZero: true,
          max: this.totalStudents // Ensure the y-axis scale covers the total number of students
        }
      }
    };
  
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: chartOptions,
    });
  }
  
  getBackgroundColor(index: number): string {
    const colors = ['red', 'green', 'blue']; // Add more colors if needed
    return colors[index % colors.length]; // Cycle through colors for each university
  }
  
  
}
