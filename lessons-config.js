// 日语学习课程配置
// 添加新课程只需在此文件中添加新的课程对象

const lessonsData = [
    {
        day: 1,
        title: "平假名あ行+か行",
        description: "🔤 学习あいうえお、かきくけこ发音和书写<br>📖 词汇：数字1-10、基本问候语<br>📘 语法：名词+です（我是学生）<br>🎧 发音练习+跟读<br>✍️ 写5句自我介绍",
        available: true,
        url: "day1.html"
    },
    {
        day: 2,
        title: "平假名さ行+た行",
        description: "🔤 学习さしすせそ、たちつてと发音和书写<br>📖 词汇：家庭成员称呼（父母、兄弟姐妹）<br>📘 语法：です的否定形（不是学生）<br>🎧 假名歌曲+录音模仿<br>✍️ 写5句肯定/否定句",
        available: true,
        url: "day2.html"
    },
    {
        day: 3,
        title: "平假名な行+は行",
        description: "🔤 学习なにぬねの、はひふへほ发音和书写<br>📖 词汇：日常用品（桌子、椅子、书、笔）<br>📘 语法：これ/それ/あれ（这个/那个/那个）<br>🎯 物品识别+位置描述<br>✍️ 写5句物品介绍",
        available: true,
        url: "day3.html"
    },
    {
        day: 4,
        title: "敬请期待",
        description: "更多精彩的日语学习内容正在精心准备中...<br>💡 建议先完成Day 1-2的基础学习<br>🌸 循序渐进，享受学习过程",
        url: "#",
        available: false
    },
    {
        day: 5,
        title: "敬请期待",
        description: "更多精彩的日语学习内容正在精心准备中...<br>💡 建议先完成Day 1-2的基础学习<br>🌸 循序渐进，享受学习过程",
        url: "#",
        available: false
    },
    {
        day: 6,
        title: "敬请期待",
        description: "更多精彩的日语学习内容正在精心准备中...<br>💡 建议先完成Day 1-2的基础学习<br>🌸 循序渐进，享受学习过程",
        url: "#",
        available: false
    },
    {
        day: 7,
        title: "敬请期待",
        description: "更多精彩的日语学习内容正在精心准备中...<br>💡 建议先完成Day 1-2的基础学习<br>🌸 循序渐进，享受学习过程",
        url: "#",
        available: false
    },
    {
        day: 8,
        title: "敬请期待",
        description: "更多精彩的日语学习内容正在精心准备中...<br>💡 建议先完成Day 1-2的基础学习<br>🌸 循序渐进，享受学习过程",
        url: "#",
        available: false
    },
    {
        day: 9,
        title: "敬请期待",
        description: "更多精彩的日语学习内容正在精心准备中...<br>💡 建议先完成Day 1-2的基础学习<br>🌸 循序渐进，享受学习过程",
        url: "#",
        available: false
    },
    {
        day: 10,
        title: "敬请期待",
        description: "更多精彩的日语学习内容正在精心准备中...<br>💡 建议先完成Day 1-2的基础学习<br>🌸 循序渐进，享受学习过程",
        url: "#",
        available: false
    }
];

// 课程管理工具
const LessonManager = {
    // 获取所有课程
    getAllLessons() {
        return lessonsData;
    },

    // 获取当前可学习的课程
    getAvailableLessons() {
        return lessonsData.filter(lesson => lesson.available);
    }
};

// 导出供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lessonsData, LessonManager };
}