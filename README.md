# Display-Image_PS
Tool to display images in powershell terminal

## Warnings

**This is primarily for windows! "Powershell / PS"**

**This also ONLY works with .png files! *I think...***

**Also this is my personal project for me, there are some issues and I MIGHT fix them eventually.**

## Description / Help

You can put the Display-Image folder into here: `C:\Program Files\WindowsPowerShell\Modules` it needs admin permissions btw.
I probably won't ever be trying to put this on any official (repos/databases?) for Get-Module. I'm not even too sure on how that works, but anyways...

<hr>

`Display-Image` will give you a random .png from the current folder you are in.

    $Names = Get-ChildItem -Filter "*.png" -Name;
    $Rand = Get-Random -Minimum 0 -Maximum $Names.Length;
    $Name = $Names[$Rand];
  
`Display-Image -Path "a\b\c\image.png"` will give you the chosen image, the same as `Display-Image -Path "a\b\c" -Name "image.png"`
If you inclue just the path, or a path to *for example* .mp3 file it'll fail.

`Display-Image -name "image.png"` will try to grab `image.png` from your current directory `$pwd`

## FAQ

Q: color? F: no.
