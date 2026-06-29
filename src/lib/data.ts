import { Experience, Education, SkillCategory, ContactInfo, NavItem, Certification, Award, Project, PersonalInfo } from '@/types';

export const navItems: NavItem[] = [
  { id: 'about', label: '关于', href: '#about' },
  { id: 'experience', label: '实习经历', href: '#experience' },
  { id: 'education', label: '教育背景', href: '#education' },
  { id: 'skills', label: '技能证书', href: '#skills' },
  { id: 'contact', label: '联系方式', href: '#contact' },
];

export const experiences: Experience[] = [
  {
    id: 'bilibili',
    company: '哔哩哔哩',
    role: '商业化财务实习生（效果广告）',
    period: '2026.05 – 2026.07',
    location: '上海',
    description: '负责商业化效果广告相关财务工作，包括对账、数据整理、月结支持及审计协助。',
    responsibilities: [
      '负责商业化效果广告赔付业务对账，核对业务数据、银行流水及合同信息，保障结算初步准确',
      '负责返货、返现业务的数据整理及合同台账维护，支持月结及收入确认',
      '梳理历史凭证异常并推动修正，提高后续自动化入账准确率',
      '完成统计报表数据整理、发票查验、水单匹配',
      '协助外部审计，整理UP主信息、凭证及相关审计资料',
      '持续完善SOP，提升资料整理效率',
    ],
    achievements: [
      '保障效果广告赔付结算初步准确性，零重大差错',
      '推动历史凭证异常修正，提升自动化入账准确率',
      '完善SOP文档，优化资料整理流程',
    ],
    skills: ['对账', '数据整理', '月结支持', '审计协助', 'SOP优化'],
  },
  {
    id: 'godiva',
    company: 'Godiva',
    role: '财务部 AP & Sourcing 实习生',
    period: '2024.09 – 2025.03',
    location: '上海',
    description: '负责应付账款及供应商管理相关工作，独立对接新供应商并优化SOP流程。',
    responsibilities: [
      '审核付款申请及付款资料，汇总付款计划并协助付款执行',
      '独立对接新供应商，完成资质审核、建档及审批流程跟进',
      '维护供应商信息并持续优化SOP，提高沟通及建档效率',
    ],
    achievements: [
      '独立完成新供应商资质审核与建档，零差错',
      '优化SOP流程，提升供应商沟通及建档效率',
    ],
    skills: ['应付账款', '供应商管理', '付款审核', 'SOP优化', '资质审核'],
  },
  {
    id: '51job',
    company: '前程无忧 51job',
    role: '财务共享中心 财务助理',
    period: '2024.03 – 2024.08',
    location: '上海',
    description: '负责应收账款核对、费用审核及财务系统数据验证等工作。',
    responsibilities: [
      '负责应收账款核对及回款确认工作',
      '负责华为外包业务费用审核、费用核对及数据清理',
      '参与财务系统数据验证、报销支持及SOP流程建立',
    ],
    achievements: [
      '完成应收账款核对及回款确认，确保账务准确',
      '参与SOP流程建立，提升工作规范性',
    ],
    skills: ['应收账款', '费用审核', '数据清理', '系统验证', 'SOP建立'],
  },
  {
    id: 'ey',
    company: '安永华明会计师事务所',
    role: '税务咨询实习生',
    period: '2023.07 – 2023.08',
    location: '上海',
    description: '协助税务资料整理、凭证审核及项目支持工作。',
    responsibilities: [
      '协助税务资料整理、税务凭证审核、税务自检及项目支持',
    ],
    achievements: [
      '高效完成税务资料整理及凭证审核工作',
      '获得项目团队认可与好评',
    ],
    skills: ['税务咨询', '资料整理', '凭证审核', '项目支持'],
  },
];

export const education: Education[] = [
  {
    id: 'university',
    institution: '上海对外经贸大学',
    degree: '本科',
    major: '审计学（注册会计师方向）',
    period: '2022 – 2026',
    description: '系统学习审计、会计、财务管理专业知识，具备扎实的理论基础和实务能力。',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: '财务能力',
    skills: ['对账核算', '应收应付', '费用审核', '月结支持', '财务分析', '审计支持'],
  },
  {
    name: '数据分析',
    skills: ['Excel 高级应用', '数据整理', '数据核对', '异常排查', '多源数据整合'],
  },
  {
    name: '办公软件',
    skills: ['Excel', 'Word', 'PowerPoint', 'VLOOKUP', '数据透视表'],
  },
  {
    name: '通用能力',
    skills: ['跨部门沟通', '流程梳理', 'SOP建立', '学习能力强', '责任心强', '团队协作'],
  },
  {
    name: '语言能力',
    skills: ['CET-4: 624', 'CET-6: 550', '英语读写流利'],
  },
];

export const certifications: Certification[] = [
  { name: '初级会计专业技术资格', issuer: '财政部', date: '已获得' },
  { name: 'CPA 注册会计师方向', issuer: '专业学习中', date: '在读' },
];

export const awards: Award[] = [
  { title: '校级奖学金', description: '平均成绩专业前10%', period: '' },
  { title: '上海市"知行杯"二等奖', description: '"阡陌少年行"项目核心成员', period: '' },
  { title: '校级特等奖', description: '"阡陌少年行"暑期社会实践项目', period: '' },
];

export const projects: Project[] = [
  {
    name: '阡陌少年行',
    role: '核心成员',
    description: '入选中国青年报第八届暑期社会实践TOP100项目展示资格，获上海市"知行杯"二等奖、校特等奖。',
    skills: ['项目管理', '团队协作', '社会实践'],
  },
];

export const contactInfo: ContactInfo = {
  email: 'Fayerling@foxmail.com',
  phone: '+86 18721594237',
  github: '',
  linkedin: '',
};

export const personalInfo: PersonalInfo = {
  name: '凌梓菲',
  title: '财务 / 商业财务 / AP&AR',
  valueProposition: '拥有互联网、外企、四大会计师事务所及财务共享中心实习经历，擅长数据整理核对、流程梳理优化，具备良好的跨部门沟通及执行能力。',
  shortBio: '上海对外经贸大学审计学（注册会计师方向）2026届毕业生。拥有互联网、外企、四大会计师事务所及财务共享中心多场景实习经历，熟悉商业化财务、应收应付及供应商管理流程。擅长Excel数据整理与分析，具备流程梳理及SOP优化能力，责任心强、学习能力强。',
  target: '求职方向：财务 / 商业财务 / AP&AR',
};