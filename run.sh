#git init
#git add .
#git commit -m 'initial commit'
#gh repo create pwatest --public --source=. --remote=origin --push

#####
#convert  128.png -resize 32x32 32.png
#convert  128.png -resize 192x192 192.png
#convert  128.png -resize 512x512 512.png

convert  ~/Downloads/image_f9a71258.jpg -resize 32x32 32.webp
convert  ~/Downloads/image_f9a71258.jpg -resize 128x128 128.webp
convert  ~/Downloads/image_f9a71258.jpg -resize 192x192 192.webp
convert  ~/Downloads/image_f9a71258.jpg -resize 512x512 512.webp

#convert 32.png 32.webp
#convert 128.png 128.webp
#convert 192.png 192.webp
#convert 512.png 512.webp

git add .
git commit -m 'app update'
git push


#sed -i 's|png|webp|g' sw.js index.html manifest.json  sw.js 
