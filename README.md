# Índice

1 - Descrição do projeto
2 - Modelagem de dados
2.1- Cadastro de Usuários 
2.2 - Cadastro de funcionários
2.2.1 - Médico
2.2.2 - Agente da saúde
2.2.3 - Enfermeiro
2.2.4 - Técnico de enfermagem
3 - Funcionalidades
3.1 - Atendimento
3.2 - Consulta
3.2.2 - Solicitar exame

# 1 - Descrição do projeto:

O projeto consiste em fazer um sistema com banco de dados, com o objetivo de ajudar na organização de vacinas, atendimentos e aquisição de medicamentos, onde o usuário poderá ver o(s) médico(s) e outros funcionários responsáveis e mostrar o local de atendimento, o usuário irá fazer o cadastro no sistema, e fazer uma solicitação de atendimento ou de vacina (caso esteja dentro das datas de vacinação).

# 2 - Modelagem de dados:

# 2.1 - Cadastro de Usuários:

O usuário deve fazer seu cadastro e informar seus dados, como, nome, endereço, telefone como atributo multivalorado e cpf como atributo chave, sendo este último chave primária. Caso o usuário tenha direito a atendimento prioritário deve ser informado no outro atributo chave, Prioridade, onde o usuário irá colocar caso seja Indígena ou não. Caso o usuário tenha se identificado como indígena, ele deverá informar sua etnia, DSEI, COREM, código, e código do agente como atributos.

# 2.2 - Cadastro de funcionários:

Os funcionários deverão ter cadastro no sistema, informando, nome, telefone, código, cpf, como atributos, sendo cpf e códigos chaves primárias. O funcionário deve informar se é médico, agente da saúde ou enfermeiro.

# 2.2.1 - Médico:

Caso o Funcionário tiver se identificado como Médico, deverá informar nome, cpf, especialização, endereço e telefone, sendo multivalorados e CRM.

# 2.2.2 - Agente da saúde:

Caso o Funcionário tiver se identificado como Agente da saúde, deverá informar nome, cpf, especialização, endereço e telefone, sendo multivalorados, bairro de atuação e o código do agente como chave primária.

# 2.2.3 - Enfermeiro:

Caso o Funcionário tiver se identificado como Enfermeiro, deverá informar nome, cpf, sendo a chave primária, especialização, endereço, sendo multivalorado e COREN.

# 2.2.4 - Técnico de enfermagem:

Caso o Funcionário tiver se identificado como Técnico de enfermagem, deverá informar nome, COREN e cpf, sendo a chave primária.

# 3 - Funcionalidades:

# 3.1 - Atendimento:

Uma das funções que o usuário pode solicitar é o Atendimento, onde o sistema irá indicar o local de atendimento, e informar o número de pessoas na fila e os funcionários que estão trabalhando no local, mostrando seus nomes e seus respectivos cargos e o tipo de funcionários.

# 3.2 - Consulta:

Outra função é a Consulta, onde o usuário solicita ao sistema locais de atendimento com Funcionários do tipo Médico, informando depois o tipo da consulta, exame(caso tenha), data e medicamento (caso tenha, o usuário deve receber uma Receita, que deve apresentar o carimbo médico).

# 3.2 - Solicitar exame:

O usuário pode solicitar um exame em sua consulta, onde deve constar o laboratório, tipo de exame, local do exame, data do exame e data para receber o exame.

# 3.3- Armazenamento de Vacinas e remédios 
O sistema irá armazenar os dados sobre qual remédio faz mal ao paciente, quais suas alergias e quais vacinas ele já tomou, através de um banco de dados que pode ser acessado em qualquer cidade ou estado do Brasil tanto na rede pública como privada.
# 3.4- Armazenar os usuarios cadastrados 
O sistema irá armazenar os dados tanto dos pacientes quanto dos funcionarios da saúde. 
