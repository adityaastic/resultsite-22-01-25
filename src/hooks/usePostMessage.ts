import { useMutation } from "@tanstack/react-query";
import apiClient from "../constants/api-client";

const usePostMessage = () => {
  return useMutation({
    mutationKey: ["Send Message"],
    mutationFn: (info) =>
      apiClient.post("send-message/", info).then((res) => res.data),
  });
};

export default usePostMessage;
