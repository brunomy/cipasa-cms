import VentureMap from '../../../Venture/components/VentureMap/VentureMap';
import './ContactForm.scss';
import { useState, useEffect } from 'react';
import Button1 from '../../../../components/Buttons/Button1/Button1';
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";

export default function ContactForm({ contato }) {
  return (
    <Box className="contact_form_page" component="section">
      <Box className="content">
        <Box className="left">
          <FormComponent />
        </Box>
        <Box className="right">
          <VentureMap position={[contato?.latitude, contato?.longitude]} />
        </Box>
      </Box>
    </Box>
  )
}

function FormComponent() {
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    celular: "",
    telefone: "",
    email: "",
    cep: "",
    estado: "",
    cidade: "",
    assunto: "",
    mensagem: "",
  });

  const estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT",
    "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS",
    "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  const assuntos = [
    "Quero vender os empreendimentos da Cipasa",
    "Dúvida sobre empreendimento",
    "Contato comercial",
    "Outros",
  ];

  // 🧠 Funções de máscara manuais
  const maskCep = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{5})(\d)/, "$1-$2")
      .slice(0, 9);
  };

  const maskCelular = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d{4})$/, "$1-$2")
      .slice(0, 15);
  };

  const maskTelefone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{4})(\d{4})$/, "$1-$2")
      .slice(0, 14);
  };

  // Atualiza campos com máscaras aplicadas conforme o tipo
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "cep") newValue = maskCep(value);
    if (name === "celular") newValue = maskCelular(value);
    if (name === "telefone") newValue = maskTelefone(value);

    setForm((prev) => ({ ...prev, [name]: newValue }));
  };

  // Busca automática do CEP
  useEffect(() => {
    const cep = form.cep.replace(/\D/g, "");
    if (cep.length === 8) {
      const fetchCep = async () => {
        try {
          const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
          const data = await res.json();
          if (!data.erro) {
            setForm((prev) => ({
              ...prev,
              estado: data.uf || "",
              cidade: data.localidade || "",
            }));
          }
        } catch (error) {
          console.error("Erro ao buscar CEP:", error);
        }
      };
      fetchCep();
    }
  }, [form.cep]);

  // Envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📩 Dados enviados:", form);
  };

  return (
   <Box className="form" component="form" onSubmit={handleSubmit} noValidate>
      <Box>
        {/* Nome e Sobrenome */}
        <Box className="full_mobile">
          <TextField
            fullWidth
            label="Nome"
            name="nome"
            required
            value={form.nome}
            onChange={handleChange}
          />
        </Box>
        <Box className="full_mobile">
          <TextField
            fullWidth
            label="Sobrenome"
            name="sobrenome"
            required
            value={form.sobrenome}
            onChange={handleChange}
          />
        </Box>

        {/* Celular e Telefone */}
        <Box className="full_mobile">
          <TextField
            fullWidth
            label="Celular"
            name="celular"
            required
            value={form.celular}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
          />
        </Box>
        <Box className="full_mobile">
          <TextField
            fullWidth
            label="Telefone"
            name="telefone"
            value={form.telefone}
            onChange={handleChange}
            placeholder="(00) 0000-0000"
          />
        </Box>

        {/* Email */}
        <Box className="full">
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </Box>

        {/* CEP, Estado e Cidade */}
        <Box className="full">
          <TextField
            fullWidth
            label="CEP"
            name="cep"
            required
            value={form.cep}
            onChange={handleChange}
            placeholder="00000-000"
          />
        </Box>
        <Box>
          <TextField
            select
            fullWidth
            label="Estado"
            name="estado"
            required
            value={form.estado}
            onChange={handleChange}
          >
            {estados.map((uf) => (
              <MenuItem key={uf} value={uf}>
                {uf}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box>
          <TextField
            fullWidth
            label="Cidade"
            name="cidade"
            required
            value={form.cidade}
            onChange={handleChange}
          />
        </Box>

        {/* Assunto */}
        <Box className="full">
          <TextField
            select
            fullWidth
            label="Assunto"
            name="assunto"
            required
            value={form.assunto}
            onChange={handleChange}
          >
            {assuntos.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Mensagem */}
        <Box className="full">
          <TextField
            fullWidth
            multiline
            minRows={4}
            label="Mensagem"
            name="mensagem"
            required
            value={form.mensagem}
            onChange={handleChange}
          />
        </Box>

        {/* Botão Enviar */}
        <Box className="full">
          <Button1 type="submit">Enviar</Button1>
        </Box>
      </Box>
    </Box>
  );
}
