"use client";

import React from "react";
import { Dialog, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

import { BsFileEarmarkPlus } from "react-icons/bs";

import { ImSpinner2 } from "react-icons/im";
import { DialogContent, DialogDescription } from "@radix-ui/react-dialog";
function CreateFormBtn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create new form</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create form</DialogTitle>
          <DialogDescription>
            Create a new form to start collecting responses
          </DialogDescription>
        </DialogHeader>
        <div className="flex "></div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFormBtn;
