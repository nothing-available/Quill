"use client"

import {useState} from "react"
import {Dialog, DialogContent, DialogTrigger} from "./ui/dialog"
import {Button} from "./ui/button"

export const UploadButton = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog
            open={isOpen}
            onOpenChange={v => {
                if (!v) setIsOpen(v)
            }}
        >
            <DialogTrigger
                onClick={() => setIsOpen(true)}
                asChild
            >
                <Button
                    disabled={isOpen}
                    aria-disabled={isOpen}
                >
                    Upload PDF
                </Button>
            </DialogTrigger>{" "}
            <DialogContent></DialogContent>
        </Dialog>
    )
}
