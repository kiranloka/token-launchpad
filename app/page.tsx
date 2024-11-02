"use client";

import { TextField, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { Orbitron } from "next/font/google"; // Importing Orbitron font

// Apply the imported font style
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

export default function Home() {
  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <div className="flex flex-col items-center py-10">
        <h1 className={`text-5xl ${orbitronFont.className} font-semibold`}>
          Solana Token Creator
        </h1>
        <p className="text-xl text-slate-400 mt-2">
          Create your custom token without any hassle of coding!
        </p>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center flex-grow">
        {/* Form Box with Subtle Gradient Shadow */}
        <div className="bg-gray-800 p-10 rounded-lg shadow-lg relative w-[500px] max-w-full">
          {/* Subtle Gradient Shadow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 opacity-50 blur-lg rounded-lg"></div>
          <div className="relative z-10">
            {/* Name and Symbol Fields */}
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

            {/* Decimals and Supply Fields */}
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

            {/* File Upload Button */}
            <div className="flex justify-center mb-4">
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                color="primary"
                className="bg-blue-600 text-white"
              >
                Upload files
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => console.log(event.target.files)}
                  multiple
                />
              </Button>
            </div>

            {/* Description Field */}
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

            {/* Create Token Button */}
            <div className="flex justify-center">
              <Button
                variant="contained"
                color="primary"
                className="bg-green-600 text-white"
                onClick={() => console.log("Create Token")}
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
