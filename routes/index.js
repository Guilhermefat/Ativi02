const express = require('express')
const router = express.Router();


router.get('/',(req,res)=>{
    let obj = {
        nome: req.query.nome
    };

    res.render('home',obj)
})
router.get('/rota1',(req,res)=>{
    let obj = {
        disciplinas: [
            {nome: 'Gestão Ágil de Projetos', dia: 'Segunda-Feira', horario: '07:40h às 11:20h'},
            {nome: 'Banco de Dados não relacional', dia: 'Terça-Feira',horario: '07:40h às 09:20h'},
            {nome: 'Inglês 1', dia: 'Terça-Feira', horario: '11:20h às 13:00h'},
            {nome: 'Desenvolvimento Web III', dia: 'Quarta-feira', horario: '07:40h às 09:20h'},
            {nome: 'Interação Humano Computador',dia: 'Quarta-feira',horario:'11:20h às 13:00h'},
            {nome: 'Álgebra Linear',dia: 'Quinta-feira',horario: '07:40h ás 11:20h'},
            {nome: 'Técnicas de Programação II',dia:'Sexta-Feira',horario: '07:40h às 11:20h'}
        ]};
    res.render('rota1',obj)
})
router.get('/rota2',(req,res)=>{
    let obj = {
        projeto : [
            {
             
             Disciplina : "Gestão Ágil de Projetos de Software" ,
             Observação : "Em Curso"
            } ,
            {
       
             Disciplina : "Estágio Supervisionado em Desenvolvimento de Software Multiplataforma" ,
             Observação : "Em Curso"
            } ,
            {
            Disciplina : "Algoritmo e Lógica de Programação" ,
             Observacao : "Aprovado por Nota e Frequência"
            } ,
            {
             Disciplina : "Modelagem de Banco de Dados" ,
             Observacao : "Aprovado por Nota e Frequência"
            } ,
            {
             Disciplina : "Banco de Dados – Relacional" ,
             Observacao : "Aprovado por Nota e Frequência"
            } ,
            {
             Disciplina : "Banco de Dados - Não relacional" ,
             Observação : "Em Curso"
            } ,
            {
             Disciplina : "Estrutura de Dados" ,
             Observacao : "Aprovado por Nota e Frequência"
            } ,
            {

             Disciplina : "Engenharia de Software I" ,
             Observacao : "Aprovado por Nota e Frequência"
            } ,
            {
             Disciplina : "Engenharia de Software II" ,
             Observacao : "Aprovado por Nota e Frequência"
            } ,
            {
             Disciplina : "Interação Humano Computador" ,
             Observação : "Em Curso"
            } ,
            {
             Disciplina : "Técnica de Programação I" ,
             Observacao : "Aprovado por Nota e Frequência"
            } ,
            {
             Disciplina : "Técnica de Programação II" ,
             Observação : "Em Curso"
            } ,
            {
             Disciplina : "Inglês I" ,
             Observação : "Em Curso"
            } ,
            { 
             Disciplina : "Sistemas Operacionais e Redes de Computadores" ,
             Observacao : "Aprovado por Nota e Frequência"
            } ,
            {

             Disciplina : "Desenvolvimento Web I" ,
             Observacao : "Aprovado por Nota e Frequência"
            } ,
            {
             Disciplina : "Desenvolvimento Web II" ,
             Observação : "Em Curso"
            } ,
            {

             Disciplina : "Desenvolvimento Web III" ,
             Observação : "Em Curso"
            } ,
            {
             Disciplina : "Design Digital" ,
             Observacao : "Aprovado por Nota e Frequência"
            } ,
            {
             Disciplina : "Matemática para Computação" ,
             Observacao : "Aprovado por Nota e Frequência"
            }
           ]};
    
    res.render('rota2',obj)
})

module.exports = router;