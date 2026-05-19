đây là notes cho bài github
git status : đang ở nhánh nào
git add . -> add nội dung mới
git commit -m "note noi dung thay doi" : commit file hên github
git push : push lên github sau khi commit
git merge <ten branch> : merge từ file đang đứng lên file muốn merge

checkout main : chuyển về nhánh main
git pull origin main : lấy source code mới nhất về từ main
checkout -b <ten nhanh>: tạo nhanh mới và khị đang đứng ở nhánh nào thì tạo nhánh mới y chang
vd: checkout -b team-main

git ignore 
xảy ra 2 TH với gitignore
1 file chưa từng commit -> thêm vào .gitignore là đủ
2. file đã commit/push -> thêm vào gitignore là chưa đủ phải dùng thêm git.rm -- cached hoặc git rm -r --cached
git check ignore <ten file>: check xem có bị ignore hay không

