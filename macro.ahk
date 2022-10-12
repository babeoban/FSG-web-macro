#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
; v1.0
; Made by canhvjp
SetKeyDelay, 80
IfNotExist, fsg_tokens
    FileCreateDir, fsg_tokens
Function()
{
if WinExist("Minecraft")
	{
    fsg_seed_token := clipboard
    timestamp := A_NowUTC
    fsg_seed_token_array := StrSplit(fsg_seed_token, ["Seed", "Temp Token"]) 
    fsg_seed_array := StrSplit(fsg_seed_token_array[2], A_Space)
    fsg_seed := Trim(fsg_seed_array[2])
	clipboard := fsg_seed
	WinActivate, Minecraft
	Sleep, 70
    Send, `t
    Send, {enter}
    Send, `t
    Send, `t
    Send, `t
    Send, {enter}
    Send, ^a
    Send, ^v
    Send, `t
    Send, `t
    Send, {enter}
    Send, {enter}
    Send, {enter}
    Send, `t
    Send, `t
    Send, `t
    Send, `t
    Send, {enter}
    Send, `t
    Send, `t
    Send, `t
    Send, ^v
    Send, `t
    Send, `t
    Send, `t
    Send, `t
    Send, `t
    Send, {enter}
    Send, `t
    Send, {enter}
	if FileExist("fsg_seed_token.txt"){
            FileMoveDir, fsg_seed_token.txt, fsg_tokens\fsg_seed_token_%A_NowUTC%.txt, R
        }
	FileAppend, %fsg_seed_token%, fsg_seed_token.txt
}
else
	{
	Msgbox, Launch Minecraft and run script again
	Exitapp
	}
}
ExitWorld()
{
    ControlSend,, {Esc}{Shift}+{Tab}{Enter}, Minecraft
}
C:: Function()
