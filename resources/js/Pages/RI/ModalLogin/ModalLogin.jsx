import './ModalLogin.scss';
import { useState } from "react";
import Button1 from '../../../components/Buttons/Button1/Button1';
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Dialog
} from "@mui/material";

export default function ModalLogin({ open, onClose }) {
  const [isCadastro, setIsCadastro] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    confirmarEmail: "",
    senha: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log("🔑 Login enviado:", {
      email: form.email,
      senha: form.senha,
    });
  };

  const handleSubmitCadastro = (e) => {
    e.preventDefault();
    console.log("🆕 Cadastro enviado:", {
      nome: form.nome,
      email: form.email,
      confirmarEmail: form.confirmarEmail,
    });
  };

  return (
    <Dialog open={open} onClose={onClose} className="modal_login">
      <Box className="content">
        <Typography variant="h6" align="center" mb={2}>
          {isCadastro ? <><b>Crie</b> sua conta</> : <><b>Faça</b> Login</>}
        </Typography>

        {!isCadastro ? (
          // ======== FORM LOGIN ========
          <form onSubmit={handleSubmitLogin}>
            <Stack spacing={1}>
              <TextField
                label="E-mail"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Senha"
                name="senha"
                type="password"
                value={form.senha}
                onChange={handleChange}
                fullWidth
                required
              />

              <Button1 type="submit" variant="contained" fullWidth>
                Entrar
              </Button1>

              <Button
                variant="text"
                fullWidth
                onClick={() => setIsCadastro(true)}
              >
                Ainda não tenho senha
              </Button>
            </Stack>
          </form>
        ) : (
          // ======== FORM CADASTRO ========
          <form onSubmit={handleSubmitCadastro}>
            <Stack spacing={1}>
              <TextField
                label="Nome completo"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="E-mail"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Confirme seu e-mail"
                name="confirmarEmail"
                type="email"
                value={form.confirmarEmail}
                onChange={handleChange}
                fullWidth
                required
              />

              <Button1 type="submit" variant="contained" fullWidth>
                Criar conta
              </Button1>

              <Button
                variant="text"
                fullWidth
                onClick={() => setIsCadastro(false)}
              >
                Já tenho uma conta
              </Button>
            </Stack>
          </form>
        )}
      </Box>
    </Dialog>
  );
}
