message=$1
if [ $# -eq 0 ]
  then
    message="Added new code snippet"
fi

echo $message

#git add .

#git commit -m 

#git push

function syncm ()
{
    message=$1
    if [ $# -eq 0 ]
    then
        message="Added new code snippet"
    fi
    git add .
    git commit -m $message
    git push
}