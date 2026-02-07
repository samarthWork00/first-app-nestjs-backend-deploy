/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';




@Injectable()
export class StudentService{
  private students = [
    {id:1,name:'samarth',age:22},
    {id:2,name:'Sachin',age:32},
    {id:3,name:'Abhi',age:42},
  ]

  getAllStudents(){
    return this.students;
  }
  getStudetnById(id){
    const student = this.students.find((s) => s.id === id)
    if(!student) throw new NotFoundException("Student Does not exist");
      return student;
    
  }
//post
  createStudent(data:{name:string,age:number}){
    const student = {
      id : Date.now(),
      ...data,
    }
  }

  //put when want to update all the info
  updateStudent(id:number,data:{name:string,age:number}){
    const index = this.students.findIndex((s)=>s.id===id);
    if(index==-1) throw new NotFoundException('Student Does not exist');
    this.students[index] = {id,...data};
    return this.students[index];
  }
  //patch when want to update only specific part
  patchStudent(id:number,data:Partial<{name:string,age:number}>){
    const student = this.getStudetnById(id);
    Object.assign(student,data);
    return student;
  }
  deleteStudent(id:number){
    const index = this.students.findIndex((s)=>s.id===id);
    if(index==-1) throw new NotFoundException('Student Does not exist');
    const deleted = this.students.slice(index,1);
    return this.students[index];

  }

}