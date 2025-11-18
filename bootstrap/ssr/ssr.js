import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef, useMemo } from "react";
import { Link, router, usePage, Head, createInertiaApp } from "@inertiajs/react";
import { Box, Button, Snackbar, Alert, Pagination as Pagination$1, TextField, MenuItem, Typography, Paper, Stack, Dialog, Autocomplete } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import { route } from "ziggy-js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import Snackbar$1 from "@mui/material/Snackbar";
import Alert$1 from "@mui/material/Alert";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
function Logo() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, [loaded]);
  return /* @__PURE__ */ jsx(Box, { className: "logo " + (loaded ? "loaded" : "notLoaded"), onClick: () => setLoaded(false), children: /* @__PURE__ */ jsxs("svg", { width: "236", height: "53", viewBox: "0 0 236 53", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("path", { className: "part1", d: "M44.0277 46.4955C38.5334 46.0751 32.6278 45.9119 26.8544 46.2466C20.741 46.6001 15.6455 47.3216 11.3055 48.1771C15.6308 51.2119 20.9005 53.0002 26.59 53.0002C33.2637 53.0002 39.3582 50.5426 44.0277 46.4955Z", fill: "#407B6B" }),
    /* @__PURE__ */ jsx("path", { className: "part2", d: "M1.8594 36.234C3.39142 40.0971 5.80487 43.5168 8.85631 46.24C13.9309 45.0039 22.2289 44.0481 27.8785 43.7511C34.122 43.4248 39.0853 43.339 44.7244 43.956C30.3885 38.3967 15.0809 36.2905 1.8573 36.2319L1.8594 36.234Z", fill: "#82ADA1" }),
    /* @__PURE__ */ jsx("path", { className: "part3", d: "M26.4179 29.3717C15.4419 29.9344 9.3537 30.8798 1.07031 33.4377C1.72929 33.3917 27.2258 34.0798 47.629 42.697C50.1872 39.4028 51.9795 35.4937 52.7497 31.227C46.7769 30.0034 33.9352 28.9848 26.4179 29.3697V29.3717Z", fill: "#B0CAC1" }),
    /* @__PURE__ */ jsx("path", { className: "part4", d: "M13.9812 34.4351C20.0652 35.1651 27.6645 36.4137 35.3602 38.5137C38.2354 36.4263 40.3319 33.3475 41.1378 29.773C35.9458 29.3631 30.4242 29.1665 26.4158 29.3715C20.7179 29.6643 16.3401 30.0617 12.2855 30.731C12.6801 32.0528 13.2572 33.2931 13.9812 34.433V34.4351Z", fill: "#D8E6DC" }),
    /* @__PURE__ */ jsx("path", { className: "part5", d: "M53.0498 29.1103C53.1337 28.2506 53.1799 27.3805 53.1799 26.4979C53.1799 11.8633 41.2742 0 26.59 0C11.9057 0 0 11.8633 0 26.5C0 28.0498 0.14061 29.5662 0.396646 31.0429C3.85733 30.0494 7.70836 29.2065 11.8238 28.5581C11.7294 27.8846 11.6643 27.2007 11.6643 26.5C11.6643 18.2844 18.3464 11.627 26.5879 11.627C34.8293 11.627 41.5114 18.2865 41.5114 26.5C41.5114 26.8556 41.482 27.2028 41.4589 27.5521C45.5324 27.8972 49.4233 28.4263 53.0477 29.1124L53.0498 29.1103Z", fill: "#62BB46" }),
    /* @__PURE__ */ jsx("path", { className: "name", d: "M94.324 30.8067L89.7636 26.2136C87.2033 28.5332 84.922 30.0182 81.199 30.0182C75.6145 30.0182 71.7509 25.3791 71.7509 19.8135V19.7214C71.7509 14.1558 75.7069 9.60877 81.199 9.60877C84.4582 9.60877 87.0165 10.9997 89.5307 13.2732L94.0911 8.03173C91.0648 5.06382 87.388 3.02246 81.2452 3.02246C71.2388 3.02246 64.2566 10.5834 64.2566 19.8135V19.9055C64.2566 29.2296 71.3773 36.6045 80.9661 36.6045C87.2494 36.6045 90.9725 34.377 94.324 30.8067ZM106.61 36.0502V3.57881H99.4426V36.0502H106.61ZM139.609 14.8962V14.8042C139.609 8.17187 134.908 3.57881 127.134 3.57881H113.823V36.0502H120.99V26.3077H126.436C133.743 26.3077 139.607 22.4112 139.607 14.8962H139.609ZM132.35 15.0364C132.35 17.8202 130.255 19.9536 126.671 19.9536H120.992V10.0271H126.53C130.114 10.0271 132.347 11.7422 132.347 14.9443V15.0364H132.35ZM172.47 36.0502L158.505 3.34874H151.896L137.932 36.0502H145.239L148.217 28.7674H161.995L164.973 36.0502H172.467H172.47ZM159.437 22.4593H150.78L155.109 11.9304L159.437 22.4593ZM199.651 26.4479V26.3558C199.651 20.6961 195.928 18.3306 189.32 16.6155C183.687 15.1765 182.291 14.4821 182.291 12.3466V12.2546C182.291 10.6776 183.733 9.42471 186.48 9.42471C189.227 9.42471 192.065 10.6315 194.95 12.6248L198.673 7.24322C195.368 4.59949 191.32 3.11449 186.572 3.11449C179.918 3.11449 175.17 7.01106 175.17 12.9009V12.995C175.17 19.4433 179.406 21.2525 185.968 22.9215C191.414 24.3124 192.531 25.241 192.531 27.0502V27.1423C192.531 29.0435 190.761 30.2043 187.83 30.2043C184.107 30.2043 181.034 28.6733 178.102 26.2617L173.867 31.317C177.777 34.7953 182.757 36.5124 187.691 36.5124C194.719 36.5124 199.653 32.894 199.653 26.4479H199.651ZM236 36.0502L222.038 3.34874H215.429L201.467 36.0502H208.774L211.752 28.7674H225.53L228.508 36.0502H236.002H236ZM222.969 22.4593H214.312L218.64 11.9304L222.969 22.4593Z", fill: "#005A45" }),
    /* @__PURE__ */ jsx("path", { className: "subname", d: "M90.7248 52.224C91.1802 52.0587 91.5727 51.8098 91.9001 51.4794C92.2275 51.1489 92.4814 50.7369 92.6598 50.2454C92.8382 49.7538 92.9284 49.1808 92.9284 48.5261V43.4227H91.919V48.6035C91.919 49.5802 91.6755 50.3144 91.1907 50.8059C90.7059 51.2974 90.0491 51.5442 89.2243 51.5442C88.3995 51.5442 87.6944 51.2849 87.2117 50.7682C86.7311 50.2516 86.4897 49.507 86.4897 48.5407V43.4248H85.4803V48.6056C85.4803 49.233 85.5705 49.7894 85.7489 50.2725C85.9273 50.7557 86.1812 51.1615 86.5086 51.4877C86.836 51.814 87.2285 52.0608 87.6839 52.2261C88.1393 52.3913 88.643 52.475 89.197 52.475C89.751 52.475 90.2673 52.3913 90.7227 52.2261L90.7248 52.224ZM102.328 47.9656V44.3514H105.094C105.82 44.3514 106.383 44.5061 106.784 44.8157C107.185 45.1252 107.386 45.5561 107.386 46.1083V46.1334C107.386 46.422 107.329 46.6793 107.214 46.903C107.099 47.1289 106.939 47.3193 106.733 47.4761C106.528 47.633 106.284 47.7543 106.003 47.838C105.722 47.9237 105.413 47.9656 105.082 47.9656H102.328ZM101.319 52.3327H102.328V48.8691H104.882L107.474 52.3327H108.712L105.967 48.6913C106.316 48.6328 106.639 48.5324 106.939 48.3922C107.237 48.2521 107.495 48.0743 107.711 47.8589C107.927 47.6414 108.097 47.3883 108.215 47.0955C108.335 46.8027 108.393 46.4701 108.393 46.0957V46.0706C108.393 45.715 108.335 45.3867 108.215 45.0897C108.095 44.7927 107.925 44.5333 107.705 44.3137C107.424 44.0334 107.069 43.8159 106.639 43.657C106.209 43.5001 105.718 43.4227 105.164 43.4227H101.319V52.3327ZM117.567 51.4292V48.2856H120.383C121.166 48.2856 121.756 48.4194 122.154 48.6871C122.553 48.9549 122.752 49.3293 122.752 49.8145V49.8396C122.752 50.3416 122.557 50.7306 122.167 51.0109C121.777 51.2911 121.241 51.4313 120.561 51.4313H117.567V51.4292ZM117.567 47.3799V44.3242H120.28C120.918 44.3242 121.405 44.4559 121.745 44.7174C122.085 44.9788 122.255 45.3302 122.255 45.7694V45.7945C122.255 46.3195 122.066 46.7148 121.688 46.9804C121.311 47.2461 120.815 47.3799 120.205 47.3799H117.567ZM116.557 52.3327H120.522C121.006 52.3327 121.447 52.2783 121.848 52.1675C122.247 52.0566 122.589 51.8977 122.874 51.6906C123.157 51.4815 123.378 51.2263 123.531 50.9251C123.684 50.6239 123.76 50.2809 123.76 49.8982V49.8731C123.76 49.5677 123.709 49.2979 123.607 49.0636C123.504 48.8294 123.369 48.6286 123.199 48.4592C123.029 48.2898 122.826 48.1413 122.593 48.0178C122.36 47.8944 122.11 47.7941 121.848 47.7188C122.026 47.6435 122.198 47.5472 122.364 47.4322C122.53 47.3172 122.681 47.1791 122.815 47.0118C122.952 46.8466 123.059 46.6521 123.141 46.4283C123.222 46.2045 123.262 45.9472 123.262 45.6586V45.6335C123.262 45.0834 123.071 44.6086 122.687 44.2112C122.433 43.9665 122.108 43.7741 121.711 43.6339C121.317 43.4938 120.864 43.4248 120.354 43.4248H116.555V52.3348L116.557 52.3327ZM133.506 49.0741L135.55 44.5291L137.581 49.0741H133.506ZM131.017 52.3327H132.052L133.111 49.9776H137.978L139.025 52.3327H140.112L136.037 43.3579H135.092L131.017 52.3327ZM147.875 52.3327H148.86V45.0248L154.633 52.3327H155.437V43.4227H154.453V50.5633L148.82 43.4227H147.873V52.3327H147.875ZM164.058 52.3327H165.068V43.4227H164.058V52.3327ZM177.993 52.2825C178.367 52.1633 178.688 51.9939 178.954 51.7743C179.221 51.5526 179.429 51.289 179.58 50.9795C179.731 50.6699 179.806 50.3227 179.806 49.9421V49.917C179.806 49.2393 179.571 48.7039 179.097 48.3128C178.625 47.9216 177.89 47.6163 176.893 47.3967C176.398 47.2942 175.995 47.1875 175.68 47.0725C175.366 46.9574 175.118 46.8298 174.94 46.6897C174.761 46.5496 174.637 46.3969 174.568 46.2317C174.499 46.0664 174.465 45.8782 174.465 45.6648V45.6398C174.465 45.2319 174.635 44.891 174.975 44.6149C175.315 44.3388 175.779 44.2008 176.367 44.2008C176.826 44.2008 177.267 44.2781 177.689 44.4308C178.111 44.5835 178.528 44.8303 178.948 45.1692L179.536 44.3932C179.076 44.0272 178.602 43.7553 178.111 43.5712C177.622 43.3892 177.049 43.2972 176.392 43.2972C175.966 43.2972 175.573 43.36 175.217 43.4813C174.86 43.6047 174.549 43.7741 174.285 43.9895C174.02 44.207 173.817 44.4622 173.672 44.7592C173.527 45.0562 173.456 45.3783 173.456 45.7276V45.7527C173.456 46.1187 173.515 46.4366 173.634 46.7085C173.754 46.9804 173.936 47.2168 174.184 47.4218C174.432 47.6246 174.747 47.7982 175.126 47.9426C175.506 48.0869 175.953 48.2145 176.465 48.3253C176.935 48.4278 177.322 48.5345 177.624 48.6432C177.926 48.7541 178.163 48.8775 178.335 49.0113C178.505 49.1473 178.625 49.2979 178.694 49.4631C178.763 49.6283 178.797 49.8124 178.797 50.0174V50.0425C178.797 50.4838 178.616 50.8456 178.253 51.1301C177.89 51.4145 177.408 51.5568 176.803 51.5568C176.199 51.5568 175.632 51.4543 175.156 51.2451C174.679 51.0381 174.207 50.7201 173.739 50.2976L173.114 51.036C173.651 51.5191 174.213 51.8789 174.807 52.111C175.399 52.3432 176.052 52.4603 176.768 52.4603C177.21 52.4603 177.62 52.4017 177.993 52.2825ZM187.867 52.3327H188.852V45.1273L192.109 49.8877H192.159L195.416 45.1148V52.3327H196.426V43.4227H195.404L192.146 48.2856L188.889 43.4227H187.867V52.3327ZM207.723 51.2639C207.292 51.0673 206.919 50.8059 206.606 50.4754C206.291 50.145 206.046 49.7559 205.872 49.3104C205.697 48.8649 205.609 48.3881 205.609 47.8777V47.8526C205.609 47.3444 205.697 46.8675 205.872 46.4262C206.046 45.9849 206.287 45.5979 206.594 45.2675C206.9 44.937 207.269 44.6755 207.698 44.4852C208.128 44.2949 208.598 44.1987 209.11 44.1987C209.622 44.1987 210.09 44.297 210.522 44.4915C210.953 44.6881 211.324 44.9495 211.641 45.28C211.956 45.6105 212.201 45.9995 212.375 46.445C212.55 46.8905 212.638 47.3674 212.638 47.8777V47.9028C212.638 48.4111 212.55 48.8879 212.375 49.3293C212.201 49.7706 211.96 50.1575 211.653 50.488C211.347 50.8184 210.978 51.0799 210.55 51.2702C210.119 51.4605 209.649 51.5568 209.137 51.5568C208.625 51.5568 208.157 51.4585 207.727 51.2639H207.723ZM210.974 52.111C211.536 51.86 212.017 51.5254 212.417 51.105C212.818 50.6846 213.129 50.1952 213.349 49.6346C213.57 49.0741 213.681 48.4884 213.681 47.8777C213.689 47.8693 213.689 47.861 213.681 47.8526C213.681 47.2419 213.572 46.6583 213.355 46.102C213.139 45.5456 212.829 45.0583 212.43 44.6379C212.029 44.2175 211.551 43.8849 210.992 43.6381C210.434 43.3934 209.815 43.27 209.133 43.27C208.451 43.27 207.83 43.3955 207.269 43.6465C206.707 43.8975 206.226 44.2321 205.826 44.6525C205.425 45.0729 205.114 45.5624 204.894 46.1229C204.671 46.6834 204.562 47.2691 204.562 47.8798V47.9049C204.562 48.5156 204.669 49.0992 204.887 49.6555C205.106 50.2119 205.414 50.6992 205.813 51.1196C206.214 51.54 206.692 51.8726 207.251 52.1194C207.809 52.3662 208.428 52.4896 209.108 52.4896C209.788 52.4896 210.411 52.3641 210.974 52.1131V52.111Z", fill: "#005A45" })
  ] }) });
}
function smoothScrollTo(targetY, duration = 500) {
  const startY = window?.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();
  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
    window?.scrollTo(0, startY + distance * ease);
    if (elapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }
  requestAnimationFrame(animateScroll);
}
function decodeBasic(html = "") {
  return html.replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#39;", "'");
}
function Footer({ contato, ref }) {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState("success");
  const handleToastClose = (_, reason) => {
    if (reason === "clickaway") return;
    setToastOpen(false);
  };
  const handleSubmitNewsletter = (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setToastMessage("");
    setToastSeverity("success");
    const emailTrimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailTrimmed || !emailRegex.test(emailTrimmed)) {
      setToastMessage("Informe um e-mail válido.");
      setToastSeverity("error");
      setToastOpen(true);
      setSending(false);
      return;
    }
    router.post(
      route("contato.newsletter"),
      { email: emailTrimmed },
      {
        preserveScroll: true,
        onError: (errors) => {
          setToastMessage(errors.email || "Não foi possível cadastrar seu e-mail.");
          setToastSeverity("error");
          setToastOpen(true);
        },
        onSuccess: () => {
          setToastMessage("Obrigado por se inscrever em nossa newsletter!");
          setToastSeverity("success");
          setToastOpen(true);
          setEmail("");
        },
        onFinish: () => setSending(false)
      }
    );
  };
  return /* @__PURE__ */ jsxs("footer", { className: "footer", ref, children: [
    /* @__PURE__ */ jsx(Box, { className: "footer_top", children: /* @__PURE__ */ jsxs(Box, { className: "container", children: [
      /* @__PURE__ */ jsxs(Box, { className: "left", children: [
        /* @__PURE__ */ jsx(Box, { className: "logo_content", children: /* @__PURE__ */ jsx(Logo, {}) }),
        /* @__PURE__ */ jsxs("p", { children: [
          contato?.rua,
          ", ",
          contato?.numero,
          ", ",
          contato?.complemento,
          ", ",
          contato?.bairro,
          ", ",
          contato?.cidade,
          "/",
          contato?.estado?.value,
          " - CEP: ",
          contato?.cep
        ] }),
        /* @__PURE__ */ jsxs(Box, { className: "contato", children: [
          /* @__PURE__ */ jsxs(Box, { className: "item", children: [
            /* @__PURE__ */ jsx("p", { children: "Entre em contato - São Paulo" }),
            /* @__PURE__ */ jsx("h3", { children: contato?.telefone_sao_paulo })
          ] }),
          /* @__PURE__ */ jsxs(Box, { className: "item", children: [
            /* @__PURE__ */ jsx("p", { children: "Entre em contato - Goiânia" }),
            /* @__PURE__ */ jsx("h3", { children: contato?.telefone_goiania })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Box, { className: "right", children: [
        /* @__PURE__ */ jsxs(Box, { className: "pages", children: [
          /* @__PURE__ */ jsxs(Box, { className: "has_in_menu", children: [
            /* @__PURE__ */ jsx("h4", { children: "Mapa do site" }),
            /* @__PURE__ */ jsx(Button, { component: Link, href: "/empreendimentos", children: "Empreendimentos" }),
            /* @__PURE__ */ jsx(Button, { component: Link, href: "/blog", children: "Blog" }),
            /* @__PURE__ */ jsx(Button, { component: Link, href: "/sobre", children: "Sobre nós" }),
            /* @__PURE__ */ jsx(Button, { component: Link, href: "/tenho-uma-area", children: "Tenho uma área " }),
            /* @__PURE__ */ jsx(Button, { component: Link, href: "/contato", children: "Contato" })
          ] }),
          /* @__PURE__ */ jsxs(Box, { className: "has_in_menu", children: [
            /* @__PURE__ */ jsx("h4", { children: "Fazer login" }),
            contato.cliente && /* @__PURE__ */ jsx(Button, { component: "a", target: "_blank", href: contato.cliente, children: "Cliente" }),
            contato.parceiro && /* @__PURE__ */ jsx(Button, { component: "a", target: "_blank", href: "https://parceiro.cipasa.com/", children: "Parceiro" }),
            contato.corretor && /* @__PURE__ */ jsx(Button, { component: "a", target: "_blank", href: contato.corretor, children: "Corretor" })
          ] }),
          /* @__PURE__ */ jsxs(Box, { children: [
            /* @__PURE__ */ jsx("h4", { children: "Quero Comprar" }),
            /* @__PURE__ */ jsx(Button, { component: Link, href: "/empreendimentos?order=recentes&state=&status=&type=0", children: "Emp. Comercial" }),
            /* @__PURE__ */ jsx(Button, { component: Link, href: "/empreendimentos?order=recentes&state=&status=&type=1", children: "Incorporação" }),
            /* @__PURE__ */ jsx(Button, { component: Link, href: "/empreendimentos?order=recentes&state=&status=&type=2", children: "Uso misto" })
          ] }),
          (contato?.facebook || contato?.instagram || contato?.linkedin) && /* @__PURE__ */ jsxs(Box, { className: "social", children: [
            /* @__PURE__ */ jsx("h4", { children: "Redes sociais" }),
            /* @__PURE__ */ jsxs(Box, { children: [
              contato?.facebook && /* @__PURE__ */ jsx(Button, { component: "a", target: "_blank", href: contato?.facebook, children: /* @__PURE__ */ jsx(FacebookRoundedIcon, {}) }),
              contato?.instagram && /* @__PURE__ */ jsx(Button, { component: "a", target: "_blank", href: contato?.instagram, children: /* @__PURE__ */ jsx(InstagramIcon, {}) }),
              contato?.linkedin && /* @__PURE__ */ jsx(Button, { component: "a", target: "_blank", href: contato?.linkedin, children: /* @__PURE__ */ jsx(LinkedInIcon, {}) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Box, { className: "newsletter", children: /* @__PURE__ */ jsxs(Box, { children: [
          /* @__PURE__ */ jsx("h4", { children: "Notícias" }),
          /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmitNewsletter, children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                name: "email",
                placeholder: "Digite seu e-mail",
                value: email,
                onChange: (e) => setEmail(e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(Button, { type: "submit", disabled: sending, children: sending ? "Enviando..." : "Enviar" })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Box, { className: "footer_bottom", children: /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(Box, { className: "container", children: [
      /* @__PURE__ */ jsx("p", { children: "CIPASA URBANISMO® 00.000.000-0000 • © 2025" }),
      /* @__PURE__ */ jsxs(Button, { onClick: () => smoothScrollTo(0), children: [
        "Voltar para o topo ",
        /* @__PURE__ */ jsx("span", { className: "icon", children: /* @__PURE__ */ jsx(ExpandLessRoundedIcon, {}) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(
      Snackbar,
      {
        open: toastOpen,
        autoHideDuration: 4e3,
        onClose: handleToastClose,
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        sx: {
          "& .MuiPaper-root": {
            maxWidth: 360,
            width: "100%",
            borderRadius: 2
          }
        },
        children: /* @__PURE__ */ jsx(
          Alert,
          {
            onClose: handleToastClose,
            severity: toastSeverity,
            variant: "filled",
            sx: {
              width: "100%",
              boxShadow: 3,
              whiteSpace: "pre-line",
              textAlign: "left"
            },
            children: toastMessage
          }
        )
      }
    )
  ] });
}
const portal_icon = "/build/assets/portal_icon-DfNf0XCG.svg";
const bottom_arrow = "/build/assets/bottom_arrow-4ZViz6oe.svg";
function Header({ ref }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window?.scrollY > 0);
    };
    window?.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { url } = usePage();
  const isActive = (path) => url.includes(path);
  return /* @__PURE__ */ jsx("header", { className: "header", ref, children: /* @__PURE__ */ jsx(Box, { className: `header_fixed ${scrolled ? "scrolled" : ""}`, children: /* @__PURE__ */ jsxs(Box, { className: "container" + (open ? " open" : " closed"), children: [
    /* @__PURE__ */ jsx(Button, { onClick: () => setOpen(false), component: Link, href: "/", className: "logo_content", children: /* @__PURE__ */ jsx(Logo, {}) }),
    /* @__PURE__ */ jsxs(Box, { className: "content", children: [
      /* @__PURE__ */ jsx(Button, { onClick: () => setOpen(false), component: Link, className: isActive("/empreendimentos") || isActive("/empreendimento") ? "active" : "", href: "/empreendimentos", children: "Empreendimentos" }),
      /* @__PURE__ */ jsx(Button, { onClick: () => setOpen(false), component: Link, className: isActive("/blog") || isActive("/blog") ? "active" : "", href: "/blog", children: "Blog" }),
      /* @__PURE__ */ jsx(Button, { onClick: () => setOpen(false), component: Link, className: isActive("/sobre") ? "active" : "", href: "/sobre", children: "Sobre nós" }),
      /* @__PURE__ */ jsx(Button, { onClick: () => setOpen(false), component: Link, className: isActive("/tenho-uma-area") ? "active" : "", href: "/tenho-uma-area", children: "Tenho uma área" }),
      /* @__PURE__ */ jsx(Button, { onClick: () => setOpen(false), component: Link, className: isActive("/contato") ? "active" : "", href: "/contato", children: "Contato" }),
      /* @__PURE__ */ jsx(PortalButton, {})
    ] }),
    /* @__PURE__ */ jsx(Button, { className: "menu", onClick: () => setOpen(!open), children: /* @__PURE__ */ jsx("span", {}) })
  ] }) }) });
}
function PortalButton() {
  const { contato } = usePage().props;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event) => {
      if (!event.target.closest(".portal_content")) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  return /* @__PURE__ */ jsxs(Box, { className: "portal_content", children: [
    /* @__PURE__ */ jsxs(Button, { className: "portal_button", onClick: () => setOpen(!open), children: [
      /* @__PURE__ */ jsx("img", { src: portal_icon }),
      "Fazer login",
      /* @__PURE__ */ jsx("img", { src: bottom_arrow })
    ] }),
    /* @__PURE__ */ jsxs(Box, { className: `portal_dropdown ${open ? "open" : "closed"}`, children: [
      contato.cliente && /* @__PURE__ */ jsx(Button, { onClick: () => setOpen(false), component: "a", target: "_blank", href: contato.cliente, children: "Cliente" }),
      contato.parceiro && /* @__PURE__ */ jsx(Button, { onClick: () => setOpen(false), component: "a", target: "_blank", href: "https://parceiro.cipasa.com/", children: "Parceiro" }),
      contato.corretor && /* @__PURE__ */ jsx(Button, { onClick: () => setOpen(false), component: "a", target: "_blank", href: contato.corretor, children: "Corretor" })
    ] })
  ] });
}
function Layout({ contato, children }) {
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  useEffect(() => {
    const updateHeights = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };
    const resizeObserver = new ResizeObserver(() => {
      updateHeights();
    });
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }
    if (footerRef.current) {
      resizeObserver.observe(footerRef.current);
    }
    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeights);
    };
  }, []);
  return /* @__PURE__ */ jsxs(Box, { className: "layout", children: [
    /* @__PURE__ */ jsx(Header, { ref: headerRef }),
    /* @__PURE__ */ jsx(Box, { className: "layout_content", sx: { minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px)` }, children }),
    /* @__PURE__ */ jsx(Footer, { contato, ref: footerRef })
  ] });
}
function AppLayout({ children }) {
  const { contato } = usePage().props;
  return /* @__PURE__ */ jsx(Layout, { contato, children });
}
function TitleBreadcrumbs({ title, breadcrumbs }) {
  return /* @__PURE__ */ jsxs(Box, { className: "title_breadcrumbs", children: [
    /* @__PURE__ */ jsx("h1", { children: title }),
    /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb", children: /* @__PURE__ */ jsx("ol", { className: "breadcrumb", children: breadcrumbs.map((crumb, index) => /* @__PURE__ */ jsx("li", { className: `breadcrumb-item${crumb.href ? "" : " disabled"}`, children: !crumb.href ? crumb.label : /* @__PURE__ */ jsx(Button, { component: Link, href: crumb.href, children: crumb.label }) }, index)) }) })
  ] });
}
function Button1({ children, onClick, className = "", ...props }) {
  return /* @__PURE__ */ jsx(Button, { className: "button1 " + (className ? className : ""), onClick, ...props, children });
}
function SwipeListener$1({ onSwipeLeft, onSwipeRight }) {
  const startX = useRef(null);
  const startY = useRef(null);
  const minSwipeDistance = 50;
  const onPointerDown = (e) => {
    startX.current = e.clientX;
    startY.current = e.clientY;
  };
  const onPointerUp = (e) => {
    if (startX.current === null || startY.current === null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > minSwipeDistance) {
      if (dx < 0 && onSwipeLeft) onSwipeLeft();
      if (dx > 0 && onSwipeRight) onSwipeRight();
    }
    startX.current = null;
    startY.current = null;
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "swipe_listener",
      style: {
        position: "absolute",
        inset: 0,
        zIndex: 1,
        touchAction: "pan-y"
        // permite scroll vertical normalmente
      },
      onPointerDown,
      onPointerUp
    }
  );
}
function Dots$1({ array, activeIndex, setFunction }) {
  return /* @__PURE__ */ jsxs(Box, { className: "dots", children: [
    array.map(
      (item, index) => {
        return /* @__PURE__ */ jsx(
          Box,
          {
            className: "dot_content",
            onClick: () => setFunction(index)
          },
          index
        );
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "indicator", style: { left: `calc(${activeIndex} * 30px)` } })
  ] });
}
function BannerCarousel({ banners }) {
  const [loaded, setLoaded] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);
  const next = () => {
    setCurrentBanner((currentBanner + 1) % banners.length);
  };
  const prev = () => {
    setCurrentBanner((currentBanner - 1 + banners.length) % banners.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds >= 10) {
        next();
      }
    }, 1e3);
    return () => clearInterval(interval);
  }, [seconds]);
  useEffect(() => {
    setSeconds(0);
  }, [currentBanner]);
  return /* @__PURE__ */ jsxs(Box, { component: "section", className: "banner_carousel " + (loaded ? "loaded" : "notLoaded"), children: [
    /* @__PURE__ */ jsxs(Box, { className: "content", children: [
      /* @__PURE__ */ jsxs(Box, { className: "left", children: [
        banners.map((banner, index) => /* @__PURE__ */ jsxs(
          Box,
          {
            className: `content-layer ${index === currentBanner ? "active" : ""}`,
            children: [
              banner.title_banner && banner.title_banner != "<p></p>" ? /* @__PURE__ */ jsx("div", { className: "title", dangerouslySetInnerHTML: { __html: banner.title_banner } }) : /* @__PURE__ */ jsx("div", { className: "title", children: /* @__PURE__ */ jsx("h2", { children: banner.empreendimento?.title }) }),
              /* @__PURE__ */ jsx("p", { children: banner.texto_banner ?? banner.empreendimento?.subtitulo }),
              (banner.link || banner.empreendimento?.permalink) && /* @__PURE__ */ jsx(Button1, { component: "a", href: banner.link ?? banner.empreendimento?.permalink, target: banner.target.value, children: banner.title_button ? banner.title_button : "Saiba mais" })
            ]
          },
          "banner-" + index
        )),
        /* @__PURE__ */ jsx(Dots$1, { array: banners, activeIndex: currentBanner, setFunction: setCurrentBanner }),
        /* @__PURE__ */ jsx(Butterfly1, { seconds }),
        /* @__PURE__ */ jsx(Butterfly2, { seconds }),
        /* @__PURE__ */ jsx(Box, { className: "progress", sx: { width: `calc(${seconds} * 10%)`, transition: `all ${seconds != 0 ? 1 : 0}s linear` } })
      ] }),
      /* @__PURE__ */ jsx(Box, { className: "right", children: banners.map((banner, index) => /* @__PURE__ */ jsx(
        Box,
        {
          className: `bg-image ${index === currentBanner ? "active" : ""}`,
          style: { backgroundImage: `url(${banner?.imagem?.permalink ?? banner?.empreendimento?.og_image?.permalink})` }
        },
        "bannerImage-" + index
      )) }),
      /* @__PURE__ */ jsx(
        SwipeListener$1,
        {
          onSwipeLeft: next,
          onSwipeRight: prev
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Box, { className: "controls", children: [
      /* @__PURE__ */ jsx(Button, { onClick: prev, children: /* @__PURE__ */ jsx("svg", { width: "9", height: "16", viewBox: "0 0 9 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M0.323129 7.20548C-0.106559 7.64493 -0.106559 8.35861 0.323129 8.79806L6.92313 15.5481C7.35282 15.9875 8.05063 15.9875 8.48032 15.5481C8.91 15.1086 8.91 14.3949 8.48032 13.9555L2.65719 8.00001L8.47688 2.04454C8.90657 1.60509 8.90657 0.891418 8.47688 0.451965C8.04719 0.0125122 7.34938 0.0125122 6.91969 0.451965L0.319691 7.20197L0.323129 7.20548Z", fill: "#112A25" }) }) }),
      /* @__PURE__ */ jsx(Button, { onClick: next, children: /* @__PURE__ */ jsx("svg", { width: "9", height: "16", viewBox: "0 0 9 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M8.67684 7.20548C9.10653 7.64493 9.10653 8.35861 8.67684 8.79806L2.07684 15.5481C1.64715 15.9875 0.949341 15.9875 0.519653 15.5481C0.0899658 15.1086 0.0899658 14.3949 0.519653 13.9555L6.34278 8.00001L0.523091 2.04454C0.0934033 1.60509 0.0934033 0.891418 0.523091 0.451965C0.952778 0.0125122 1.65059 0.0125122 2.08028 0.451965L8.68028 7.20197L8.67684 7.20548Z", fill: "#112A25" }) }) })
    ] })
  ] });
}
function Butterfly1({ seconds }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      style: seconds == 8 ? {
        opacity: 0.5
      } : seconds > 8 ? {
        opacity: 0
      } : { transition: "transform 0s linear" },
      className: "butterfly1",
      width: "103",
      height: "96",
      viewBox: "0 0 103 96",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("path", { d: "M99.8898 32.3254C98.8981 34.3751 97.6584 36.2864 96.4463 38.2254C95.2617 40.0812 94.0496 41.9094 92.8099 43.7099C90.2479 47.3939 87.5207 50.9948 84.6557 54.485C78.9532 61.3822 72.865 67.9193 66.1157 73.7639C65.5372 74.2624 64.9587 74.761 64.3526 75.2596C64.27 74.9549 64.1873 74.6779 64.1047 74.3733C65.5097 69.3873 65.3995 64.0136 65.3444 58.8338C65.2893 54.2634 65.2066 49.7207 65.0964 45.1502C65.3444 43.1559 65.5923 40.9953 66.7218 39.3056C67.989 37.4221 70.303 36.231 72.1763 35.0399C76.0055 32.6024 80.1928 30.3033 84.876 30.6634C85.8953 30.7465 86.9422 30.9127 87.9339 30.4972C88.7879 30.1094 89.4215 29.4169 90.0276 28.7244C91.4876 27.0902 93.1956 25.7329 95.1791 24.8188C96.9422 23.9878 100.138 22.8244 100.992 25.4282C101.736 27.6995 100.909 30.2756 99.9174 32.3254L99.8898 32.3254ZM66.0606 75.6474C67.438 75.8967 66.5565 77.4756 65.6474 78.6667C65.0689 78.6944 64.4353 78.4451 64.0771 77.9465C63.7741 77.5033 63.7741 77.0878 63.967 76.7C64.1047 76.7 64.2424 76.7554 64.3526 76.7554C64.3526 76.7554 64.4353 76.8108 64.4628 76.8108C64.6006 76.8662 64.7383 76.7554 64.7108 76.6169C64.7108 76.5615 64.6832 76.5061 64.6557 76.4507C64.6557 76.3953 64.6557 76.3676 64.6281 76.3122C64.6006 76.2014 64.573 76.0906 64.5455 75.9798C64.9862 75.6751 65.5647 75.5089 66.0606 75.592L66.0606 75.6474ZM66.9697 77.6695C66.8595 78.0296 66.6391 78.2789 66.3636 78.4451C66.6667 77.9742 66.9146 77.4756 67.0799 76.9493C67.0799 77.1986 67.0524 77.4479 66.9697 77.6695ZM64.573 79.8855C63.0579 81.3258 61.3774 82.6277 59.7796 83.9573C56.584 86.6441 53.3884 89.331 50.1928 92.0179C50.1378 91.4639 50.2479 90.9376 50.5785 90.439C51.0193 89.8019 51.5427 89.1648 52.0661 88.5554C52.8099 87.6967 53.6364 86.8934 54.4628 86.0902C54.6557 86.284 54.9036 86.3948 55.2066 86.4225C55.8678 86.4225 56.4187 85.8409 56.7493 85.3146C56.832 85.1761 56.9146 85.0099 56.9697 84.8437C57.135 84.816 57.3003 84.7606 57.4656 84.6775C57.9339 84.4559 58.3196 84.0404 58.5124 83.5695C58.8154 83.7357 59.2011 83.7634 59.5592 83.6249C60.2204 83.3756 60.5785 82.7662 60.6612 82.0737C60.8816 82.0737 61.0744 82.0183 61.2672 81.9352C61.7355 81.7413 62.0661 81.4366 62.2865 81.0488C62.8375 81.1042 63.3884 80.8549 63.7741 80.4117C64.2424 79.8855 64.3251 79.193 64.1047 78.5559C64.4628 78.8329 64.876 78.9991 65.2893 79.0545C64.9862 79.4146 64.7383 79.6916 64.573 79.8301L64.573 79.8855ZM55.73 84.7883C55.73 84.7883 55.8127 84.7052 55.8678 84.6498C56.0882 84.816 56.3361 84.8714 56.584 84.8714C56.584 84.8991 56.5565 84.9268 56.5289 84.9545C56.3912 85.2592 56.1433 85.5362 55.8953 85.7578C55.5648 86.0347 54.9036 86.2286 54.573 85.8963C54.9587 85.5362 55.3168 85.1484 55.6749 84.7606L55.73 84.7883ZM58.2369 82.0737C58.3747 82.4061 58.3747 82.7385 58.3196 83.0709C58.0992 82.8216 58.0165 82.4615 58.1543 82.1568C58.1818 82.1291 58.2094 82.1014 58.2369 82.046L58.2369 82.0737ZM56.7769 83.708C56.7769 83.708 56.7769 83.708 56.7493 83.6803C57.0799 83.3202 57.4105 82.9601 57.7411 82.6C57.7962 82.9047 57.9614 83.1817 58.2094 83.4033C58.0165 83.8742 57.6309 84.2897 57.135 84.4559C57.1074 84.4559 57.0799 84.4559 57.0248 84.4836C57.0524 84.1789 57.0248 83.9019 56.7769 83.6803L56.7769 83.708ZM56.3086 84.539C56.3086 84.539 56.2259 84.3728 56.1984 84.2897C56.3086 84.1789 56.4187 84.0681 56.5289 83.9573C56.6667 84.1789 56.7493 84.4005 56.7218 84.5944C56.584 84.5944 56.4463 84.5944 56.3361 84.539L56.3086 84.539ZM59.1736 81.0765C59.1736 81.2427 59.2287 81.4089 59.3113 81.5474C59.5317 81.8798 59.8898 82.046 60.2755 82.1014C60.1928 82.7108 59.8623 83.2371 59.2287 83.4033C58.9807 83.4587 58.7603 83.4033 58.5675 83.3202C58.7052 82.8216 58.7052 82.2953 58.4573 81.8244C58.6777 81.5751 58.9256 81.3258 59.146 81.1042L59.1736 81.0765ZM35.4546 90.2451C30.5785 91.8517 25.4821 93.3197 20.3581 93.9845C15.5923 94.5939 10.3306 94.2892 6.74932 90.6606C5.09643 88.9709 3.93941 86.6441 4.21489 84.2343C4.46282 82.046 6.25346 79.5254 8.70525 79.9409C9.44905 80.0794 9.88982 79.1376 9.22866 78.6944C6.08817 76.5892 2.58954 73.6254 1.7631 69.692C1.37742 67.8916 1.95594 65.7033 4.1047 65.5094C6.14326 65.3432 8.04409 67.0329 9.39395 68.3902C9.55924 68.5563 9.83472 68.3902 9.77963 68.1686C9.33886 66.6728 8.12673 65.7033 7.135 64.5676C6.63913 63.9859 6.14326 63.3211 6.11572 62.5455C6.08817 61.5207 6.80442 60.7728 7.71351 60.385C8.6226 59.9695 9.64189 59.8864 10.6336 59.8587C11.8182 59.831 12.9752 59.8587 14.1322 60.0249C14.7934 60.108 15.4546 60.2188 16.1157 60.3296C16.4463 62.0193 17.0248 63.6812 17.989 65.2878C19.5868 67.9747 22.0661 69.8582 25.0138 70.8277C26.6116 71.354 28.2645 71.631 29.9449 71.908C31.8457 72.2404 33.719 72.6005 35.5923 72.9606C43.1681 74.4563 50.7438 76.2014 58.5124 76.146C59.2011 76.146 59.8898 76.146 60.6061 76.0906C61.4325 76.2568 62.2865 76.3953 63.1405 76.5338C63.0854 76.6446 63.0579 76.7831 63.0028 76.8939C62.9752 76.9216 62.9201 76.9493 62.8926 77.0047C62.7548 77.0878 62.5895 77.1986 62.4518 77.2817C62.3967 77.2817 62.3416 77.3371 62.2865 77.3925C53.8568 82.7108 44.9587 87.1427 35.4821 90.2451L35.4546 90.2451ZM57.9614 75.592C56.2535 75.592 54.5455 75.5089 52.8375 75.3427C49.1185 74.9826 45.4546 74.2625 41.8182 73.4869C38.2369 72.739 34.6557 72.0465 31.1019 71.2155C27.9614 70.4676 24.4353 69.8582 21.8733 67.7531C19.6419 65.9249 18.4573 63.4596 17.9614 60.7728C19.0083 61.0498 20.0276 61.3545 21.0468 61.7146C25.6198 63.2934 29.9725 65.5371 34.4077 67.4761C38.8981 69.4427 43.4435 71.2155 48.0992 72.739C50.7438 73.5977 53.416 74.4286 56.1157 75.1488C56.7218 75.315 57.3554 75.4535 57.9614 75.592ZM18.6502 50.4963C19.1185 48.6958 19.697 46.923 20.3581 45.1779C20.6887 46.9507 21.7631 48.6681 22.6446 50.1639C23.719 52.0751 24.9311 53.9033 26.281 55.6207C28.9807 59.0554 32.3416 61.9085 36.4738 63.4319C38.8981 64.346 41.4325 64.8723 43.8568 65.8418C46.0331 66.7005 48.1267 67.8362 50.1653 68.9995C54.0771 71.2432 57.9063 73.7362 62.1488 75.2596C62.2314 75.3427 62.3416 75.3981 62.4518 75.4812C62.2314 75.4812 62.0386 75.4812 61.8182 75.5089C60.2204 75.0657 58.6226 74.5948 56.9973 74.1517C54.4628 73.4592 51.9284 72.7944 49.4215 72.0188C44.4628 70.4953 39.5592 68.7779 34.7383 66.8113C30.0827 64.9 25.5648 62.601 20.7989 61.0221C19.8623 60.7174 18.8981 60.4127 17.9063 60.1911C17.438 56.9779 17.9063 53.5155 18.7052 50.524L18.6502 50.4963ZM26.6942 31.162C26.5014 34.0427 28.0716 36.7296 29.8347 38.9733C31.1019 40.5521 32.5069 41.9648 33.9119 43.4329C35.427 45.0118 36.9146 46.6183 38.3747 48.2249C44.27 54.6789 49.9725 61.2991 55.4546 68.1132C57.135 70.1906 58.843 72.3512 60.8265 74.1517C57.7962 72.9052 54.9587 71.2155 52.1212 69.5535C50.1928 68.4179 48.2645 67.3099 46.2535 66.3681C44.1598 65.3709 42.011 64.6507 39.8072 64.0136C37.4656 63.3211 35.1515 62.5733 33.0303 61.2714C31.2397 60.1634 29.6143 58.8061 28.1818 57.2549C26.6667 55.6484 25.3444 53.8479 24.1598 51.992C22.9752 50.1085 21.6529 48.0864 20.9367 45.9812C20.7438 45.4272 20.6336 44.901 20.6061 44.3747C22.3416 39.8596 24.5179 35.4831 26.6667 31.1343L26.6942 31.162ZM27.0524 30.4141C27.7411 29.0568 28.4298 27.6995 29.1736 26.3423C30 24.8188 30.7163 23.2122 31.4876 21.661C32.2865 20.0545 33.1681 18.531 34.0496 16.9521C34.7934 15.6225 35.4821 14.0437 36.8044 13.185C38.4022 12.1324 40.1929 12.8803 41.708 13.6836C42.0386 13.8498 42.3967 14.0991 42.8099 14.3207C41.5978 14.1545 40.4408 14.2376 39.5592 15.401C38.7052 16.5089 38.7879 18.0047 39.5592 19.0296C39.2287 20.8301 40.8265 22.4366 42.259 23.323C43.3609 23.9878 44.5179 24.5141 45.5923 25.2343C46.6116 25.9268 47.5207 26.7578 48.3471 27.6441C51.7906 31.439 53.3884 36.5357 54.1047 41.5216C54.9311 47.2831 54.7659 53.1277 55.73 58.8615C56.1433 61.3545 56.7769 63.8197 57.7686 66.1742C58.7603 68.5009 60.1653 70.4399 61.7631 72.4066C62.259 73.016 62.7273 73.6254 63.0579 74.3179C63.0579 74.5394 63.0579 74.761 63.0579 74.9549C62.6171 74.8164 62.1763 74.6502 61.7355 74.484C59.8072 72.8498 58.1818 70.9108 56.584 68.9441C53.967 65.731 51.3499 62.5179 48.6777 59.3878C43.2507 53.0446 37.5758 46.9507 31.8733 40.8568C29.3113 38.0869 26.3086 34.4028 27.0524 30.4141ZM39.8072 19.0019C39.9174 18.4479 40.1653 17.9493 40.6612 17.5615C41.6805 16.7305 43.2232 17.3399 43.2782 18.7249C43.3333 20.4423 41.0193 20.0822 40.1653 19.3343C40.0276 19.2235 39.9174 19.1127 39.8347 19.0019L39.8072 19.0019ZM44.3802 14.9024C44.9587 15.0409 45.5647 15.1517 46.0882 15.1517C47.1901 15.1794 48.2369 14.7916 49.3113 14.7085C50.8265 14.5977 51.6529 15.4287 52.0386 16.8413C52.7548 19.4174 53.3609 22.0488 53.9945 24.6526C55.2893 29.9432 56.5014 35.2615 57.4105 40.6352C58.3196 46.0366 58.7879 51.5211 59.697 56.9225C60.5234 61.8531 61.7355 66.7282 63.0303 71.5756C63.0303 71.908 63.0303 72.2404 63.0303 72.5728C63.0303 72.9052 63.0303 73.2376 63.0303 73.57C62.4243 72.6005 61.6254 71.7141 60.8816 70.8277C59.394 68.9718 58.2645 66.8113 57.4656 64.5676C55.7576 59.831 55.3995 54.762 55.0689 49.7761C54.4904 41.0784 53.6364 30.6357 45.8402 25.1512C43.967 23.8216 41.3499 23.1568 40.1653 21.024C39.8623 20.4977 39.7245 19.8883 39.7521 19.3066C40.0276 19.6113 40.3857 19.8606 40.7989 20.0268C42.2039 20.6085 44.1322 19.6667 43.2507 17.977C42.3692 16.2873 40.303 16.9521 39.697 18.4756C39.6694 18.5587 39.6143 18.6695 39.5868 18.7526C39.0358 17.9216 38.9532 16.869 39.449 15.9549C40.3857 14.2099 41.9835 14.4038 43.6088 14.7639C43.8568 14.847 44.0771 14.9024 44.3251 14.9301L44.3802 14.9024ZM45.3444 14.6254C46.3361 13.9052 46.4463 12.2709 46.6391 11.1906C46.9422 9.61175 47.2176 7.97748 47.7686 6.454C48.7879 3.71175 51.7355 0.581704 54.9036 2.16058C56.1708 2.79767 57.0248 3.98875 57.686 5.20753C58.4573 6.6756 59.0358 8.22677 59.5868 9.77795C60.7438 13.0465 61.5978 16.3981 62.0661 19.8329C62.562 23.4338 62.7273 27.0625 62.8375 30.6911C63.0854 37.893 63.5262 45.0671 63.8568 52.269C63.719 53.6817 63.6088 55.0667 63.4986 56.4794C63.1681 61.0498 63.0028 65.6479 63.0028 70.2183C62.0386 66.5066 61.1295 62.7948 60.4132 59.0277C59.2838 53.0169 58.8154 46.923 57.7962 40.9122C56.7769 34.9291 55.3995 29.0014 53.9119 23.1014C53.5537 21.6333 53.1681 20.1653 52.7824 18.6695C52.5069 17.5615 52.3416 16.1488 51.5978 15.2071C50.1378 13.4343 47.4656 15.0132 45.6198 14.7916C45.427 14.7916 45.2342 14.7362 45.0413 14.7085C45.1515 14.6531 45.2342 14.6254 45.3168 14.5423L45.3444 14.6254ZM63.6364 74.8164C63.5813 74.6502 63.5262 74.5117 63.4435 74.3733C63.4435 73.9578 63.4435 73.57 63.4435 73.1545C63.5537 73.5423 63.6639 73.9301 63.7741 74.3456C63.7466 74.5117 63.6915 74.6779 63.6639 74.8441L63.6364 74.8164ZM63.2782 77.0047C63.2782 77.0047 63.3884 76.8939 63.416 76.8662C63.3884 76.977 63.3609 77.0878 63.3609 77.1986C63.3609 77.1432 63.3058 77.0601 63.2507 77.0324L63.2782 77.0047ZM63.3609 77.3094C63.3609 77.3094 63.3884 77.5864 63.4435 77.7249C63.3609 77.6695 63.2782 77.5864 63.1681 77.531C63.1681 77.531 63.2232 77.5033 63.2232 77.4756C63.3058 77.4202 63.3333 77.3648 63.3609 77.2817L63.3609 77.3094ZM61.6805 78.6113C61.6805 78.6113 61.7631 78.5282 61.8182 78.5005C62.0661 78.3343 62.3416 78.1681 62.5895 77.9742C62.4793 78.2235 62.3692 78.4728 62.259 78.7221C62.2039 78.8052 62.3416 78.8883 62.3967 78.8052C62.562 78.4728 62.7273 78.1127 62.8926 77.7803C62.8926 77.7803 62.9477 77.7526 62.9752 77.7249C63.113 77.7803 63.2507 77.9465 63.3609 78.0573C63.6364 78.3343 63.8017 78.7221 63.8568 79.1099C63.967 79.8578 63.4711 80.5779 62.7273 80.7718C62.6171 80.7995 62.5069 80.7995 62.3967 80.7995C62.6171 80.0517 62.3967 79.1653 61.6805 78.639L61.6805 78.6113ZM61.2397 79.6916C61.2121 79.4977 61.1846 78.9991 61.405 78.8883C61.6805 78.7775 62.0386 79.5531 62.0937 79.7747C62.1763 80.1071 62.1488 80.4117 62.0661 80.6887C61.6254 80.5502 61.3223 80.1625 61.2397 79.6639L61.2397 79.6916ZM59.8623 81.1042C60.1653 80.6056 60.1378 80.8826 60.2479 81.2704C60.303 81.4366 60.3306 81.6028 60.3306 81.769C60.2479 81.769 60.1653 81.7136 60.0551 81.6859C59.6694 81.5197 59.6419 81.492 59.8623 81.1042ZM60.6612 81.769C60.6612 81.3258 60.4959 80.384 59.9725 80.2732C60.2755 79.9686 60.6061 79.6362 60.9091 79.3315C60.854 79.8301 61.0193 80.3286 61.3774 80.6887C61.5427 80.8549 61.708 80.938 61.9008 81.0211C61.7631 81.2427 61.5427 81.4366 61.2672 81.5751C61.0744 81.6859 60.854 81.7413 60.6336 81.7413L60.6612 81.769ZM63.9945 75.2319C63.9945 75.2319 63.8843 75.2042 63.8568 75.1765C63.8568 75.0934 63.9119 75.0103 63.9394 74.9549C63.9394 75.038 63.9945 75.1488 64.022 75.2319L63.9945 75.2319ZM63.9119 73.6531C63.7466 73.0437 63.5813 72.4343 63.416 71.8249C63.3884 66.3404 63.5813 60.8282 64.022 55.3714C64.4077 61.4653 65.1791 67.6423 63.9119 73.6531ZM67.6033 74.6779C67.6033 74.6779 67.7411 74.5394 67.7962 74.484C68.1543 74.1794 68.6777 74.0132 69.146 74.1517C68.7328 74.5117 68.4022 74.8164 68.3747 75.4258C68.3747 75.8967 68.54 76.5061 68.9256 76.8108C69.2562 77.0601 69.6694 76.8108 69.9449 76.5615C70.3857 76.146 70.551 75.4812 70.4408 74.8718C70.6887 74.7887 70.9367 74.7333 71.1846 74.6502C71.5978 75.7582 70.6887 77.1155 69.5868 77.3925C68.7603 77.5864 67.9339 77.0878 67.5207 76.423C67.4931 75.8136 67.438 75.2042 67.6033 74.6779ZM69.5592 74.401C69.9725 74.7887 70 75.4812 69.7245 75.9521C69.6694 76.0629 69.394 76.4507 69.2011 76.3953C68.843 76.2845 68.7879 75.4258 68.8705 75.1488C68.9807 74.8164 69.2838 74.5948 69.5592 74.401ZM69.8623 73.57C69.8623 73.57 69.7521 73.6531 69.697 73.7085C69.5592 73.6254 69.4215 73.57 69.2562 73.5423C69.449 73.5423 69.6694 73.5423 69.8623 73.57ZM70.3581 73.7362C70.3581 73.7362 70.4959 73.8193 70.551 73.847C70.4408 74.0132 70.3581 74.1794 70.2479 74.3456C70.2204 74.2625 70.1653 74.1794 70.1102 74.124C70.0827 74.0963 70.0551 74.0409 70.0276 74.0132C70.1378 73.9301 70.2479 73.847 70.3581 73.7362ZM70.8265 74.0686C70.8265 74.0686 70.9642 74.2348 71.0468 74.3179C70.9091 74.3732 70.7438 74.4009 70.6061 74.4563C70.6887 74.3178 70.7714 74.2071 70.8265 74.0686ZM70.9642 73.2376C70.9642 73.2376 70.8816 73.3761 70.8265 73.4315C70.8265 73.4315 70.7989 73.4315 70.7714 73.4038C70.8265 73.3484 70.9091 73.293 70.9642 73.2376ZM101.846 27.0625C101.763 25.2066 101.047 23.3784 98.9807 23.2399C96.9973 23.1291 94.876 24.2371 93.2507 25.262C92.3416 25.816 91.4876 26.4808 90.7163 27.2287C89.9449 27.9488 89.3113 28.8629 88.4849 29.5277C87.3554 30.4141 86.1157 30.2202 84.7934 30.1094C83.6915 30.0263 82.5895 30.1094 81.4876 30.2756C79.2287 30.6634 77.1074 31.5498 75.0964 32.6301C73.0303 33.738 71.1019 35.0676 69.2011 36.4249C67.438 37.6991 66.0331 39.1394 65.3995 41.2723C65.2617 41.7155 65.1515 42.1864 65.0689 42.6296C65.0138 40.1643 64.9311 37.6991 64.876 35.2338C64.6557 27.6995 64.5455 19.9991 62.259 12.7418C61.2948 9.61175 60.0827 6.23241 58.0716 3.60095C57.2452 2.49297 56.1708 1.55119 54.8485 1.13569C53.5262 0.747901 52.1763 1.0249 50.9917 1.63429C48.1267 3.13006 47.0524 6.31551 46.5014 9.30706C46.3636 10.0826 46.2259 10.8859 46.0882 11.6615C45.9504 12.4094 45.8678 13.2958 45.3995 13.9329C44.6557 14.9855 43.4435 14.0991 42.6171 13.6282C41.9008 13.2404 41.1846 12.8249 40.4408 12.5479C39.0634 12.0216 37.5758 12.0216 36.3636 12.9357C35.2617 13.7667 34.573 15.0686 33.8292 16.2042C32.8375 17.7831 31.8457 19.3897 30.7989 20.9409C29.7521 22.492 28.6502 24.0155 27.7135 25.6221C23.9945 31.9099 20.6887 38.3916 18.2645 45.2887C16.6391 49.8869 15.3168 54.9559 16.0331 59.7479C15.2893 59.6094 14.5455 59.4986 13.8017 59.4155C11.7906 59.2216 9.4766 59.0554 7.57577 59.9141C6.00552 60.6066 5.17908 62.2132 6.03307 63.8197C6.74932 65.1493 8.09919 66.0357 8.87054 67.2822C6.77687 65.4817 3.49864 63.6258 1.57026 66.4235C0.716267 67.67 0.82646 69.3319 1.18459 70.7446C1.65291 72.4897 2.67219 74.0686 3.71902 75.5089C4.60056 76.7554 5.75759 77.9188 7.02481 78.8883C5.70249 79.3869 4.60056 80.5225 3.93941 81.7967C2.94767 83.7357 3.00277 86.0071 3.82921 88.0014C5.67494 92.5164 10.3581 94.8432 14.9862 95.1479C17.7962 95.3418 20.5785 94.8709 23.3333 94.2892C26.0882 93.7352 28.7879 93.0427 31.4876 92.2671C36.7493 90.7437 41.9284 88.8324 46.9422 86.5887C51.405 84.5667 55.7576 82.2953 59.9174 79.6916C59.5317 80.024 59.1736 80.3563 58.7879 80.6887C57.2176 82.046 55.5923 83.2925 54.0496 84.6775C52.6997 85.8686 51.2397 87.0042 50.1653 88.4723C49.3113 89.6357 49.0083 91.547 49.5041 92.9042C49.6143 93.2089 49.9449 93.3197 50.1928 93.0981C52.7824 90.7991 55.3995 88.5277 57.989 86.2286C59.3113 85.0653 60.6336 83.9019 61.9284 82.7385C63.0854 81.7136 64.2975 80.7441 65.3719 79.6362C65.5372 79.47 65.7025 79.3038 65.8402 79.1099C66.6116 78.9991 67.2727 78.5005 67.4656 77.5864C67.4656 77.5033 67.4931 77.3925 67.5207 77.2817C68.2094 77.8911 69.1736 78.1958 70.1102 77.7803C71.3774 77.1986 72.011 75.6751 71.6529 74.5117C75.8953 73.2653 80.1653 72.1019 84.3802 70.7169C84.6281 70.6338 84.5455 70.2183 84.27 70.3014C79.9725 71.4925 75.7851 72.8775 71.5152 74.1794C71.405 73.9855 71.2672 73.7916 71.1019 73.6254C71.4325 73.1545 71.7631 72.6836 72.1488 72.2681C74.9311 70.0798 78.0165 68.0578 81.3499 66.8667C81.7906 66.7559 82.259 66.6174 82.6997 66.5343C83.5537 66.3404 84.4353 66.1742 85.3168 66.0357C85.8402 65.9526 86.3636 65.9803 86.9146 65.9803C87.4105 65.9803 87.9339 65.8972 88.4298 65.8418C88.9256 65.7864 88.9256 65.1216 88.4298 65.0662C84.6281 64.7615 81.1295 65.9249 77.9063 67.7531C77.686 67.8639 77.4656 67.947 77.2452 68.0578C75.4821 68.9164 73.8292 70.0521 72.4518 71.4648C72.0661 71.7695 71.6529 72.1019 71.2672 72.4066C70.9642 72.6559 70.6336 72.9329 70.3306 73.1822C70.303 73.1822 70.2479 73.1822 70.2204 73.1545C69.3389 72.8775 68.2369 73.0714 67.6033 73.7639C67.4931 73.8747 67.4105 73.9855 67.3278 74.124C66.9146 74.5117 66.7218 74.9549 66.6942 75.3981C66.4463 75.2596 66.1433 75.2042 65.8678 75.1765C65.4821 75.1765 65.0689 75.2596 64.7108 75.4258C71.708 69.7474 78.4298 63.5981 84.27 56.7009C87.2452 53.1554 90.0827 49.4991 92.6997 45.6765C95.3444 41.7986 97.989 37.7822 100.11 33.5718C101.129 31.5775 101.983 29.3615 101.873 27.0902L101.846 27.0625Z", stroke: "#BC9D5A", strokeWidth: "0.68", strokeMiterlimit: "10" })
    }
  );
}
function Butterfly2({ seconds }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      style: seconds == 8 ? {
        opacity: 0.5
      } : seconds > 8 ? {
        opacity: 0
      } : { transition: "transform 0s linear" },
      className: "butterfly2",
      width: "64",
      height: "76",
      viewBox: "0 0 64 76",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("path", { d: "M17.5262 51.1535C17.5262 51.1258 17.5262 51.0981 17.5262 51.0981C17.6639 50.9319 17.7741 50.7657 17.8568 50.5718C17.5813 49.5747 17.3334 48.5775 17.0579 47.5803C16.9752 47.5249 16.865 47.4972 16.7824 47.4418C16.7548 47.4141 16.7273 47.4141 16.6997 47.4141C16.6446 47.4972 16.5895 47.5803 16.5069 47.6357C16.3967 47.7188 16.2314 47.8019 16.0937 47.8019L16.1212 47.8019C16.6722 48.8822 17.113 50.0179 17.5262 51.1535ZM17.5262 51.1535C17.9945 52.5108 18.3802 53.8681 18.7108 55.2531C19.0964 56.8873 19.3995 58.5216 19.73 60.1559C20.0331 61.5963 20.0882 63.6737 21.2727 64.6986C21.8513 62.815 21.3003 60.9315 20.6391 59.1587C20.2535 58.1338 19.8402 57.0812 19.5097 56.0287C19.1791 54.9484 18.8485 53.8681 18.5179 52.7878C18.3526 52.6493 18.2149 52.4831 18.0772 52.3169C17.967 52.2338 18.022 52.0953 18.1047 52.0122C17.9394 51.8737 17.9119 51.6521 18.0221 51.4859C17.8843 51.4028 17.719 51.3197 17.5537 51.2366C17.5262 51.2089 17.5262 51.2089 17.5262 51.2089L17.5262 51.1535ZM2.6777 25.7808C2.98073 25.9193 3.28377 26.0301 3.5868 26.1686C3.66944 26.3348 3.72453 26.5286 3.75208 26.6948C3.22866 26.7502 2.6777 26.3071 2.6777 25.7808ZM3.61434 27.0826C3.75208 27.0826 3.91737 27.0826 4.05511 27.0272C4.13775 27.0272 4.16531 26.9164 4.16531 26.8333C4.16531 26.6948 4.11021 26.584 4.08266 26.4455C4.22041 26.5286 4.38569 26.6117 4.52344 26.7225C5.0193 27.0549 5.48762 27.4704 5.90085 27.8859C5.15704 27.7751 4.46833 27.5812 3.80718 27.2211C3.75208 27.1934 3.66944 27.138 3.61434 27.1103L3.61434 27.0826ZM12.2369 37.6085C12.2369 37.6085 12.3471 37.8024 12.4022 37.9132C12.3196 37.9132 12.2645 37.8855 12.1818 37.8855C12.1818 37.8024 12.2094 37.7193 12.2094 37.6362L12.2369 37.6085ZM11.135 39.1042C11.3003 39.0488 11.4656 38.9934 11.6033 38.8826C11.6584 38.8549 11.7135 38.7995 11.7411 38.7718C12.1267 38.7164 12.5951 38.9103 12.9807 39.1042C13.0358 39.2427 13.0909 39.3812 13.146 39.5197C13.146 39.5197 13.146 39.5197 13.146 39.5474C12.8705 39.6028 12.5951 39.6859 12.3471 39.8521C11.7135 40.2676 11.3278 41.2371 11.8788 41.9019C12.5124 42.5944 13.3664 41.8188 13.5317 41.154C13.6694 40.6831 13.6143 40.2399 13.4766 39.769C13.6694 39.769 13.8623 39.7967 14.0551 39.8798C14.4408 40.2122 14.7989 40.6 15.1019 41.0155C15.1846 41.2925 15.2672 41.5972 15.3499 41.8742C15.3499 42.1789 15.2672 42.4836 15.157 42.7329C15.1019 42.7329 15.0193 42.7052 14.9367 42.6775C14.2204 42.5667 13.4766 42.8437 13.2287 43.5362C12.843 43.093 12.4573 42.6775 12.0441 42.262C11.5207 41.7357 10.9422 41.0986 10.8044 40.3507C10.7493 39.9629 10.8044 39.4366 11.0799 39.1042L11.135 39.1042ZM14.1102 42.9822C14.4959 42.816 14.8265 42.816 15.1295 42.8991C14.9918 43.1207 14.8265 43.3146 14.6336 43.4808C14.5234 43.5639 14.3581 43.647 14.2204 43.7024C14.1378 43.7301 13.6419 43.8409 13.5317 43.7024C13.3113 43.3977 13.8898 43.0376 14.1102 42.9545L14.1102 42.9822ZM13.6694 43.9794C14.3581 44.0902 14.9642 43.5639 15.2948 42.9545C15.4876 43.0376 15.6529 43.1761 15.8182 43.3423C16.0937 44.3394 16.3967 45.3089 16.6997 46.2784C16.6997 46.3061 16.6997 46.3615 16.7273 46.3892C16.7273 46.6385 16.6997 46.8878 16.6171 47.1094C16.3416 46.9986 16.011 46.9432 15.6805 46.9709C15.1019 45.9183 14.4408 44.9211 13.697 43.9794L13.6694 43.9794ZM15.7907 47.1925C15.7907 47.1925 15.9008 47.1925 15.9559 47.1925C16.1488 47.1925 16.3416 47.2479 16.5344 47.3033C16.4518 47.4418 16.3141 47.5249 16.1488 47.5803C16.1212 47.5803 16.0661 47.5803 16.011 47.5803C15.9835 47.4972 15.9284 47.4418 15.9008 47.3587C15.8733 47.3033 15.8182 47.2202 15.7907 47.1648L15.7907 47.1925ZM20.4187 54.1174C20.4187 54.1174 20.1708 53.8404 20.0331 53.7019C19.9504 53.4803 19.8678 53.2864 19.7851 53.0648C20.584 52.8986 21.3554 52.6493 22.0716 52.3169C22.7879 52.2061 23.4766 52.0122 24.1653 51.7629C24.9918 51.7629 25.8182 51.7906 26.6446 51.8737C28.7383 52.0676 31.7411 52.6493 32.5124 54.9761C32.8155 55.8902 32.7604 56.9981 32.2094 57.8014C31.5482 58.7986 30.3912 58.854 29.3168 58.577C27.2783 58.0507 25.2121 57.2751 23.3664 56.278C22.7053 55.9179 22.0716 55.5301 21.4931 55.0869C21.1075 54.7822 20.7493 54.4498 20.3912 54.1174L20.4187 54.1174ZM21.1901 55.447C23.5317 57.4413 26.1488 59.0756 28.9862 60.2667C30.832 61.0423 32.7604 61.5963 34.7163 61.9841C35.1019 62.0672 35.5152 62.1226 35.9284 62.2057C35.5427 62.3164 35.1846 62.5103 34.854 62.7596C34.7989 62.815 34.7989 62.8704 34.7989 62.9258C35.2397 64.5324 35.2397 66.1944 34.7989 67.7733C29.427 64.6986 24.7714 60.4606 21.1625 55.447L21.1901 55.447ZM21.135 55.8902C24.7714 60.8761 29.4821 65.0864 34.854 68.1333C34.9091 68.161 35.0193 68.1334 35.0469 68.0503C35.2948 67.1916 35.4325 66.3329 35.4601 65.4465C35.4601 65.031 35.4601 64.6155 35.3774 64.2C35.3499 63.923 35.2948 63.6737 35.2397 63.4244C35.2397 63.3413 35.1295 63.092 35.1295 63.0089C35.2121 62.4826 36.4794 62.3441 36.8926 62.3441C36.9201 62.3441 36.9752 62.3441 37.0028 62.3441C37.1681 62.3441 37.3058 62.3718 37.4711 62.3995C37.9394 62.4826 38.4077 62.6488 38.8485 62.8704C41.6033 64.3108 42.1818 67.3578 42.9256 70.1C43.2011 71.0972 43.4766 72.2329 44.0276 73.1747C43.8347 73.1193 43.6419 73.0639 43.4766 73.0085C39.8127 71.8451 36.3141 69.9892 33.1736 67.7733C28.6281 64.5601 23.9725 60.8207 21.135 55.9179L21.135 55.8902ZM44.4132 73.2578C44.2204 72.8977 44.0551 72.5376 43.8898 72.1775C43.394 70.9587 43.0909 69.6568 42.7604 68.4103C42.2094 66.3052 41.4656 64.2831 39.5923 63.0089C39.2893 62.815 38.9862 62.6211 38.6557 62.4827C39.2893 62.4827 39.8953 62.4826 40.5014 62.3995C42.0441 62.1779 43.3664 61.4024 44.1653 60.0451C44.7989 58.9094 45.0193 57.5521 44.8816 56.2503C44.8816 56.278 44.9367 56.3057 44.9918 56.3057C46.0386 56.4442 47.0854 56.5826 48.1598 56.7211C50.0331 57.192 51.7962 58.0507 53.4766 59.0756C55.6529 60.4329 57.7466 62.0118 59.6749 63.6737C60.281 64.2 60.9146 64.8371 61.2452 65.6127C60.8044 66.6099 60.2259 67.5794 59.5923 68.5211C59.427 68.4104 59.2617 68.2718 59.124 68.1888C54.3582 65.1695 49.73 61.8733 45.2948 58.3831C45.2121 58.3277 45.0744 58.3831 45.0744 58.4662C44.9918 60.0728 43.9449 61.4855 42.4298 62.0118C42.3471 62.0395 42.3196 62.1503 42.3747 62.2334C44.7438 64.9202 47.1405 67.5794 49.5097 70.2662L51.2176 72.1775C51.5207 72.5099 52.0992 73.0362 52.1267 73.5348C49.5648 74.0888 46.9201 73.9503 44.3857 73.2855L44.4132 73.2578ZM52.0441 72.6484C51.4931 71.9282 50.832 71.2911 50.2259 70.5986C47.719 67.801 45.2397 64.9756 42.7328 62.178C44.1653 61.5963 45.157 60.2667 45.3499 58.7155C48.1598 60.9038 51.0248 63.0366 53.9449 65.031C55.2672 65.9451 56.5896 66.8038 57.9119 67.6902C58.2975 67.9395 58.6832 68.1887 59.0689 68.438C59.1791 68.5211 59.3168 68.6043 59.4546 68.715C59.2342 69.0474 58.9862 69.3521 58.7659 69.6568C58.6281 69.8507 58.6281 70.0723 58.7108 70.2385C57.113 71.6789 55.157 72.7038 53.146 73.2855C52.9256 73.3409 52.7053 73.3963 52.5124 73.4517C52.4573 73.147 52.2645 72.87 52.0992 72.6484L52.0441 72.6484ZM61.3829 65.2526C61.0799 64.6709 60.584 64.1446 60.1157 63.7014C59.0689 62.7319 57.9119 61.8733 56.8099 61.0146C55.5978 60.1005 54.3306 59.2141 53.0358 58.4385C52.0441 57.8568 51.0248 57.3582 49.9504 56.9427C51.3278 57.1366 52.7053 57.3028 54.0827 57.4967C56.0661 57.746 58.2975 57.9399 59.9229 56.5272C60.5565 57.3582 61.135 58.2169 61.5207 59.1864C62.4022 61.2639 62.1543 63.3136 61.4105 65.2249L61.3829 65.2526ZM59.5648 56.361C57.8568 57.6906 55.4876 57.3305 53.4766 57.0812C51.686 56.8319 49.8953 56.6103 48.1047 56.361C47.113 56.1117 46.0937 55.9733 45.0469 55.9456C44.9642 55.9456 44.9091 56.001 44.8816 56.0841C44.8816 55.9456 44.854 55.8071 44.8265 55.6686C44.4959 53.9789 43.5593 52.6216 42.3471 51.5413C43.2011 51.7352 44.0827 51.8737 44.9918 51.9568C47.7741 52.1784 50.6116 51.7075 52.8981 50.1287C54.6336 52.677 56.9201 54.8099 59.6199 56.361L59.5648 56.361ZM59.2893 55.8071C56.8099 54.339 54.6887 52.3169 53.0909 49.9625C53.2287 49.8794 53.3389 49.7686 53.4766 49.6578C53.5041 49.6301 53.5593 49.5747 53.5593 49.5193C54.1378 50.4057 54.854 51.2089 55.5703 51.9845C56.7548 53.231 58.1323 54.4498 59.2893 55.8071ZM53.1185 49.4639C53.1185 49.4639 53.0083 49.6024 52.8981 49.6855C52.1267 48.4944 51.4656 47.1925 50.9422 45.8352C51.2727 46.1122 51.5482 46.4169 51.8237 46.7493C52.1818 47.1648 52.4573 47.6357 52.7053 48.1343C52.843 48.439 53.2287 49.1592 53.1185 49.4639ZM51.9339 46.2507C51.5758 45.8352 51.1625 45.4474 50.7218 45.1427C50.7218 45.115 50.7218 45.0596 50.6942 45.0319C50.6667 44.9211 50.5565 44.9211 50.4738 44.9765C50.0606 44.6995 49.5923 44.4502 49.124 44.284C46.7548 43.3977 44.248 44.0625 41.9064 44.5887C39.6199 45.115 37.3334 45.669 35.0744 46.3061C35.4325 46.1122 35.8182 45.8906 36.1763 45.6967C36.865 45.4751 37.5537 45.2535 38.27 45.0596C40.1157 44.561 41.989 44.2287 43.8623 43.9517C44.7989 43.8132 45.708 43.7024 46.6446 43.6193C47.719 43.5085 48.9312 43.3977 49.9229 43.8409C50.9422 44.3118 51.4931 45.2535 51.9615 46.2507L51.9339 46.2507ZM36.7273 44.0071C36.4243 44.1456 36.1488 44.2841 35.8733 44.4226C38.7108 42.4559 41.3003 40.1568 43.5317 37.4977C48.4904 31.5423 51.3278 23.4817 50.3361 15.6704C49.8402 11.8479 48.4353 7.58217 45.4876 4.97841C43.9449 3.62113 42.0441 2.98405 40.0331 3.23334C39.7851 3.26104 39.5097 3.31644 39.2617 3.37184C39.9229 3.12254 40.584 2.92865 41.3003 2.84555C43.3113 2.62395 45.3499 2.95635 46.7273 4.59062C48.1323 6.25259 48.9587 8.46856 49.7851 10.4629C50.6391 12.5404 51.2452 14.701 51.4931 16.9723C51.9339 21.2934 51.1626 25.6977 49.9504 29.8249C49.2893 32.0132 48.5179 34.2014 47.3333 36.1958C46.1763 38.1625 44.6612 39.7413 42.7328 40.9601C40.832 42.1512 38.7659 43.0653 36.7548 44.0348L36.7273 44.0071ZM38.5455 3.64883C39.6474 3.34414 40.8044 3.26104 41.8237 3.39954C44.1102 3.73193 45.9284 5.36621 47.1681 7.24978C49.3995 10.5737 50.3086 14.8117 50.281 18.7728C50.2535 26.8056 46.5345 34.3953 40.8595 39.9352C38.4353 42.2897 35.7356 44.2841 32.843 45.9737C31.9339 46.4446 31.0248 46.9155 30.1433 47.3587C29.3719 47.7465 28.6006 48.1343 27.8292 48.5498C27.9945 48.3005 28.1598 48.0789 28.2975 47.8296C30.6391 44.1733 32.6502 40.2953 34.248 36.2512C34.3306 36.0019 34.4408 35.7803 34.5234 35.531C36.562 33.0103 38.3802 30.3235 39.675 27.3042C40.5014 25.3653 41.1901 23.2878 41.0248 21.1272C40.8595 19.3268 40.1708 17.6371 39.2893 16.0859C38.3251 14.3963 37.113 12.8451 35.9559 11.2662C35.3499 10.4629 34.7438 9.63194 34.4132 8.66245C34.1929 7.96997 34.2204 7.27747 34.4408 6.64038C34.8816 6.25259 35.3223 5.8371 35.7631 5.477C36.6171 4.78452 37.5262 4.14743 38.5179 3.67654L38.5455 3.64883ZM34.2204 6.86198C33.8898 8.16386 34.551 9.52114 35.3223 10.6568C36.4794 12.3188 37.7741 13.8977 38.8485 15.6427C39.8953 17.3878 40.7493 19.2991 40.8595 21.3765C40.9973 23.8695 39.9504 26.3625 38.8485 28.5507C37.7466 30.739 36.3967 32.761 34.8816 34.6723C35.4601 33.1211 35.9559 31.5423 36.3967 29.9357C36.9201 28.0798 37.2783 26.1686 37.113 24.2296C36.8375 20.6563 35.0744 17.3878 33.2287 14.3686C32.4298 13.0667 31.6033 11.7925 30.7493 10.546C31.8237 9.24414 32.9807 7.99766 34.2204 6.86198ZM41.6584 51.3751C43.4491 52.8155 44.7163 54.8099 44.5785 57.3028C44.4959 58.7432 43.9174 60.2113 42.7328 61.0977C41.2727 62.178 39.2893 62.0671 37.5813 61.901C32.6777 61.4301 27.9119 59.6573 23.8623 56.8596C23.9725 56.915 24.0551 56.9427 24.1653 56.9981C25.3223 57.5244 26.5069 57.9676 27.719 58.3831C28.7934 58.7432 30.0055 59.2695 31.135 58.9648C32.9256 58.5216 33.394 56.2226 32.7879 54.6991C31.8788 52.3446 28.9311 51.7075 26.7273 51.4582C26.2314 51.4028 25.708 51.3751 25.2121 51.3474C25.8182 51.0981 26.4518 50.7934 27.0303 50.5165C28.4077 49.8517 29.7576 49.1592 31.1075 48.439C32.3471 48.2451 33.6419 48.439 34.8265 48.7991C36.7273 49.4085 38.4628 50.3779 40.3637 50.9873C40.8044 51.1258 41.2452 51.2643 41.7135 51.3751L41.6584 51.3751ZM38.9587 49.7409C39.6199 50.0456 40.281 50.4056 40.9146 50.8211C40.5565 50.7103 40.1984 50.5995 39.8402 50.4611C37.9945 49.7963 35.7907 48.6329 33.6143 48.1897C35.5152 48.3836 37.4711 49.1038 38.9587 49.7409ZM31.9615 47.9681C32.4573 47.6911 32.9532 47.4418 33.4491 47.1648C35.5152 46.5277 37.6088 45.9737 39.7025 45.4751C41.8513 44.9488 44.0827 44.2564 46.3141 44.201C47.8568 44.1733 49.3168 44.6164 50.5289 45.4751C51.0524 47.0263 51.7962 48.4667 52.6777 49.824C52.6226 49.8517 52.5951 49.8794 52.5675 49.9071C52.4022 50.0179 52.2645 50.1287 52.0992 50.2118C51.7135 50.4611 51.3003 50.6549 50.8595 50.8211C47.9945 52.0122 44.7163 51.8183 41.7135 51.0427C40.4188 50.0733 38.9036 49.3808 37.416 48.9099C35.7907 48.3836 33.8347 47.8573 31.989 47.9681L31.9615 47.9681ZM20.5289 52.4554C20.2259 52.5385 19.8953 52.6216 19.5648 52.677C19.5372 52.5939 19.5097 52.4831 19.4821 52.4C19.8402 52.4277 20.1984 52.4554 20.5289 52.4554ZM19.2617 51.3474C19.8953 50.7103 20.5289 50.0733 21.1625 49.4639C24.6887 45.946 28.2975 42.4836 31.6584 38.7995C32.4022 37.9963 33.1185 37.1653 33.8347 36.3343C33.4491 37.3038 33.0358 38.2456 32.6226 39.1873C31.1075 42.539 29.2893 45.7521 27.2232 48.7991C24.9091 49.7963 22.54 50.6549 20.1433 51.3474C19.8402 51.3474 19.5648 51.3474 19.2617 51.3474ZM30.5565 10.7676C31.8513 12.6789 33.0909 14.6456 34.1929 16.6676C35.9835 19.9085 37.2232 23.4817 36.6447 27.2211C36.3141 29.2986 35.6529 31.3207 34.9642 33.315C34.7163 34.0352 34.4408 34.7831 34.1653 35.5033C32.7328 37.2207 31.1626 38.8549 29.5923 40.4338C26.0661 43.8963 22.4298 47.2479 18.8761 50.6826C18.8761 50.6549 18.876 50.6272 18.8485 50.5995C18.7659 50.0456 18.7108 49.4639 18.6557 48.9099C17.8292 40.7939 19.0964 32.5949 22.1543 25.0329C23.6419 21.3211 25.5703 17.7479 27.8292 14.4794C28.6832 13.2329 29.6199 11.9864 30.584 10.7953L30.5565 10.7676ZM17.9394 50.8765C17.9394 50.8765 18.0221 51.1535 18.0496 51.292C17.967 51.2366 17.8568 51.1812 17.7741 51.1258C17.8292 51.0427 17.8843 50.9596 17.9394 50.8765ZM16.9752 47.3033C16.9752 47.3033 16.865 47.2479 16.8099 47.2202C16.8375 47.1371 16.865 47.054 16.8926 46.9709C16.9201 47.0817 16.9477 47.1925 16.9752 47.3033ZM15.708 42.9545C15.708 42.9545 15.5152 42.8437 15.405 42.7883C15.4601 42.6775 15.4876 42.5667 15.5152 42.4559C15.5152 42.4282 15.5152 42.4005 15.5152 42.3451C15.5703 42.539 15.6254 42.7329 15.6805 42.9268L15.708 42.9545ZM29.7025 9.54884C25.5152 14.5902 22.3747 20.5456 20.4738 26.8056C18.1873 34.3399 17.4986 42.4282 18.7108 50.2118C18.573 49.7963 18.4077 49.3808 18.27 48.9653C18.0221 47.9958 17.8568 46.9986 17.6364 46.0014C17.2507 44.2287 16.7548 42.5113 15.8457 40.9324C15.7631 40.7939 15.6805 40.6831 15.5978 40.5446C15.4876 40.1568 15.3774 39.769 15.2672 39.3535C14.7163 37.3315 14.3857 35.2817 14.0827 33.2319C13.8072 31.2376 13.5041 29.2709 13.3113 27.2488C12.8981 23.3155 12.8981 19.3268 13.5592 15.4211C13.8898 13.4822 14.303 11.5432 14.9367 9.68734C15.5703 7.83147 16.4243 5.8648 17.9119 4.53522C19.1791 3.39954 20.9146 2.65166 22.6502 2.87325C24.7714 3.15025 26.2865 4.83992 27.4986 6.44649C28.27 7.47137 29.0138 8.49626 29.7576 9.54884L29.7025 9.54884ZM13.2562 39.769C13.4491 40.4338 13.5041 41.2925 12.8981 41.708C12.2645 42.0958 11.8788 41.4587 11.9614 40.9047C12.0165 40.5446 12.2645 40.2399 12.54 40.046C12.7603 39.9075 13.0083 39.7967 13.2562 39.769ZM13.697 39.5474C13.697 39.5474 13.5317 39.5474 13.4766 39.5474C13.4766 39.492 13.4215 39.4089 13.394 39.3535C13.449 39.3812 13.5041 39.4366 13.5592 39.4643C13.6143 39.492 13.6419 39.5197 13.697 39.5474ZM2.23693 29.7141C2.23693 29.7141 2.45732 29.7972 2.59506 29.8526C2.70525 29.908 2.84298 29.9634 2.95318 30.0188C3.09092 30.2958 3.06338 30.6005 2.53996 30.4897C2.37467 30.4897 2.09919 30.2404 2.01655 30.1019C1.82371 29.9357 1.90635 29.8249 2.23693 29.7141ZM2.18183 25.3376C2.18183 25.3376 2.18183 25.5869 2.18183 25.6977C2.12673 25.8085 2.09919 25.9193 2.09919 26.0578C2.15429 26.7225 3.17356 27.138 3.69698 27.3873C4.41323 27.7197 5.21213 27.9136 6.01103 27.9967C6.09368 28.0798 6.17633 28.1629 6.23142 28.246C7.22316 29.354 8.0496 30.6005 8.82095 31.847C9.6474 33.1765 10.4187 34.5061 11.1901 35.8634C11.4656 36.362 11.7962 36.8883 12.0992 37.4146C12.0992 37.5531 12.0441 37.6916 12.0165 37.8578C11.3003 37.8024 10.6667 38.1625 10.3086 38.7718C10.0055 38.5226 9.81268 38.0517 9.64739 37.6916C9.20662 36.8052 8.7383 35.9188 8.26998 35.0601C7.47109 33.6197 6.562 32.2348 5.37742 31.0991C4.79891 30.5451 4.13776 30.0465 3.4215 29.631C2.95318 29.354 2.07164 28.8 1.52068 29.1601C0.528944 29.7695 2.18183 31.2653 2.95318 30.8221C3.17356 30.7113 3.25621 30.462 3.25621 30.2404C3.75208 30.5174 4.19285 30.8221 4.63362 31.1822C5.90084 32.2625 6.89257 33.6197 7.77411 35.0324C8.24243 35.7803 8.65567 36.5559 9.09644 37.3315C9.39947 37.8578 9.67495 38.661 10.1708 39.0211C10.0331 39.2981 9.97797 39.6305 9.95043 39.9629C9.92288 41.5418 11.3003 42.5667 12.292 43.5639C13.4491 44.7272 14.4132 46.0568 15.2121 47.4695C16.8099 50.3225 17.7741 53.508 18.5179 56.6657C18.9036 58.2446 19.2066 59.8512 19.5097 61.4578C19.7576 62.815 19.9229 64.4493 21.1901 65.2803C21.3003 65.3634 21.4656 65.3357 21.5207 65.1972C21.8237 64.4493 21.9339 63.6737 21.9339 62.8981C21.9339 61.0146 21.3554 59.2141 20.9146 57.3859C20.7769 56.8319 20.6391 56.2779 20.4738 55.724C21.8513 58.2723 23.697 60.5714 25.7907 62.5934C28.4628 65.1972 31.4656 67.4132 34.4683 69.5737C37.719 71.9282 41.3278 73.8949 45.2948 74.6981C50.8595 75.8338 57.7466 74.1996 60.584 68.9643C60.6116 68.9089 60.6667 68.8535 60.6942 68.7981C60.6942 68.7981 60.7493 68.7704 60.7769 68.7427C61.3003 68.355 61.5758 67.7456 61.686 67.1362C62.1818 66.1667 62.5951 65.1418 62.8155 64.0615C63.2562 62.0672 62.9532 60.0451 61.9339 58.2723C60.281 55.3362 57.3609 53.4526 55.1295 50.9873C53.8898 49.6301 53.0909 48.162 52.3196 46.5C51.5758 44.8657 50.6667 43.37 48.7659 43.0653C47.7741 42.9268 46.6997 42.9822 45.6805 43.0376C44.6887 43.093 43.697 43.1761 42.7053 43.2869C41.3278 43.4531 39.9504 43.7855 38.6006 44.1733C39.124 43.8686 39.6474 43.5362 40.1984 43.2038C42.0992 42.0404 43.8898 40.7662 45.4601 39.1596C48.6557 35.8634 50.0882 31.0991 51.0799 26.7225C52.0441 22.4014 52.3747 17.8587 51.2452 13.5376C50.6391 11.2662 49.7851 9.05024 48.8485 6.88968C48.0496 5.03381 46.9477 3.20564 45.1295 2.18076C41.0799 -0.062902 36.6722 2.51315 33.6694 5.31081C32.3196 6.55729 31.0524 7.88687 29.8678 9.29954C29.7851 9.16105 29.675 9.02255 29.5648 8.88405C28.4077 7.22208 27.2507 5.4493 25.7356 4.06433C24.4408 2.84555 22.7879 2.15306 20.9973 2.40236C19.2893 2.65165 17.8292 3.56574 16.6446 4.78452C15.2948 6.16949 14.4132 7.99767 13.697 9.79814C12.9532 11.7094 12.4298 13.6484 12.0992 15.6704C11.4656 19.6869 11.4656 23.8141 11.9339 27.8582C12.3747 31.8193 13.6143 35.6141 14.6612 39.4366C14.1102 38.8272 13.4215 38.301 12.7052 38.024C11.3554 35.3371 9.92288 32.6779 8.32508 30.1573C7.60883 29.0493 6.80994 27.969 5.84575 27.0272C4.93666 26.1686 3.72454 25.2268 2.45732 25.116C2.29203 25.116 2.15428 25.1991 2.12673 25.3653L2.18183 25.3376Z", stroke: "#BC9D5A", strokeWidth: "0.68", strokeMiterlimit: "10" })
    }
  );
}
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Butterfly1,
  Butterfly2,
  default: BannerCarousel
}, Symbol.toStringTag, { value: "Module" }));
function HeaderDescription({ title, breadcrumbs, right }) {
  return /* @__PURE__ */ jsxs(Box, { className: "header_description", children: [
    /* @__PURE__ */ jsxs(Box, { className: "left", children: [
      /* @__PURE__ */ jsx(TitleBreadcrumbs, { title, breadcrumbs }),
      /* @__PURE__ */ jsx(Butterfly1, {}),
      /* @__PURE__ */ jsx(Butterfly2, {})
    ] }),
    /* @__PURE__ */ jsx(Box, { className: "right", children: /* @__PURE__ */ jsx(Box, { className: "text_content", children: right }) })
  ] });
}
function HeaderPadding({ children }) {
  return /* @__PURE__ */ jsx(Box, { className: "header_padding", children });
}
function HeaderBanner({ title, breadcrumbs, right, banner }) {
  return /* @__PURE__ */ jsx(Box, { className: "header_banner", children: /* @__PURE__ */ jsxs(HeaderPadding, { children: [
    /* @__PURE__ */ jsx(Box, { className: "content", children: /* @__PURE__ */ jsx(
      HeaderDescription,
      {
        title,
        breadcrumbs,
        right
      }
    ) }),
    banner && /* @__PURE__ */ jsx(Box, { className: "banner", children: /* @__PURE__ */ jsx(Box, { className: "image", children: /* @__PURE__ */ jsx("img", { src: banner }) }) })
  ] }) });
}
function AboutHeader({ sobre }) {
  return /* @__PURE__ */ jsx(Box, { className: "about_header", component: "section", children: /* @__PURE__ */ jsx(
    HeaderBanner,
    {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Nossa ",
        /* @__PURE__ */ jsx("b", { children: "História" })
      ] }),
      breadcrumbs: [{ label: "Home", href: "/" }, { label: "Sobre nós" }],
      right: /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: decodeBasic(sobre?.text_1 || "") } }),
      banner: sobre?.banner_1?.permalink
    }
  ) });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AboutHeader
}, Symbol.toStringTag, { value: "Module" }));
const icon1$3 = "/build/assets/icon1-BGho_GrN.svg";
const icon2$2 = "/build/assets/icon2-BYFgbrnt.svg";
const icon3$1 = "/build/assets/icon3-CIulok9d.svg";
const icon4 = "/build/assets/icon4-DHY8m8ch.svg";
function AboutData({ sobre }) {
  return /* @__PURE__ */ jsx(Box, { className: "about_data", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsxs(Box, { className: "item", children: [
      /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx("img", { src: icon1$3 }) }),
      /* @__PURE__ */ jsxs(Box, { className: "text", children: [
        /* @__PURE__ */ jsx("h3", { children: "anos de história" }),
        /* @__PURE__ */ jsx("p", { children: sobre?.dado_1 })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Box, { className: "item", children: [
      /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx("img", { src: icon2$2 }) }),
      /* @__PURE__ */ jsxs(Box, { className: "text", children: [
        /* @__PURE__ */ jsx("h3", { children: "projetos lançados ou em desenvolvimento" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "+",
          sobre?.dado_2
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Box, { className: "item", children: [
      /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx("img", { src: icon3$1 }) }),
      /* @__PURE__ */ jsxs(Box, { className: "text", children: [
        /* @__PURE__ */ jsx("h3", { children: "estados" }),
        /* @__PURE__ */ jsx("p", { children: sobre?.dado_3 })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Box, { className: "item", children: [
      /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx("img", { src: icon4 }) }),
      /* @__PURE__ */ jsxs(Box, { className: "text", children: [
        /* @__PURE__ */ jsx("h3", { children: "milhões de m² urbanizados" }),
        /* @__PURE__ */ jsx("p", { children: sobre?.dado_4 })
      ] })
    ] })
  ] }) });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AboutData
}, Symbol.toStringTag, { value: "Module" }));
const icon1$2 = "/build/assets/icon1-D1sIgNsj.svg";
const icon2$1 = "/build/assets/icon2-Cz6AFPlv.svg";
function MissionVisionValues({ sobre }) {
  return /* @__PURE__ */ jsx(Box, { component: "section", className: "mission_vision_values", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsx(Mission, { sobre }),
    /* @__PURE__ */ jsx(Vision, { sobre }),
    /* @__PURE__ */ jsx(Values, { sobre })
  ] }) });
}
function Mission({ sobre }) {
  return /* @__PURE__ */ jsxs(Box, { className: "mission", children: [
    /* @__PURE__ */ jsxs(Box, { className: "text", children: [
      /* @__PURE__ */ jsxs(Box, { children: [
        /* @__PURE__ */ jsx("h2", { children: "Missão" }),
        /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: decodeBasic(sobre?.missao || "") } })
      ] }),
      /* @__PURE__ */ jsx("img", { src: icon1$2 })
    ] }),
    /* @__PURE__ */ jsx(Box, { className: "image", children: /* @__PURE__ */ jsx("img", { src: sobre?.missao_banner?.permalink }) })
  ] });
}
function Vision({ sobre }) {
  return /* @__PURE__ */ jsxs(Box, { className: "vision", children: [
    /* @__PURE__ */ jsx(Box, { className: "image", children: /* @__PURE__ */ jsx("img", { src: sobre?.visao_banner?.permalink, alt: "" }) }),
    /* @__PURE__ */ jsx(Box, { className: "text", children: /* @__PURE__ */ jsxs(Box, { children: [
      /* @__PURE__ */ jsx("h2", { children: "Visão" }),
      /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: decodeBasic(sobre?.visao || "") } })
    ] }) }),
    /* @__PURE__ */ jsx("img", { src: icon2$1, className: "icon" })
  ] });
}
function Values({ sobre }) {
  return /* @__PURE__ */ jsxs(Box, { className: "values", children: [
    /* @__PURE__ */ jsx(Box, { className: "text", children: /* @__PURE__ */ jsxs(Box, { children: [
      /* @__PURE__ */ jsx("h2", { children: "Valores" }),
      /* @__PURE__ */ jsx("p", { children: sobre?.valores })
    ] }) }),
    /* @__PURE__ */ jsxs(Box, { className: "list_itens", children: [
      /* @__PURE__ */ jsxs(Box, { className: "item", children: [
        /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx("img", { src: sobre?.icone_1?.permalink }) }),
        /* @__PURE__ */ jsx("p", { children: sobre?.valor_1 })
      ] }),
      /* @__PURE__ */ jsxs(Box, { className: "item", children: [
        /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx("img", { src: sobre?.icone_2?.permalink }) }),
        /* @__PURE__ */ jsx("p", { children: sobre?.valor_2 })
      ] }),
      /* @__PURE__ */ jsxs(Box, { className: "item", children: [
        /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx("img", { src: sobre?.icone_3?.permalink }) }),
        /* @__PURE__ */ jsx("p", { children: sobre?.valor_3 })
      ] })
    ] })
  ] });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MissionVisionValues
}, Symbol.toStringTag, { value: "Module" }));
const icon1$1 = "/build/assets/icon1-B7hqC3_N.svg";
function AboutVentures({ sobre }) {
  const items = (sobre?.construtoras ?? []).map((c) => ({
    image: c.banner?.permalink ?? c.banner?.url ?? c.banner?.[0]?.permalink ?? null,
    logo: c.logo?.permalink ?? c.logo?.url ?? c.logo?.[0]?.permalink ?? null
  })).filter((i) => i.image || i.logo);
  return /* @__PURE__ */ jsx(Box, { className: "about_ventures", component: "section", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsxs(Box, { className: "top", children: [
      /* @__PURE__ */ jsxs("h2", { children: [
        "Tipos de ",
        /* @__PURE__ */ jsx("b", { children: "Empreendimentos" })
      ] }),
      /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: decodeBasic(sobre?.text_2 || "") } })
    ] }),
    /* @__PURE__ */ jsx(Box, { className: "bottom", children: /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Pagination],
        freeMode: true,
        slidesPerView: "auto",
        pagination: { clickable: true },
        children: items?.map((item, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(Item$6, { item }) }))
      }
    ) }),
    /* @__PURE__ */ jsx("img", { src: icon1$1, className: "icon" })
  ] }) });
}
function Item$6({ item }) {
  return /* @__PURE__ */ jsxs(Button, { className: "item", children: [
    /* @__PURE__ */ jsx(Box, { className: "logo", children: /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx("img", { src: item.logo }) }) }),
    /* @__PURE__ */ jsx(Box, { className: "image", children: /* @__PURE__ */ jsx("img", { src: item.image }) })
  ] });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AboutVentures
}, Symbol.toStringTag, { value: "Module" }));
const icon$4 = "/build/assets/icon-DTHOHeHd.svg";
function Sustainability({ sobre }) {
  return /* @__PURE__ */ jsxs(Box, { component: "section", className: "sustainability", children: [
    /* @__PURE__ */ jsx(Box, { className: "banner", children: /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx("img", { src: sobre?.banner_2?.permalink }) }) }),
    /* @__PURE__ */ jsxs(Box, { className: "content", children: [
      /* @__PURE__ */ jsxs(Box, { className: "left", children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Sustentabilidade para ",
          /* @__PURE__ */ jsx("b", { children: "você viver melhor" })
        ] }),
        /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx("img", { src: icon$4 }) })
      ] }),
      /* @__PURE__ */ jsxs(Box, { className: "right", children: [
        /* @__PURE__ */ jsx("div", { className: "text", dangerouslySetInnerHTML: { __html: decodeBasic(sobre?.text_3 || "") } }),
        /* @__PURE__ */ jsx(Box, { className: "img", children: /* @__PURE__ */ jsx("img", { src: sobre?.text_3_image?.permalink }) })
      ] })
    ] })
  ] });
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sustainability
}, Symbol.toStringTag, { value: "Module" }));
function AboutUs({ dados, seo }) {
  const title = seo?.meta_title || "Cipasa Urbanismo";
  const description = seo?.breve_descricao || "";
  const keywords = Array.isArray(seo?.keywords) ? seo.keywords.join(", ") : "";
  const robots = seo?.meta_robots || "index,follow";
  const ogImageUrl = seo?.og_image?.permalink || seo?.og_image?.url || seo?.og_image?.path;
  const canonical = seo?.canonical || seo?.url || null;
  const url = seo?.url || canonical || null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { title, children: [
      /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
      keywords && /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: robots }),
      canonical && /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonical }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      url && /* @__PURE__ */ jsx("meta", { property: "og:url", content: url }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
      description && /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
      ogImageUrl && /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImageUrl }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
      description && /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
      ogImageUrl && /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImageUrl }),
      seo?.scripts && /* @__PURE__ */ jsx(
        "script",
        {
          dangerouslySetInnerHTML: { __html: seo.scripts?.code }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Box, { className: "container", children: [
      /* @__PURE__ */ jsx(AboutHeader, { sobre: dados }),
      /* @__PURE__ */ jsx(AboutData, { sobre: dados }),
      /* @__PURE__ */ jsx(MissionVisionValues, { sobre: dados }),
      /* @__PURE__ */ jsx(AboutVentures, { sobre: dados }),
      /* @__PURE__ */ jsx(Sustainability, { sobre: dados })
    ] })
  ] });
}
AboutUs.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AboutUs
}, Symbol.toStringTag, { value: "Module" }));
function BlogHeader() {
  return /* @__PURE__ */ jsx(Box, { className: "ventures_header", component: "section", children: /* @__PURE__ */ jsx(HeaderPadding, { children: /* @__PURE__ */ jsx(Box, { className: "content", children: /* @__PURE__ */ jsx(Box, { className: "left", children: /* @__PURE__ */ jsx(
    TitleBreadcrumbs,
    {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "Cipasa" }),
        " na mídia"
      ] }),
      breadcrumbs: [{ label: "Home", href: "/" }, { label: "Blog" }]
    }
  ) }) }) }) });
}
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BlogHeader
}, Symbol.toStringTag, { value: "Module" }));
function Blog$1({ blog }) {
  const blogList = (blog ?? []).map((item) => ({
    id: item.id,
    data: item.created_at,
    title: item.title,
    description: item.descricao,
    image: item.imagem?.permalink ?? null,
    link: item.link ?? null
  }));
  return /* @__PURE__ */ jsx(Box, { className: "blog_home", component: "section", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsxs("h2", { children: [
      "Cipasa ",
      /* @__PURE__ */ jsx("b", { children: "na mídia" })
    ] }),
    /* @__PURE__ */ jsx(
      Swiper,
      {
        className: "swiper_content",
        modules: [Pagination],
        freeMode: true,
        slidesPerView: "auto",
        pagination: { clickable: true },
        children: blogList.map((item) => /* @__PURE__ */ jsx(SwiperSlide, { className: "slide", children: /* @__PURE__ */ jsx(BlogItem, { item }) }, item.id))
      }
    ),
    /* @__PURE__ */ jsx(Box, { sx: { display: "flex", justifyContent: "center", marginTop: "20px" }, children: /* @__PURE__ */ jsx(Button1, { className: "link_blog", component: Link, href: "/blog", children: "Ver todas postagens" }) })
  ] }) });
}
function BlogItem({ item }) {
  function formatDate2(dateString) {
    const meses = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro"
    ];
    const [ano, mes, dia] = dateString.split("-");
    return `${parseInt(dia, 10)} de ${meses[parseInt(mes, 10) - 1]} de ${ano}`;
  }
  return /* @__PURE__ */ jsxs(Box, { className: "item", children: [
    /* @__PURE__ */ jsx(Button, { component: "a", target: "_blank", href: item.link, className: "image", children: /* @__PURE__ */ jsx("img", { src: item.image, alt: item.title }) }),
    /* @__PURE__ */ jsx("p", { className: "data", children: formatDate2(item.data) }),
    /* @__PURE__ */ jsx("h3", { className: "title", children: item.title }),
    /* @__PURE__ */ jsx("p", { className: "description", children: item.description }),
    /* @__PURE__ */ jsx(Button, { component: "a", target: "_blank", href: item.link, children: "Leia mais" })
  ] });
}
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlogItem,
  default: Blog$1
}, Symbol.toStringTag, { value: "Module" }));
function BlogList({ dados }) {
  const [page, setPage] = useState(1);
  const itensPerPage = 9;
  const handleChange = (event, value) => {
    setPage(value);
  };
  const dadosPage = () => {
    const start = (page - 1) * itensPerPage;
    const end = start + itensPerPage;
    return dados?.slice(start, end);
  };
  useEffect(() => {
    window?.scrollTo(0, 0);
  }, [page]);
  return /* @__PURE__ */ jsx(Box, { className: "blog_list", component: "section", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsx(Box, { className: "list_content", children: dadosPage()?.map((item, index) => /* @__PURE__ */ jsx(Box, { className: "blog_item", children: /* @__PURE__ */ jsx(BlogItem, { item }) }, index)) }),
    /* @__PURE__ */ jsx(Box, { className: "pagination_content", children: /* @__PURE__ */ jsx(Pagination$1, { count: Math.ceil(dados?.length / itensPerPage), page, onChange: handleChange, shape: "rounded" }) })
  ] }) });
}
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BlogList
}, Symbol.toStringTag, { value: "Module" }));
function Blog({ dados, seo }) {
  const blogList = (dados ?? []).map((item) => ({
    id: item.id,
    data: item.created_at,
    title: item.title,
    description: item.descricao,
    image: item.imagem?.permalink ?? null,
    link: item.link ?? null
  }));
  const title = seo?.meta_title || "Cipasa Urbanismo";
  const description = seo?.breve_descricao || "";
  const keywords = Array.isArray(seo?.keywords) ? seo.keywords.join(", ") : "";
  const robots = seo?.meta_robots || "index,follow";
  const ogImageUrl = seo?.og_image?.permalink || seo?.og_image?.url || seo?.og_image?.path;
  const canonical = seo?.canonical || seo?.url || null;
  const url = seo?.url || canonical || null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { title, children: [
      /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
      keywords && /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: robots }),
      canonical && /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonical }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      url && /* @__PURE__ */ jsx("meta", { property: "og:url", content: url }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
      description && /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
      ogImageUrl && /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImageUrl }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
      description && /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
      ogImageUrl && /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImageUrl }),
      seo?.scripts && /* @__PURE__ */ jsx(
        "script",
        {
          dangerouslySetInnerHTML: { __html: seo.scripts?.code }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Box, { className: "container", children: [
      /* @__PURE__ */ jsx(BlogHeader, {}),
      /* @__PURE__ */ jsx(BlogList, { dados: blogList })
    ] })
  ] });
}
Blog.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Blog
}, Symbol.toStringTag, { value: "Module" }));
function ContactHeader({ contato }) {
  return /* @__PURE__ */ jsx(Box, { className: "contact_header", component: "section", children: /* @__PURE__ */ jsx(Box, { className: "content", children: /* @__PURE__ */ jsx(
    HeaderBanner,
    {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Fale ",
        /* @__PURE__ */ jsx("b", { children: "Conosco" })
      ] }),
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Fale Conosco" }
      ],
      right: /* @__PURE__ */ jsxs(Box, { className: "right_content", children: [
        /* @__PURE__ */ jsxs(Box, { className: "phone_content", children: [
          contato?.telefone_goiania && /* @__PURE__ */ jsxs(Box, { className: "item", children: [
            /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx(LocalPhoneIcon, {}) }),
            /* @__PURE__ */ jsxs(Box, { className: "text_content", children: [
              /* @__PURE__ */ jsx("h4", { children: "São Paulo" }),
              /* @__PURE__ */ jsx("p", { children: contato?.telefone_sao_paulo })
            ] })
          ] }),
          contato?.telefone_goiania && /* @__PURE__ */ jsxs(Box, { className: "item", children: [
            /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx(LocalPhoneIcon, {}) }),
            /* @__PURE__ */ jsxs(Box, { className: "text_content", children: [
              /* @__PURE__ */ jsx("h4", { children: "Goiânia" }),
              /* @__PURE__ */ jsx("p", { children: contato?.telefone_goiania })
            ] })
          ] })
        ] }),
        (contato?.facebook || contato?.instagram || contato?.linkedin) && /* @__PURE__ */ jsxs(Box, { className: "social", children: [
          /* @__PURE__ */ jsx("h4", { children: "Redes sociais" }),
          /* @__PURE__ */ jsxs(Box, { children: [
            contato?.facebook && /* @__PURE__ */ jsx(Button, { component: "a", target: "_blank", href: contato?.facebook, children: /* @__PURE__ */ jsx(FacebookRoundedIcon, {}) }),
            contato?.instagram && /* @__PURE__ */ jsx(Button, { component: "a", target: "_blank", href: contato?.instagram, children: /* @__PURE__ */ jsx(InstagramIcon, {}) }),
            contato?.linkedin && /* @__PURE__ */ jsx(Button, { component: "a", target: "_blank", href: contato?.linkedin, children: /* @__PURE__ */ jsx(LinkedInIcon, {}) })
          ] })
        ] }),
        contato?.e_mail && /* @__PURE__ */ jsxs(Box, { className: "email", children: [
          /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx(AlternateEmailIcon, {}) }),
          /* @__PURE__ */ jsxs(Box, { className: "text_content", children: [
            /* @__PURE__ */ jsx("h4", { children: "Email" }),
            /* @__PURE__ */ jsx("p", { children: contato?.e_mail })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Box, { className: "addres", children: [
          /* @__PURE__ */ jsx("h4", { children: "Endereço" }),
          /* @__PURE__ */ jsxs("p", { children: [
            contato?.rua,
            ", ",
            contato?.numero,
            ", ",
            contato?.complemento,
            ", ",
            contato?.bairro,
            ", ",
            contato?.cidade,
            "/",
            contato?.estado?.value,
            " - CEP: ",
            contato?.cep
          ] })
        ] })
      ] })
    }
  ) }) });
}
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ContactHeader
}, Symbol.toStringTag, { value: "Module" }));
const pin$1 = "/build/assets/pin-pZo-VC7S.png";
function VentureMap({
  position = [-23.55052, -46.633308],
  popupText = "Verana Condomínio Fechado"
}) {
  const [libsReady, setLibsReady] = useState(false);
  const libsRef = useRef(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;
    async function loadLibs() {
      try {
        const [reactLeaflet, leaflet] = await Promise.all([
          import("react-leaflet"),
          import("leaflet")
        ]);
        if (cancelled) return;
        const L = leaflet.default || leaflet;
        const customIcon2 = new L.Icon({
          iconUrl: pin$1,
          iconSize: [38, 38]
        });
        libsRef.current = {
          MapContainer: reactLeaflet.MapContainer,
          TileLayer: reactLeaflet.TileLayer,
          Marker: reactLeaflet.Marker,
          Popup: reactLeaflet.Popup,
          customIcon: customIcon2
        };
        setLibsReady(true);
      } catch (error) {
        console.error("Erro ao carregar as bibliotecas do Leaflet:", error);
      }
    }
    loadLibs();
    return () => {
      cancelled = true;
    };
  }, []);
  if (!libsReady) {
    return /* @__PURE__ */ jsx(Box, { className: "venture_map", component: "section", children: /* @__PURE__ */ jsx(Box, { className: "content", children: /* @__PURE__ */ jsx(Box, { className: "map", children: /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          height: "400px",
          width: "100%",
          borderRadius: "12px",
          background: "#eee"
        },
        children: "Carregando mapa…"
      }
    ) }) }) });
  }
  const { MapContainer, TileLayer, Marker, Popup, customIcon } = libsRef.current;
  return /* @__PURE__ */ jsx(Box, { className: "venture_map", component: "section", children: /* @__PURE__ */ jsx(Box, { className: "content", children: /* @__PURE__ */ jsx(Box, { className: "map", children: /* @__PURE__ */ jsxs(
    MapContainer,
    {
      center: position,
      zoom: 15,
      scrollWheelZoom: false,
      style: { height: "400px", width: "100%", borderRadius: "12px" },
      children: [
        /* @__PURE__ */ jsx(
          TileLayer,
          {
            attribution: '© <a href="https://carto.com/attributions">CARTO</a>',
            url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          }
        ),
        /* @__PURE__ */ jsx(Marker, { position, icon: customIcon, children: /* @__PURE__ */ jsx(Popup, { children: popupText }) })
      ]
    }
  ) }) }) });
}
const __vite_glob_0_37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VentureMap
}, Symbol.toStringTag, { value: "Module" }));
function ContactForm$1({ contato }) {
  return /* @__PURE__ */ jsx(Box, { className: "contact_form_page", component: "section", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsx(Box, { className: "left", children: /* @__PURE__ */ jsx(FormComponent, {}) }),
    /* @__PURE__ */ jsx(Box, { className: "right", children: /* @__PURE__ */ jsx(VentureMap, { position: [contato?.latitude, contato?.longitude] }) })
  ] }) });
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
    mensagem: ""
  });
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});
  const [ok, setOk] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState("error");
  const handleToastClose = (_, reason) => {
    if (reason === "clickaway") return;
    setToastOpen(false);
  };
  const estados = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO"
  ];
  const assuntos = [
    "Quero vender os empreendimentos da Cipasa",
    "Dúvida sobre empreendimento",
    "Contato comercial",
    "Outros"
  ];
  const maskCep = (value) => {
    return value.replace(/\D/g, "").replace(/^(\d{5})(\d)/, "$1-$2").slice(0, 9);
  };
  const maskCelular = (value) => {
    const d = value.replace(/\D/g, "").slice(0, 11);
    const isCell = d.length > 10;
    const dd = d.slice(0, 2);
    const p2 = isCell ? d.slice(2, 7) : d.slice(2, 6);
    const p3 = isCell ? d.slice(7, 11) : d.slice(6, 10);
    if (d.length === 0) return "";
    if (d.length <= 2) return `(${dd}`;
    if (d.length <= (isCell ? 7 : 6)) return `(${dd}) ${d.slice(2)}`;
    return `(${dd}) ${p2}-${p3}`;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === "cep") newValue = maskCep(value);
    if (name === "celular") newValue = maskCelular(value);
    if (name === "telefone") newValue = maskCelular(value);
    setForm((prev) => ({ ...prev, [name]: newValue }));
  };
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
              cidade: data.localidade || ""
            }));
          }
        } catch (error) {
          console.error("Erro ao buscar CEP:", error);
        }
      };
      fetchCep();
    }
  }, [form.cep]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setErrors({});
    setOk(false);
    const nome = form.nome.trim();
    const cel = form.celular.replace(/\D/g, "");
    const email = form.email.trim();
    const assunto = form.assunto.trim();
    const mensagem = form.mensagem.trim();
    const erros = [];
    if (!nome) erros.push("Preencha o nome.");
    if (!cel || cel.length < 10) erros.push("Informe um celular válido.");
    if (!email) erros.push("Preencha o e-mail.");
    if (!assunto) erros.push("Selecione um assunto.");
    if (!mensagem) erros.push("Preencha a mensagem.");
    if (erros.length) {
      setToastMessage(erros.join("\n"));
      setToastSeverity("error");
      setToastOpen(true);
      setSending(false);
      return;
    }
    router.post(route("contato.leads.enviar"), {
      first_name: form.nome,
      last_name: form.sobrenome,
      email: form.email,
      mobile: form.celular,
      phone: form.telefone,
      cep: form.cep,
      state: form.estado,
      city: form.cidade,
      subject: form.assunto,
      message: form.mensagem
    }, {
      onSuccess: () => {
        setOk(true);
        setToastMessage("Mensagem enviada com sucesso.");
        setToastSeverity("success");
        setToastOpen(true);
        setForm({
          nome: "",
          sobrenome: "",
          celular: "",
          telefone: "",
          email: "",
          cep: "",
          estado: "",
          cidade: "",
          assunto: "",
          mensagem: ""
        });
      },
      onError: (err) => {
        setErrors(err);
        setToastMessage("Não foi possível enviar a mensagem. Verifique os campos e tente novamente.");
        setToastSeverity("error");
        setToastOpen(true);
      },
      onFinish: () => {
        setSending(false);
      }
    });
  };
  return /* @__PURE__ */ jsxs(Box, { className: "form", component: "form", onSubmit: handleSubmit, noValidate: true, children: [
    /* @__PURE__ */ jsxs(Box, { className: "form_fields", children: [
      /* @__PURE__ */ jsx(Box, { className: "full_mobile", children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          label: "Nome",
          name: "nome",
          required: true,
          value: form.nome,
          onChange: handleChange
        }
      ) }),
      /* @__PURE__ */ jsx(Box, { className: "full_mobile", children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          label: "Sobrenome",
          name: "sobrenome",
          required: true,
          value: form.sobrenome,
          onChange: handleChange
        }
      ) }),
      /* @__PURE__ */ jsx(Box, { className: "full_mobile", children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          label: "Celular",
          name: "celular",
          required: true,
          value: form.celular,
          onChange: handleChange,
          placeholder: "(00) 00000-0000"
        }
      ) }),
      /* @__PURE__ */ jsx(Box, { className: "full_mobile", children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          label: "Telefone",
          name: "telefone",
          value: form.telefone,
          onChange: handleChange,
          placeholder: "(00) 0000-0000"
        }
      ) }),
      /* @__PURE__ */ jsx(Box, { className: "full", children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          label: "Email",
          name: "email",
          type: "email",
          required: true,
          value: form.email,
          onChange: handleChange
        }
      ) }),
      /* @__PURE__ */ jsx(Box, { className: "full", children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          label: "CEP",
          name: "cep",
          required: true,
          value: form.cep,
          onChange: handleChange,
          placeholder: "00000-000"
        }
      ) }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
        TextField,
        {
          select: true,
          fullWidth: true,
          label: "Estado",
          name: "estado",
          required: true,
          value: form.estado,
          onChange: handleChange,
          children: estados.map((uf) => /* @__PURE__ */ jsx(MenuItem, { value: uf, children: uf }, uf))
        }
      ) }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          label: "Cidade",
          name: "cidade",
          required: true,
          value: form.cidade,
          onChange: handleChange
        }
      ) }),
      /* @__PURE__ */ jsx(Box, { className: "full", children: /* @__PURE__ */ jsx(
        TextField,
        {
          select: true,
          fullWidth: true,
          label: "Assunto",
          name: "assunto",
          required: true,
          value: form.assunto,
          onChange: handleChange,
          children: assuntos.map((option, index) => /* @__PURE__ */ jsx(MenuItem, { value: option, children: option }, index))
        }
      ) }),
      /* @__PURE__ */ jsx(Box, { className: "full", children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          multiline: true,
          minRows: 4,
          label: "Mensagem",
          name: "mensagem",
          required: true,
          value: form.mensagem,
          onChange: handleChange
        }
      ) }),
      /* @__PURE__ */ jsx(Box, { className: "full", children: /* @__PURE__ */ jsx(Button1, { className: "submit_button", type: "submit", disabled: sending, children: sending ? "Enviando..." : "Enviar" }) })
    ] }),
    /* @__PURE__ */ jsx(
      Snackbar,
      {
        open: toastOpen,
        autoHideDuration: 4e3,
        onClose: handleToastClose,
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        sx: {
          "& .MuiPaper-root": {
            maxWidth: 360,
            width: "100%",
            borderRadius: 2
          }
        },
        children: /* @__PURE__ */ jsx(
          Alert,
          {
            onClose: handleToastClose,
            severity: toastSeverity,
            variant: "filled",
            sx: {
              width: "100%",
              boxShadow: 3,
              whiteSpace: "pre-line",
              textAlign: "left"
            },
            children: toastMessage
          }
        )
      }
    )
  ] });
}
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ContactForm$1
}, Symbol.toStringTag, { value: "Module" }));
function Contact({ contato, seo }) {
  const title = seo?.meta_title || "Cipasa Urbanismo";
  const description = seo?.breve_descricao || "";
  const keywords = Array.isArray(seo?.keywords) ? seo.keywords.join(", ") : "";
  const robots = seo?.meta_robots || "index,follow";
  const ogImageUrl = seo?.og_image?.permalink || seo?.og_image?.url || seo?.og_image?.path;
  const canonical = seo?.canonical || seo?.url || null;
  const url = seo?.url || canonical || null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { title, children: [
      /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
      keywords && /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: robots }),
      canonical && /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonical }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      url && /* @__PURE__ */ jsx("meta", { property: "og:url", content: url }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
      description && /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
      ogImageUrl && /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImageUrl }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
      description && /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
      ogImageUrl && /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImageUrl }),
      seo?.scripts && /* @__PURE__ */ jsx(
        "script",
        {
          dangerouslySetInnerHTML: { __html: seo.scripts?.code }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Box, { className: "contact", children: /* @__PURE__ */ jsxs(Box, { className: "container", children: [
      /* @__PURE__ */ jsx(ContactHeader, { contato }),
      /* @__PURE__ */ jsx(ContactForm$1, { contato })
    ] }) })
  ] });
}
Contact.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact
}, Symbol.toStringTag, { value: "Module" }));
function HaveLandHeader({ dados }) {
  return /* @__PURE__ */ jsx(Box, { className: "have_land_header", component: "section", children: /* @__PURE__ */ jsx(
    HeaderBanner,
    {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Tenho ",
        /* @__PURE__ */ jsx("b", { children: "uma área" })
      ] }),
      breadcrumbs: [{ label: "Home", href: "/" }, { label: "Tenho uma área" }],
      right: /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: dados?.text_1 || "" } }),
      banner: dados?.banner?.permalink || ""
    }
  ) });
}
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HaveLandHeader
}, Symbol.toStringTag, { value: "Module" }));
const icon$3 = "/build/assets/logo-J63ouIPu.svg";
function HowDoWeWork({ dados }) {
  const itens = dados?.step_by_step?.map((item) => ({
    title: item.step_title,
    description: item.step_text
  })) || [];
  return /* @__PURE__ */ jsx(Box, { className: "how_do_we_work", component: "section", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsxs(Box, { className: "left", children: [
      /* @__PURE__ */ jsxs("h2", { children: [
        "Como ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("b", { children: "nós atuamos" })
      ] }),
      /* @__PURE__ */ jsx("p", { children: dados?.text_2 }),
      /* @__PURE__ */ jsx(Button1, { children: "Venda seu terreno" })
    ] }),
    /* @__PURE__ */ jsxs(Box, { className: "right", children: [
      itens.map((item, index) => /* @__PURE__ */ jsx(Item$5, { index, title: item.title, description: item.description }, index)),
      /* @__PURE__ */ jsx("img", { src: icon$3, className: "icon" })
    ] })
  ] }) });
}
function Item$5({ title, description, index }) {
  return /* @__PURE__ */ jsxs(Box, { className: "item", children: [
    /* @__PURE__ */ jsxs(Box, { children: [
      /* @__PURE__ */ jsx("p", { className: "index", children: index + 1 < 10 ? `0${index + 1}` : index + 1 }),
      /* @__PURE__ */ jsx("h3", { children: title })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "description", children: description })
  ] });
}
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HowDoWeWork
}, Symbol.toStringTag, { value: "Module" }));
function HaveLandForm() {
  const [arquivos, setArquivos] = useState([]);
  const [celular, setCelular] = useState("");
  const [mapKey, setMapKey] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState("error");
  const handleToastClose = (_, reason) => {
    if (reason === "clickaway") return;
    setToastOpen(false);
  };
  const handleFilesChange = (e) => {
    const novosArquivos = Array.from(e.target.files);
    setArquivos((prev) => {
      const nomes = new Set(prev.map((a) => a.name));
      return [...prev, ...novosArquivos.filter((a) => !nomes.has(a.name))];
    });
  };
  const removerArquivo = (index) => {
    setArquivos((prev) => prev.filter((_, i) => i !== index));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    const form = e.target;
    const data = new FormData(form);
    const nome = (data.get("nome") || "").trim();
    const cel = (data.get("celular") || "").replace(/\D/g, "");
    const email = (data.get("email") || "").trim();
    const coords = (data.get("coordenadas") || "").trim();
    const area = (data.get("tamanho_area") || "").trim();
    console.log(data);
    const erros = [];
    if (!nome) erros.push("Preencha o nome completo.");
    if (!cel || cel.length < 10) erros.push("Informe um celular válido.");
    if (!email) erros.push("Preencha o e-mail.");
    if (!coords || !area) erros.push("Desenhe a área do terreno no mapa.");
    if (!arquivos.length) erros.push("Anexe os arquivos.");
    if (erros.length) {
      setToastMessage(erros.join("\n"));
      setToastSeverity("error");
      setToastOpen(true);
      return;
    }
    arquivos.forEach((file) => data.append("documentos[]", file));
    router.post(route("tenho-uma-area.send"), data, {
      forceFormData: true,
      onStart: () => setIsSubmitting(true),
      onFinish: () => setIsSubmitting(false),
      onSuccess: () => {
        form.reset();
        setArquivos([]);
        setCelular("");
        setMapKey((prev) => prev + 1);
        setToastMessage("Formulário enviado com sucesso!");
        setToastSeverity("success");
        setToastOpen(true);
      },
      onError: () => {
        setToastMessage(
          "Não foi possível enviar o formulário. Tente novamente."
        );
        setToastSeverity("error");
        setToastOpen(true);
      }
    });
  };
  const maskCelular = (value) => {
    const d = value.replace(/\D/g, "").slice(0, 11);
    const isCell = d.length > 10;
    const dd = d.slice(0, 2);
    const p2 = isCell ? d.slice(2, 7) : d.slice(2, 6);
    const p3 = isCell ? d.slice(7, 11) : d.slice(6, 10);
    if (d.length === 0) return "";
    if (d.length <= 2) return `(${dd}`;
    if (d.length <= (isCell ? 7 : 6)) return `(${dd}) ${d.slice(2)}`;
    return `(${dd}) ${p2}-${p3}`;
  };
  return /* @__PURE__ */ jsx(Box, { className: "have_land_form", component: "section", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsxs("h2", { children: [
      "Seja ",
      /* @__PURE__ */ jsx("b", { children: "nosso parceiro" })
    ] }),
    /* @__PURE__ */ jsx("p", { children: "Preencha o formulário abaixo e faça a demarcação do terreno." }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs(Box, { className: "info_content", children: [
        /* @__PURE__ */ jsx("input", { type: "text", name: "nome", placeholder: "Nome Completo" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "celular",
            value: celular,
            onChange: (e) => setCelular(maskCelular(e.target.value)),
            placeholder: "Celular"
          }
        ),
        /* @__PURE__ */ jsx("input", { type: "text", name: "email", placeholder: "E-mail" })
      ] }),
      /* @__PURE__ */ jsxs(Box, { className: "address_content", children: [
        /* @__PURE__ */ jsxs("h3", { children: [
          /* @__PURE__ */ jsx("b", { children: "Demarcação" }),
          " do terreno"
        ] }),
        /* @__PURE__ */ jsx(AreaMap, {}, mapKey)
      ] }),
      /* @__PURE__ */ jsxs(Box, { className: "document_content", children: [
        /* @__PURE__ */ jsxs("h3", { children: [
          /* @__PURE__ */ jsx("b", { children: "Documentação" }),
          " necessária"
        ] }),
        /* @__PURE__ */ jsx("p", { children: "- Ponto de localização no Google Earth (arquivo KMZ)" }),
        /* @__PURE__ */ jsx("p", { children: "- Matrícula atualizada e/ou escritura de compra e venda" }),
        /* @__PURE__ */ jsx("p", { children: "- Levantamento planialtimétrico (caso possua)" }),
        /* @__PURE__ */ jsx("p", { children: "- Planta oficial (Prefeitura)" }),
        /* @__PURE__ */ jsx("p", { children: "- Imagens" }),
        /* @__PURE__ */ jsx("p", { children: "- Outros documentos" }),
        /* @__PURE__ */ jsx(Box, { className: "document_list", children: arquivos.length > 0 ? arquivos.map((file, index) => /* @__PURE__ */ jsxs(Box, { className: "document_item", children: [
          /* @__PURE__ */ jsxs(Typography, { variant: "body2", children: [
            file.name,
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              "(",
              (file.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "small",
              color: "error",
              onClick: () => removerArquivo(index),
              children: /* @__PURE__ */ jsx(DeleteIcon, { fontSize: "small" })
            }
          )
        ] }, index)) : /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "text.secondary", children: "Nenhum documento adicionado ainda." }) }),
        /* @__PURE__ */ jsxs(Box, { className: "input_file", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "file", children: "Anexar documento" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "file",
              type: "file",
              multiple: true,
              onChange: handleFilesChange,
              hidden: true
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          className: "informacoes",
          name: "informacoes",
          placeholder: "Informações complementares"
        }
      ),
      /* @__PURE__ */ jsx(
        Button1,
        {
          type: "submit",
          className: "submit_button",
          disabled: isSubmitting,
          children: isSubmitting ? "Enviando..." : "Enviar"
        }
      ),
      /* @__PURE__ */ jsx(
        Snackbar,
        {
          open: toastOpen,
          autoHideDuration: 4e3,
          onClose: handleToastClose,
          anchorOrigin: { vertical: "bottom", horizontal: "center" },
          sx: {
            "& .MuiPaper-root": {
              maxWidth: 360,
              width: "100%",
              borderRadius: 2
            }
          },
          children: /* @__PURE__ */ jsx(
            Alert,
            {
              onClose: handleToastClose,
              severity: toastSeverity,
              variant: "filled",
              sx: {
                width: "100%",
                boxShadow: 3,
                whiteSpace: "pre-line",
                textAlign: "left"
              },
              children: toastMessage
            }
          )
        }
      )
    ] })
  ] }) });
}
function AreaMap() {
  const [libsReady, setLibsReady] = useState(false);
  const libsRef = useRef(null);
  const [area, setArea] = useState(null);
  const [address, setAddress] = useState("");
  const [isDrawing, setIsDrawing] = useState(false);
  const mapRef = useRef(null);
  const featureGroupRef = useRef(null);
  const drawControlRef = useRef(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;
    async function loadLibs() {
      const [reactLeaflet, reactLeafletDraw, leaflet, geo] = await Promise.all([
        import("react-leaflet"),
        import("react-leaflet-draw"),
        import("leaflet"),
        import("leaflet-geosearch")
      ]);
      try {
        await import("leaflet-geometryutil");
      } catch (e) {
      }
      if (cancelled) return;
      libsRef.current = {
        MapContainer: reactLeaflet.MapContainer,
        TileLayer: reactLeaflet.TileLayer,
        FeatureGroup: reactLeaflet.FeatureGroup,
        useMap: reactLeaflet.useMap,
        EditControl: reactLeafletDraw.EditControl,
        L: leaflet.default || leaflet,
        OpenStreetMapProvider: geo.OpenStreetMapProvider
      };
      setLibsReady(true);
    }
    loadLibs();
    return () => {
      cancelled = true;
    };
  }, []);
  if (!libsReady) {
    return /* @__PURE__ */ jsxs(Box, { children: [
      /* @__PURE__ */ jsx(Paper, { className: "area_map", children: /* @__PURE__ */ jsx(Box, { className: "map", children: /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            height: "500px",
            width: "100%",
            background: "#eee"
          },
          children: "Carregando mapa…"
        }
      ) }) }),
      /* @__PURE__ */ jsx("input", { hidden: true, type: "text", name: "coordenadas", readOnly: true }),
      /* @__PURE__ */ jsx("input", { hidden: true, type: "text", name: "tamanho_area", readOnly: true })
    ] });
  }
  const {
    MapContainer,
    TileLayer,
    FeatureGroup,
    useMap,
    EditControl,
    L,
    OpenStreetMapProvider
  } = libsRef.current;
  const onCreated = (e) => {
    const layer = e.layer;
    const latlngs = layer.getLatLngs?.()[0] || [];
    if (!latlngs.length) {
      setArea(null);
      return;
    }
    let hectares = 0;
    if (L && L.GeometryUtil && typeof L.GeometryUtil.geodesicArea === "function") {
      const areaMeters = L.GeometryUtil.geodesicArea(latlngs);
      hectares = (areaMeters / 1e4).toFixed(2);
    } else {
      hectares = latlngs.length.toFixed(2);
    }
    setArea(hectares);
    setIsDrawing(false);
  };
  const onDeleted = () => setArea(null);
  const clearPolygons = () => {
    const fg = featureGroupRef.current;
    if (fg) fg.clearLayers();
    setArea(null);
  };
  const triggerDrawPolygon = () => {
    clearPolygons();
    const btn = document.querySelector(".leaflet-draw-draw-polygon");
    if (btn) {
      btn.click();
    } else {
      console.warn("Botão de desenho de polígono não encontrado.");
    }
  };
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(Paper, { className: "area_map", children: /* @__PURE__ */ jsx(Box, { className: "map", children: /* @__PURE__ */ jsxs(
      MapContainer,
      {
        center: [-15.78, -47.93],
        zoom: 14,
        whenCreated: (mapInstance) => mapRef.current = mapInstance,
        style: { height: "500px", width: "100%" },
        children: [
          /* @__PURE__ */ jsx(
            TileLayer,
            {
              attribution: "© Google Maps",
              url: "https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
              subdomains: ["mt0", "mt1", "mt2", "mt3"]
            }
          ),
          /* @__PURE__ */ jsx(FeatureGroup, { ref: featureGroupRef, children: /* @__PURE__ */ jsx(
            EditControl,
            {
              ref: drawControlRef,
              position: "topright",
              onCreated,
              onDeleted,
              draw: {
                rectangle: false,
                circle: false,
                circlemarker: false,
                polyline: false,
                marker: false
              }
            }
          ) }),
          /* @__PURE__ */ jsx(
            SearchControl,
            {
              onResult: setAddress,
              useMapHook: useMap,
              OpenStreetMapProvider
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxs(Box, { className: "controllers_content", children: [
      area ? /* @__PURE__ */ jsxs(Typography, { variant: "h6", color: "green", className: "meter_info", children: [
        "TAMANHO DA ÁREA: ",
        /* @__PURE__ */ jsx("b", { children: area }),
        " hectares"
      ] }) : /* @__PURE__ */ jsx(Typography, { color: "text.secondary", className: "info_text", children: "Desenhe uma área no mapa para calcular." }),
      /* @__PURE__ */ jsxs(
        Stack,
        {
          direction: "row",
          spacing: 2,
          justifyContent: "center",
          sx: { mt: 3 },
          className: "action_buttons",
          children: [
            /* @__PURE__ */ jsx(Button1, { onClick: triggerDrawPolygon, disabled: isDrawing, children: "Desenhar" }),
            /* @__PURE__ */ jsx(Button1, { onClick: clearPolygons, className: "error", children: "Limpar" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "input",
      {
        hidden: true,
        type: "text",
        name: "coordenadas",
        readOnly: true,
        value: featureGroupRef.current && featureGroupRef.current.getLayers().length > 0 ? JSON.stringify(
          featureGroupRef.current.getLayers()[0].getLatLngs()[0].map((p) => ({ lat: p.lat, lng: p.lng }))
        ) : ""
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        hidden: true,
        type: "text",
        name: "tamanho_area",
        readOnly: true,
        value: area || ""
      }
    )
  ] });
}
function SearchControl({ onResult, useMapHook, OpenStreetMapProvider }) {
  const [cep, setCep] = useState("");
  const map = useMapHook?.();
  const provider = useMemo(() => {
    return OpenStreetMapProvider ? new OpenStreetMapProvider() : null;
  }, [OpenStreetMapProvider]);
  const handleSearchCep = async () => {
    const sanitizedCep = cep.replace(/\D/g, "");
    if (sanitizedCep.length !== 8) {
      alert("CEP inválido! Digite no formato 00000-000");
      return;
    }
    if (!provider || !map) return;
    try {
      const res = await fetch(`https://viacep.com.br/ws/${sanitizedCep}/json/`);
      const data = await res.json();
      if (data.erro) {
        alert("CEP não encontrado!");
        return;
      }
      const endereco = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
      const results = await provider.search({ query: endereco });
      if (results.length > 0) {
        const { x, y } = results[0];
        map.setView([y, x], 17);
        onResult(endereco);
      } else {
        alert("Não foi possível localizar o CEP no mapa.");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return /* @__PURE__ */ jsx(Box, { className: "search_control", children: /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx("input", { type: "text", value: cep, name: "cep", hidden: true, readOnly: true }),
    /* @__PURE__ */ jsxs(Stack, { direction: "row", spacing: 1, children: [
      /* @__PURE__ */ jsx(
        TextField,
        {
          size: "small",
          placeholder: "CEP",
          value: cep,
          onChange: (e) => setCep(
            e.target.value.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2").substring(0, 9)
          ),
          fullWidth: true,
          inputProps: { maxLength: 9 }
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "contained",
          onClick: handleSearchCep,
          size: "small",
          sx: { background: "#62bb46" },
          children: /* @__PURE__ */ jsx(SearchIcon, { fontSize: "small" })
        }
      )
    ] })
  ] }) });
}
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AreaMap,
  default: HaveLandForm
}, Symbol.toStringTag, { value: "Module" }));
function HaveLand({ dados, seo }) {
  const title = seo?.meta_title || "Cipasa Urbanismo";
  const description = seo?.breve_descricao || "";
  const keywords = Array.isArray(seo?.keywords) ? seo.keywords.join(", ") : "";
  const robots = seo?.meta_robots || "index,follow";
  const ogImageUrl = seo?.og_image?.permalink || seo?.og_image?.url || seo?.og_image?.path;
  const canonical = seo?.canonical || seo?.url || null;
  const url = seo?.url || canonical || null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { title, children: [
      /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
      keywords && /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: robots }),
      canonical && /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonical }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      url && /* @__PURE__ */ jsx("meta", { property: "og:url", content: url }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
      description && /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
      ogImageUrl && /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImageUrl }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
      description && /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
      ogImageUrl && /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImageUrl }),
      seo?.scripts && /* @__PURE__ */ jsx(
        "script",
        {
          dangerouslySetInnerHTML: { __html: seo.scripts?.code }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Box, { className: "container", children: [
      /* @__PURE__ */ jsx(HaveLandHeader, { dados }),
      /* @__PURE__ */ jsx(HowDoWeWork, { dados }),
      /* @__PURE__ */ jsx(HaveLandForm, {})
    ] })
  ] });
}
HaveLand.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HaveLand
}, Symbol.toStringTag, { value: "Module" }));
function ShowMap({
  name,
  phone,
  email,
  cep,
  coords = [],
  center,
  area,
  created,
  canEdit = false
}) {
  const initialPolygon = useMemo(
    () => Array.isArray(coords) ? coords.map((c) => [c.lat, c.lng]) : [],
    [coords]
  );
  const initialCenter = useMemo(() => {
    if (Array.isArray(center) && center.length === 2) {
      return center;
    }
    if (initialPolygon.length) {
      const lat = initialPolygon.reduce((sum, p) => sum + p[0], 0) / initialPolygon.length;
      const lng = initialPolygon.reduce((sum, p) => sum + p[1], 0) / initialPolygon.length;
      return [lat, lng];
    }
    return [-15.78, -47.93];
  }, [center, initialPolygon]);
  const [polygon, setPolygon] = useState(initialPolygon);
  const mapRef = useRef(null);
  const featureGroupRef = useRef(null);
  const [libsReady, setLibsReady] = useState(false);
  const libsRef = useRef(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;
    async function loadLibs() {
      const [reactLeaflet, reactLeafletDraw] = await Promise.all([
        import("react-leaflet"),
        import("react-leaflet-draw")
      ]);
      if (cancelled) return;
      libsRef.current = {
        MapContainer: reactLeaflet.MapContainer,
        TileLayer: reactLeaflet.TileLayer,
        FeatureGroup: reactLeaflet.FeatureGroup,
        Polygon: reactLeaflet.Polygon,
        EditControl: reactLeafletDraw.EditControl
      };
      setLibsReady(true);
    }
    loadLibs();
    return () => {
      cancelled = true;
    };
  }, []);
  const handleCreated = (e) => {
    if (e.layerType === "polygon") {
      const latlngs = e.layer.getLatLngs()[0] ?? [];
      setPolygon(latlngs.map((ll) => [ll.lat, ll.lng]));
    }
  };
  const handleDeleted = () => {
    setPolygon([]);
  };
  const libs = libsRef.current;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Cipasa - Área cadastrada" }),
    /* @__PURE__ */ jsx(Box, { className: "map", component: "section", children: /* @__PURE__ */ jsx(Box, { className: "container", children: /* @__PURE__ */ jsx(Box, { className: "container have_land_show_map", children: /* @__PURE__ */ jsxs(Box, { sx: { my: 3 }, children: [
      area && /* @__PURE__ */ jsxs(Typography, { variant: "body2", sx: { mb: 2 }, children: [
        "Área informada: ",
        /* @__PURE__ */ jsx("strong", { children: area }),
        " hectares"
      ] }),
      !libsReady || !libs ? /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            height: "500px",
            width: "100%",
            background: "#eee"
          },
          children: "Carregando mapa…"
        }
      ) : /* @__PURE__ */ jsx(
        LeafletMap,
        {
          libs,
          mapRef,
          featureGroupRef,
          initialCenter,
          polygon,
          onCreated: handleCreated,
          onDeleted: handleDeleted,
          canEdit
        }
      )
    ] }) }) }) })
  ] });
}
function LeafletMap({
  libs,
  mapRef,
  featureGroupRef,
  initialCenter,
  polygon,
  onCreated,
  onDeleted,
  canEdit
}) {
  const { MapContainer, TileLayer, FeatureGroup, Polygon, EditControl } = libs;
  return /* @__PURE__ */ jsxs(
    MapContainer,
    {
      center: initialCenter,
      zoom: 15,
      whenCreated: (mapInstance) => mapRef.current = mapInstance,
      style: { height: "500px", width: "100%" },
      children: [
        /* @__PURE__ */ jsx(
          TileLayer,
          {
            attribution: "© Google Maps",
            url: "https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
            subdomains: ["mt0", "mt1", "mt2", "mt3"]
          }
        ),
        /* @__PURE__ */ jsxs(FeatureGroup, { ref: featureGroupRef, children: [
          polygon.length > 0 && /* @__PURE__ */ jsx(Polygon, { positions: polygon }),
          canEdit && /* @__PURE__ */ jsx(
            EditControl,
            {
              position: "topright",
              onCreated,
              onDeleted,
              edit: {
                featureGroup: featureGroupRef.current
              },
              draw: {
                rectangle: false,
                circle: false,
                circlemarker: false,
                polyline: false,
                marker: false,
                polygon: polygon.length ? false : true
              }
            }
          )
        ] })
      ]
    }
  );
}
ShowMap.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ShowMap
}, Symbol.toStringTag, { value: "Module" }));
const icon$2 = "/build/assets/icon-DqBWwavB.svg";
function ContactBanner({ dados }) {
  return /* @__PURE__ */ jsx(Box, { className: "contact_banner", component: "section", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsx(Box, { className: "left", children: /* @__PURE__ */ jsx(Box, { className: "image", children: /* @__PURE__ */ jsx("img", { src: dados.imagem_contato?.permalink }) }) }),
    /* @__PURE__ */ jsxs(Box, { className: "right", children: [
      /* @__PURE__ */ jsxs("h2", { children: [
        "Não encontrou ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("b", { children: "o que procurava?" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text", dangerouslySetInnerHTML: { __html: dados?.text_contact } }),
      /* @__PURE__ */ jsx(Button1, { component: Link, href: "/contato", children: "Entre em contato" })
    ] }),
    /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx("img", { src: icon$2 }) })
  ] }) });
}
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ContactBanner
}, Symbol.toStringTag, { value: "Module" }));
function Carousel({ list, Component, current, setCurrent, width = "100%", height = "100%", autoplay = true }) {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds >= 10) {
        setCurrent((current + 1) % list.length);
      }
    }, 1e3);
    return () => clearInterval(interval);
  }, [seconds]);
  useEffect(() => {
    setSeconds(0);
  }, [current]);
  const prev = () => {
    setCurrent((current - 1 + list.length) % list.length);
  };
  const next = () => {
    setCurrent((current + 1) % list.length);
  };
  return /* @__PURE__ */ jsxs(Box, { className: "carousel_component", style: { width, height }, children: [
    /* @__PURE__ */ jsx(Box, { className: "list_content", children: list.map((item, index) => /* @__PURE__ */ jsx(
      Box,
      {
        className: `content-layer ${index === current ? "active" : ""}`,
        children: /* @__PURE__ */ jsx(Component, { data: item })
      },
      "item-" + index
    )) }),
    /* @__PURE__ */ jsx(
      SwipeListener,
      {
        onSwipeLeft: next,
        onSwipeRight: prev
      }
    )
  ] });
}
function SwipeListener({ onSwipeLeft, onSwipeRight }) {
  const startX = useRef(null);
  const startY = useRef(null);
  const minSwipeDistance = 50;
  const onPointerDown = (e) => {
    startX.current = e.clientX;
    startY.current = e.clientY;
  };
  const onPointerUp = (e) => {
    if (startX.current === null || startY.current === null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > minSwipeDistance) {
      if (dx < 0 && onSwipeLeft) onSwipeLeft();
      if (dx > 0 && onSwipeRight) onSwipeRight();
    }
    startX.current = null;
    startY.current = null;
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "swipe_listener",
      style: {
        position: "absolute",
        inset: 0,
        zIndex: 1,
        touchAction: "pan-y"
        // permite scroll vertical normalmente
      },
      onPointerDown,
      onPointerUp
    }
  );
}
function Dots({ array, activeIndex, setFunction }) {
  return /* @__PURE__ */ jsxs(Box, { className: "carousel_dots", children: [
    array?.map(
      (item, index) => {
        return /* @__PURE__ */ jsx(
          Box,
          {
            className: "dot_content",
            onClick: () => setFunction(index)
          },
          index
        );
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "indicator", style: { left: `calc(${activeIndex} * 30px)` } })
  ] });
}
const arrow$2 = "/build/assets/arrow-fZNPTr1S.svg";
const arrow_carousel = "/build/assets/arrow_carousel-CYYplBD2.svg";
const locale = "/build/assets/locale-Ff1N7mQv.svg";
const meters$1 = "/build/assets/meters-BObSTsjp.svg";
const icon$1 = "/build/assets/icon-BAUoE6d5.svg";
function Highlights({ list }) {
  const [loaded, setLoaded] = useState(false);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);
  const next = () => {
    setCurrent((current + 1) % list.length);
  };
  const prev = () => {
    setCurrent((current - 1 + list.length) % list.length);
  };
  return /* @__PURE__ */ jsx(Box, { component: "section", className: "highlights " + (loaded ? "loaded" : "notLoaded"), children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsx(Carousel, { list, Component: Item$4, current, setCurrent, autoplay: false }),
    /* @__PURE__ */ jsxs(Box, { className: "arrows", children: [
      /* @__PURE__ */ jsx(Button, { className: "prev", onClick: prev, children: /* @__PURE__ */ jsx("img", { src: arrow_carousel, alt: "" }) }),
      /* @__PURE__ */ jsx(Button, { className: "next", onClick: next, children: /* @__PURE__ */ jsx("img", { src: arrow_carousel, alt: "" }) })
    ] }),
    /* @__PURE__ */ jsx("img", { src: icon$1, alt: "", className: "icon" }),
    /* @__PURE__ */ jsx(Dots, { array: list, activeIndex: current, setFunction: setCurrent, className: "dots" })
  ] }) });
}
function Item$4({ data }) {
  return /* @__PURE__ */ jsxs(Box, { className: "item", children: [
    /* @__PURE__ */ jsx("h2", { children: data.title }),
    /* @__PURE__ */ jsxs(Box, { className: "dados", children: [
      /* @__PURE__ */ jsxs(Box, { children: [
        /* @__PURE__ */ jsxs(Box, { className: "locale", children: [
          /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx("img", { src: locale, alt: "" }) }),
          /* @__PURE__ */ jsxs("span", { children: [
            data.cidade,
            "/",
            data.estado.value
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Box, { className: "meters", children: [
          /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx("img", { src: meters$1, alt: "" }) }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Lotes a partir de ",
            /* @__PURE__ */ jsxs("b", { children: [
              data.meters_min,
              "m²"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Button, { component: Link, href: data?.permalink, children: [
        /* @__PURE__ */ jsx("span", { className: "icon", children: /* @__PURE__ */ jsx("img", { src: arrow$2, alt: "" }) }),
        " Conheça"
      ] })
    ] }),
    /* @__PURE__ */ jsx(Box, { className: "image_content", children: /* @__PURE__ */ jsx("img", { src: data.banner?.permalink, alt: "" }) })
  ] });
}
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Highlights
}, Symbol.toStringTag, { value: "Module" }));
const icon1 = "/build/assets/icon1-BKhjQeCb.svg";
const icon2 = "/build/assets/icon2-C5eTxbcn.svg";
const icon3 = "/build/assets/icon3-MTkMbEs5.svg";
function InfoData({ dados }) {
  const targetValues = { dado1: dados?.info_1, dado2: dados?.info_2, dado3: dados?.info_3 };
  const [dado1, setDado1] = useState(0);
  const [dado2, setDado2] = useState(0);
  const [dado3, setDado3] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const animationRef = useRef();
  const componentRef = useRef();
  const animateValue = (setValue, targetValue, duration = 2e3) => {
    const startTime = Date.now();
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(targetValue * easeOut);
      setValue(currentValue);
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    animate();
  };
  const startAnimations = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
      setTimeout(() => animateValue(setDado1, targetValues.dado1), 500);
      setTimeout(() => animateValue(setDado2, targetValues.dado2), 1e3);
      setTimeout(() => animateValue(setDado3, targetValues.dado3), 1500);
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimations();
          }
        });
      },
      {
        threshold: 1,
        rootMargin: "0px"
      }
    );
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      observer.disconnect();
    };
  }, [hasAnimated]);
  return /* @__PURE__ */ jsx(Box, { component: "section", className: "info_data" + (hasAnimated ? " animated" : ""), children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsxs(Box, { className: "top", children: [
      /* @__PURE__ */ jsxs(Box, { className: "item", ref: componentRef, children: [
        /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx("img", { src: icon1, alt: "Ícone 1" }) }),
        /* @__PURE__ */ jsxs(Box, { className: "text", children: [
          /* @__PURE__ */ jsxs("h3", { children: [
            "+",
            dado1,
            "m²"
          ] }),
          /* @__PURE__ */ jsx("p", { children: "de História e Realizações" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Box, { className: "item", children: [
        /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx("img", { src: icon2, alt: "Ícone 2" }) }),
        /* @__PURE__ */ jsxs(Box, { className: "text", children: [
          /* @__PURE__ */ jsxs("h3", { children: [
            "+",
            dado2
          ] }),
          /* @__PURE__ */ jsx("p", { children: "Cidades com Nossa Presença" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Box, { className: "item", children: [
        /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx("img", { src: icon3, alt: "Ícone 3" }) }),
        /* @__PURE__ */ jsxs(Box, { className: "text", children: [
          /* @__PURE__ */ jsxs("h3", { children: [
            "+",
            dado3
          ] }),
          /* @__PURE__ */ jsx("p", { children: "Condomínios Lançados" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Box, { className: "bottom", children: [
      /* @__PURE__ */ jsxs("h2", { children: [
        "Transformando ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("b", { children: "sonhos em realidade" })
      ] }),
      /* @__PURE__ */ jsxs(Box, { children: [
        /* @__PURE__ */ jsx("p", { children: dados.info_text }),
        /* @__PURE__ */ jsx(Button1, { component: Link, href: "/sobre", children: "Conheça a Cipasa" })
      ] })
    ] })
  ] }) });
}
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: InfoData
}, Symbol.toStringTag, { value: "Module" }));
const icon = "/build/assets/icon-ZAwmYpkm.svg";
function Projects({ list, dados }) {
  return /* @__PURE__ */ jsx(Box, { component: "section", className: "projects", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsx(Box, { className: "left", children: /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Pagination],
        freeMode: true,
        slidesPerView: "auto",
        pagination: { clickable: true },
        children: list.map((item, index) => /* @__PURE__ */ jsx(SwiperSlide, { className: "item", children: /* @__PURE__ */ jsx(Item$3, { item }, index) }))
      }
    ) }),
    /* @__PURE__ */ jsxs(Box, { className: "right", children: [
      /* @__PURE__ */ jsxs("h2", { children: [
        "Encontre ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("b", { children: "o Projeto Ideal" })
      ] }),
      /* @__PURE__ */ jsx("img", { src: icon })
    ] })
  ] }) });
}
function Item$3({ item }) {
  return /* @__PURE__ */ jsxs(Button, { className: "item", draggable: false, children: [
    /* @__PURE__ */ jsx(Box, { className: "image", children: /* @__PURE__ */ jsx("img", { src: item.banner.permalink, alt: "" }) }),
    /* @__PURE__ */ jsxs(Box, { className: "item_content", children: [
      /* @__PURE__ */ jsx(Box, { className: "logo", children: /* @__PURE__ */ jsx("img", { src: item.logo.permalink, alt: "" }) }),
      /* @__PURE__ */ jsx("p", { children: item.descricao })
    ] })
  ] });
}
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Projects
}, Symbol.toStringTag, { value: "Module" }));
function IconLogo() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, [loaded]);
  return /* @__PURE__ */ jsx(Box, { className: "icon_logo " + (loaded ? "loaded" : "notLoaded"), onClick: () => setLoaded(false), children: /* @__PURE__ */ jsxs("svg", { width: "54", height: "53", viewBox: "0 0 54 53", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("path", { className: "part1", d: "M44.0276 46.4955C38.5334 46.0751 32.6277 45.9119 26.8544 46.2466C20.741 46.6001 15.6454 47.3216 11.3054 48.1771C15.6307 51.2119 20.9005 53.0002 26.5899 53.0002C33.2636 53.0002 39.3581 50.5426 44.0276 46.4955Z", fill: "#407B6B" }),
    /* @__PURE__ */ jsx("path", { className: "part2", d: "M1.85952 36.234C3.39154 40.0971 5.80499 43.5168 8.85643 46.24C13.931 45.0039 22.2291 44.0481 27.8786 43.7511C34.1221 43.4248 39.0855 43.339 44.7245 43.956C30.3886 38.3967 15.081 36.2905 1.85742 36.2319L1.85952 36.234Z", fill: "#82ADA1" }),
    /* @__PURE__ */ jsx("path", { className: "part3", d: "M26.4179 29.3717C15.4419 29.9344 9.3537 30.8798 1.07031 33.4377C1.72929 33.3917 27.2258 34.0798 47.629 42.697C50.1872 39.4028 51.9795 35.4937 52.7497 31.227C46.7769 30.0034 33.9352 28.9848 26.4179 29.3697V29.3717Z", fill: "#B0CAC1" }),
    /* @__PURE__ */ jsx("path", { className: "part4", d: "M13.9814 34.4351C20.0654 35.1651 27.6646 36.4137 35.3604 38.5137C38.2355 36.4263 40.3321 33.3475 41.1379 29.773C35.9459 29.3631 30.4243 29.1665 26.4159 29.3715C20.718 29.6643 16.3402 30.0617 12.2856 30.731C12.6802 32.0528 13.2573 33.2931 13.9814 34.433V34.4351Z", fill: "#D8E6DC" }),
    /* @__PURE__ */ jsx("path", { className: "part5", d: "M53.0498 29.1103C53.1337 28.2506 53.1799 27.3805 53.1799 26.4979C53.1799 11.8633 41.2742 0 26.59 0C11.9057 0 0 11.8633 0 26.5C0 28.0498 0.14061 29.5662 0.396646 31.0429C3.85733 30.0494 7.70836 29.2065 11.8238 28.5581C11.7294 27.8846 11.6643 27.2007 11.6643 26.5C11.6643 18.2844 18.3464 11.627 26.5879 11.627C34.8293 11.627 41.5114 18.2865 41.5114 26.5C41.5114 26.8556 41.482 27.2028 41.4589 27.5521C45.5324 27.8972 49.4233 28.4263 53.0477 29.1124L53.0498 29.1103Z", fill: "#62BB46" })
  ] }) });
}
const mapa = "/build/assets/map--pYwPMo3.svg";
const logo$1 = "/build/assets/logo_bg-BvMbOwdr.svg";
function ProjectsMap({ dados, states }) {
  const [selectedState, setSelectedState] = useState("");
  useEffect(() => {
    if (selectedState) {
      router.get(
        "/empreendimentos",
        {
          order: "recentes",
          state: selectedState,
          status: "",
          type: ""
        },
        {
          preserveScroll: true,
          preserveState: true,
          replace: true
        }
      );
    }
  }, [selectedState]);
  return /* @__PURE__ */ jsxs(Box, { component: "section", className: "projects_map", children: [
    /* @__PURE__ */ jsx("img", { className: "logo_bg", src: logo$1, alt: "" }),
    /* @__PURE__ */ jsxs(Box, { className: "content", children: [
      /* @__PURE__ */ jsxs(Box, { className: "left", children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          "Descubra nossos",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("b", { children: "projetos por todo Brasil" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text", dangerouslySetInnerHTML: { __html: dados?.text_descubra } }),
        /* @__PURE__ */ jsx(Box, { className: "selectors", children: /* @__PURE__ */ jsxs(
          "select",
          {
            name: "estado",
            value: selectedState,
            onChange: (e) => setSelectedState(e.target.value),
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Estados" }),
              states?.map((state) => /* @__PURE__ */ jsx("option", { value: state.value, children: state.label }, state.value))
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(Box, { className: "right", children: /* @__PURE__ */ jsx(BrazilMap, { states }) })
    ] })
  ] });
}
function BrazilMap({ states }) {
  return /* @__PURE__ */ jsxs(Box, { className: "brazil_map", children: [
    /* @__PURE__ */ jsx("img", { src: mapa, alt: "Mapa do Brasil" }),
    /* @__PURE__ */ jsx(Box, { className: "pin_content", children: states?.map((state) => /* @__PURE__ */ jsx(
      Button,
      {
        className: state.value,
        component: Link,
        href: `/empreendimentos?order=recentes&state=${state.value}&status=&type=`,
        children: /* @__PURE__ */ jsx(IconLogo, {})
      },
      state.value
    )) })
  ] });
}
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProjectsMap
}, Symbol.toStringTag, { value: "Module" }));
const flower = "/build/assets/flower-DQO-aAp3.svg";
const arrow$1 = "/build/assets/arrow-CoTytbEr.svg";
const category = "/build/assets/category-Bq0kb8Fi.svg";
const meters = "/build/assets/meters-DceIKJXO.svg";
const location = "/build/assets/location-DLQRqP-a.svg";
const buttonArrow = "/build/assets/button_arrow-BzWPjPi2.svg";
function VenturesList({ ventures, construtoras }) {
  const [page, setPage] = useState(1);
  const itensPerPage = 9;
  const handleChange = (event, value) => {
    setPage(value);
  };
  const venturesPage = () => {
    const start = (page - 1) * itensPerPage;
    const end = start + itensPerPage;
    return ventures?.slice(start, end);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  return /* @__PURE__ */ jsx(Box, { className: "ventures_list", component: "section", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsx(Box, { className: "list_content", children: venturesPage()?.map((item, index) => /* @__PURE__ */ jsx(VentureItem, { item, construtora: construtoras.filter((c) => c.id === item?.construtora.id) }, index)) }),
    /* @__PURE__ */ jsx(Box, { className: "pagination_content", children: /* @__PURE__ */ jsx(Pagination$1, { count: Math.ceil(ventures?.length / itensPerPage), page, onChange: handleChange, shape: "rounded" }) })
  ] }) });
}
function VentureItem({ item, construtora }) {
  return /* @__PURE__ */ jsxs(Box, { className: "venture_item", children: [
    /* @__PURE__ */ jsxs(Button, { component: Link, href: item.permalink, className: "image", children: [
      /* @__PURE__ */ jsx("img", { src: item.banner.permalink, alt: item.title }),
      /* @__PURE__ */ jsx(Box, { className: "logo", children: /* @__PURE__ */ jsx("img", { src: construtora[0]?.logo?.permalink, alt: "" }) })
    ] }),
    /* @__PURE__ */ jsxs(Box, { className: "item_content", children: [
      /* @__PURE__ */ jsx("h3", { children: item.title }),
      /* @__PURE__ */ jsxs(Box, { className: "info", children: [
        /* @__PURE__ */ jsxs(Box, { children: [
          /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx("img", { src: category }) }),
          /* @__PURE__ */ jsx("p", { children: item.tipo.label })
        ] }),
        /* @__PURE__ */ jsxs(Box, { children: [
          /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx("img", { src: meters }) }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Lotes a partir de ",
            item.meters_min,
            "m²"
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Box, { children: [
          /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx("img", { src: location }) }),
          /* @__PURE__ */ jsxs("p", { children: [
            item.cidade,
            "/",
            item.estado.value
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Box, { className: "button_content", children: /* @__PURE__ */ jsxs(Button, { component: Link, href: item.permalink, children: [
        /* @__PURE__ */ jsx("img", { src: buttonArrow }),
        " Conheça"
      ] }) })
    ] })
  ] });
}
const __vite_glob_0_41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VentureItem,
  default: VenturesList
}, Symbol.toStringTag, { value: "Module" }));
function Ventures$1({ list, construtoras, dados }) {
  const swiperRef = useRef(null);
  return /* @__PURE__ */ jsx(Box, { className: "ventures", component: "section", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsxs(Box, { className: "left", children: [
      /* @__PURE__ */ jsxs("h2", { children: [
        "Espaços para ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("b", { children: "Viver e Investir" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text", dangerouslySetInnerHTML: { __html: dados?.text_espacos } }),
      /* @__PURE__ */ jsx(Button1, { component: Link, href: "/empreendimentos", children: "Ver empreendimentos" })
    ] }),
    /* @__PURE__ */ jsxs(Box, { className: "right", children: [
      /* @__PURE__ */ jsx(
        Swiper,
        {
          onBeforeInit: (swiper) => {
            swiperRef.current = swiper;
          },
          modules: [Pagination, Navigation],
          freeMode: true,
          slidesPerView: "auto",
          pagination: { clickable: true },
          children: list.map((item, index) => /* @__PURE__ */ jsx(SwiperSlide, { className: "item", children: /* @__PURE__ */ jsx(VentureItem, { item, construtora: construtoras.filter((c) => c.id === item.construtora[0]) }, index) }))
        }
      ),
      /* @__PURE__ */ jsxs(Box, { className: "arrows", children: [
        /* @__PURE__ */ jsx(Button, { className: "prev", onClick: () => swiperRef.current.slidePrev(), children: /* @__PURE__ */ jsx("img", { src: arrow$1, alt: "" }) }),
        /* @__PURE__ */ jsx(Button, { className: "next", onClick: () => swiperRef.current.slideNext(), children: /* @__PURE__ */ jsx("img", { src: arrow$1, alt: "" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("img", { src: flower, className: "flower" })
  ] }) });
}
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ventures$1
}, Symbol.toStringTag, { value: "Module" }));
function Home({ dados, banners, states, construtoras, blog, seo }) {
  const title = seo?.meta_title || "Cipasa Urbanismo";
  const description = seo?.breve_descricao || "";
  const keywords = Array.isArray(seo?.keywords) ? seo.keywords.join(", ") : "";
  const robots = seo?.meta_robots || "index,follow";
  const ogImageUrl = seo?.og_image?.permalink || seo?.og_image?.url || seo?.og_image?.path;
  const canonical = seo?.canonical || seo?.url || null;
  const url = seo?.url || canonical || null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { title, children: [
      /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
      keywords && /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: robots }),
      canonical && /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonical }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      url && /* @__PURE__ */ jsx("meta", { property: "og:url", content: url }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
      description && /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
      ogImageUrl && /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImageUrl }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
      description && /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
      ogImageUrl && /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImageUrl }),
      seo?.scripts && /* @__PURE__ */ jsx(
        "script",
        {
          dangerouslySetInnerHTML: { __html: seo.scripts?.code }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("h1", { style: { display: "none" }, children: title }),
    /* @__PURE__ */ jsxs(Box, { className: "container", children: [
      /* @__PURE__ */ jsx(BannerCarousel, { banners }),
      /* @__PURE__ */ jsx(InfoData, { dados }),
      /* @__PURE__ */ jsx(Highlights, { list: dados.lista_1 }),
      /* @__PURE__ */ jsx(ProjectsMap, { dados, states }),
      /* @__PURE__ */ jsx(Projects, { list: construtoras }),
      /* @__PURE__ */ jsx(Ventures$1, { list: dados.lista_2, construtoras, dados }),
      /* @__PURE__ */ jsx(ContactBanner, { dados }),
      /* @__PURE__ */ jsx(Blog$1, { blog })
    ] })
  ] });
}
Home.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
function NotFound() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Página não encontrada" }),
    /* @__PURE__ */ jsx(Box, { className: "not_found", children: /* @__PURE__ */ jsxs(Box, { className: "container", children: [
      /* @__PURE__ */ jsx("h1", { children: "404" }),
      /* @__PURE__ */ jsx("p", { children: "A página que você está procurando não existe ou foi movida." })
    ] }) })
  ] });
}
NotFound.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: NotFound
}, Symbol.toStringTag, { value: "Module" }));
function GeneralDocuments({ setUrlDownload }) {
  const documents = [
    {
      title: "06/novembro/2018",
      desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".',
      link: "https://link.com"
    },
    { title: "06/novembro/2018", desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: "https://link.com" },
    { title: "06/novembro/2018", desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: "https://link.com" },
    { title: "06/novembro/2018", desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: "https://link.com" },
    { title: "06/novembro/2018", desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: "https://link.com" },
    { title: "06/novembro/2018", desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: "https://link.com" },
    { title: "06/novembro/2018", desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: "https://link.com" },
    { title: "06/novembro/2018", desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: "https://link.com" },
    { title: "06/novembro/2018", desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: "https://link.com" },
    { title: "06/novembro/2018", desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: "https://link.com" },
    { title: "06/novembro/2018", desc: '1º Aditamento à Escritura da 6º Emissão de Debêntures".', link: "https://link.com" }
  ];
  return /* @__PURE__ */ jsx(Box, { className: "general_documents", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsxs("h2", { children: [
      "Documentos ",
      /* @__PURE__ */ jsx("b", { children: "Gerais" })
    ] }),
    /* @__PURE__ */ jsx(Box, { className: "document_list", children: documents.map((doc, index) => /* @__PURE__ */ jsx(DocumentItem, { ...doc, setUrlDownload }, index)) })
  ] }) });
}
function DocumentItem({ title, desc, link, setUrlDownload }) {
  return /* @__PURE__ */ jsxs(Button, { className: "document_item", onClick: () => setUrlDownload(link), children: [
    /* @__PURE__ */ jsx("h3", { children: title }),
    /* @__PURE__ */ jsx("p", { children: desc })
  ] });
}
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: GeneralDocuments
}, Symbol.toStringTag, { value: "Module" }));
function ModalLogin({ open, onClose }) {
  const [isCadastro, setIsCadastro] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    confirmarEmail: "",
    senha: ""
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log("🔑 Login enviado:", {
      email: form.email,
      senha: form.senha
    });
  };
  const handleSubmitCadastro = (e) => {
    e.preventDefault();
    console.log("🆕 Cadastro enviado:", {
      nome: form.nome,
      email: form.email,
      confirmarEmail: form.confirmarEmail
    });
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onClose, className: "modal_login", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h6", align: "center", mb: 2, children: isCadastro ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Crie" }),
      " sua conta"
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Faça" }),
      " Login"
    ] }) }),
    !isCadastro ? (
      // ======== FORM LOGIN ========
      /* @__PURE__ */ jsx("form", { onSubmit: handleSubmitLogin, children: /* @__PURE__ */ jsxs(Stack, { spacing: 1, children: [
        /* @__PURE__ */ jsx(
          TextField,
          {
            label: "E-mail",
            name: "email",
            type: "email",
            value: form.email,
            onChange: handleChange,
            fullWidth: true,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          TextField,
          {
            label: "Senha",
            name: "senha",
            type: "password",
            value: form.senha,
            onChange: handleChange,
            fullWidth: true,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(Button1, { type: "submit", variant: "contained", fullWidth: true, children: "Entrar" }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "text",
            fullWidth: true,
            onClick: () => setIsCadastro(true),
            children: "Ainda não tenho senha"
          }
        )
      ] }) })
    ) : (
      // ======== FORM CADASTRO ========
      /* @__PURE__ */ jsx("form", { onSubmit: handleSubmitCadastro, children: /* @__PURE__ */ jsxs(Stack, { spacing: 1, children: [
        /* @__PURE__ */ jsx(
          TextField,
          {
            label: "Nome completo",
            name: "nome",
            value: form.nome,
            onChange: handleChange,
            fullWidth: true,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          TextField,
          {
            label: "E-mail",
            name: "email",
            type: "email",
            value: form.email,
            onChange: handleChange,
            fullWidth: true,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          TextField,
          {
            label: "Confirme seu e-mail",
            name: "confirmarEmail",
            type: "email",
            value: form.confirmarEmail,
            onChange: handleChange,
            fullWidth: true,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(Button1, { type: "submit", variant: "contained", fullWidth: true, children: "Criar conta" }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "text",
            fullWidth: true,
            onClick: () => setIsCadastro(false),
            children: "Já tenho uma conta"
          }
        )
      ] }) })
    )
  ] }) });
}
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ModalLogin
}, Symbol.toStringTag, { value: "Module" }));
function RiHeader({ setUrlDownload }) {
  const years = [
    { label: "2025", id: 5, url: "https://example.com/2025" },
    { label: "2024", id: 4, url: "https://example.com/2024" },
    { label: "2023", id: 3, url: "https://example.com/2023" },
    { label: "2022", id: 2, url: "https://example.com/2022" },
    { label: "2021", id: 1, url: "https://example.com/2021" },
    { label: "2020", id: 0, url: "https://example.com/2020" }
  ];
  return /* @__PURE__ */ jsx(Box, { className: "ri_header", component: "section", children: /* @__PURE__ */ jsx(
    HeaderBanner,
    {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Cipasa ",
        /* @__PURE__ */ jsx("b", { children: "Investidores" })
      ] }),
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Cipasa Investidores" }
      ],
      right: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("p", { style: { marginBottom: "10px" }, children: /* @__PURE__ */ jsx("b", { children: "Demonstrativo Financeiro:" }) }),
        /* @__PURE__ */ jsx(
          Autocomplete,
          {
            sx: { maxWidth: "450px" },
            disablePortal: true,
            options: years,
            onChange: (event, newValue) => {
              if (newValue && newValue.url) {
                setUrlDownload(newValue.url);
              } else {
                setUrlDownload(null);
              }
            },
            renderInput: (params) => /* @__PURE__ */ jsx(TextField, { ...params, label: "Selecione o ano" })
          }
        )
      ] })
    }
  ) });
}
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RiHeader
}, Symbol.toStringTag, { value: "Module" }));
function RI() {
  const [open, setOpen] = useState(false);
  const [urlDownload, setUrlDownload] = useState("");
  useEffect(() => {
    if (!urlDownload) {
      setOpen(false);
      return;
    }
    setOpen(true);
  }, [urlDownload]);
  const handeClose = () => {
    setOpen(false);
    setUrlDownload("");
  };
  return /* @__PURE__ */ jsx(Box, { className: "RI", children: /* @__PURE__ */ jsxs(Box, { className: "container", children: [
    /* @__PURE__ */ jsx(RiHeader, { setUrlDownload }),
    /* @__PURE__ */ jsx(GeneralDocuments, { setUrlDownload }),
    /* @__PURE__ */ jsx(ModalLogin, { open, onClose: () => handeClose() })
  ] }) });
}
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RI
}, Symbol.toStringTag, { value: "Module" }));
function VentureHeader({ venture }) {
  return /* @__PURE__ */ jsx(Box, { className: "venture_header", component: "section", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsxs(Box, { className: "top", children: [
      /* @__PURE__ */ jsx(TitleBreadcrumbs, { title: /* @__PURE__ */ jsx(Fragment, { children: venture.title }), breadcrumbs: [{ label: "Home", href: "/" }, { label: "Empreendimentos", href: "/empreendimentos" }] }),
      /* @__PURE__ */ jsx(Butterfly1, {}),
      /* @__PURE__ */ jsx(Butterfly2, {})
    ] }),
    /* @__PURE__ */ jsxs(Box, { className: "bottom", children: [
      /* @__PURE__ */ jsx(Box, { className: "logo", children: /* @__PURE__ */ jsx("img", { src: venture.construtora.logo.permalink, alt: venture.construtora.title }) }),
      /* @__PURE__ */ jsx(Box, { className: "image", children: /* @__PURE__ */ jsx("img", { src: venture.banner.permalink, alt: venture.title }) })
    ] })
  ] }) });
}
const __vite_glob_0_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VentureHeader
}, Symbol.toStringTag, { value: "Module" }));
const pin = "/build/assets/pin-DqdC0k7s.svg";
function VentureInfo({ venture }) {
  const handleScrollToContact = () => {
    if (typeof window === "undefined") return;
    const el = document.querySelector(".contact_form");
    if (!el) return;
    const y = el.getBoundingClientRect().top + window?.scrollY - 300;
    smoothScrollTo(y);
  };
  return /* @__PURE__ */ jsx(Box, { className: "venture_info", component: "section", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsxs(Box, { className: "left", children: [
      /* @__PURE__ */ jsxs("p", { className: "locale", children: [
        /* @__PURE__ */ jsx("img", { src: pin }),
        venture.cidade,
        " - ",
        venture.estado.value
      ] }),
      /* @__PURE__ */ jsx("h2", { children: venture.subtitulo }),
      /* @__PURE__ */ jsx("p", { className: "description", children: venture.descricao })
    ] }),
    /* @__PURE__ */ jsxs(Box, { className: "right", children: [
      /* @__PURE__ */ jsx("h3", { children: "Quer saber mais sobre?" }),
      /* @__PURE__ */ jsx(Button1, { onClick: handleScrollToContact, children: "Tenho interesse" })
    ] })
  ] }) });
}
const __vite_glob_0_36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VentureInfo
}, Symbol.toStringTag, { value: "Module" }));
const arrow = "/build/assets/arrow-CoTytbEr.svg";
const logo = "/build/assets/logo-DV1IHhYF.svg";
function ButtonFilter({ children, isActive, onClick }) {
  return /* @__PURE__ */ jsx(
    Button,
    {
      className: `button_filter ${isActive ? "active" : ""}`,
      onClick,
      children
    }
  );
}
function VentureGalery({ venture }) {
  const swiperRef = useRef(null);
  const [selectedGalery, setSelectedGalery] = useState(null);
  const [images, setImages] = useState([]);
  useEffect(() => {
    const arr = (venture?.galeria ?? []).flatMap(
      (g) => (g?.imagens ?? []).filter((img) => img && (img.permalink || img.url)).map((img) => ({
        id: `${g.id}:${img.id ?? img.path}`,
        img: img.permalink ?? img.url,
        title: img.alt ?? "",
        id_galery: g.id,
        name_galery: g.nome_da_galeria ?? ""
      }))
    );
    setImages(arr);
  }, [venture]);
  const uniqueGaleries = images.reduce((acc, current) => {
    const exists = acc.find((item) => item.id_galery === current.id_galery);
    if (!exists) {
      acc.push({
        id_galery: current.id_galery,
        name_galery: current.name_galery
      });
    }
    return acc;
  }, []).sort((a, b) => a.id_galery - b.id_galery);
  return /* @__PURE__ */ jsx(Box, { className: "venture_galery", component: "section", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsxs(Box, { className: "left", children: [
      /* @__PURE__ */ jsx("h2", { children: "Imagens" }),
      /* @__PURE__ */ jsxs(Box, { className: "filters", children: [
        /* @__PURE__ */ jsx(ButtonFilter, { isActive: selectedGalery === null, onClick: () => setSelectedGalery(null), children: "Todas" }),
        uniqueGaleries.map((galery) => /* @__PURE__ */ jsx(ButtonFilter, { isActive: selectedGalery === galery.id_galery, onClick: () => setSelectedGalery(galery.id_galery), children: galery.name_galery }, galery.id_galery))
      ] })
    ] }),
    /* @__PURE__ */ jsx(Box, { className: "right", children: /* @__PURE__ */ jsxs(Box, { className: "galery_content", children: [
      /* @__PURE__ */ jsx(
        Swiper,
        {
          onBeforeInit: (swiper) => {
            swiperRef.current = swiper;
          },
          loop: true,
          modules: [Pagination, Navigation, EffectFade],
          freeMode: true,
          slidesPerView: "auto",
          pagination: { clickable: true },
          children: images.filter((img) => selectedGalery === null || img.id_galery === selectedGalery).map((image) => /* @__PURE__ */ jsx(SwiperSlide, { className: "swiper_item", children: /* @__PURE__ */ jsx(Item$2, { item: image }) }, image.id))
        }
      ),
      /* @__PURE__ */ jsxs(Box, { className: "arrows", children: [
        /* @__PURE__ */ jsx(Button, { className: "prev", onClick: () => swiperRef.current.slidePrev(), children: /* @__PURE__ */ jsx("img", { src: arrow, alt: "" }) }),
        /* @__PURE__ */ jsx(Button, { className: "next", onClick: () => swiperRef.current.slideNext(), children: /* @__PURE__ */ jsx("img", { src: arrow, alt: "" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Box, { className: "logo", children: /* @__PURE__ */ jsx("img", { src: logo }) })
  ] }) });
}
function Item$2({ item }) {
  return /* @__PURE__ */ jsxs(Box, { className: "item", children: [
    /* @__PURE__ */ jsx("img", { src: item.img, alt: item.title }),
    item.title && /* @__PURE__ */ jsx("p", { children: item.title })
  ] });
}
const __vite_glob_0_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VentureGalery
}, Symbol.toStringTag, { value: "Module" }));
function VentureDifferences({ venture, categoriesDif }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [diferences, setDiferences] = useState([]);
  useEffect(() => {
    const cats = categoriesDif || {};
    const arr = (venture?.diferenciais ?? []).filter((d) => d && d.published).map((d, idx) => {
      const catIds = Array.isArray(d.categoria) ? d.categoria : [];
      const firstId = catIds.length ? catIds[0] : null;
      return {
        id: d.id ?? idx,
        icon: d?.icone?.permalink ?? d?.icone?.url ?? null,
        title: d.title ?? "",
        id_category: firstId,
        name_category: firstId != null ? cats[firstId] ?? String(firstId) : "",
        categories: catIds.map((id) => ({ id, name: cats[id] ?? String(id) }))
      };
    });
    setDiferences(arr);
  }, [venture, categoriesDif]);
  const uniqueCategories = useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const d of diferences) {
      for (const c of d.categories ?? [{ id: d.id_category, name: d.name_category }]) {
        if (c?.id == null) continue;
        if (!map.has(c.id)) map.set(c.id, { id_category: c.id, name_category: c.name });
      }
    }
    return [...map.values()].sort(
      (a, b) => String(a.name_category).localeCompare(String(b.name_category), "pt-BR")
    );
  }, [diferences]);
  const filteredDifferences = useMemo(() => {
    if (selectedCategory === null) return diferences;
    return diferences.filter(
      (d) => (d.categories ?? [{ id: d.id_category }]).some((c) => c.id === selectedCategory)
    );
  }, [diferences, selectedCategory]);
  return /* @__PURE__ */ jsx(Box, { className: "venture_differences", component: "section", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsx("h2", { children: "Diferenciais" }),
    /* @__PURE__ */ jsxs(Box, { className: "filter_content", children: [
      /* @__PURE__ */ jsx(ButtonFilter, { isActive: selectedCategory === null, onClick: () => setSelectedCategory(null), children: "Todas" }),
      uniqueCategories.map((category2) => /* @__PURE__ */ jsx(ButtonFilter, { isActive: selectedCategory === category2.id_category, onClick: () => setSelectedCategory(category2.id_category), children: category2.name_category }, category2.id_category))
    ] }),
    /* @__PURE__ */ jsx(Box, { className: "list_content", children: filteredDifferences.map((item) => /* @__PURE__ */ jsx(Item$1, { item }, item.id)) })
  ] }) });
}
function Item$1({ item }) {
  return /* @__PURE__ */ jsxs(Box, { className: "item", children: [
    /* @__PURE__ */ jsx(Box, { className: "icon", children: /* @__PURE__ */ jsx("img", { src: item.icon, alt: item.title }) }),
    /* @__PURE__ */ jsx("h3", { children: item.title })
  ] });
}
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VentureDifferences
}, Symbol.toStringTag, { value: "Module" }));
const formatDate = (dateString) => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("pt-BR");
};
function VentureStatus({ venture }) {
  const status = [
    {
      title: "Terraplanagem",
      percentage: venture.terraplanagem
    },
    {
      title: "Drenagem",
      percentage: venture.drenagem
    },
    {
      title: "Saneamento",
      percentage: venture.saneamento
    },
    {
      title: "Pavimentação",
      percentage: venture.pavimentacao
    },
    {
      title: "Rede elétrica",
      percentage: venture.rede_eletrica
    },
    {
      title: "Obras civis",
      percentage: venture.obras_civis
    }
  ];
  const geral_status = Math.floor(status.reduce((acc, item) => acc + item.percentage, 0) / status.length);
  return /* @__PURE__ */ jsx(Box, { className: "venture_status", component: "section", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsxs(Box, { className: "left", children: [
      /* @__PURE__ */ jsx("h2", { children: "Status" }),
      /* @__PURE__ */ jsx("p", { children: "Confira o andamento de cada etapa de execução das obras do empreendimento." }),
      /* @__PURE__ */ jsxs(Box, { className: "list_status", children: [
        /* @__PURE__ */ jsx(Item, { item: { title: "Status Geral da obra", percentage: geral_status } }),
        status.map((item) => /* @__PURE__ */ jsx(Item, { item }, item.title))
      ] })
    ] }),
    /* @__PURE__ */ jsx(Box, { className: "right", children: /* @__PURE__ */ jsx(
      TechnicalSheet,
      {
        empreendimento: venture.title,
        dataLancamento: formatDate(venture.lancamento),
        areaBruta: venture.area_bruta,
        areaLotes: venture.area_de_lotes,
        numeroLotes: `${venture.numero_residenciais} lotes residenciais e ${venture.numero_comerciais} comerciais`,
        tamanhoLotes: `${venture.meters_min}m² a ${venture.meters_max}m²`
      }
    ) })
  ] }) });
}
function Item({ item }) {
  return /* @__PURE__ */ jsxs(Box, { className: "item", children: [
    /* @__PURE__ */ jsx(Box, { className: "progress", style: { width: `${item.percentage}%` } }),
    /* @__PURE__ */ jsx("p", { className: "title", children: item.title }),
    /* @__PURE__ */ jsxs("p", { className: "percentage", children: [
      item.percentage,
      "%"
    ] })
  ] });
}
function TechnicalSheet({ empreendimento, dataLancamento, areaBruta, areaLotes, numeroLotes, tamanhoLotes }) {
  return /* @__PURE__ */ jsxs(Box, { className: "technical_sheet", children: [
    /* @__PURE__ */ jsx("h3", { children: "Ficha Técnica" }),
    /* @__PURE__ */ jsxs(Box, { className: "list", children: [
      /* @__PURE__ */ jsxs(Box, { className: "item", children: [
        /* @__PURE__ */ jsx("h4", { children: "Empreendimento:" }),
        /* @__PURE__ */ jsx("p", { children: empreendimento })
      ] }),
      /* @__PURE__ */ jsxs(Box, { className: "item", children: [
        /* @__PURE__ */ jsx("h4", { children: "Data de lançamento:" }),
        /* @__PURE__ */ jsx("p", { children: dataLancamento })
      ] }),
      /* @__PURE__ */ jsxs(Box, { className: "item", children: [
        /* @__PURE__ */ jsx("h4", { children: "Área bruta:" }),
        /* @__PURE__ */ jsxs("p", { children: [
          areaBruta,
          "m²"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Box, { className: "item", children: [
        /* @__PURE__ */ jsx("h4", { children: "Área de lotes:" }),
        /* @__PURE__ */ jsxs("p", { children: [
          areaLotes,
          "m²"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Box, { className: "item", children: [
        /* @__PURE__ */ jsx("h4", { children: "Número de lotes:" }),
        /* @__PURE__ */ jsx("p", { children: numeroLotes })
      ] }),
      /* @__PURE__ */ jsxs(Box, { className: "item", children: [
        /* @__PURE__ */ jsx("h4", { children: "Tamanho dos lotes:" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "A partir de ",
          tamanhoLotes
        ] })
      ] })
    ] })
  ] });
}
const __vite_glob_0_38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VentureStatus
}, Symbol.toStringTag, { value: "Module" }));
function VentureContact({ venture }) {
  return /* @__PURE__ */ jsx(Box, { className: "venture_contact", component: "section", children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsx("h2", { children: "Tenho Interesse" }),
    /* @__PURE__ */ jsx("p", { children: "Preencha seus dados e receba um contato de um de nossos especialistas." }),
    /* @__PURE__ */ jsx(ContactForm, { venture })
  ] }) });
}
function ContactForm({ venture }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState("error");
  function handlePhoneChange(e) {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    value = value.slice(0, 15);
    setPhone(value);
  }
  function handleCepChange(e) {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    value = value.slice(0, 9);
    setCep(value);
  }
  const handleToastClose = (_, reason) => {
    if (reason === "clickaway") return;
    setToastOpen(false);
  };
  function validate() {
    const e = {};
    const msgs = [];
    if (!name.trim()) {
      e.name = "Informe seu nome";
      msgs.push(e.name);
    }
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      e.phone = "Telefone inválido";
      msgs.push(e.phone);
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = "E-mail inválido";
      msgs.push(e.email);
    }
    const cepDigits = cep.replace(/\D/g, "");
    if (cepDigits.length !== 8) {
      e.cep = "CEP inválido";
      msgs.push(e.cep);
    }
    if (!accepted) {
      e.accepted = "É necessário aceitar os termos";
      msgs.push(e.accepted);
    }
    setErrors(e);
    if (msgs.length) {
      setToastMessage(msgs.join("\n"));
      setToastSeverity("error");
      setToastOpen(true);
      return false;
    }
    return true;
  }
  function handleSubmit(ev) {
    ev.preventDefault();
    if (sending) return;
    if (!validate()) return;
    setSending(true);
    router.post(
      route("empreendimentos.leads.store"),
      {
        venture_id: venture?.id ?? null,
        venture_slug: venture?.slug ?? null,
        venture_name: venture?.title ?? null,
        name: name.trim(),
        phone: phone.replace(/\D/g, ""),
        email: email.trim(),
        cep: cep.replace(/\D/g, ""),
        accepted: true
      },
      {
        onError: (serverErrors) => {
          setErrors((prev) => ({ ...prev, ...serverErrors }));
          setToastMessage("Não foi possível enviar seus dados. Verifique os campos e tente novamente.");
          setToastSeverity("error");
          setToastOpen(true);
          setSending(false);
        },
        onSuccess: () => {
          setSuccess(true);
          setToastMessage("Recebemos seus dados. Em breve entraremos em contato.");
          setToastSeverity("success");
          setToastOpen(true);
          setName("");
          setPhone("");
          setEmail("");
          setCep("");
          setAccepted(false);
          setErrors({});
          setSending(false);
          setTimeout(() => setSuccess(false), 4e3);
        }
      }
    );
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("form", { className: "contact_form", onSubmit: handleSubmit, noValidate: true, children: [
      /* @__PURE__ */ jsxs(Box, { className: "form_content", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "NOME",
            name: "name",
            value: name,
            onChange: (e) => setName(e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "TELEFONE",
            name: "celular",
            value: phone,
            onChange: handlePhoneChange,
            maxLength: 15
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            placeholder: "EMAIL",
            name: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "SEU CEP",
            name: "cep",
            value: cep,
            onChange: handleCepChange,
            maxLength: 9
          }
        ),
        /* @__PURE__ */ jsx(Button, { type: "submit", disabled: sending, children: sending ? "Enviando..." : "Enviar" })
      ] }),
      /* @__PURE__ */ jsxs(Box, { className: "checkbox_content", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkbox",
            id: "terms",
            checked: accepted,
            onChange: (e) => setAccepted(e.target.checked)
          }
        ),
        /* @__PURE__ */ jsx("label", { htmlFor: "terms", children: "Li e concordo com a Política de Privacidade e os Termos de Uso." })
      ] }),
      success && /* @__PURE__ */ jsx("div", { className: "ok", children: "Recebemos seus dados. Em breve entraremos em contato." })
    ] }),
    /* @__PURE__ */ jsx(
      Snackbar$1,
      {
        open: toastOpen,
        autoHideDuration: 4e3,
        onClose: handleToastClose,
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        sx: {
          "& .MuiPaper-root": {
            maxWidth: 360,
            width: "100%",
            borderRadius: 2
          }
        },
        children: /* @__PURE__ */ jsx(
          Alert$1,
          {
            onClose: handleToastClose,
            severity: toastSeverity,
            variant: "filled",
            sx: {
              width: "100%",
              boxShadow: 3,
              whiteSpace: "pre-line",
              textAlign: "left"
            },
            children: toastMessage
          }
        )
      }
    )
  ] });
}
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VentureContact
}, Symbol.toStringTag, { value: "Module" }));
function Venture({ dados, related, categoriesDif, seo }) {
  const title = seo?.meta_title || "Cipasa Urbanismo";
  const description = seo?.breve_descricao || "";
  const keywords = Array.isArray(seo?.keywords) ? seo.keywords.join(", ") : "";
  const robots = seo?.meta_robots || "index,follow";
  const ogImageUrl = seo?.og_image?.permalink || seo?.og_image?.url || seo?.og_image?.path;
  const canonical = seo?.canonical || seo?.url || null;
  const url = seo?.url || canonical || null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { title, children: [
      /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
      keywords && /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: robots }),
      canonical && /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonical }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      url && /* @__PURE__ */ jsx("meta", { property: "og:url", content: url }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
      description && /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
      ogImageUrl && /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImageUrl }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
      description && /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
      ogImageUrl && /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImageUrl }),
      seo?.scripts && /* @__PURE__ */ jsx(
        "script",
        {
          dangerouslySetInnerHTML: { __html: seo.scripts?.code }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Box, { className: "container", children: [
      /* @__PURE__ */ jsx(VentureHeader, { venture: dados }),
      /* @__PURE__ */ jsx(VentureInfo, { venture: dados }),
      /* @__PURE__ */ jsx(VentureGalery, { venture: dados }),
      /* @__PURE__ */ jsx(VentureDifferences, { venture: dados, categoriesDif }),
      /* @__PURE__ */ jsx(VentureStatus, { venture: dados }),
      /* @__PURE__ */ jsx(VentureMap, { position: [dados.latitude, dados.longitude] }),
      /* @__PURE__ */ jsx(VentureContact, { venture: dados, related })
    ] })
  ] });
}
Venture.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Venture
}, Symbol.toStringTag, { value: "Module" }));
function useDebouncedEffect(fn, deps, delay = 300) {
  useEffect(() => {
    const id = setTimeout(fn, delay);
    return () => clearTimeout(id);
  }, [...deps, delay]);
}
function VenturesHeader({ ventures, states, setData, currentFilters = {} }) {
  return /* @__PURE__ */ jsx(Box, { className: "ventures_header", component: "section", children: /* @__PURE__ */ jsx(HeaderPadding, { children: /* @__PURE__ */ jsxs(Box, { className: "content", children: [
    /* @__PURE__ */ jsx(Box, { className: "left", children: /* @__PURE__ */ jsx(
      TitleBreadcrumbs,
      {
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Nossos ",
          /* @__PURE__ */ jsx("b", { children: "Empreendimentos" })
        ] }),
        breadcrumbs: [{ label: "Home", href: "/" }, { label: "Nossos Empreendimentos" }]
      }
    ) }),
    /* @__PURE__ */ jsx(Box, { className: "right", children: /* @__PURE__ */ jsx(Filter, { states, currentFilters }) })
  ] }) }) });
}
function Filter({ states, currentFilters = {} }) {
  const orderList = [
    { label: "Mais recentes", value: "recentes" },
    { label: "Nome A-Z", value: "nome-az" },
    { label: "Nome Z-A", value: "nome-za" },
    { label: "Menor área", value: "menor-area" },
    { label: "Maior área", value: "maior-area" }
  ];
  const [selectedOrder, setSelectedOrder] = useState(orderList.find((o) => o.value === currentFilters.order) ?? orderList[0]);
  const statusList = [
    { label: "Em andamento", value: 0 },
    { label: "Pronto para construir", value: 1 }
  ];
  const typeList = [
    { label: "Comercial", value: 0 },
    { label: "Incorporação", value: 1 },
    { label: "Uso misto", value: 2 }
  ];
  const [filterOpen, setFilterOpen] = useState(false);
  const [filter, setFilter] = useState({
    status: statusList.find((s) => s.value === currentFilters.status) ?? null,
    state: states?.find((s) => s.value === currentFilters.state) ?? null,
    type: typeList.find((t) => t.value === currentFilters.type) ?? null
  });
  const firstRun = useRef(true);
  useDebouncedEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    const params = {
      order: selectedOrder?.value,
      state: filter.state?.value ?? "",
      status: filter.status?.value ?? "",
      type: filter.type?.value ?? ""
    };
    router.get("/empreendimentos", params, {
      preserveScroll: true,
      preserveState: true,
      replace: true,
      only: ["dados", "currentFilters"]
    });
  }, [selectedOrder, filter]);
  return /* @__PURE__ */ jsxs(Box, { className: "filter", children: [
    /* @__PURE__ */ jsx(Button, { className: "filtrar", onClick: () => setFilterOpen(!filterOpen), children: "Filtrar" }),
    /* @__PURE__ */ jsx(Box, { className: "order_content", children: /* @__PURE__ */ jsx(
      Autocomplete,
      {
        className: "order_filter",
        disablePortal: true,
        options: orderList,
        value: selectedOrder,
        size: "small",
        onChange: (e, v) => v && setSelectedOrder(v),
        isOptionEqualToValue: (o, v) => o.value === v.value,
        renderInput: (params) => /* @__PURE__ */ jsx(TextField, { ...params, label: "" })
      }
    ) }),
    /* @__PURE__ */ jsxs(Box, { className: "dropdown " + (filterOpen ? "open" : ""), children: [
      (filter.status || filter.state || filter.type) && /* @__PURE__ */ jsx(Button, { className: "clear", onClick: () => {
        setFilter({ status: null, state: null, type: null });
        setFilterOpen(false);
      }, children: "Limpar" }),
      /* @__PURE__ */ jsx(Box, { className: "item", children: /* @__PURE__ */ jsx(
        Autocomplete,
        {
          disablePortal: true,
          options: statusList,
          value: filter.status,
          size: "small",
          onChange: (e, v) => setFilter((f) => ({ ...f, status: v ?? null })),
          isOptionEqualToValue: (o, v) => o?.value === v?.value,
          renderInput: (p) => /* @__PURE__ */ jsx(TextField, { ...p, placeholder: "Andamento da obra", size: "small" })
        }
      ) }),
      /* @__PURE__ */ jsx(Box, { className: "item", children: /* @__PURE__ */ jsx(
        Autocomplete,
        {
          disablePortal: true,
          options: states,
          value: filter.state,
          size: "small",
          onChange: (e, v) => setFilter((f) => ({ ...f, state: v ?? null })),
          isOptionEqualToValue: (o, v) => o?.value === v?.value,
          renderInput: (p) => /* @__PURE__ */ jsx(TextField, { ...p, placeholder: "Estado", size: "small" })
        }
      ) }),
      /* @__PURE__ */ jsx(Box, { className: "item", children: /* @__PURE__ */ jsx(
        Autocomplete,
        {
          disablePortal: true,
          options: typeList,
          value: filter.type,
          size: "small",
          onChange: (e, v) => setFilter((f) => ({ ...f, type: v ?? null })),
          isOptionEqualToValue: (o, v) => o?.value === v?.value,
          renderInput: (p) => /* @__PURE__ */ jsx(TextField, { ...p, placeholder: "Tipo", size: "small" })
        }
      ) })
    ] })
  ] });
}
const __vite_glob_0_40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VenturesHeader
}, Symbol.toStringTag, { value: "Module" }));
function Ventures({ dados, construtoras, states, blog, currentFilters, seo }) {
  const title = seo?.meta_title || "Cipasa Urbanismo";
  const description = seo?.breve_descricao || "";
  const keywords = Array.isArray(seo?.keywords) ? seo.keywords.join(", ") : "";
  const robots = seo?.meta_robots || "index,follow";
  const ogImageUrl = seo?.og_image?.permalink || seo?.og_image?.url || seo?.og_image?.path;
  const canonical = seo?.canonical || seo?.url || null;
  const url = seo?.url || canonical || null;
  const [data, setData] = useState({
    ventures: dados.filter((v) => v.published === true) ?? [],
    construtoras: construtoras ?? []
  });
  useEffect(() => {
    setData({
      ventures: dados ?? [],
      construtoras: construtoras ?? []
    });
  }, [dados, construtoras]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { title, children: [
      /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
      keywords && /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: robots }),
      canonical && /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonical }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      url && /* @__PURE__ */ jsx("meta", { property: "og:url", content: url }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
      description && /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
      ogImageUrl && /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImageUrl }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
      description && /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
      ogImageUrl && /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImageUrl }),
      seo?.scripts && /* @__PURE__ */ jsx(
        "script",
        {
          dangerouslySetInnerHTML: { __html: seo.scripts?.code }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Box, { className: "container", children: [
      /* @__PURE__ */ jsx(
        VenturesHeader,
        {
          ventures: data.ventures,
          states,
          setData,
          currentFilters
        }
      ),
      /* @__PURE__ */ jsx(
        VenturesList,
        {
          ventures: data.ventures,
          construtoras: data.construtoras
        }
      ),
      /* @__PURE__ */ jsx(Blog$1, { blog })
    ] })
  ] });
}
Ventures.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
const __vite_glob_0_39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ventures
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/AboutUs/AboutUs.jsx": __vite_glob_0_0, "./Pages/AboutUs/components/AboutData/AboutData.jsx": __vite_glob_0_1, "./Pages/AboutUs/components/AboutHeader/AboutHeader.jsx": __vite_glob_0_2, "./Pages/AboutUs/components/AboutVentures/AboutVentures.jsx": __vite_glob_0_3, "./Pages/AboutUs/components/MissionVisionValues/MissionVisionValues.jsx": __vite_glob_0_4, "./Pages/AboutUs/components/Sustainability/Sustainability.jsx": __vite_glob_0_5, "./Pages/Blog/Blog.jsx": __vite_glob_0_6, "./Pages/Blog/components/BlogHeader/BlogHeader.jsx": __vite_glob_0_7, "./Pages/Blog/components/BlogList/BlogList.jsx": __vite_glob_0_8, "./Pages/Contact/Contact.jsx": __vite_glob_0_9, "./Pages/Contact/components/ContactForm/ContactForm.jsx": __vite_glob_0_10, "./Pages/Contact/components/ContactHeader/ContactHeader.jsx": __vite_glob_0_11, "./Pages/HaveLand/HaveLand.jsx": __vite_glob_0_12, "./Pages/HaveLand/ShowMap.jsx": __vite_glob_0_13, "./Pages/HaveLand/components/HaveLandForm/HaveLandForm.jsx": __vite_glob_0_14, "./Pages/HaveLand/components/HaveLandHeader/HaveLandHeader.jsx": __vite_glob_0_15, "./Pages/HaveLand/components/HowDoWeWork/HowDoWeWork.jsx": __vite_glob_0_16, "./Pages/Home/Home.jsx": __vite_glob_0_17, "./Pages/Home/components/BannerCarousel/BannerCarousel.jsx": __vite_glob_0_18, "./Pages/Home/components/Blog/Blog.jsx": __vite_glob_0_19, "./Pages/Home/components/ContactBanner/ContactBanner.jsx": __vite_glob_0_20, "./Pages/Home/components/Highlights/Highlights.jsx": __vite_glob_0_21, "./Pages/Home/components/InfoData/InfoData.jsx": __vite_glob_0_22, "./Pages/Home/components/Projects/Projects.jsx": __vite_glob_0_23, "./Pages/Home/components/ProjectsMap/ProjectsMap.jsx": __vite_glob_0_24, "./Pages/Home/components/Ventures/Ventures.jsx": __vite_glob_0_25, "./Pages/NotFound/NotFound.jsx": __vite_glob_0_26, "./Pages/RI/GeneralDocuments/GeneralDocuments.jsx": __vite_glob_0_27, "./Pages/RI/ModalLogin/ModalLogin.jsx": __vite_glob_0_28, "./Pages/RI/RI.jsx": __vite_glob_0_29, "./Pages/RI/RiHeader/RiHeader.jsx": __vite_glob_0_30, "./Pages/Venture/Venture.jsx": __vite_glob_0_31, "./Pages/Venture/components/VentureContact/VentureContact.jsx": __vite_glob_0_32, "./Pages/Venture/components/VentureDifferences/VentureDifferences.jsx": __vite_glob_0_33, "./Pages/Venture/components/VentureGalery/VentureGalery.jsx": __vite_glob_0_34, "./Pages/Venture/components/VentureHeader/VentureHeader.jsx": __vite_glob_0_35, "./Pages/Venture/components/VentureInfo/VentureInfo.jsx": __vite_glob_0_36, "./Pages/Venture/components/VentureMap/VentureMap.jsx": __vite_glob_0_37, "./Pages/Venture/components/VentureStatus/VentureStatus.jsx": __vite_glob_0_38, "./Pages/Ventures/Ventures.jsx": __vite_glob_0_39, "./Pages/Ventures/components/VenturesHeader/VenturesHeader.jsx": __vite_glob_0_40, "./Pages/Ventures/components/VenturesList/VenturesList.jsx": __vite_glob_0_41 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
