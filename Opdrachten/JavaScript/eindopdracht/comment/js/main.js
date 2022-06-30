class Comment {
    constructor(msg, username) {
        const commentId = document.querySelectorAll('[data-comment-id]').length + 1;
        const commentSection = document.querySelector('[data-comment-section]');
        console.log(commentId);

        this.comment = document.createElement('div');
        this.comment.classList.add('comment')
        this.comment.setAttribute('id', commentId);

        this.commentUser = document.createElement('div');
        this.commentUser.classList.add('commentUser');
        this.comment.appendChild(this.commentUser);

        this.commentUserAvatar = document.createElement('span');
        this.commentUserAvatar.classList.add('commentUserAvatar');
        this.commentUser.appendChild(this.commentUserAvatar);

        this.avatar = document.createElement('img');
        this.avatar.src = 'img/054.png';
        this.commentUser.appendChild(this.avatar);

        this.commentUserName = document.createElement('span');
        this.commentUserName.classList.add('commentUsername');
        this.commentUserName.dataset.userName = '';
        this.commentUserName.textContent = username;
        this.commentUser.appendChild(this.commentUserName);

        this.commentUserMsgId = document.createElement('span');
        this.commentUserMsgId.classList.add('commentUsername');
        this.commentUserMsgId.dataset.userName = '';
        this.commentUserMsgId.textContent = '#' + commentId;
        this.commentUser.appendChild(this.commentUserMsgId);

        this.commentMsg = document.createElement('div');
        this.commentMsg.classList.add('commentMsg');
        this.comment.appendChild(this.commentMsg);

        this.commentReplyLink = document.createElement('span');
        this.commentReplyLink.classList.add('commentReplyLink');
        this.commentReplyLink.dataset.replyLink = '';
        this.commentReplyLink.textContent = 'Replying to ' + commentId; 
        this.commentMsg.appendChild(this.commentReplyLink);

        this.commentMsgContent = document.createElement('span');
        this.commentMsgContent.classList.add('commentMsgContent');
        this.commentMsgContent.textContent = msg;
        this.commentMsg.appendChild(this.commentMsgContent);

        this.commentReplyBtn = document.createElement('span');
        this.commentReplyBtn.classList.add('commentReplyBtn');
        this.commentMsg.appendChild(this.commentReplyBtn);

        this.replyBtn = document.createElement('button');
        this.replyBtn.setAttribute('id', 'btn' + commentId);
        this.replyBtn.classList.add('replyBtn');
        this.replyBtn.dataset.replyButton = '';
        this.replyBtn.textContent = 'Reply';
        this.commentReplyBtn.appendChild(this.replyBtn);

        commentSection.appendChild(this.comment);
        createReplyBtn();
    }
}
const submitBtn = document.querySelector('[data-submit]');

submitBtn.addEventListener('click', () => {
    const msg = document.getElementById('replyMsg').value;
    const userName = document.getElementById('username').value;

    new Comment(msg, userName);

})

function createReplyLink(id) {
    const userId = id;
    const replyLink = document.querySelector('[data-reply-to]');
    const commentDraft = document.querySelector('[data-comment-draft]');

    const cancelReplyBtn = document.createElement('button');
    cancelReplyBtn.dataset.cancelButton = '';
    cancelReplyBtn.classList.add('cancelReply');
    cancelReplyBtn.textContent = 'X';

    replyLink.textContent = `Replying to ${userId}`;
    replyLink.appendChild(cancelReplyBtn);

    commentDraft.prepend(replyLink);


    const cancelReply = document.querySelector('[data-cancel-button]');

    cancelReply.addEventListener('click', () => {
        const replyLink = document.querySelector('[data-reply-to]');
        const commentDraft = document.querySelector('[data-comment-draft]');

        replyLink.textContent = '';
        commentDraft.prepend(replyLink);
    })
    
}

function createReplyBtn() {
    const replyBtn = document.querySelectorAll('[data-reply-button]');
    replyBtn.forEach(button => {
        button.addEventListener('click', (e) => {
            createReplyLink(e.target.id);
        })
    })
}

createReplyBtn();