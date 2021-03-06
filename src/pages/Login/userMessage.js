export const RESPONSE_OBJECT = {
  initial: {
    title: '안녕하세요',
    paragraph: '로그인 및 회원가입을 위한 이메일 주소를 입력 부탁드립니다.',
    inputs: [
      {
        type: 'email',
        name: 'email',
        placeholder: '이메일 주소',
      },
    ],
    btnContent: '계속',
  },
  SIGNUP: {
    title: '푀세아에 오신 것을 환영합니다.',
    paragraph: '회원가입을 위해 아래 세부 정보를 작성해주세요.',
    inputs: [
      {
        type: 'email',
        name: 'email',
        placeholder: '이메일 주소',
      },
      {
        type: 'password',
        name: 'password',
        placeholder: '패스워드',
      },
      {
        type: 'password',
        name: 'passwordCheck',
        placeholder: '패스워드 확인',
      },
      {
        type: 'text',
        name: 'lastName',
        placeholder: '성',
      },
      {
        type: 'text',
        name: 'firstName',
        placeholder: '이름',
      },
    ],
    btnContent: '가입',
    checkBoxes: [
      {
        type: 'checkBox',
        className: 'checkBox',
        name: 'checkBox',
        id: 'checkBox',
      },
      {
        type: 'checkBox',
        className: 'checkBox',
        name: 'checkBoxTwo',
        id: 'checkBoxTwo',
      },
    ],
  },
  LOGIN: {
    title: '푀세아에 다시 오신 것을 환영합니다.',
    paragraph: '패스워드를 입력해주세요.',
    inputs: [
      {
        type: 'email',
        name: 'email',
        placeholder: '이메일 주소',
      },
      {
        type: 'password',
        name: 'password',
        placeholder: '패스워드',
      },
    ],
    btnContent: '로그인',
  },
  SIGNUP_SUCCESS: {
    title: '감사합니다. ',
    paragraph: '사용자의 계정이 생성되었습니다.',
  },
};

export const SIGNUP_MESSAGE = {
  invalidEmail: '올바른 형식의 이메일을 입력해주세요.',
  invalidPassword: '비밀번호는 특수문자를 포함해 여덟 글자 이상이어야 합니다.',
  samePassword: '이전에 사용했던 패스워드를 입력하세요.',
  fullInput: '입력조건을 다 채워주세요.',
  invalidCheckBox: '체크박스를 체크해주세요.',
};
