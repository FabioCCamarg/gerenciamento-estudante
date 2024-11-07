import { Component, OnInit } from '@angular/core';
import { StudentService } from './../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss',
})
export class StudentListComponent implements OnInit {
  students: any[] = [];

  constructor(private StudentService: StudentService) {}
  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() : void {
    this.StudentService.listarTodos().subscribe(
      (data) => {
        this.students =data;
      },
      (error) =>{
        console.error("Erro ao listar estudantes", error);
      }
    );
  }

  deleteStudent(id: string): void {
    this.StudentService.deletarStudent(id).subscribe(
      () => {
        this.getStudents();
      },
      (error)=> {
        console.error("Errro ao deletar estudante", error);
      }
    );
  }
}
