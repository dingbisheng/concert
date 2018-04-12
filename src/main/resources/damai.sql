/*
Navicat MySQL Data Transfer

Source Server         : hlh
Source Server Version : 50716
Source Host           : 127.0.0.1:3306
Source Database       : damai

Target Server Type    : MYSQL
Target Server Version : 50716
File Encoding         : 65001

Date: 2018-04-12 09:19:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for dm_assortment
-- ----------------------------
DROP TABLE IF EXISTS `dm_assortment`;
CREATE TABLE `dm_assortment` (
  `sort_id` int(11) NOT NULL AUTO_INCREMENT,
  `sort_name` varchar(20) NOT NULL,
  PRIMARY KEY (`sort_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dm_assortment
-- ----------------------------
INSERT INTO `dm_assortment` VALUES ('1', '话剧歌剧');
INSERT INTO `dm_assortment` VALUES ('2', '音乐会');
INSERT INTO `dm_assortment` VALUES ('3', '演唱会');
INSERT INTO `dm_assortment` VALUES ('4', '曲苑杂坛');
INSERT INTO `dm_assortment` VALUES ('5', '舞蹈芭蕾');
INSERT INTO `dm_assortment` VALUES ('6', '度假休闲');
INSERT INTO `dm_assortment` VALUES ('7', '体育比赛');

-- ----------------------------
-- Table structure for dm_city
-- ----------------------------
DROP TABLE IF EXISTS `dm_city`;
CREATE TABLE `dm_city` (
  `city_id` int(11) NOT NULL AUTO_INCREMENT,
  `city_name` varchar(20) NOT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dm_city
-- ----------------------------
INSERT INTO `dm_city` VALUES ('1', '北京');
INSERT INTO `dm_city` VALUES ('2', '武汉');
INSERT INTO `dm_city` VALUES ('3', '南京');
INSERT INTO `dm_city` VALUES ('4', '上海');
INSERT INTO `dm_city` VALUES ('5', '深圳');
INSERT INTO `dm_city` VALUES ('6', '天津');
INSERT INTO `dm_city` VALUES ('7', '广州');
INSERT INTO `dm_city` VALUES ('8', '成都');
INSERT INTO `dm_city` VALUES ('9', '重庆');
INSERT INTO `dm_city` VALUES ('10', '杭州');

-- ----------------------------
-- Table structure for dm_detail
-- ----------------------------
DROP TABLE IF EXISTS `dm_detail`;
CREATE TABLE `dm_detail` (
  `detail_id` int(11) NOT NULL AUTO_INCREMENT,
  `detail_name` varchar(5) DEFAULT NULL,
  `detail_colour` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`detail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dm_detail
-- ----------------------------
INSERT INTO `dm_detail` VALUES ('1', 'A', 'red');
INSERT INTO `dm_detail` VALUES ('2', 'B', 'yellow');
INSERT INTO `dm_detail` VALUES ('3', 'C', 'blue');
INSERT INTO `dm_detail` VALUES ('4', 'D', 'green');

-- ----------------------------
-- Table structure for dm_det_seat
-- ----------------------------
DROP TABLE IF EXISTS `dm_det_seat`;
CREATE TABLE `dm_det_seat` (
  `ds_id` int(11) NOT NULL AUTO_INCREMENT,
  `ds_detail_id` int(11) DEFAULT NULL,
  `ds_his_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`ds_id`),
  KEY `ds_his_id` (`ds_his_id`),
  KEY `ds_detail_id` (`ds_detail_id`),
  CONSTRAINT `dm_det_seat_ibfk_1` FOREIGN KEY (`ds_his_id`) REFERENCES `dm_history` (`his_id`),
  CONSTRAINT `dm_det_seat_ibfk_2` FOREIGN KEY (`ds_detail_id`) REFERENCES `dm_detail` (`detail_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dm_det_seat
-- ----------------------------

-- ----------------------------
-- Table structure for dm_history
-- ----------------------------
DROP TABLE IF EXISTS `dm_history`;
CREATE TABLE `dm_history` (
  `his_id` int(11) NOT NULL AUTO_INCREMENT,
  `his_seat_id` int(11) DEFAULT NULL,
  `his_state` int(11) DEFAULT NULL,
  PRIMARY KEY (`his_id`),
  KEY `his_seat_id` (`his_seat_id`),
  CONSTRAINT `dm_history_ibfk_1` FOREIGN KEY (`his_seat_id`) REFERENCES `dm_seat` (`seat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dm_history
-- ----------------------------

-- ----------------------------
-- Table structure for dm_message
-- ----------------------------
DROP TABLE IF EXISTS `dm_message`;
CREATE TABLE `dm_message` (
  `mes_id` int(11) NOT NULL AUTO_INCREMENT,
  `mes_name` varchar(50) NOT NULL,
  `mes_time` datetime DEFAULT NULL,
  `mes_photo` varchar(200) DEFAULT NULL,
  `mes_explain` varchar(200) DEFAULT NULL,
  `mes_place_id` int(11) DEFAULT NULL,
  `mes_sub_id` int(11) DEFAULT NULL,
  `mes_city_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`mes_id`),
  KEY `mes_place_id` (`mes_place_id`),
  KEY `mes_sub_id` (`mes_sub_id`),
  KEY `mes_city_id` (`mes_city_id`),
  CONSTRAINT `dm_message_ibfk_1` FOREIGN KEY (`mes_place_id`) REFERENCES `dm_place` (`place_id`),
  CONSTRAINT `dm_message_ibfk_2` FOREIGN KEY (`mes_sub_id`) REFERENCES `dm_subclass` (`sub_id`),
  CONSTRAINT `dm_message_ibfk_3` FOREIGN KEY (`mes_city_id`) REFERENCES `dm_city` (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dm_message
-- ----------------------------
INSERT INTO `dm_message` VALUES ('1', '杂技小丑秀《疯狂兄弟》', '2018-05-19 09:00:00', '147865_n.jpg', '杂技小丑秀《疯狂兄弟》', '1', '1', '1');
INSERT INTO `dm_message` VALUES ('2', '国家艺术基金资助项目展演 提线木偶戏《火焰山》', '2018-05-03 09:00:00', '147848_n.jpg', '本剧根据中国古典名著《西游记》改编。', '2', '1', '1');
INSERT INTO `dm_message` VALUES ('3', '大型经典神话舞台剧《 精卫传奇》（6月）', '2018-06-24 14:30:00', '147819_n.jpg', '将原本浓烈悲壮的传说演绎成勇敢坚毅的励志故事。', '3', '1', '1');
INSERT INTO `dm_message` VALUES ('4', '大型卡通舞台剧《新大头儿子和小头爸爸》第三部《棉花糖和云朵妈妈》(6月）', '2018-06-17 09:00:00', '147796_n.jpg', '通过棉花糖的成长经历，鼓励小朋友们要勇敢，勇于表达自己的心声，坚持梦想。', '3', '1', '1');
INSERT INTO `dm_message` VALUES ('5', '国家大剧院歌剧节·2018：国家大剧院原创中国史诗歌剧《长征》', '2018-06-28 09:00:00', '147191_n.jpg', '1936年，中国共产党领导中国工农红军完成了举世瞩目的长征。', '5', '2', '1');
INSERT INTO `dm_message` VALUES ('6', '国家大剧院歌剧节·2018：国家大剧院新制作夏尔·古诺歌剧《罗密欧与朱丽叶》', '2018-07-18 08:00:00', '146229_n.jpg', '五幕歌剧《罗密欧与朱丽叶》是法国浪漫主义时期歌剧的杰出代表古诺的代表作', '5', '2', '1');
INSERT INTO `dm_message` VALUES ('7', '赵梁“东方灵欲”三部曲——《双下山》', '2018-04-14 08:00:00', '147358_n.jpg', '《双下山》的精妙之处恰恰在于以这样一个开放式的结尾为观者掀起了另一层帷幕，令人意犹未尽……', '2', '3', '1');

-- ----------------------------
-- Table structure for dm_mes_det
-- ----------------------------
DROP TABLE IF EXISTS `dm_mes_det`;
CREATE TABLE `dm_mes_det` (
  `md_id` int(11) NOT NULL AUTO_INCREMENT,
  `md_price` int(11) DEFAULT NULL,
  `md_mes_id` int(11) DEFAULT NULL,
  `md_detail_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`md_id`),
  KEY `md_mes_id` (`md_mes_id`),
  KEY `md_detail_id` (`md_detail_id`),
  CONSTRAINT `dm_mes_det_ibfk_1` FOREIGN KEY (`md_mes_id`) REFERENCES `dm_message` (`mes_id`),
  CONSTRAINT `dm_mes_det_ibfk_2` FOREIGN KEY (`md_detail_id`) REFERENCES `dm_detail` (`detail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dm_mes_det
-- ----------------------------
INSERT INTO `dm_mes_det` VALUES ('1', '400', '1', '1');
INSERT INTO `dm_mes_det` VALUES ('2', '300', '1', '2');
INSERT INTO `dm_mes_det` VALUES ('3', '200', '1', '3');
INSERT INTO `dm_mes_det` VALUES ('4', '100', '1', '4');
INSERT INTO `dm_mes_det` VALUES ('5', '500', '2', '1');
INSERT INTO `dm_mes_det` VALUES ('6', '400', '2', '2');
INSERT INTO `dm_mes_det` VALUES ('7', '300', '2', '3');
INSERT INTO `dm_mes_det` VALUES ('8', '200', '2', '4');

-- ----------------------------
-- Table structure for dm_place
-- ----------------------------
DROP TABLE IF EXISTS `dm_place`;
CREATE TABLE `dm_place` (
  `place_id` int(11) NOT NULL AUTO_INCREMENT,
  `place_name` varchar(20) NOT NULL,
  `place_photo` varchar(200) DEFAULT NULL,
  `place_explain` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`place_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dm_place
-- ----------------------------
INSERT INTO `dm_place` VALUES ('1', '隆福剧场', null, null);
INSERT INTO `dm_place` VALUES ('2', '天桥艺术中心-中剧场 ', null, null);
INSERT INTO `dm_place` VALUES ('3', '中国木偶剧院-大剧场 ', null, null);
INSERT INTO `dm_place` VALUES ('4', 'A33剧场', null, null);
INSERT INTO `dm_place` VALUES ('5', '国家大剧院-歌剧院', null, null);

-- ----------------------------
-- Table structure for dm_seat
-- ----------------------------
DROP TABLE IF EXISTS `dm_seat`;
CREATE TABLE `dm_seat` (
  `seat_id` int(11) NOT NULL AUTO_INCREMENT,
  `seat_row` int(11) DEFAULT NULL,
  `seat_col` int(11) DEFAULT NULL,
  `seat_place_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`seat_id`),
  KEY `seat_place_id` (`seat_place_id`),
  CONSTRAINT `dm_seat_ibfk_1` FOREIGN KEY (`seat_place_id`) REFERENCES `dm_place` (`place_id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dm_seat
-- ----------------------------
INSERT INTO `dm_seat` VALUES ('1', '1', '1', '1');
INSERT INTO `dm_seat` VALUES ('2', '1', '2', '1');
INSERT INTO `dm_seat` VALUES ('3', '1', '3', '1');
INSERT INTO `dm_seat` VALUES ('4', '1', '4', '1');
INSERT INTO `dm_seat` VALUES ('5', '1', '5', '1');
INSERT INTO `dm_seat` VALUES ('6', '1', '6', '1');
INSERT INTO `dm_seat` VALUES ('7', '1', '7', '1');
INSERT INTO `dm_seat` VALUES ('8', '1', '8', '1');
INSERT INTO `dm_seat` VALUES ('9', '1', '9', '1');
INSERT INTO `dm_seat` VALUES ('10', '1', '10', '1');
INSERT INTO `dm_seat` VALUES ('11', '2', '1', '1');
INSERT INTO `dm_seat` VALUES ('12', '2', '2', '1');
INSERT INTO `dm_seat` VALUES ('13', '2', '3', '1');
INSERT INTO `dm_seat` VALUES ('14', '2', '4', '1');
INSERT INTO `dm_seat` VALUES ('15', '2', '5', '1');
INSERT INTO `dm_seat` VALUES ('16', '2', '6', '1');
INSERT INTO `dm_seat` VALUES ('17', '2', '7', '1');
INSERT INTO `dm_seat` VALUES ('18', '2', '8', '1');
INSERT INTO `dm_seat` VALUES ('19', '2', '9', '1');
INSERT INTO `dm_seat` VALUES ('20', '2', '10', '1');
INSERT INTO `dm_seat` VALUES ('21', '3', '1', '1');
INSERT INTO `dm_seat` VALUES ('22', '3', '2', '1');
INSERT INTO `dm_seat` VALUES ('23', '3', '3', '1');
INSERT INTO `dm_seat` VALUES ('24', '3', '4', '1');
INSERT INTO `dm_seat` VALUES ('25', '3', '5', '1');
INSERT INTO `dm_seat` VALUES ('26', '3', '6', '1');
INSERT INTO `dm_seat` VALUES ('27', '3', '7', '1');
INSERT INTO `dm_seat` VALUES ('28', '3', '8', '1');
INSERT INTO `dm_seat` VALUES ('29', '3', '9', '1');
INSERT INTO `dm_seat` VALUES ('30', '3', '10', '1');
INSERT INTO `dm_seat` VALUES ('31', '4', '1', '1');
INSERT INTO `dm_seat` VALUES ('32', '4', '2', '1');
INSERT INTO `dm_seat` VALUES ('33', '4', '3', '1');
INSERT INTO `dm_seat` VALUES ('34', '4', '4', '1');
INSERT INTO `dm_seat` VALUES ('35', '4', '5', '1');
INSERT INTO `dm_seat` VALUES ('36', '4', '6', '1');
INSERT INTO `dm_seat` VALUES ('37', '4', '7', '1');
INSERT INTO `dm_seat` VALUES ('38', '4', '8', '1');
INSERT INTO `dm_seat` VALUES ('39', '4', '9', '1');
INSERT INTO `dm_seat` VALUES ('40', '4', '10', '1');
INSERT INTO `dm_seat` VALUES ('41', '5', '1', '1');
INSERT INTO `dm_seat` VALUES ('42', '5', '2', '1');
INSERT INTO `dm_seat` VALUES ('43', '5', '3', '1');
INSERT INTO `dm_seat` VALUES ('44', '5', '4', '1');
INSERT INTO `dm_seat` VALUES ('45', '5', '5', '1');
INSERT INTO `dm_seat` VALUES ('46', '5', '6', '1');
INSERT INTO `dm_seat` VALUES ('47', '5', '7', '1');
INSERT INTO `dm_seat` VALUES ('48', '5', '8', '1');
INSERT INTO `dm_seat` VALUES ('49', '5', '9', '1');
INSERT INTO `dm_seat` VALUES ('50', '5', '10', '1');
INSERT INTO `dm_seat` VALUES ('51', '6', '1', '1');
INSERT INTO `dm_seat` VALUES ('52', '6', '2', '1');
INSERT INTO `dm_seat` VALUES ('53', '6', '3', '1');
INSERT INTO `dm_seat` VALUES ('54', '6', '4', '1');
INSERT INTO `dm_seat` VALUES ('55', '6', '5', '1');
INSERT INTO `dm_seat` VALUES ('56', '6', '6', '1');
INSERT INTO `dm_seat` VALUES ('57', '6', '7', '1');
INSERT INTO `dm_seat` VALUES ('58', '6', '8', '1');
INSERT INTO `dm_seat` VALUES ('59', '6', '9', '1');
INSERT INTO `dm_seat` VALUES ('60', '6', '10', '1');

-- ----------------------------
-- Table structure for dm_subclass
-- ----------------------------
DROP TABLE IF EXISTS `dm_subclass`;
CREATE TABLE `dm_subclass` (
  `sub_id` int(11) NOT NULL AUTO_INCREMENT,
  `sub_name` varchar(20) NOT NULL,
  `sub_sort_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`sub_id`),
  KEY `sub_sort_id` (`sub_sort_id`),
  CONSTRAINT `dm_subclass_ibfk_1` FOREIGN KEY (`sub_sort_id`) REFERENCES `dm_assortment` (`sort_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dm_subclass
-- ----------------------------
INSERT INTO `dm_subclass` VALUES ('1', '儿童剧', '1');
INSERT INTO `dm_subclass` VALUES ('2', '歌剧', '1');
INSERT INTO `dm_subclass` VALUES ('3', '歌舞剧', '1');
INSERT INTO `dm_subclass` VALUES ('4', '话剧', '1');
INSERT INTO `dm_subclass` VALUES ('5', '音乐剧', '1');
INSERT INTO `dm_subclass` VALUES ('6', '声乐及合唱', '2');
INSERT INTO `dm_subclass` VALUES ('7', '室内乐及古乐', '2');
INSERT INTO `dm_subclass` VALUES ('8', '独奏', '2');
INSERT INTO `dm_subclass` VALUES ('9', '管弦乐', '2');
INSERT INTO `dm_subclass` VALUES ('10', '摇滚', '3');
INSERT INTO `dm_subclass` VALUES ('11', '民族', '3');
INSERT INTO `dm_subclass` VALUES ('12', '流行', '3');
INSERT INTO `dm_subclass` VALUES ('13', '音乐节', '3');
INSERT INTO `dm_subclass` VALUES ('14', '戏曲', '4');
INSERT INTO `dm_subclass` VALUES ('15', '杂技', '4');
INSERT INTO `dm_subclass` VALUES ('16', '相声', '4');
INSERT INTO `dm_subclass` VALUES ('17', '马戏', '4');
INSERT INTO `dm_subclass` VALUES ('18', '魔术', '4');
INSERT INTO `dm_subclass` VALUES ('19', '舞剧', '5');
INSERT INTO `dm_subclass` VALUES ('20', '舞蹈', '5');
INSERT INTO `dm_subclass` VALUES ('21', '芭蕾', '5');
INSERT INTO `dm_subclass` VALUES ('22', '主题公园', '6');
INSERT INTO `dm_subclass` VALUES ('23', '代金券', '6');
INSERT INTO `dm_subclass` VALUES ('24', '展会', '6');
INSERT INTO `dm_subclass` VALUES ('25', '游览线路', '6');
INSERT INTO `dm_subclass` VALUES ('26', '特色体验', '6');
INSERT INTO `dm_subclass` VALUES ('27', '风景区', '6');
INSERT INTO `dm_subclass` VALUES ('28', '其它竞技', '7');
INSERT INTO `dm_subclass` VALUES ('29', '排球', '7');
INSERT INTO `dm_subclass` VALUES ('30', '搏击运动', '7');
INSERT INTO `dm_subclass` VALUES ('31', '格斗', '7');
INSERT INTO `dm_subclass` VALUES ('32', '球类运动', '7');
INSERT INTO `dm_subclass` VALUES ('33', '田径', '7');
INSERT INTO `dm_subclass` VALUES ('34', '篮球', '7');
INSERT INTO `dm_subclass` VALUES ('35', '赛车', '7');
INSERT INTO `dm_subclass` VALUES ('36', '足球', '7');

-- ----------------------------
-- Table structure for manager_permission
-- ----------------------------
DROP TABLE IF EXISTS `manager_permission`;
CREATE TABLE `manager_permission` (
  `manager_permission_id` int(11) NOT NULL AUTO_INCREMENT,
  `manager_permission_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`manager_permission_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of manager_permission
-- ----------------------------

-- ----------------------------
-- Table structure for manager_role
-- ----------------------------
DROP TABLE IF EXISTS `manager_role`;
CREATE TABLE `manager_role` (
  `manager_role_id` int(11) NOT NULL AUTO_INCREMENT,
  `manager_role_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`manager_role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of manager_role
-- ----------------------------

-- ----------------------------
-- Table structure for manager_rp
-- ----------------------------
DROP TABLE IF EXISTS `manager_rp`;
CREATE TABLE `manager_rp` (
  `manager_rp_id` int(11) NOT NULL AUTO_INCREMENT,
  `manager_role_id` int(11) DEFAULT NULL,
  `manager_permission_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`manager_rp_id`),
  KEY `fk_rp_role_id` (`manager_role_id`),
  KEY `fk_rp_permission_id` (`manager_permission_id`),
  CONSTRAINT `manager_rp_ibfk_1` FOREIGN KEY (`manager_role_id`) REFERENCES `manager_role` (`manager_role_id`),
  CONSTRAINT `manager_rp_ibfk_2` FOREIGN KEY (`manager_permission_id`) REFERENCES `manager_permission` (`manager_permission_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of manager_rp
-- ----------------------------

-- ----------------------------
-- Table structure for manager_ur
-- ----------------------------
DROP TABLE IF EXISTS `manager_ur`;
CREATE TABLE `manager_ur` (
  `manager_ur_id` int(11) NOT NULL AUTO_INCREMENT,
  `manager_user_id` int(11) DEFAULT NULL,
  `manager_role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`manager_ur_id`),
  KEY `fk_ur_user_id` (`manager_user_id`),
  KEY `fk_ur_role_id` (`manager_role_id`),
  CONSTRAINT `manager_ur_ibfk_1` FOREIGN KEY (`manager_user_id`) REFERENCES `manager_user` (`manager_id`),
  CONSTRAINT `manager_ur_ibfk_2` FOREIGN KEY (`manager_role_id`) REFERENCES `manager_role` (`manager_role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of manager_ur
-- ----------------------------

-- ----------------------------
-- Table structure for manager_user
-- ----------------------------
DROP TABLE IF EXISTS `manager_user`;
CREATE TABLE `manager_user` (
  `manager_id` int(11) NOT NULL AUTO_INCREMENT,
  `manager_name` varchar(20) NOT NULL,
  `manager_password` varchar(100) DEFAULT NULL,
  `manager_others` varchar(100) DEFAULT NULL,
  `manager_nick_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`manager_id`),
  UNIQUE KEY `manager_name` (`manager_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of manager_user
-- ----------------------------

-- ----------------------------
-- Table structure for tb_users
-- ----------------------------
DROP TABLE IF EXISTS `tb_users`;
CREATE TABLE `tb_users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `user_realname` varchar(10) DEFAULT NULL,
  `user_sex` varchar(3) DEFAULT NULL,
  `user_birthday` varchar(15) DEFAULT NULL,
  `user_edu` varchar(10) DEFAULT NULL,
  `user_work` varchar(20) DEFAULT NULL,
  `user_IDcard` varchar(18) DEFAULT NULL,
  `user_addr` varchar(50) DEFAULT NULL,
  `user_password` varchar(100) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_name` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_users
-- ----------------------------
INSERT INTO `tb_users` VALUES ('1', 'zhangsan', null, null, null, null, null, null, null, '9bad41710724cf6511abde2a52416881');
