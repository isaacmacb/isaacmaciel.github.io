---
title: "Como Transformei um Notebook Antigo em um Servidor Ubuntu"
date: 2026-07-06
tags: ["ubuntu", "linux", "servidor", "docker"]
---
Neste artigo compartilho como reaproveitei um notebook antigo para criar um servidor utilizando Ubuntu Server.

---

## O objetivo

Criar um ambiente de estudos e hospedagem utilizando hardware que estava sem uso.

---

## Hardware utilizado

* Notebook antigo
* SSD para melhorar o desempenho
* Conexão de rede cabeada

Mesmo sendo um equipamento simples, foi suficiente para executar diversos serviços.

---

## Instalação do Ubuntu Server

O primeiro passo foi baixar a imagem do Ubuntu Server e criar um pendrive bootável.

Após a instalação executei as atualizações básicas do sistema:

```bash
sudo apt update
sudo apt upgrade -y
```

---

## Configuração de acesso remoto

Para administrar o servidor de qualquer computador da rede configurei o SSH.

```bash
sudo apt install openssh-server
```

Isso permitiu acessar o servidor remotamente através do terminal.

---

## Instalação do Docker

Com o sistema funcionando, instalei o Docker para executar aplicações em containers.

Entre as vantagens estão:

* Facilidade de implantação
* Isolamento de aplicações
* Melhor organização do ambiente

---

## Serviços hospedados

O servidor passou a executar aplicações de estudo e desenvolvimento, incluindo APIs, bancos de dados e projetos pessoais.

---

## Resultados

O projeto demonstrou que um notebook antigo ainda pode ser extremamente útil quando configurado corretamente.

Os principais benefícios foram:

* Aprendizado em Linux
* Experiência prática com infraestrutura
* Ambiente próprio para testes
* Redução de custos com hospedagem

---

## Conclusão

Transformar um notebook antigo em servidor foi uma excelente experiência prática. Além de reaproveitar hardware, o projeto permitiu aprofundar conhecimentos em Linux, redes, Docker e administração de sistemas.
