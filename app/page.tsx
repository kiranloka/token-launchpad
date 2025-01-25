"use client";

import { useState } from "react";
import { TextField, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled } from "@mui/material/styles";
import { Orbitron } from "next/font/google";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const orbitronFont = Orbitron({
  subsets: ["latin"],
  weight: "600",
});

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const handleSubmit=async()=>{
  const inputElement=document.querySelector('input[type="file"]') as HTMLInputElement;
  if(!inputElement?.files?.length){
    alert("please upload a file!");
    return;
  }

  const formData=new FormData();
  formData.append("name",(document.getElementById("outlined-name") as HTMLInputElement).value);
       formData.append("symbol",(document.getElementById("outlined-symbol") as HTMLInputElement).value);
 formData.append("decimal",(document.getElementById("outlined-decimal") as HTMLInputElement).value);
 formData.append("supply",(document.getElementById("outlined-supply") as HTMLInputElement).value);
 formData.append("description",(document.getElementById("outlined-description") as HTMLInputElement).value);
 formData.append("file",inputElement.files[0]);
    try{
    const response=await fetch("/api/route",{
    method:"POST",
      body:formData
    });
    const data=await response.json();
    console.log("Uploaded response: ",data);

    }catch(error){
    console.log("Error: ",error);
    }
}

export default function Home() {
  const [filesUploaded, setFilesUploaded] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFilesUploaded(true);
    } else {
      setFilesUploaded(false);
    }
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      <div className="flex flex-col items-center py-10">
        <h1 className={`text-5xl ${orbitronFont.className} font-semibold`}>
          Solana Token Creator
        </h1>
        <p className="text-xl text-slate-400 mt-2">
          Create your custom token without any hassle of coding!
        </p>
      </div>

      <WalletMultiButton style={{}} />
      <div className="flex justify-center items-center flex-grow">
        <div className="bg-gray-800 p-10 rounded-lg shadow-lg relative w-[500px] max-w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 opacity-50 blur-lg rounded-lg"></div>
          <div className="relative z-10">
            <div className="flex gap-4 mb-4">
              <TextField
                id="outlined-name"
                label="Name"
                variant="outlined"
                InputProps={{
                  style: { color: "white" },
                }}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
              <TextField
                id="outlined-symbol"
                label="Symbol"
                variant="outlined"
                InputProps={{
                  style: { color: "white" },
                }}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            </div>

            <div className="flex gap-4 mb-4">
              <TextField
                id="outlined-decimals"
                label="Decimals"
                variant="outlined"
                InputProps={{
                  style: { color: "white" },
                }}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
              <TextField
                id="outlined-supply"
                label="Supply"
                variant="outlined"
                InputProps={{
                  style: { color: "white" },
                }}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            </div>

            <div className="flex justify-center mb-4">
              <Button
                component="label"
                variant="contained"
                startIcon={
                  filesUploaded ? <CheckCircleIcon /> : <CloudUploadIcon />
                }
                color={filesUploaded ? "success" : "primary"}
                className={
                  filesUploaded
                    ? "bg-green-600 text-white"
                    : "bg-blue-600 text-white"
                }
              >
                {filesUploaded ? "Files Uploaded" : "Upload Files"}
                <VisuallyHiddenInput
                  type="file"
                  onChange={handleFileUpload}
                  multiple
                />
              </Button>
            </div>

            {/* Description and Create Token Button */}
            <TextField
              id="outlined-description"
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              InputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
              }}
              className="mb-4"
            />

            <div className="flex justify-center">
              <Button
                variant="contained"
                color="primary"
                className="bg-green-600 text-white"
                onClick={() =>{handleSubmit} 
              >
                Create Token
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
