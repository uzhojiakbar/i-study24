import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "../api/api";
import toast from "react-hot-toast";
// import { addToLS } from "./localstorageHook";
import { delCookie, getCookie, setCookie } from "./cookieHook";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const notify = (type = "ok", text) => {
  if (type === "ok") {
    toast.success(text || "Tayyor");
  } else if (type === "err") {
    toast.error(text || "Xato");
  } else if (type === "wait") {
    toast.loading(text || "Kuting...");
  }
};

export const useGetProfile = () => {
  const accessToken = getCookie("access"); // Cookie'dan access token olish
  return useQuery({
    queryKey: ["getProfile"],
    queryFn: async () => {
      // Agar username mavjud bo'lsa, so'rovni yuborish
      const response = await instance.get(`/account/profile/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Tokenni sarlavhaga qo'shish
        },
      });
      return response.data; // Axiosdan olingan javobdan ma'lumotni qaytarish
    },
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      console.log("Profil muvaffaqiyatli olindi.", data);
    },
    onError: (error) => {
      console.error("Profil olishda xatolik:", error);
      // Xatoliklarni ko'rsatish uchun zarur bo'lsa, toast qo'shishingiz mumkin
    },
  });
};

export const useSignUp = ({ setIsSuccess, setUsername, onSuccess }) => {
  const mutation = useMutation({
    mutationFn: (data) => instance.post("/account/register/", data),
    onSuccess: (data) => {
      setIsSuccess(true);
      setUsername(data?.data?.username);
      if (onSuccess) {
        notify("ok", "Yaxshi, Endi accountni tasdiqlang");
        onSuccess();
      }
    },
    onError: (error) => {
      console.log(error);
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        if (errorData.username) {
          if (
            errorData.username == "A user with that username already exists."
          ) {
            notify("err", `Username Oldin ishlatilgan`);
          } else {
            notify("err", `Username xatolik: ${errorData.username[0]}`);
          }
        } else if (errorData.email) {
          notify("err", `Email xatolik: ${errorData.email[0]}`);
        } else if (errorData.password) {
          notify("err", `Password xatolik: ${errorData.password[0]}`);
        } else {
          notify(
            "err",
            "Qandaydur xatolik. Iltimos keyinroq qayta urinib ko'ring."
          );
        }
      } else {
        notify(
          "err",
          "Qandaydur xatolik. Iltimos keyinroq qayta urinib ko'ring."
        );
      }
    },
  });

  return mutation;
};

export const useSignIn = (onSuccess, onError) => {
  return useMutation({
    mutationFn: (data) => instance.post("/account/login/", data), // API ga so'rov yuborish
    onSuccess: (data) => {
      const getUsername = JSON.parse(data?.config?.data);
      const username = getUsername?.username;

      setCookie("access", data?.data?.access);
      setCookie("login", true);
      setCookie("username", username);

      if (onSuccess) {
        toast.success("Hisobga kirdingiz"); // Muvaffaqiyatli xabar
        onSuccess(username); // Agar onSuccess berilgan bo'lsa, chaqiramiz
      }
    },
    onError: (error) => {
      console.log(error);
      if (onError) {
        onError(error); // Agar onError berilgan bo'lsa, chaqiramiz
      } else {
        toast.error(
          "Qandaydur xatolik. Iltimos keyinroq qayta urinib ko'ring."
        );
      }
    },
  });
};

export const useVerify = (onSuccess) => {
  const mutation = useMutation({
    mutationFn: (data) => instance.post("/account/verify/", data),
    onSuccess: (data) => {
      if (onSuccess) {
        const getUsername = JSON.parse(data?.config?.data);
        const username = getUsername?.username;

        setCookie("access", data?.data?.access);
        setCookie("login", true);
        setCookie("username", username);

        toast.success("Tasdiqlandi va Hisobga kirildi");
        onSuccess();
      }
    },
    onError: (error) => {
      console.log(error);
      toast.error("Verifikatsiya xato. Iltimos, qayta urinib ko'ring.");
    },
  });

  return mutation;
};

export const useLogOut = () => {
  const navigate = useNavigate(); // navigate hook dan foydalanamiz

  const logOut = () => {
    try {
      delCookie("access");
      delCookie("login");
      delCookie("sessionid");
      delCookie("username");
      delCookie("csrftoken");

      toast.success("Hisobdan muvaffaqiyatli chiqdingiz!");
      navigate("/");
    } catch (error) {
      toast.error("Chiqishda qandaydur xatolik yuz berdi.");
      console.log(error);
    }
  };

  return logOut; // logOut funksiyasini qaytaramiz
};

export const useGetGroup = () => {
  return useQuery({
    queryKey: ["getGroup"],
    queryFn: () => instance.get("/account/groupsatt/"),
    refetchOnWindowFocus: false,
    select: (data) => data?.data || [],
    onSuccess: () => {
      console.log("Guruhlar yuklandi");
    },
    onError: (error) => {
      notify("err", "Guruhlarni yuklashda xatolik yuzaga keldi.");
    },
  });
};

export const useGetGroupName = (id) => {
  return useQuery({
    queryKey: ["getGroupName"],
    queryFn: async () => {
      const response = await instance.get(`/account/groupsatt/${id}/`);
      return response.data;
    },
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      console.log("Guruh muvaffaqiyatli olindi.", data);
    },
    onError: (error) => {
      console.error("Guruh olishda xatolik:", error);
    },
  });
};
