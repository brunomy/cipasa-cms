-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: cipasa
-- ------------------------------------------------------
-- Server version	8.0.43-0ubuntu0.24.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `asset_containers`
--

DROP TABLE IF EXISTS `asset_containers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asset_containers` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `handle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `disk` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `settings` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `asset_containers_handle_unique` (`handle`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asset_containers`
--

LOCK TABLES `asset_containers` WRITE;
/*!40000 ALTER TABLE `asset_containers` DISABLE KEYS */;
INSERT INTO `asset_containers` VALUES (1,'imagens','Imagens','local','{\"sort_by\": \"basename\", \"sort_dir\": \"asc\", \"allow_moving\": true, \"search_index\": null, \"warm_presets\": null, \"allow_uploads\": true, \"source_preset\": null, \"allow_renaming\": true, \"create_folders\": true, \"validation_rules\": [], \"allow_downloading\": true}','2025-10-21 20:04:00','2025-10-21 20:04:00');
/*!40000 ALTER TABLE `asset_containers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assets_meta`
--

DROP TABLE IF EXISTS `assets_meta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assets_meta` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `container` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `folder` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `basename` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `filename` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `extension` char(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `assets_meta_container_folder_basename_unique` (`container`,`folder`,`basename`),
  KEY `assets_meta_container_index` (`container`),
  KEY `assets_meta_folder_index` (`folder`),
  KEY `assets_meta_basename_index` (`basename`),
  KEY `assets_meta_filename_index` (`filename`),
  KEY `assets_meta_extension_index` (`extension`),
  KEY `assets_meta_path_index` (`path`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assets_meta`
--

LOCK TABLES `assets_meta` WRITE;
/*!40000 ALTER TABLE `assets_meta` DISABLE KEYS */;
INSERT INTO `assets_meta` VALUES (1,'imagens','/','logo1.png','logo1','png','logo1.png','{\"data\": [], \"size\": 3150, \"width\": 80, \"height\": 80, \"duration\": null, \"mime_type\": \"image/png\", \"last_modified\": 1761066503}','2025-10-21 20:08:23','2025-10-21 20:08:23'),(2,'imagens','/','banner1.png','banner1','png','banner1.png','{\"data\": [], \"size\": 1245073, \"width\": 950, \"height\": 600, \"duration\": null, \"mime_type\": \"image/png\", \"last_modified\": 1761066690}','2025-10-21 20:11:30','2025-10-21 20:11:30'),(3,'imagens','/','logo2.png','logo2','png','logo2.png','{\"data\": [], \"size\": 2913, \"width\": 80, \"height\": 80, \"duration\": null, \"mime_type\": \"image/png\", \"last_modified\": 1761066920}','2025-10-21 20:15:20','2025-10-21 20:15:20'),(4,'imagens','/','banner2.png','banner2','png','banner2.png','{\"data\": [], \"size\": 732161, \"width\": 950, \"height\": 600, \"duration\": null, \"mime_type\": \"image/png\", \"last_modified\": 1761066934}','2025-10-21 20:15:34','2025-10-21 20:15:34'),(5,'imagens','/','logo3.png','logo3','png','logo3.png','{\"data\": [], \"size\": 2761, \"width\": 80, \"height\": 80, \"duration\": null, \"mime_type\": \"image/png\", \"last_modified\": 1761067002}','2025-10-21 20:16:42','2025-10-21 20:16:42'),(6,'imagens','/','banner3-r71jjhbb.png','banner3-r71jjhbb','png','banner3-r71jjhbb.png','{\"data\": [], \"size\": 883247, \"width\": 950, \"height\": 600, \"duration\": null, \"mime_type\": \"image/png\", \"last_modified\": 1761067009}','2025-10-21 20:16:49','2025-10-21 20:16:49'),(7,'imagens','/','logo4.png','logo4','png','logo4.png','{\"data\": [], \"size\": 3480, \"width\": 80, \"height\": 80, \"duration\": null, \"mime_type\": \"image/png\", \"last_modified\": 1761067058}','2025-10-21 20:17:38','2025-10-21 20:17:38'),(8,'imagens','/','image1_1250x450_-dpe3o74_.png','image1_1250x450_-dpe3o74_','png','image1_1250x450_-dpe3o74_.png','{\"data\": [], \"size\": 1446505, \"width\": 1216, \"height\": 450, \"duration\": null, \"mime_type\": \"image/png\", \"last_modified\": 1761067077}','2025-10-21 20:17:57','2025-10-21 20:17:57');
/*!40000 ALTER TABLE `assets_meta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blueprints`
--

DROP TABLE IF EXISTS `blueprints`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blueprints` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `namespace` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `handle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `data` json NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `blueprints_handle_namespace_unique` (`handle`,`namespace`),
  KEY `blueprints_namespace_index` (`namespace`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blueprints`
--

LOCK TABLES `blueprints` WRITE;
/*!40000 ALTER TABLE `blueprints` DISABLE KEYS */;
INSERT INTO `blueprints` VALUES (1,NULL,'default','{\"fields\": [{\"field\": {\"type\": \"markdown\", \"display\": \"Content\", \"localizable\": true}, \"handle\": \"content\"}]}','2025-10-15 21:12:42',NULL),(2,'collections.construtoras','construtora','{\"tabs\": {\"main\": {\"__count\": 0, \"display\": \"Principal\", \"sections\": [{\"fields\": [{\"field\": {\"type\": \"text\", \"required\": true, \"validate\": [\"required\"], \"localizable\": false}, \"handle\": \"title\"}, {\"field\": {\"type\": \"textarea\", \"display\": \"Descrição\", \"localizable\": false}, \"handle\": \"descricao\"}, {\"field\": {\"mode\": \"grid\", \"type\": \"assets\", \"display\": \"Logo\", \"listable\": true, \"container\": \"imagens\", \"max_files\": 1, \"min_files\": 1, \"localizable\": false, \"instructions\": \"Tamanho: 160x160\"}, \"handle\": \"ativos\"}, {\"field\": {\"mode\": \"grid\", \"type\": \"assets\", \"display\": \"Banner\", \"container\": \"imagens\", \"localizable\": false, \"instructions\": \"Tamanho: 270x350\"}, \"handle\": \"banner\"}], \"__count\": 0}]}, \"sidebar\": {\"__count\": 1, \"display\": \"Sidebar\", \"sections\": [{\"fields\": [{\"field\": {\"type\": \"slug\", \"validate\": \"max:200\", \"localizable\": true}, \"handle\": \"slug\"}], \"__count\": 0}]}}, \"title\": \"Construtora\"}','2025-10-21 20:07:39','2025-10-21 20:20:16'),(3,'collections.categoria_diferencial','categoria_diferencial','{\"tabs\": {\"main\": {\"__count\": 0, \"display\": \"Principal\", \"sections\": [{\"fields\": [{\"field\": {\"type\": \"text\", \"required\": true, \"validate\": [\"required\"], \"localizable\": false}, \"handle\": \"title\"}], \"__count\": 0}]}, \"sidebar\": {\"__count\": 1, \"sections\": [{\"fields\": [{\"field\": {\"type\": \"slug\", \"validate\": \"max:200\", \"localizable\": true}, \"handle\": \"slug\"}], \"__count\": 0}]}}, \"title\": \"Categoria Diferencial\"}','2025-10-21 20:18:45','2025-10-21 20:20:29'),(4,'collections.diferenciais','diferenciai','{\"tabs\": {\"main\": {\"__count\": 0, \"display\": \"Principal\", \"sections\": [{\"fields\": [{\"field\": {\"type\": \"text\", \"width\": 66, \"required\": true, \"validate\": [\"required\"], \"localizable\": false}, \"handle\": \"title\"}, {\"field\": {\"mode\": \"grid\", \"type\": \"assets\", \"display\": \"Ícone\", \"container\": \"imagens\", \"max_files\": 1, \"min_files\": 1, \"localizable\": false, \"instructions\": \"Tamanho: 55x45\"}, \"handle\": \"icone\"}, {\"field\": {\"type\": \"mapa\", \"display\": \"Mapa\", \"localizable\": false}, \"handle\": \"mapa\"}], \"__count\": 0}]}, \"sidebar\": {\"__count\": 1, \"display\": \"Sidebar\", \"sections\": [{\"fields\": [{\"field\": {\"type\": \"slug\", \"validate\": \"max:200\", \"localizable\": true}, \"handle\": \"slug\"}], \"__count\": 0}]}}, \"title\": \"Diferenciais\"}','2025-10-21 20:23:21','2025-10-21 20:25:41');
/*!40000 ALTER TABLE `blueprints` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache_locks`
--

LOCK TABLES `cache_locks` WRITE;
/*!40000 ALTER TABLE `cache_locks` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collections`
--

DROP TABLE IF EXISTS `collections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collections` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `handle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `settings` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `collections_handle_unique` (`handle`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collections`
--

LOCK TABLES `collections` WRITE;
/*!40000 ALTER TABLE `collections` DISABLE KEYS */;
INSERT INTO `collections` VALUES (1,'pages','Pages','{\"dated\": false, \"mount\": null, \"sites\": [], \"slugs\": true, \"inject\": [], \"layout\": null, \"routes\": \"{parent_uri}/{slug}\", \"sort_dir\": null, \"template\": null, \"propagate\": false, \"revisions\": false, \"structure\": {\"root\": true}, \"sort_field\": null, \"taxonomies\": null, \"search_index\": null, \"title_formats\": [], \"default_status\": true, \"origin_behavior\": \"select\", \"preview_targets\": [{\"label\": \"Entry\", \"format\": \"{permalink}\", \"refresh\": true}], \"past_date_behavior\": \"public\", \"future_date_behavior\": \"public\"}','2025-10-14 21:21:22','2025-10-15 21:14:01'),(2,'construtoras','Construtoras','{\"dated\": false, \"mount\": null, \"sites\": [\"default\"], \"slugs\": true, \"inject\": [], \"layout\": \"layout\", \"routes\": null, \"sort_dir\": \"asc\", \"template\": \"default\", \"propagate\": false, \"revisions\": false, \"structure\": null, \"sort_field\": null, \"taxonomies\": [], \"search_index\": null, \"title_formats\": [], \"default_status\": true, \"origin_behavior\": \"select\", \"preview_targets\": [{\"id\": \"6lfsDbpG\", \"label\": \"Entry\", \"format\": \"{permalink}\", \"refresh\": true}], \"past_date_behavior\": \"public\", \"future_date_behavior\": \"private\"}','2025-10-14 22:10:33','2025-10-15 21:16:08'),(3,'empreendimentos','Empreendimentos','{\"dated\": false, \"mount\": null, \"sites\": [\"default\"], \"slugs\": true, \"inject\": [], \"layout\": \"layout\", \"routes\": \"/empreendimentos/{slug}\", \"sort_dir\": \"asc\", \"template\": \"default\", \"propagate\": false, \"revisions\": false, \"structure\": {\"root\": false}, \"sort_field\": null, \"taxonomies\": [], \"search_index\": null, \"title_formats\": [], \"default_status\": true, \"origin_behavior\": \"select\", \"preview_targets\": [{\"id\": \"jVGSLRHT\", \"label\": \"Entry\", \"format\": \"{permalink}\", \"refresh\": true}], \"past_date_behavior\": \"public\", \"future_date_behavior\": \"private\"}','2025-10-14 22:14:03','2025-10-15 21:16:51'),(4,'categoria_diferencial','Categoria Diferencial','{\"dated\": false, \"mount\": null, \"sites\": [\"default\"], \"slugs\": true, \"inject\": [], \"layout\": \"layout\", \"routes\": null, \"sort_dir\": \"asc\", \"template\": \"default\", \"propagate\": false, \"revisions\": false, \"structure\": null, \"sort_field\": null, \"taxonomies\": [], \"search_index\": null, \"title_formats\": [], \"default_status\": true, \"origin_behavior\": \"select\", \"preview_targets\": [{\"id\": \"IUe6HCaX\", \"label\": \"Entry\", \"format\": \"{permalink}\", \"refresh\": true}], \"past_date_behavior\": \"public\", \"future_date_behavior\": \"private\"}','2025-10-14 22:49:51','2025-10-15 21:15:13'),(5,'diferenciais','Diferenciais','{\"dated\": false, \"mount\": null, \"sites\": [\"default\"], \"slugs\": true, \"inject\": [], \"layout\": \"layout\", \"routes\": null, \"sort_dir\": \"asc\", \"template\": \"default\", \"propagate\": false, \"revisions\": false, \"structure\": null, \"sort_field\": null, \"taxonomies\": [], \"search_index\": null, \"title_formats\": [], \"default_status\": true, \"origin_behavior\": \"select\", \"preview_targets\": [{\"id\": \"8MQbhj08\", \"label\": \"Entry\", \"format\": \"{permalink}\", \"refresh\": true}], \"past_date_behavior\": \"public\", \"future_date_behavior\": \"private\"}','2025-10-14 22:51:44','2025-10-15 21:16:32'),(9,'blog','Blog','{\"dated\": false, \"mount\": null, \"sites\": [\"default\"], \"slugs\": true, \"inject\": [], \"layout\": null, \"routes\": [], \"sort_dir\": null, \"template\": null, \"propagate\": false, \"revisions\": false, \"structure\": null, \"sort_field\": null, \"taxonomies\": [\"teste\"], \"search_index\": null, \"title_formats\": [], \"default_status\": true, \"origin_behavior\": \"select\", \"preview_targets\": [{\"label\": \"Entry\", \"format\": \"{permalink}\", \"refresh\": true}], \"past_date_behavior\": \"public\", \"future_date_behavior\": \"private\"}','2025-11-13 21:19:38','2025-11-14 20:47:40'),(10,'banners','Banners','{\"dated\": false, \"mount\": null, \"sites\": [\"default\"], \"slugs\": true, \"inject\": [], \"layout\": \"layout\", \"routes\": null, \"sort_dir\": \"asc\", \"template\": \"default\", \"propagate\": false, \"revisions\": false, \"structure\": null, \"sort_field\": null, \"taxonomies\": [], \"search_index\": null, \"title_formats\": [], \"default_status\": true, \"origin_behavior\": \"select\", \"preview_targets\": [{\"id\": \"E5L2anDQ\", \"label\": \"Entry\", \"format\": \"{permalink}\", \"refresh\": true}], \"past_date_behavior\": \"public\", \"future_date_behavior\": \"private\"}','2025-11-18 13:23:32','2025-11-18 14:25:05');
/*!40000 ALTER TABLE `collections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entries`
--

DROP TABLE IF EXISTS `entries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entries` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `origin_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `collection` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `blueprint` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uri` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `locale` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default',
  `site` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default',
  `data` json DEFAULT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `published` tinyint(1) NOT NULL DEFAULT '1',
  `order` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entries`
--

LOCK TABLES `entries` WRITE;
/*!40000 ALTER TABLE `entries` DISABLE KEYS */;
INSERT INTO `entries` VALUES (5,NULL,'categoria_diferencial','categoria_diferencial','lazer',NULL,'default','default','{\"title\": \"Lazer\", \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\"}',NULL,1,NULL,'2025-10-21 20:20:45','2025-10-21 20:20:45',NULL),(6,NULL,'categoria_diferencial','categoria_diferencial','sustentabilidade',NULL,'default','default','{\"title\": \"Sustentabilidade\", \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\"}',NULL,1,NULL,'2025-10-21 20:21:01','2025-10-21 20:21:01',NULL),(7,NULL,'categoria_diferencial','categoria_diferencial','infraestrutura',NULL,'default','default','{\"title\": \"Infraestrutura\", \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\"}',NULL,1,NULL,'2025-10-21 20:21:11','2025-10-21 20:21:11',NULL),(8,NULL,'categoria_diferencial','categoria_diferencial','seguranca',NULL,'default','default','{\"title\": \"Segurança\", \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\"}',NULL,1,NULL,'2025-10-21 20:21:21','2025-10-21 20:21:21',NULL),(9,NULL,'construtoras','construtora','alvora',NULL,'default','default','{\"logo\": \"rectangle-5259(2).png\", \"title\": \"Alvorá\", \"banner\": \"banner1-0kytgvdp.png\", \"descricao\": \"Quero investir em qualidade de vida e retorno garantido\", \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\"}',NULL,1,NULL,'2025-10-21 20:40:01','2025-11-18 18:31:24',NULL),(10,NULL,'construtoras','construtora','verana',NULL,'default','default','{\"logo\": \"rectangle-5261(2).png\", \"title\": \"Verana\", \"banner\": \"banner2-b-1ebzhw.png\", \"descricao\": \"Quero investir em um loteamento exclusivo e promissor\", \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\"}',NULL,1,NULL,'2025-10-21 20:41:06','2025-11-18 18:31:54',NULL),(11,NULL,'construtoras','construtora','altavis',NULL,'default','default','{\"logo\": \"rectangle-5274(2).png\", \"title\": \"Altavis\", \"banner\": \"banner3-r71jjhbbsdfsdfsdfsdf.png\", \"descricao\": \"Quero um terreno onde meu investimento e meu tempo rendem\", \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\"}',NULL,1,NULL,'2025-10-21 20:41:46','2025-11-18 18:32:19',NULL),(12,NULL,'construtoras','construtora','vivea',NULL,'default','default','{\"logo\": \"rectangle-5275(1).png\", \"title\": \"Vívea\", \"banner\": \"image1_1250x450_-dpe3o74_.png\", \"descricao\": \"Quero um loteamento com propósito e valorização\", \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\"}',NULL,1,NULL,'2025-10-21 20:42:20','2025-11-18 18:32:38',NULL),(13,NULL,'diferenciais','diferenciai','area-de-lazer',NULL,'default','default','{\"icone\": \"sem-titulo.png\", \"title\": \"Área de lazer\", \"categoria\": 5, \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\"}',NULL,1,NULL,'2025-10-21 20:43:26','2025-10-21 20:43:26',NULL),(14,NULL,'diferenciais','diferenciai','campo-de-futebol',NULL,'default','default','{\"icone\": \"sem-tituloadasdasd.png\", \"title\": \"Campo de futebol\", \"categoria\": 5, \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\"}',NULL,1,NULL,'2025-10-21 20:44:31','2025-10-21 20:44:31',NULL),(15,NULL,'diferenciais','diferenciai','areas-verdes',NULL,'default','default','{\"icone\": \"sem-tituloasdasdas.png\", \"title\": \"Áreas Verdes\", \"categoria\": 6, \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\"}',NULL,1,NULL,'2025-10-21 20:45:03','2025-10-21 20:45:03',NULL),(16,NULL,'diferenciais','diferenciai','bicicletario',NULL,'default','default','{\"icone\": \"sem-asdasdsadasd.png\", \"title\": \"Bicicletário\", \"categoria\": 7, \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\"}',NULL,1,NULL,'2025-10-21 20:45:34','2025-10-21 20:45:34',NULL),(17,NULL,'diferenciais','diferenciai','central-de-residuos',NULL,'default','default','{\"icone\": \"rettertet.png\", \"title\": \"Central de resíduos\", \"categoria\": 8, \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\"}',NULL,1,NULL,'2025-10-21 20:45:59','2025-10-21 20:46:28',NULL),(18,NULL,'diferenciais','diferenciai','eficiencia-energetica',NULL,'default','default','{\"icone\": \"dfgdfgdfgdgdg.png\", \"title\": \"Eficiência Energética\", \"categoria\": 8, \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\"}',NULL,1,NULL,'2025-10-21 20:46:50','2025-10-21 20:46:50',NULL),(19,NULL,'empreendimentos','empreendimento','verana-condominio-fechado','/empreendimentos/verana-condominio-fechado','default','default','{\"cep\": \"74580340\", \"rua\": \"Sp12\", \"tipo\": 0, \"title\": \"Verana Condomínio Fechado\", \"banner\": \"banner_1920x400_-cdhjgiq-.png\", \"cidade\": \"Goiânia\", \"estado\": \"GO\", \"numero\": \"0\", \"galeria\": [{\"id\": \"mh0wx725\", \"type\": \"galeria\", \"enabled\": true, \"imagens\": [\"img1_900x450_-a9kjnl5v.png\", \"img2_900x450_-bigbcuvo.png\", \"img3_900x450_-de1cq4up.png\", \"img4_900x450_-poxnd1lc.png\", \"img5_900x450_-dzjm0cs4.png\", \"img6_900x450_-dux4nxm6.png\", \"img7_900x450_-bp0gidwf.png\"], \"nome_da_galeria\": \"Perspectivas\"}, {\"id\": \"mh0wzb1u\", \"type\": \"galeria\", \"enabled\": true, \"imagens\": [\"img8_900x450_-grgwnvgb.png\", \"img9_900x450_-lmxrmigt.png\", \"img10_900x450_-d2fe4j6e.png\", \"img11_900x450_-bxxis_g_.png\", \"img12_900x450_-mcfhuc_v.png\"], \"nome_da_galeria\": \"Lazer\"}], \"scripts\": {\"code\": null, \"mode\": \"javascript\"}, \"drenagem\": 49, \"keywords\": [\"Verana Condomínio Fechado\", \"Empreendimento\", \"Cipasa\", \"Contruir\", \"Imóvel\", \"Condominio\"], \"latitude\": \"-23.5934689\", \"og_image\": \"asdasdasasdasdasdasd.png\", \"descricao\": \"O Verana Várzea Grande prioriza espaços planejados e arborizados em todo o condomínio. O sistema de lazer contempla um clube com mais de 10 mil m² com piscinas adulto e infantil, quadras, fitness, quiosque com churrasqueira e trilha no bosque com árvores frutíferas e nativas da região. E ainda, praças com estações de ginástica, alongamento e playground com mais de 3 mil m². Um condomínio diferenciado com lotes a partir de 250m².\", \"longitude\": \"-46.6837146\", \"subtitulo\": \"Natureza e lazer em cada detalhe\", \"area_bruta\": 5262699, \"lancamento\": \"2025-10-31\", \"meta_title\": \"Verana Condomínio Fechado\", \"meters_max\": 450, \"meters_min\": 200, \"saneamento\": 88, \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\", \"complemento\": \"Q.12 Lt.12\", \"construtora\": 10, \"meta_robots\": \"index,follow\", \"obras_civis\": 83, \"diferenciais\": [16, 14, 17, 18, 13, 15], \"pavimentacao\": 22, \"area_de_lotes\": 126604, \"rede_eletrica\": 88, \"terraplanagem\": 72, \"breve_descricao\": \"O Verana Várzea Grande prioriza espaços planejados e arborizados em todo o condomínio. O sistema de lazer contempla um clube com mais de 10 mil m²\", \"estagio_da_obra\": 0, \"numero_comerciais\": 100, \"numero_residenciais\": 350, \"numero_de_lotes_comerciais\": 4, \"tamanho_maximo_dos_lotes_m\": 400, \"tamanho_minimo_dos_lotes_m\": 250, \"numero_de_lotes_residenciais\": 464}',NULL,1,1,'2025-10-21 21:50:22','2025-11-17 19:48:58',NULL),(20,NULL,'pages','home','cipasa-empreendimentos','/','default','default','{\"title\": \"Home\", \"banner\": [{\"id\": \"mhoximlh\", \"link\": \"https://cipasa.com/\", \"type\": \"novo_conjunto\", \"imagem\": [\"banner3-r71jjhbbasdasdad.png\"], \"target\": \"_blank\", \"enabled\": true, \"texto_banner\": \"Projetos que priorizam a segurança e o bem-estar dos moradores.\", \"title_button\": \"Veja mais\", \"titulo_banner\": \"<h2>Condomínios fechados <strong>com toda segurança</strong></h2>\"}, {\"id\": \"mhoxm1ie\", \"link\": \"https://cipasa.com/\", \"type\": \"novo_conjunto\", \"imagem\": [\"banner2asdasdasdada.png\"], \"target\": \"_blank\", \"enabled\": true, \"texto_banner\": \"Projetados com a mais alta qualidade para oferecer conforto, segurança e bem-estar.\", \"titulo_banner\": \"<h2>Imóveis com <strong>Arquitetura moderna</strong></h2>\"}, {\"id\": \"mhoxt7td\", \"type\": \"novo_conjunto\", \"target\": \"_self\", \"enabled\": true, \"title_button\": \"Mais informações\", \"titulo_banner\": \"<p></p>\", \"empreendimenro\": 19, \"empreendimento\": 19}], \"info_1\": 140, \"info_2\": 90, \"info_3\": 100, \"lista_1\": [19, 25, 22, 24], \"lista_2\": [19, 25, 21, 23], \"scripts\": {\"code\": null, \"mode\": \"javascript\"}, \"keywords\": [\"cipasa\", \"urbanismo\", \"empreendimento\", \"área\", \"obras civis\", \"moradia\"], \"og_image\": \"logo-cipasa-160x35.png\", \"info_text\": \"A Cipasa é uma empresa com décadas de experiência no mercado imobiliário, dedicada a criar projetos que transformam sonhos em realidade. Com foco em qualidade, inovação e sustentabilidade, desenvolvemos lares e comunidades que promovem o bem-estar e o desenvolvimento urbano.\", \"meta_title\": \"Cipasa Urbanismo – Loteamentos e condomínios fechados em todo o Brasil\", \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\", \"meta_robots\": \"index,follow\", \"text_contact\": [{\"type\": \"paragraph\", \"content\": [{\"text\": \"Não se preocupe! Estamos aqui para ajudar você a encontrar a solução perfeirta\", \"type\": \"text\"}]}], \"text_espacos\": [{\"type\": \"paragraph\", \"content\": [{\"text\": \"Empreendimentos sob medida com assinatura de alto padrão.\", \"type\": \"text\"}]}], \"text_descubra\": [{\"type\": \"paragraph\", \"content\": [{\"text\": \"Descubra os nossos projetos pelo Brasil e, especialmente, aqueles mais próximos de você.\", \"type\": \"text\"}]}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"Clique em um estado para explorar nossos projetos próximos a você\", \"type\": \"text\"}]}], \"imagem_contato\": \"banner[940x495].png\", \"breve_descricao\": \"Com 31 anos de história, a Cipasa Urbanismo está presente em 21 estados do Brasil e conta com um portfólio de mais de 190 projetos. Conheça a nossa forma de fazer urbanismo inteligente.\", \"transformando_sonhos_em_realidade\": \"A Cipasa é uma empresa com décadas de experiência no mercado imobiliário, dedicada a criar projetos que transformam sonhos em realidade. Com foco em qualidade, inovação e sustentabilidade, desenvolvemos lares e comunidades que promovem o bem-estar e o desenvolvimento urbano.\"}',NULL,1,1,'2025-11-07 17:15:43','2025-11-18 14:56:49',NULL),(21,NULL,'empreendimentos','empreendimento','teste-1','/empreendimentos/teste-1','default','default','{\"cep\": \"74580340\", \"rua\": \"234234\", \"tipo\": 1, \"title\": \"teste 1\", \"banner\": \"asdasdasasdasdasdasd.png\", \"cidade\": \"Brasília\", \"estado\": \"DF\", \"numero\": \"23423\", \"galeria\": [{\"id\": \"mhp47egz\", \"type\": \"galeria\", \"enabled\": true}], \"scripts\": {\"code\": null, \"mode\": \"htmlmixed\"}, \"drenagem\": 100, \"keywords\": [], \"latitude\": \"23423\", \"descricao\": \"asdsaddasdas\", \"longitude\": \"234234\", \"subtitulo\": \"bananas\", \"area_bruta\": 500, \"meters_min\": 500, \"saneamento\": 100, \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\", \"complemento\": \"23423\", \"construtora\": 11, \"meta_robots\": \"index,follow\", \"obras_civis\": 100, \"diferenciais\": [16, 14], \"pavimentacao\": 100, \"area_de_lotes\": 500, \"rede_eletrica\": 100, \"terraplanagem\": 100, \"estagio_da_obra\": 1, \"numero_de_lotes_comerciais\": 500, \"tamanho_maximo_dos_lotes_m\": 500, \"numero_de_lotes_residenciais\": 500}',NULL,1,2,'2025-11-07 20:14:55','2025-11-07 20:14:55',NULL),(22,NULL,'empreendimentos','empreendimento','teste-2','/empreendimentos/teste-2','default','default','{\"cep\": \"74580340\", \"rua\": \"wqwe\", \"tipo\": 2, \"title\": \"teste 2\", \"banner\": \"img1_900x450_-a9kjnl5v.png\", \"cidade\": \"São Paulo\", \"estado\": \"SP\", \"numero\": \"qweqweqw\", \"galeria\": [], \"scripts\": {\"code\": null, \"mode\": \"htmlmixed\"}, \"drenagem\": 100, \"keywords\": [], \"latitude\": \"123123\", \"descricao\": \"123123\", \"longitude\": \"123123\", \"subtitulo\": \"4123\", \"area_bruta\": 400, \"meters_min\": 400, \"saneamento\": 100, \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\", \"complemento\": \"123213\", \"construtora\": 12, \"meta_robots\": \"index,follow\", \"obras_civis\": 100, \"diferenciais\": [18], \"pavimentacao\": 100, \"area_de_lotes\": 400, \"rede_eletrica\": 100, \"terraplanagem\": 100, \"estagio_da_obra\": 1, \"numero_de_lotes_comerciais\": 400, \"tamanho_maximo_dos_lotes_m\": 400, \"numero_de_lotes_residenciais\": 400}',NULL,1,3,'2025-11-07 20:16:14','2025-11-07 20:16:14',NULL),(23,NULL,'empreendimentos','empreendimento','teste-2-1','/empreendimentos/teste-2-1','default','default','{\"cep\": \"74580340\", \"rua\": \"wqwe\", \"tipo\": 2, \"title\": \"teste 3\", \"banner\": \"img1_900x450_-a9kjnl5v.png\", \"cidade\": \"São Paulo\", \"estado\": \"SP\", \"numero\": \"qweqweqw\", \"galeria\": [], \"scripts\": {\"code\": null, \"mode\": \"htmlmixed\"}, \"drenagem\": 100, \"keywords\": [], \"latitude\": \"123123\", \"descricao\": \"123123\", \"longitude\": \"123123\", \"subtitulo\": \"4123\", \"area_bruta\": 400, \"meters_min\": 400, \"saneamento\": 100, \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\", \"complemento\": \"123213\", \"construtora\": 12, \"meta_robots\": \"index,follow\", \"obras_civis\": 100, \"diferenciais\": [18], \"pavimentacao\": 100, \"area_de_lotes\": 400, \"rede_eletrica\": 100, \"terraplanagem\": 100, \"duplicated_from\": 22, \"estagio_da_obra\": 1, \"numero_de_lotes_comerciais\": 400, \"tamanho_maximo_dos_lotes_m\": 400, \"numero_de_lotes_residenciais\": 400}',NULL,1,4,'2025-11-07 20:16:44','2025-11-07 20:17:14',NULL),(24,NULL,'empreendimentos','empreendimento','teste-2-1-1','/empreendimentos/teste-2-1-1','default','default','{\"cep\": \"74580340\", \"rua\": \"wqwe\", \"tipo\": 2, \"title\": \"teste 4\", \"banner\": \"img1_900x450_-a9kjnl5v.png\", \"cidade\": \"São Paulo\", \"estado\": \"SP\", \"numero\": \"qweqweqw\", \"galeria\": [], \"scripts\": {\"code\": null, \"mode\": \"htmlmixed\"}, \"drenagem\": 100, \"keywords\": [], \"latitude\": \"123123\", \"descricao\": \"123123\", \"longitude\": \"123123\", \"subtitulo\": \"4123\", \"area_bruta\": 400, \"meters_min\": 400, \"saneamento\": 100, \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\", \"complemento\": \"123213\", \"construtora\": 12, \"meta_robots\": \"index,follow\", \"obras_civis\": 100, \"diferenciais\": [18], \"pavimentacao\": 100, \"area_de_lotes\": 400, \"rede_eletrica\": 100, \"terraplanagem\": 100, \"duplicated_from\": 23, \"estagio_da_obra\": 1, \"numero_de_lotes_comerciais\": 400, \"tamanho_maximo_dos_lotes_m\": 400, \"numero_de_lotes_residenciais\": 400}',NULL,0,5,'2025-11-07 20:17:21','2025-11-07 20:17:30',NULL),(25,NULL,'empreendimentos','empreendimento','verana-condominio-fechado-1','/empreendimentos/verana-condominio-fechado-1','default','default','{\"cep\": \"74580340\", \"rua\": \"Sp12\", \"tipo\": 0, \"title\": \"Verana Condomínio Fechado 22\", \"banner\": \"banner_1920x400_-cdhjgiq-.png\", \"cidade\": \"Goiânia\", \"estado\": \"GO\", \"numero\": \"0\", \"galeria\": [{\"id\": \"mh0wx725\", \"type\": \"galeria\", \"enabled\": true, \"imagens\": [\"img1_900x450_-a9kjnl5v.png\", \"img2_900x450_-bigbcuvo.png\", \"img3_900x450_-de1cq4up.png\", \"img4_900x450_-poxnd1lc.png\", \"img5_900x450_-dzjm0cs4.png\", \"img6_900x450_-dux4nxm6.png\", \"img7_900x450_-bp0gidwf.png\"], \"nome_da_galeria\": \"Perspectivas\"}, {\"id\": \"mh0wzb1u\", \"type\": \"galeria\", \"enabled\": true, \"imagens\": [\"img8_900x450_-grgwnvgb.png\", \"img9_900x450_-lmxrmigt.png\", \"img10_900x450_-d2fe4j6e.png\", \"img11_900x450_-bxxis_g_.png\", \"img12_900x450_-mcfhuc_v.png\"], \"nome_da_galeria\": \"Lazer\"}], \"scripts\": {\"code\": null, \"mode\": \"htmlmixed\"}, \"drenagem\": 49, \"keywords\": [\"Verana Condomínio Fechado\", \"Empreendimento\", \"Cipasa\", \"Contruir\", \"Imóvel\", \"Condominio\"], \"latitude\": \"-16.6475747\", \"og_image\": \"asdasdasasdasdasdasd.png\", \"descricao\": \"O Verana Várzea Grande prioriza espaços planejados e arborizados em todo o condomínio. O sistema de lazer contempla um clube com mais de 10 mil m² com piscinas adulto e infantil, quadras, fitness, quiosque com churrasqueira e trilha no bosque com árvores frutíferas e nativas da região. E ainda, praças com estações de ginástica, alongamento e playground com mais de 3 mil m². Um condomínio diferenciado com lotes a partir de 250m².\", \"longitude\": \"-49.2952851\", \"subtitulo\": \"Natureza e lazer em cada detalhe\", \"area_bruta\": 5262699, \"lancamento\": \"2025-10-31\", \"meta_title\": \"Verana Condomínio Fechado\", \"meters_max\": 0, \"meters_min\": 200, \"saneamento\": 88, \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\", \"complemento\": \"Q.12 Lt.12\", \"construtora\": 10, \"meta_robots\": \"index,follow\", \"obras_civis\": 83, \"diferenciais\": [16, 14, 17, 18, 13, 15], \"pavimentacao\": 22, \"area_de_lotes\": 126604, \"rede_eletrica\": 88, \"terraplanagem\": 72, \"breve_descricao\": \"O Verana Várzea Grande prioriza espaços planejados e arborizados em todo o condomínio. O sistema de lazer contempla um clube com mais de 10 mil m²\", \"duplicated_from\": 19, \"estagio_da_obra\": 0, \"numero_comerciais\": 0, \"numero_residenciais\": 0, \"numero_de_lotes_comerciais\": 4, \"tamanho_maximo_dos_lotes_m\": 400, \"tamanho_minimo_dos_lotes_m\": 250, \"numero_de_lotes_residenciais\": 464}',NULL,1,6,'2025-11-07 20:17:36','2025-11-17 19:49:08',NULL),(26,NULL,'pages','sobre','sobre','/sobre','default','default','{\"title\": \"Sobre nós\", \"visao\": [{\"type\": \"heading\", \"attrs\": {\"level\": 3}, \"content\": [{\"text\": \"Ser sinônimo de \", \"type\": \"text\"}, {\"text\": \"vida melhor\", \"type\": \"text\", \"marks\": [{\"type\": \"bold\"}]}]}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"A busca pela excelência é nossa prioridade, sempre respeitando o meio ambiente, as comunidades locais e os anseios dos clientes. Com produtos cada vez melhores, nosso objetivo é nos tornarmos referência para o mercado e uma marca desejada para todos que se relacionam conosco\", \"type\": \"text\"}]}], \"dado_1\": 33, \"dado_2\": 120, \"dado_3\": 23, \"dado_4\": 125, \"missao\": [{\"type\": \"heading\", \"attrs\": {\"level\": 3}, \"content\": [{\"text\": \"Nosso propósito é transformar\", \"type\": \"text\", \"marks\": [{\"type\": \"bold\"}]}, {\"text\": \" o mundo em um lugar melhor\", \"type\": \"text\"}]}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"Pode parecer muita ambição, mas sabemos que podemos impactar positivamente o mundo. Por isso, acreditamos que a nossa missão como desenvolvedora de projetos imobiliários urbanos é aliar a alta qualidade urbanística ao respeito às características locais e à natureza. Desta forma, por meio de nossos empreendimentos, contribuirmos com o aumento da qualidade de vida de nossos clientes e com o desenvolvimento do seu entorno.\", \"type\": \"text\"}]}], \"parent\": \"20\", \"text_1\": [{\"type\": \"paragraph\", \"content\": [{\"text\": \"A Cipasa, como uma das maiores desenvolvedoras de projetos urbanos no Brasil, tem como missão aliar a alta qualidade urbanística ao respeito às características locais e à natureza, por meio de seus empreendimentos Alvorá, Altavis, Verana e Vívea.\", \"type\": \"text\"}]}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"Durante esses anos, a Cipasa ganhou destaque pela sua capacidade técnica e solidez. Baseada nas premissas de valorizar as pessoas e agir de maneira ética e sustentável, tem como objetivo tornar-se uma referência no mercado imobiliário brasileiro e uma marca desejada por todos seus stakeholders.\", \"type\": \"text\"}]}], \"text_2\": [{\"type\": \"paragraph\", \"content\": [{\"text\": \"Pode parecer muita ambição, mas sabemos que podemos impactar positivamente o mundo. Por isso, acreditamos que a nossa missão como desenvolvedora de projetos imobiliários urbanos é aliar a alta qualidade urbanística ao respeito às características locais e à natureza. Desta forma, por meio de nossos empreendimentos, contribuirmos com o aumento da qualidade de vida de nossos clientes e com o desenvolvimento do seu entorno.\", \"type\": \"text\"}]}], \"text_3\": [{\"type\": \"paragraph\", \"content\": [{\"text\": \"A Cipasa acredita que somente poderá prosperar em uma sociedade que também prospere. Por isso, na concepção urbanística dos empreendimentos e durante o processo de desenvolvimento dos projetos, a empresa contempla diretrizes de sustentabilidade.\", \"type\": \"text\"}]}, {\"type\": \"paragraph\", \"content\": [{\"text\": \"O modelo do residencial Reserva Ibirapitanga (Santa Isabel, SP), implementado em 2004, que tem 4 milhões de m² de reserva ambiental, foi uma das inspirações da Cipasa para desenvolver sua Estratégia de Sustentabilidade com base em três pilares. Juntos, eles traduzem o modo como a empresa faz negócios e cria empreendimentos.\", \"type\": \"text\"}]}], \"icone_1\": \"value_1.svg\", \"icone_2\": \"value_2.svg\", \"icone_3\": \"value_3.svg\", \"scripts\": {\"code\": null, \"mode\": \"htmlmixed\"}, \"valor_1\": \"Pessoas estão acima de tudo\", \"valor_2\": \"Fazer o amanhã ser melhor do que hoje\", \"valor_3\": \"Agir de maneira ética e sustentável\", \"valores\": \"A essência do que nos move\", \"banner_1\": \"asdasdasasdasdasdasd.png\", \"banner_2\": \"banner[1920x300].png\", \"keywords\": [\"cipasa\", \"urbanismo\", \"empreendimento\", \"área\", \"obras civis\", \"moradia\"], \"og_image\": \"banner3.png\", \"meta_title\": \"Cipasa - sobre nós\", \"updated_by\": \"f274db87-3bc5-4bbd-b1f8-03e503047259\", \"meta_robots\": \"index,follow\", \"construtoras\": [11, 9, 10, 12], \"text_3_image\": \"image[170x170].png\", \"visao_banner\": \"banner2[585x350].png\", \"missao_banner\": \"banner1[1250x350].png\", \"breve_descricao\": \"A empresa nasceu olhando para o futuro, com responsabilidade, planejamento, seriedade, transparência e competência. Há 31 anos no mercado, a Cipasa está presente em 21 Estados.\"}',NULL,1,4,'2025-11-10 15:45:05','2025-11-18 18:39:33',NULL),(27,NULL,'pages','contato','contato','/contato','default','default','{\"cep\": \"04544-051\", \"rua\": \"Rua Ministro Jesuíno Cardoso\", \"title\": \"Contato\", \"bairro\": \"Vila Olímpia\", \"cidade\": \"São Paulo\", \"e_mail\": \"contato@cipasa.com.br\", \"estado\": \"SP\", \"numero\": \"633\", \"parent\": \"20\", \"scripts\": {\"code\": null, \"mode\": \"htmlmixed\"}, \"facebook\": \"https://www.facebook.com/facebookBrasil/\", \"keywords\": [\"cipasa\", \"Contato Cipasa\", \"Fale conosco Cipasa\", \"Atendimento Cipasa\"], \"latitude\": \"-23.5934689\", \"linkedin\": \"https://br.linkedin.com/\", \"og_image\": \"asdsadsadgfsdfadf.png\", \"instagram\": \"https://www.instagram.com/\", \"longitude\": \"-46.6837146\", \"meta_title\": \"Cipasa - Contato\", \"updated_by\": \"f274db87-3bc5-4bbd-b1f8-03e503047259\", \"complemento\": \"Edifício Ministro Jesuíno Cardoso, 10º andar, Sala 102\", \"meta_robots\": \"index,follow\", \"breve_descricao\": \"A Cipasa quer ouvir você. Estamos à disposição para tirar suas dúvidas e receber seu contato.\", \"telefone_goiania\": \"(62) 3255-8416\", \"telefone_sao_paulo\": \"(11) 4195-9000\"}',NULL,1,6,'2025-11-10 20:24:59','2025-11-18 18:39:48',NULL),(28,NULL,'pages','tenho_uma_area','tenho-uma-area','/tenho-uma-area','default','default','{\"title\": \"Tenho uma área\", \"banner\": \"banner[1920x400]2.png\", \"parent\": \"20\", \"text_1\": [{\"type\": \"paragraph\", \"content\": [{\"text\": \"O SUCESSO DE SEUS NEGÓCIOS ESTÁ EM UMA PARCERIA COM A CIPASA\", \"type\": \"text\", \"marks\": [{\"type\": \"bold\"}]}]}, {\"type\": \"paragraph\", \"content\": [{\"type\": \"hardBreak\"}, {\"text\": \"Quando a Cipasa começa a desenvolver um novo empreendimento, ela enxerga um projeto de vida para muitas pessoas e um projeto de futuro para as cidades. Isso acontece porque a Cipasa vê o urbanismo como um grande agente transformador de áreas. O urbanismo inteligente que faz a vida das pessoas muito melhor.\", \"type\": \"text\"}]}], \"text_2\": \"O pensamento que guia o urbanismo da Cipasa pode ser encontrado em quatro grandes tipos de projetos. Cada um tem suas características próprias e atende a um determinado perfil de público.\", \"scripts\": {\"code\": null, \"mode\": \"htmlmixed\"}, \"keywords\": [\"Venda seu terreno\", \"Tenho uma área\", \"cipasa\", \"urbanismo\", \"empreendimento\"], \"og_image\": \"img12_900x450_-mcfhuc_v.png\", \"meta_title\": \"Cipasa - Tenho uma área\", \"updated_by\": \"f274db87-3bc5-4bbd-b1f8-03e503047259\", \"meta_robots\": \"index,follow\", \"step_by_step\": [{\"id\": \"mhtmg9k4\", \"type\": \"novo_conjunto\", \"enabled\": true, \"step_text\": \"A beleza da região, a acessibilidade e o contexto são analisados pela área de Novos Negócios que, junto com a equipe de Urbanismo, deﬁnem qual é o produto.\", \"step_title\": \"Escolha do terreno\"}, {\"id\": \"mhtmi7md\", \"type\": \"novo_conjunto\", \"enabled\": true, \"step_text\": \"Engenheiros, urbanistas, arquitetos e paisagistas se unem para criar o futuro da área.\", \"step_title\": \"Desenvolvimento do projeto\"}, {\"id\": \"mhtmi960\", \"type\": \"novo_conjunto\", \"enabled\": true, \"step_text\": \"Após o licenciamento e o registro do projeto, a campanha de marketing e as vendas são iniciadas.\", \"step_title\": \"Comercialização\"}, {\"id\": \"mhtmia44\", \"type\": \"novo_conjunto\", \"enabled\": true, \"step_text\": \"Em paralelo à comercialização, são realizadas as obras de infraestrutura.\", \"step_title\": \"Obras de Infraestrutura\"}, {\"id\": \"mhtmiart\", \"type\": \"novo_conjunto\", \"enabled\": true, \"step_text\": \"Construção dos equipamentos de lazer, muro de fechamento e portaria, de acordo com cada projeto.\", \"step_title\": \"Obras complementares\"}, {\"id\": \"mhtmibg2\", \"type\": \"novo_conjunto\", \"enabled\": true, \"step_text\": \"A emoção é o sentimento principal na entrega. O primeiro passo que se mantém por meio da área de Relacionamento com o Cliente.\", \"step_title\": \"Relacionamento com o cliente\"}], \"breve_descricao\": \"Seja nosso parceiro! Conheça as condições de parceria e faça negócios com a Cipasa, o urbanismo inteligente que faz a vida das pessoas muito melhor.\"}',NULL,1,5,'2025-11-10 23:16:31','2025-11-18 18:39:40',NULL),(29,NULL,'blog','blog','lorem-ipsum-dolor-sit-amet',NULL,'default','default','{\"link\": \"https://ads.google.com/aw/express/settings?campaignId=23266040344&ocid=7791173504&tab=stm&authuser=0&uscid=7791173504&__c=6873024896&euid=1551098807&__u=1553022143\", \"title\": \"Lorem ipsum dolor sit amet 2\", \"imagem\": \"banner1.png\", \"descricao\": \"Lorem ipsum dolor sit amet consectetur. Diam vestibulum pharetra nisi egestas morbi ipsum.\", \"updated_by\": \"f274db87-3bc5-4bbd-b1f8-03e503047259\"}',NULL,1,NULL,'2025-11-13 21:23:04','2025-11-14 17:04:24',NULL),(30,NULL,'blog','blog','lorem-ipsum-dolor-sit-amet-1',NULL,'default','default','{\"link\": \"https://ads.google.com/aw/express/settings?campaignId=23266040344&ocid=7791173504&tab=stm&authuser=0&uscid=7791173504&__c=6873024896&euid=1551098807&__u=1553022143\", \"title\": \"Lorem ipsum dolor sit amet (Duplicado)\", \"imagem\": \"banner1.png\", \"descricao\": \"Lorem ipsum dolor sit amet consectetur. Diam vestibulum pharetra nisi egestas morbi ipsum.\", \"updated_by\": \"f274db87-3bc5-4bbd-b1f8-03e503047259\", \"duplicated_from\": 29}',NULL,1,NULL,'2025-11-13 21:23:44','2025-11-14 17:23:56',NULL),(31,NULL,'blog','blog','lorem-ipsum-dolor-sit-amet-1',NULL,'default','default','{\"link\": \"https://ads.google.com/aw/express/settings?campaignId=23266040344&ocid=7791173504&tab=stm&authuser=0&uscid=7791173504&__c=6873024896&euid=1551098807&__u=1553022143\", \"title\": \"Lorem ipsum dolor sit amet (Duplicado)\", \"imagem\": \"banner1.png\", \"descricao\": \"Lorem ipsum dolor sit amet consectetur. Diam vestibulum pharetra nisi egestas morbi ipsum.\", \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\", \"duplicated_from\": 29}',NULL,1,NULL,'2025-11-13 21:23:57','2025-11-13 21:24:02',NULL),(32,NULL,'blog','blog','lorem-ipsum-dolor-sit-amet-1-1',NULL,'default','default','{\"link\": \"https://ads.google.com/aw/express/settings?campaignId=23266040344&ocid=7791173504&tab=stm&authuser=0&uscid=7791173504&__c=6873024896&euid=1551098807&__u=1553022143\", \"title\": \"Lorem ipsum dolor sit amet (Duplicado) (Duplicado)\", \"imagem\": \"banner1.png\", \"descricao\": \"Lorem ipsum dolor sit amet consectetur. Diam vestibulum pharetra nisi egestas morbi ipsum.\", \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\", \"duplicated_from\": 31}',NULL,1,NULL,'2025-11-13 22:22:26','2025-11-13 22:22:35',NULL),(33,NULL,'pages','cipasa_empreendimentos','empreendimentos','/empreendimentos','default','default','{\"title\": \"Empreendimentos\", \"parent\": \"20\", \"scripts\": {\"code\": null, \"mode\": \"javascript\"}, \"keywords\": [\"cipasa\", \"urbanismo\", \"empreendimento\", \"área\", \"obras civis\", \"moradia\", \"loteamento\"], \"og_image\": \"asdasdasasdasdasdasd.png\", \"meta_title\": \"Cipasa - Empreendimentos\", \"updated_by\": \"f274db87-3bc5-4bbd-b1f8-03e503047259\", \"meta_robots\": \"index,follow\", \"breve_descricao\": \"Conheça nossos empreendimentos e encontre a melhor opção para morar ou investir.\"}',NULL,1,2,'2025-11-17 19:58:25','2025-11-18 18:39:18',NULL),(34,NULL,'pages','blog','blog','/blog','default','default','{\"title\": \"Blog\", \"parent\": \"20\", \"scripts\": {\"code\": null, \"mode\": \"javascript\"}, \"keywords\": [\"Cipasa na mídia\", \"Blog cipasa\", \"Cipasa\", \"Cipasa blog\"], \"og_image\": \"asdasdasasdasdasdasd.png\", \"meta_title\": \"Cipasa - Blog\", \"updated_by\": \"f274db87-3bc5-4bbd-b1f8-03e503047259\", \"meta_robots\": \"index,follow\", \"breve_descricao\": \"Fique por dentro de tudo que acontece na cipasa\"}',NULL,1,3,'2025-11-17 20:09:22','2025-11-18 18:39:25',NULL),(35,NULL,'banners','banner','condominios-fechados-com-toda-seguranca',NULL,'default','default','{\"link\": \"https://cipasa.com/\", \"saida\": \"2025-11-19\", \"title\": \"Condomínios fechados com toda segurança\", \"imagem\": \"banner3-r71jjhbbasdasdad.png\", \"target\": \"_blank\", \"entrada\": \"2025-11-18\", \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\", \"texto_banner\": \"Projetos que priorizam a segurança e o bem-estar dos moradores.\", \"title_banner\": \"<h2>Condomínios fechados <strong>com toda segurança</strong></h2>\", \"title_button\": \"Veja mais\"}',NULL,1,NULL,'2025-11-18 14:15:39','2025-11-18 14:16:43',NULL),(36,NULL,'banners','banner','imoveis-com-arquitetura-moderna',NULL,'default','default','{\"link\": \"https://cipasa.com/\", \"title\": \"Imóveis com Arquitetura moderna\", \"imagem\": \"banner2asdasdasdada.png\", \"target\": \"_self\", \"entrada\": \"2025-11-18\", \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\", \"texto_banner\": \"Projetados com a mais alta qualidade para oferecer conforto, segurança e bem-estar.\", \"title_banner\": \"<h2>Imóveis com <strong>Arquitetura moderna</strong></h2>\"}',NULL,1,NULL,'2025-11-18 14:17:25','2025-11-18 14:44:25',NULL),(37,NULL,'banners','banner','verana-condominio-fechado',NULL,'default','default','{\"title\": \"Verana condomínio Fechado\", \"target\": \"_self\", \"updated_by\": \"2e41551b-3347-4179-bf15-4566091da2c5\", \"title_banner\": \"\", \"empreendimento\": 19}',NULL,1,NULL,'2025-11-18 14:18:47','2025-11-18 14:18:47',NULL);
/*!40000 ALTER TABLE `entries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fieldsets`
--

DROP TABLE IF EXISTS `fieldsets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fieldsets` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `handle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `data` json NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `fieldsets_handle_unique` (`handle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fieldsets`
--

LOCK TABLES `fieldsets` WRITE;
/*!40000 ALTER TABLE `fieldsets` DISABLE KEYS */;
/*!40000 ALTER TABLE `fieldsets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `form_submissions`
--

DROP TABLE IF EXISTS `form_submissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `form_submissions` (
  `id` decimal(14,4) NOT NULL,
  `form` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `data` json DEFAULT NULL,
  `created_at` timestamp(6) NULL DEFAULT NULL,
  `updated_at` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `form_submissions_id_unique` (`id`),
  UNIQUE KEY `form_submissions_form_created_at_unique` (`form`,`created_at`),
  KEY `form_submissions_form_index` (`form`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `form_submissions`
--

LOCK TABLES `form_submissions` WRITE;
/*!40000 ALTER TABLE `form_submissions` DISABLE KEYS */;
INSERT INTO `form_submissions` VALUES (1762788729.1226,'empreendimento','{\"cep\": \"45464654\", \"name\": \"asdasdasd\", \"email\": \"teste@sdfsf.com\", \"phone\": \"34234234234\", \"consent_at\": \"2025-11-10T15:32:09.121215Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 2\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-10 18:32:09.121977','2025-11-10 18:32:09.122936'),(1762788877.3457,'empreendimento','{\"cep\": \"23424234\", \"name\": \"sdfsdfs\", \"email\": \"sdfsdf@sdfsdf.com\", \"phone\": \"23423423234\", \"consent_at\": \"2025-11-10T15:34:37.344289Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 2\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-10 18:34:37.344977','2025-11-10 18:34:37.345993'),(1762789332.2948,'empreendimento','{\"cep\": \"54646464\", \"name\": \"Teste Bruninho\", \"email\": \"teste@teste35.com\", \"phone\": \"35234324234\", \"consent_at\": \"2025-11-10T15:42:12.293516Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 2\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-10 18:42:12.294205','2025-11-10 18:42:12.295120'),(1762789369.3629,'empreendimento','{\"cep\": \"74580340\", \"name\": \"assadasddad\", \"email\": \"dsfsdf@fsdfsdfsf.com\", \"phone\": \"32442342423\", \"consent_at\": \"2025-11-10T15:42:49.361677Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 2\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-10 18:42:49.362330','2025-11-10 18:42:49.363132'),(1762790337.4392,'empreendimento','{\"cep\": \"32432423\", \"name\": \"teste\", \"email\": \"sdfsd@aasfsd.com\", \"phone\": \"34232344234\", \"consent_at\": \"2025-11-10T15:58:57.437800Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 2\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-10 18:58:57.438573','2025-11-10 18:58:57.439583'),(1762791170.3369,'empreendimento','{\"cep\": \"74580340\", \"name\": \"asdasd\", \"email\": \"dsafsfsd@teste.comq\", \"phone\": \"12321312312\", \"consent_at\": \"2025-11-10T16:12:50.335520Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 2\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-10 19:12:50.336371','2025-11-10 19:12:50.337310'),(1762791937.0844,'empreendimento','{\"cep\": \"23423232\", \"name\": \"teste\", \"email\": \"tessdf@sedsfsfd.com\", \"phone\": \"34213213123\", \"consent_at\": \"2025-11-10T16:25:37.083227Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 2\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-10 19:25:37.083875','2025-11-10 19:25:37.084733'),(1762792142.9226,'empreendimento','{\"cep\": \"56456456\", \"name\": \"Bruno teste\", \"email\": \"teste@teste.com\", \"phone\": \"62959595959\", \"consent_at\": \"2025-11-10T16:28:58.000000Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 2\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-10 19:29:02.921926','2025-11-10 19:29:02.922952'),(1762792623.9643,'empreendimento','{\"cep\": \"74580340\", \"name\": \"Bruno Yosimura\", \"email\": \"teste@teste.com\", \"phone\": \"62999148826\", \"consent_at\": \"2025-11-10T16:37:03.000000Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 2\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-10 19:37:03.963624','2025-11-10 19:37:03.964568'),(1762792798.3130,'empreendimento','{\"cep\": \"74580340\", \"name\": \"Bruno Yosimura 2\", \"email\": \"teste@teste.com\", \"phone\": \"6299148826\", \"consent_at\": \"2025-11-10T16:39:58.000000Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 2\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-10 19:39:58.312405','2025-11-10 19:39:58.313254'),(1762793066.9389,'empreendimento','{\"cep\": \"74580340\", \"name\": \"Bruino\", \"email\": \"bruno@teste.com\", \"phone\": \"62991488255\", \"consent_at\": \"2025-11-10T16:44:26.000000Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 2\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-10 19:44:26.938361','2025-11-10 19:44:26.939185'),(1762793188.8279,'empreendimento','{\"cep\": \"23423423\", \"name\": \"fsddsf\", \"email\": \"sdfdsf@dsfdsfs.com\", \"phone\": \"23423423422\", \"consent_at\": \"2025-11-10T16:46:28.000000Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 2\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-10 19:46:28.827267','2025-11-10 19:46:28.828206'),(1762793473.6261,'empreendimento','{\"cep\": \"74580340\", \"name\": \"Bruno Yosimura\", \"email\": \"teste@sdfsdfsdf.com\", \"phone\": \"56466544654\", \"consent_at\": \"2025-11-10T16:51:13.000000Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 2\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-10 19:51:13.625515','2025-11-10 19:51:13.626362'),(1762793619.0932,'empreendimento','{\"cep\": \"23423423\", \"name\": \"Teste\", \"email\": \"dsfsdff@fsdfsdf.com\", \"phone\": \"21321331232\", \"consent_at\": \"2025-11-10T16:53:39.000000Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 2\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-10 19:53:39.092526','2025-11-10 19:53:39.093463'),(1762793790.7119,'empreendimento','{\"cep\": \"74580340\", \"name\": \"Bruno Yosimura\", \"email\": \"bruno@teste.com\", \"phone\": \"62999148826\", \"consent_at\": \"2025-11-10T16:56:30.000000Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 2\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-10 19:56:30.711348','2025-11-10 19:56:30.712223'),(1762793965.1009,'empreendimento','{\"cep\": \"74580340\", \"name\": \"Bruno Yosimura\", \"email\": \"teste@bananas.com\", \"phone\": \"62999148826\", \"consent_at\": \"2025-11-10T16:59:25.000000Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 2\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-10 19:59:25.100380','2025-11-10 19:59:25.101227'),(1762802721.4690,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(62) 99999-9999\", \"state\": \"GO\", \"mobile\": \"(62) 99999-9999\", \"message\": \"Mensagem de teste\", \"subject\": \"Dúvida sobre empreendimento\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-10T19:25:21.464836Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\"}','2025-11-10 22:25:21.468324','2025-11-10 22:25:21.469504'),(1762803057.8719,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(62) 99999-9999\", \"state\": \"GO\", \"mobile\": \"(62) 99999-9999\", \"message\": \"Mensagem de teste\", \"subject\": \"Dúvida sobre empreendimento\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-10T19:30:57.868591Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\"}','2025-11-10 22:30:57.871176','2025-11-10 22:30:57.872201'),(1762803211.8457,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(62) 99999-9999\", \"state\": \"GO\", \"mobile\": \"(62) 99999-9999\", \"message\": \"Mensagem de teste\", \"subject\": \"Contato comercial\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-10T19:33:31.841296Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\"}','2025-11-10 22:33:31.844902','2025-11-10 22:33:31.846039'),(1762803229.8525,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(62) 99999-9999\", \"state\": \"GO\", \"mobile\": \"(62) 99999-9999\", \"message\": \"Mensagem de teste\", \"subject\": \"Dúvida sobre empreendimento\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-10T19:33:49.849379Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\"}','2025-11-10 22:33:49.851944','2025-11-10 22:33:49.852787'),(1762803301.0768,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(62) 99999-9999\", \"state\": \"GO\", \"mobile\": \"(62) 99999-9999\", \"message\": \"Mensagem de teste\", \"subject\": \"Dúvida sobre empreendimento\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-10T19:35:01.073011Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\"}','2025-11-10 22:35:01.076040','2025-11-10 22:35:01.077209'),(1762803463.9907,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(62) 99999-9999\", \"state\": \"GO\", \"mobile\": \"(62) 99999-9999\", \"message\": \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\\n\\n\\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\", \"subject\": \"Quero vender os empreendimentos da Cipasa\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-10T19:37:43.987746Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\"}','2025-11-10 22:37:43.990240','2025-11-10 22:37:43.991049'),(1762803542.2139,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(62) 99999-9999\", \"state\": \"GO\", \"mobile\": \"(62) 99999-9999\", \"message\": \"Mensagem de teste\", \"subject\": \"Dúvida sobre empreendimento\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-10T19:39:02.210069Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\"}','2025-11-10 22:39:02.213227','2025-11-10 22:39:02.214184'),(1762804209.5936,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"brunopuc2015@gmnail.com\", \"phone\": \"(62) 9991-4882\", \"state\": \"GO\", \"mobile\": \"(62) 99941-8826\", \"message\": \"Teste de mensagem\", \"subject\": \"Dúvida sobre empreendimento\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-10T19:50:09.590468Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\"}','2025-11-10 22:50:09.593072','2025-11-10 22:50:09.593991'),(1762880874.8219,'tenho_uma_area','{\"cep\": \"74580-340\", \"nome\": \"Bruno Yosinmura\", \"uuid\": \"3f42a74d-28af-4715-8161-862cdb7ce84f\", \"email\": \"bruno@yosimiura.com\", \"celular\": \"6456545\", \"consent_at\": \"2025-11-11T17:07:54+00:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [\"tenho_uma_area/3f42a74d-28af-4715-8161-862cdb7ce84f/QAVapihNKX9xf1iePSwTgeLytwdiOx8C2bLxSv6K.png\", \"tenho_uma_area/3f42a74d-28af-4715-8161-862cdb7ce84f/pM5zKhyJsFhK341a5pboIBxB8J2gEXcncRlCWU4M.png\", \"tenho_uma_area/3f42a74d-28af-4715-8161-862cdb7ce84f/oARUnnQGyGhFZUiNhjM3PddPTwsfhXPrHaVvKZyZ.pdf\"], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"coordenadas\": \"[{\\\"lat\\\":-16.646851680306142,\\\"lng\\\":-49.29844915866852},{\\\"lat\\\":-16.645823759951984,\\\"lng\\\":-49.29800927639008},{\\\"lat\\\":-16.646543304778856,\\\"lng\\\":-49.29608881473542},{\\\"lat\\\":-16.647560942135577,\\\"lng\\\":-49.29658234119416}]\", \"informacoes\": \"Mensagem de teste\", \"tamanho_area\": \"2.70\"}','2025-11-11 20:07:54.821399','2025-11-11 20:07:54.822136'),(1762882607.8038,'tenho_uma_area','{\"cep\": \"74580-340\", \"nome\": \"sdfsdf\", \"uuid\": \"a80f95ba-1e73-47c1-a697-544551e9f7e2\", \"email\": \"teste@teste2.com\", \"celular\": \"2342342\", \"consent_at\": \"2025-11-11T17:36:47+00:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [\"documentos::tenho_uma_area/a80f95ba-1e73-47c1-a697-544551e9f7e2/uh7ziizloccv6ltcpunttc7qxijdkk3ak07zewmb.pdf\", \"documentos::tenho_uma_area/a80f95ba-1e73-47c1-a697-544551e9f7e2/eycx74dcfxc4xqfic2jsaoil77kv90am0v6vf6iz.png\"], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"coordenadas\": \"[{\\\"lat\\\":-16.645967669133505,\\\"lng\\\":-49.29778397083283},{\\\"lat\\\":-16.647242288594963,\\\"lng\\\":-49.29806292057038},{\\\"lat\\\":-16.647478709014525,\\\"lng\\\":-49.296013712882996},{\\\"lat\\\":-16.64594711068563,\\\"lng\\\":-49.295187592506416}]\", \"informacoes\": \"asdfsdf\", \"tamanho_area\": \"3.94\"}','2025-11-11 20:36:47.803254','2025-11-11 20:36:47.804038'),(1762882664.5252,'tenho_uma_area','{\"cep\": \"74580-340\", \"nome\": \"sdfsdf\", \"uuid\": \"a23696e6-2b45-4e43-8e19-5d6a44de27be\", \"email\": \"teste@teste2.com\", \"celular\": \"2342342\", \"consent_at\": \"2025-11-11T17:37:44+00:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [\"documentos::tenho_uma_area/a23696e6-2b45-4e43-8e19-5d6a44de27be/q7zxjykpti8lhqh2ddaozdugzdkq74pewzdeywiq.png\", \"documentos::tenho_uma_area/a23696e6-2b45-4e43-8e19-5d6a44de27be/vagbnzp1xiz2pqymgxjdvtmgg3rsplcwlkxuqy3a.png\", \"documentos::tenho_uma_area/a23696e6-2b45-4e43-8e19-5d6a44de27be/r9xsjfmqmv3strcesfafljscqufpmilektqzqlgr.png\"], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"coordenadas\": \"[{\\\"lat\\\":-16.645967669133505,\\\"lng\\\":-49.29778397083283},{\\\"lat\\\":-16.647242288594963,\\\"lng\\\":-49.29806292057038},{\\\"lat\\\":-16.647478709014525,\\\"lng\\\":-49.296013712882996},{\\\"lat\\\":-16.64594711068563,\\\"lng\\\":-49.295187592506416}]\", \"informacoes\": \"asdfsdf\", \"tamanho_area\": \"3.94\"}','2025-11-11 20:37:44.524557','2025-11-11 20:37:44.525414'),(1762882999.6808,'tenho_uma_area','{\"cep\": \"74580-340\", \"nome\": \"sdfsdf\", \"uuid\": \"20569a3d-72b8-4256-bebf-178a2e45a0e6\", \"email\": \"teste@teste2.com\", \"celular\": \"2342342\", \"consent_at\": \"2025-11-11T17:43:19+00:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [\"documentos::tenho_uma_area/20569a3d-72b8-4256-bebf-178a2e45a0e6/xqhl5vi9czpp0bmruolqfamlhjiknu8vzjtmquka.png\", \"documentos::tenho_uma_area/20569a3d-72b8-4256-bebf-178a2e45a0e6/jg3bu1q8orgsof9oyxp87pvvrs0drma15uhasxoq.png\", \"documentos::tenho_uma_area/20569a3d-72b8-4256-bebf-178a2e45a0e6/h3a0qbxyvtzscouzfwl8xesdgb4uevwhgsz9hgzk.png\"], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"coordenadas\": \"[{\\\"lat\\\":-16.645967669133505,\\\"lng\\\":-49.29778397083283},{\\\"lat\\\":-16.647242288594963,\\\"lng\\\":-49.29806292057038},{\\\"lat\\\":-16.647478709014525,\\\"lng\\\":-49.296013712882996},{\\\"lat\\\":-16.64594711068563,\\\"lng\\\":-49.295187592506416}]\", \"informacoes\": \"asdfsdf\", \"tamanho_area\": \"3.94\"}','2025-11-11 20:43:19.680267','2025-11-11 20:43:19.680988'),(1762884376.9486,'tenho_uma_area','{\"cep\": \"74580-340\", \"nome\": \"Teste\", \"uuid\": \"fa3fc6cf-7d2b-4d73-9cbd-b509a6870d7f\", \"email\": \"teste@teste2.com\", \"celular\": \"(62) 99555-5444\", \"consent_at\": \"2025-11-11T18:06:16+00:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [\"documentos::tenho_uma_area/fa3fc6cf-7d2b-4d73-9cbd-b509a6870d7f/ouhmzjay8faxgoprvrj7xb67b8mwakeqla8q0ckg.png\", \"documentos::tenho_uma_area/fa3fc6cf-7d2b-4d73-9cbd-b509a6870d7f/ik8a3ow5fogpifoo63o633tuga2egrf3mmcial03.pdf\"], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0\", \"coordenadas\": \"[{\\\"lat\\\":-16.645803201488675,\\\"lng\\\":-49.297966361045845},{\\\"lat\\\":-16.646851680306142,\\\"lng\\\":-49.29838478565217},{\\\"lat\\\":-16.64731424266659,\\\"lng\\\":-49.296947121620185},{\\\"lat\\\":-16.646378837628067,\\\"lng\\\":-49.296453595161445}]\", \"informacoes\": \"sdafsdfsfsdfsdf\", \"tamanho_area\": \"2.02\"}','2025-11-11 21:06:16.947995','2025-11-11 21:06:16.948756'),(1763054749.4999,'tenho_uma_area','{\"cep\": \"74580-340\", \"nome\": \"Bruno\", \"uuid\": \"3a3e641d-cc9a-4248-a1e3-80fc1d7cd4fc\", \"email\": \"teste@teste.com\", \"celular\": \"(62) 99999-9999\", \"consent_at\": \"2025-11-13T17:25:49+00:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [\"documentos::tenho_uma_area/3a3e641d-cc9a-4248-a1e3-80fc1d7cd4fc/1biwqmbrawxbz3l2uu1cpmg6vkg3yclhi4otcv90.jpg\", \"documentos::tenho_uma_area/3a3e641d-cc9a-4248-a1e3-80fc1d7cd4fc/s9y3innnypcsfajhyxzu4snhhz220i0egrblsjct.pdf\"], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"coordenadas\": \"[{\\\"lat\\\":-15.783870411283258,\\\"lng\\\":-47.92839288711548},{\\\"lat\\\":-15.793698907561726,\\\"lng\\\":-47.93126821517945},{\\\"lat\\\":-15.79617660448148,\\\"lng\\\":-47.92182683944703},{\\\"lat\\\":-15.785770073778183,\\\"lng\\\":-47.91886568069459}]\", \"informacoes\": \"tetssetsetstew\", \"tamanho_area\": \"122.04\"}','2025-11-13 20:25:49.499337','2025-11-13 20:25:49.500145'),(1763065347.1314,'empreendimento','{\"cep\": \"74580340\", \"name\": \"Bruno\", \"email\": \"teste@teste.com\", \"phone\": \"62995554991\", \"consent_at\": \"2025-11-13T20:22:27.000000Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 2\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-13 23:22:27.130602','2025-11-13 23:22:27.131733'),(1763065466.2626,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(62) 99555-4991\", \"state\": \"GO\", \"mobile\": \"(62) 99555-4991\", \"message\": \"Apenas uma mensagem de teste\", \"subject\": \"Dúvida sobre empreendimento\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-13T20:24:26.259351Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-13 23:24:26.261939','2025-11-13 23:24:26.262876'),(1763065603.9560,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(62) 99555-4991\", \"state\": \"GO\", \"mobile\": \"(62) 99555-4991\", \"message\": \"Apenas uma mensagem de teste\", \"subject\": \"Dúvida sobre empreendimento\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-13T20:26:43.952727Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-13 23:26:43.955315','2025-11-13 23:26:43.956268'),(1763066737.9269,'tenho_uma_area','{\"cep\": \"74580-340\", \"nome\": \"Bruno\", \"uuid\": \"574ef89c-ba48-497d-9d75-9a1f052af06c\", \"email\": \"teste@teste.com\", \"celular\": \"(62) 99555-4991\", \"consent_at\": \"2025-11-13T20:45:37+00:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [\"documentos::tenho_uma_area/574ef89c-ba48-497d-9d75-9a1f052af06c/yz4l15p50szymukod19zjwnsm114izjsjlftxggl.jpg\"], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"coordenadas\": \"[{\\\"lat\\\":-16.650171825379637,\\\"lng\\\":-49.30374383926392},{\\\"lat\\\":-16.642647451217332,\\\"lng\\\":-49.30073976516724},{\\\"lat\\\":-16.644744437645965,\\\"lng\\\":-49.29310083389283},{\\\"lat\\\":-16.65272099988651,\\\"lng\\\":-49.2963194847107}]\", \"informacoes\": \"asddasdasdasd\", \"tamanho_area\": \"77.89\"}','2025-11-13 23:45:37.926331','2025-11-13 23:45:37.927078'),(1763068059.0494,'tenho_uma_area','{\"cep\": \"\", \"nome\": \"Bruno Yosinmura\", \"uuid\": \"fef3e0c4-6e46-4071-8831-b0e990c7e7b0\", \"email\": \"teste@testew.com\", \"celular\": \"(62) 99555-4888\", \"consent_at\": \"2025-11-13T21:07:39+00:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"coordenadas\": \"[{\\\"lat\\\":-15.698408515946419,\\\"lng\\\":-47.964591979980476},{\\\"lat\\\":-15.76714435372622,\\\"lng\\\":-47.990684509277344},{\\\"lat\\\":-15.78961064138803,\\\"lng\\\":-47.85541534423829},{\\\"lat\\\":-15.718899512445054,\\\"lng\\\":-47.86365509033203}]\", \"informacoes\": \"\", \"tamanho_area\": \"10050.15\"}','2025-11-14 00:07:39.048735','2025-11-14 00:07:39.049533'),(1763068363.0669,'tenho_uma_area','{\"cep\": \"\", \"nome\": \"Bruno Yosinmura\", \"uuid\": \"07a5389f-b337-4b63-b229-2ca650c0d4d1\", \"email\": \"teste@testew.com\", \"celular\": \"(62) 99555-4991\", \"consent_at\": \"2025-11-13T21:12:42+00:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [\"documentos::tenho_uma_area/07a5389f-b337-4b63-b229-2ca650c0d4d1/bnpfi1d7oyy5rxybowww8e5usoqfufw6zgncn4vx.png\"], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"coordenadas\": \"[{\\\"lat\\\":-15.784944135750722,\\\"lng\\\":-47.93378949165344},{\\\"lat\\\":-15.78740129149388,\\\"lng\\\":-47.93456196784974},{\\\"lat\\\":-15.7877523113109,\\\"lng\\\":-47.93134331703186},{\\\"lat\\\":-15.785109323625468,\\\"lng\\\":-47.931128740310676},{\\\"lat\\\":-15.78496478424243,\\\"lng\\\":-47.93415427207947}]\", \"informacoes\": \"\", \"tamanho_area\": \"9.02\"}','2025-11-14 00:12:43.066244','2025-11-14 00:12:43.067088'),(1763069990.2430,'contato','{\"cep\": null, \"city\": null, \"email\": \"teste@teste.com\", \"phone\": null, \"state\": null, \"mobile\": \"(21) 32131-2321\", \"message\": \"23123123123\", \"subject\": \"Quero vender os empreendimentos da Cipasa\", \"last_name\": null, \"consent_at\": \"2025-11-13T21:39:50.239948Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"123123213\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-14 00:39:50.242487','2025-11-14 00:39:50.243347'),(1763070799.0120,'empreendimento','{\"cep\": \"74580340\", \"name\": \"asdasdasda\", \"email\": \"sdfsdf@teste.com\", \"phone\": \"23423423423\", \"consent_at\": \"2025-11-13T21:53:19.000000Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 2\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-14 00:53:19.011383','2025-11-14 00:53:19.012252'),(1763070950.2788,'empreendimento','{\"cep\": \"32432423\", \"name\": \"asdasd\", \"email\": \"teste@teste.com\", \"phone\": \"32214324322\", \"consent_at\": \"2025-11-13T21:55:50.000000Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 2\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-14 00:55:50.278228','2025-11-14 00:55:50.279125'),(1763142748.0421,'tenho_uma_area','{\"cep\": \"74580-340\", \"nome\": \"asdasdasd\", \"uuid\": \"ef1bb00d-4be4-48a6-87d2-e6816e41ada3\", \"email\": \"teste@testew.com\", \"celular\": \"(62) 99914-8826\", \"map_url\": \"http://127.0.0.1:8000/mapa/area/ef1bb00d-4be4-48a6-87d2-e6816e41ada3\", \"consent_at\": \"2025-11-14T14:52:27-03:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [\"documentos::tenho_uma_area/ef1bb00d-4be4-48a6-87d2-e6816e41ada3/v5wko2i2irukfgclm3rjstxdmqpatozuuxhbdgvs.png\"], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"coordenadas\": \"[{\\\"lat\\\":-15.787793607719994,\\\"lng\\\":-47.95399188995362},{\\\"lat\\\":-15.77565210105825,\\\"lng\\\":-47.946181297302246},{\\\"lat\\\":-15.788784719013352,\\\"lng\\\":-47.941374778747566},{\\\"lat\\\":-15.778873387977107,\\\"lng\\\":-47.95519351959229},{\\\"lat\\\":-15.779038580798684,\\\"lng\\\":-47.93751239776612}]\", \"informacoes\": \"asdadasd\", \"tamanho_area\": \"123.48\"}','2025-11-14 17:52:28.041464','2025-11-14 17:52:28.042271'),(1763143048.1028,'tenho_uma_area','{\"cep\": \"34242-342\", \"nome\": \"teste\", \"uuid\": \"77867e45-0032-43cb-a2dd-d1786d55e49f\", \"email\": \"teste@teste.com\", \"celular\": \"(65) 45644-6466\", \"map_url\": \"http://127.0.0.1:8000/mapa/area/77867e45-0032-43cb-a2dd-d1786d55e49f\", \"consent_at\": \"2025-11-14T14:57:28-03:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [\"documentos::tenho_uma_area/77867e45-0032-43cb-a2dd-d1786d55e49f/4saedbnkyynxbvitcqtzghf4dntbpzw7pqhiraf2.jpg\"], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"coordenadas\": \"[{\\\"lat\\\":-15.790766927056602,\\\"lng\\\":-47.93982982635499},{\\\"lat\\\":-15.787628422033139,\\\"lng\\\":-47.93553829193115},{\\\"lat\\\":-15.791923206126132,\\\"lng\\\":-47.93373584747315},{\\\"lat\\\":-15.789115088367206,\\\"lng\\\":-47.93073177337647},{\\\"lat\\\":-15.792501343186126,\\\"lng\\\":-47.9313325881958},{\\\"lat\\\":-15.793492431450348,\\\"lng\\\":-47.9375982284546}]\", \"informacoes\": \"sdfsdfsdf\", \"tamanho_area\": \"31.37\"}','2025-11-14 17:57:28.102099','2025-11-14 17:57:28.103004'),(1763143177.7514,'tenho_uma_area','{\"cep\": \"32423-432\", \"nome\": \"Teste um arquivo\", \"uuid\": \"83f09c48-91ce-4796-b405-c9c191e17525\", \"email\": \"teste@teste2.com\", \"celular\": \"(23) 42342-3423\", \"map_url\": \"http://127.0.0.1:8000/mapa/area/83f09c48-91ce-4796-b405-c9c191e17525\", \"consent_at\": \"2025-11-14T14:59:37-03:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [\"documentos::tenho_uma_area/83f09c48-91ce-4796-b405-c9c191e17525/5fbonpbp4hoex3osnlwxhpgjdw9ursr1tbyj0xd6.jpg\"], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"coordenadas\": \"[{\\\"lat\\\":-15.793368545682494,\\\"lng\\\":-47.960654497146606},{\\\"lat\\\":-15.791819967191795,\\\"lng\\\":-47.95992493629456},{\\\"lat\\\":-15.792398104546411,\\\"lng\\\":-47.95880913734437},{\\\"lat\\\":-15.793492431450348,\\\"lng\\\":-47.95960307121277}]\", \"informacoes\": \"dsfdfsf\", \"tamanho_area\": \"2.03\"}','2025-11-14 17:59:37.750690','2025-11-14 17:59:37.751650'),(1763143481.8875,'tenho_uma_area','{\"cep\": \"32432-423\", \"nome\": \"teste 1 file\", \"uuid\": \"420a07ae-a92f-4770-bfae-c8b0ceeb8917\", \"email\": \"asdas@dsfsfs.com\", \"celular\": \"(23) 43243-2423\", \"map_url\": \"http://127.0.0.1:8000/mapa/area/420a07ae-a92f-4770-bfae-c8b0ceeb8917\", \"consent_at\": \"2025-11-14T15:04:41-03:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [\"documentos::tenho_uma_area/420a07ae-a92f-4770-bfae-c8b0ceeb8917/5ccioskucgyh0iftekucvruulhs8r1isx2b7unwp.jpg\"], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"coordenadas\": \"[{\\\"lat\\\":-15.78622433825857,\\\"lng\\\":-47.94781208038331},{\\\"lat\\\":-15.780855692953079,\\\"lng\\\":-47.944893836975105},{\\\"lat\\\":-15.787958793272196,\\\"lng\\\":-47.942919731140144},{\\\"lat\\\":-15.783994302858245,\\\"lng\\\":-47.94231891632081}]\", \"informacoes\": \"2sdffdsf\", \"tamanho_area\": \"6.49\"}','2025-11-14 18:04:41.886944','2025-11-14 18:04:41.887785'),(1763144090.2395,'tenho_uma_area','{\"cep\": \"12312-312\", \"nome\": \"Teste arquivos\", \"uuid\": \"2d7a78f5-31c6-4872-ac8b-4acc9c0ef108\", \"email\": \"asdas@dsfsfs.com\", \"celular\": \"(23) 43242-3423\", \"map_url\": \"http://127.0.0.1:8000/mapa/area/2d7a78f5-31c6-4872-ac8b-4acc9c0ef108\", \"consent_at\": \"2025-11-14T15:14:50-03:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [\"documentos::tenho_uma_area/2d7a78f5-31c6-4872-ac8b-4acc9c0ef108/k9zfuotuwzbwhxbh9rfwaxkpg12ndwhpvikcyqeg.jpg\"], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"coordenadas\": \"[{\\\"lat\\\":-15.785893964192,\\\"lng\\\":-47.944979667663574},{\\\"lat\\\":-15.781433861586846,\\\"lng\\\":-47.94120311737061},{\\\"lat\\\":-15.788784719013352,\\\"lng\\\":-47.939229011535645}]\", \"informacoes\": \"sddsadasd\", \"tamanho_area\": \"21.80\"}','2025-11-14 18:14:50.238890','2025-11-14 18:14:50.239678'),(1763144720.7024,'tenho_uma_area','{\"cep\": \"34243-242\", \"nome\": \"Teste arquivo 4\", \"uuid\": \"9f82f4da-4c38-4a74-9103-ec941e580b84\", \"email\": \"asdas@dsfsfs.com\", \"celular\": \"(23) 43243-2423\", \"map_url\": \"http://127.0.0.1:8000/mapa/area/9f82f4da-4c38-4a74-9103-ec941e580b84\", \"consent_at\": \"2025-11-14T15:25:20-03:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [\"documentos::tenho_uma_area/9f82f4da-4c38-4a74-9103-ec941e580b84/0xpigsyrddcm9jodxs8mygbqs4zu1rimkr9cz2kb.jpg\"], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"coordenadas\": \"[{\\\"lat\\\":-15.781929433389141,\\\"lng\\\":-47.96025753021241},{\\\"lat\\\":-15.775321709763139,\\\"lng\\\":-47.95579433441162},{\\\"lat\\\":-15.78432468002134,\\\"lng\\\":-47.95450687408448},{\\\"lat\\\":-15.782920573359297,\\\"lng\\\":-47.96042919158936},{\\\"lat\\\":-15.780938288573143,\\\"lng\\\":-47.96000003814698}]\", \"informacoes\": \"dsffdsfsdf\", \"tamanho_area\": \"32.62\"}','2025-11-14 18:25:20.701620','2025-11-14 18:25:20.702582'),(1763145081.6281,'tenho_uma_area','{\"cep\": \"34243-242\", \"nome\": \"Teste arquivo 5\", \"uuid\": \"c5b53930-7646-42f7-9d23-cd6c695a94f0\", \"email\": \"asdas@dsfsfs.com\", \"celular\": \"(23) 43243-2423\", \"map_url\": \"http://127.0.0.1:8000/mapa/area/c5b53930-7646-42f7-9d23-cd6c695a94f0\", \"consent_at\": \"2025-11-14T15:31:20-03:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [\"documentos::tenho_uma_area/c5b53930-7646-42f7-9d23-cd6c695a94f0/c8rfszysqx6mggpuu09rcovuy8jkxhsn0ioe8wqw.jpg\", \"documentos::tenho_uma_area/c5b53930-7646-42f7-9d23-cd6c695a94f0/hjeu5kwtqvtfimh42mdyowueajj6nhwq8s2wbsmc.png\", \"documentos::tenho_uma_area/c5b53930-7646-42f7-9d23-cd6c695a94f0/hudyhvfilj2rcr0m7qvz5ryxtsn0bldf65p4nyuu.png\", \"documentos::tenho_uma_area/c5b53930-7646-42f7-9d23-cd6c695a94f0/tevyhudpm1akfn5wgpusushniyfbbaqq69kmpdnp.pdf\"], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"coordenadas\": \"[{\\\"lat\\\":-15.781929433389141,\\\"lng\\\":-47.96025753021241},{\\\"lat\\\":-15.775321709763139,\\\"lng\\\":-47.95579433441162},{\\\"lat\\\":-15.78432468002134,\\\"lng\\\":-47.95450687408448},{\\\"lat\\\":-15.782920573359297,\\\"lng\\\":-47.96042919158936},{\\\"lat\\\":-15.780938288573143,\\\"lng\\\":-47.96000003814698}]\", \"informacoes\": \"dsffdsfsdf\", \"tamanho_area\": \"32.62\"}','2025-11-14 18:31:21.627464','2025-11-14 18:31:21.628290'),(1763145410.4512,'tenho_uma_area','{\"cep\": \"34243-242\", \"nome\": \"Ultimo teste de arquivo\", \"uuid\": \"8aaded21-091e-4d8a-aaca-afb9e9683130\", \"email\": \"asdas@dsfsfs.com\", \"celular\": \"(23) 43243-2423\", \"map_url\": \"http://127.0.0.1:8000/mapa/area/8aaded21-091e-4d8a-aaca-afb9e9683130\", \"consent_at\": \"2025-11-14T15:36:48-03:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [\"documentos::tenho_uma_area/8aaded21-091e-4d8a-aaca-afb9e9683130/zxfgvagsejmol6qemocsgtqanazs13ittrsyeju0.jpg\", \"documentos::tenho_uma_area/8aaded21-091e-4d8a-aaca-afb9e9683130/oc6at8pvzp54le3tbltjsftphpjc9f5crboowpai.png\", \"documentos::tenho_uma_area/8aaded21-091e-4d8a-aaca-afb9e9683130/j4khccckyco0eytgnmytdm8kjljihq6i7veasdtr.png\", \"documentos::tenho_uma_area/8aaded21-091e-4d8a-aaca-afb9e9683130/fg1ob8utdd2fzyxtjmzfawgtnye0gddj90gexy5e.pdf\", \"documentos::tenho_uma_area/8aaded21-091e-4d8a-aaca-afb9e9683130/yx15u2wmtisabhtmq2ksh8sf2l7cw7g0vgqzfhrc.png\", \"documentos::tenho_uma_area/8aaded21-091e-4d8a-aaca-afb9e9683130/xlkukyc7w8wtzh30ynh3pthie9aiozw8lhc7qtor.png\"], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"coordenadas\": \"[{\\\"lat\\\":-15.78961064138803,\\\"lng\\\":-47.96755313873292},{\\\"lat\\\":-15.798365211547859,\\\"lng\\\":-47.977852821350105},{\\\"lat\\\":-15.804476668284687,\\\"lng\\\":-47.973132133483894},{\\\"lat\\\":-15.802577181220062,\\\"lng\\\":-47.9694414138794},{\\\"lat\\\":-15.799851799084179,\\\"lng\\\":-47.97424793243409},{\\\"lat\\\":-15.795392003736167,\\\"lng\\\":-47.971587181091316},{\\\"lat\\\":-15.80150355021274,\\\"lng\\\":-47.96205997467041},{\\\"lat\\\":-15.80802783541722,\\\"lng\\\":-47.906184196472175},{\\\"lat\\\":-15.791427658761553,\\\"lng\\\":-47.913737297058105}]\", \"informacoes\": \"Mensagem de ultimo teste\", \"tamanho_area\": \"993.57\"}','2025-11-14 18:36:50.450459','2025-11-14 18:36:50.451381'),(1763148466.4051,'newsletter','{\"email\": \"brunopuc2015@gmail.com\", \"consent_at\": \"2025-11-14T19:27:46.401234Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-14 19:27:46.404525','2025-11-14 19:27:46.405439'),(1763148542.5328,'newsletter','{\"email\": \"teste@teste.com\", \"consent_at\": \"2025-11-14T19:29:02.529749Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-14 19:29:02.532268','2025-11-14 19:29:02.533119'),(1763148707.9649,'newsletter','{\"email\": \"teste@testew.com\", \"consent_at\": \"2025-11-14T19:31:47.961810Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-14 19:31:47.964359','2025-11-14 19:31:47.965274'),(1763149373.9790,'newsletter','{\"email\": \"teste@teste2.com\", \"consent_at\": \"2025-11-14T19:42:53.975762Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-14 19:42:53.978348','2025-11-14 19:42:53.979271'),(1763149473.1839,'newsletter','{\"email\": \"brunopuc2015@gmail.com\", \"consent_at\": \"2025-11-14T19:44:33.180804Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-14 19:44:33.183334','2025-11-14 19:44:33.184176'),(1763149578.1028,'newsletter','{\"email\": \"sdfsdf@sdfsdfsdf\", \"consent_at\": \"2025-11-14T19:46:18.098728Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-14 19:46:18.102038','2025-11-14 19:46:18.103167'),(1763149866.9774,'newsletter','{\"email\": \"bruno@testenewsletter.com\", \"consent_at\": \"2025-11-14T19:51:06.974217Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-14 19:51:06.976801','2025-11-14 19:51:06.977698'),(1763149904.6869,'newsletter','{\"email\": \"asdasd@asdad.com\", \"consent_at\": \"2025-11-14T19:51:44.682820Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-14 19:51:44.685981','2025-11-14 19:51:44.687336'),(1763149930.8169,'newsletter','{\"email\": \"bananas@teste.com\", \"consent_at\": \"2025-11-14T19:52:10.813609Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-14 19:52:10.816359','2025-11-14 19:52:10.817245'),(1763157099.6161,'empreendimento','{\"cep\": \"23423423\", \"name\": \"Bruno\", \"email\": \"teste@teste.com\", \"phone\": \"23423423423\", \"consent_at\": \"2025-11-14T21:51:39.000000Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"venture_id\": 25, \"venture_name\": \"Verana Condomínio Fechado 22\", \"venture_slug\": \"verana-condominio-fechado-1\"}','2025-11-14 21:51:39.615418','2025-11-14 21:51:39.616345'),(1763157329.0016,'tenho_uma_area','{\"cep\": \"74580-340\", \"nome\": \"Bruno\", \"uuid\": \"10cfd329-4a1c-43cc-939c-e04a31031060\", \"email\": \"teste@teste.com\", \"celular\": \"(62) 99555-4991\", \"map_url\": \"http://127.0.0.1:8000/mapa/area/10cfd329-4a1c-43cc-939c-e04a31031060\", \"consent_at\": \"2025-11-14T18:55:27-03:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [\"documentos::tenho_uma_area/10cfd329-4a1c-43cc-939c-e04a31031060/vrkvs3khyesxeqgnfo8ewpwrpgvykvodvj2lsqm0.png\", \"documentos::tenho_uma_area/10cfd329-4a1c-43cc-939c-e04a31031060/c55eq7nwi6hslspannpektwmotg2t982vcr4evbp.png\", \"documentos::tenho_uma_area/10cfd329-4a1c-43cc-939c-e04a31031060/cc79euwh0c9q2w2fm5hheri2wvuluxthtpa6mezd.pdf\"], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"coordenadas\": \"[{\\\"lat\\\":-16.64734508011758,\\\"lng\\\":-49.29804146289826},{\\\"lat\\\":-16.645803201488675,\\\"lng\\\":-49.29778397083283},{\\\"lat\\\":-16.646111578206952,\\\"lng\\\":-49.2958527803421},{\\\"lat\\\":-16.647560942135577,\\\"lng\\\":-49.29649651050568}]\", \"informacoes\": \"teste\", \"tamanho_area\": \"3.23\"}','2025-11-14 21:55:29.001059','2025-11-14 21:55:29.001876'),(1763157359.6902,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@testew.com\", \"phone\": \"(65) 45645-5664\", \"state\": \"GO\", \"mobile\": \"(62) 99555-4991\", \"message\": \"sdfsdffsdf\", \"subject\": \"Dúvida sobre empreendimento\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-14T21:55:59.686973Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-14 21:55:59.689593','2025-11-14 21:55:59.690513'),(1763157370.0920,'newsletter','{\"email\": \"teste@teste2.com\", \"consent_at\": \"2025-11-14T21:56:10.088893Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-14 21:56:10.091415','2025-11-14 21:56:10.092295'),(1763483439.5297,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"brunopuc2015@gmnail.com\", \"phone\": \"(62) 99999-9999\", \"state\": \"GO\", \"mobile\": \"(62) 99914-8826\", \"message\": \"Uma mensagem de teste apenas para testar o viasual do email\", \"subject\": \"Quero vender os empreendimentos da Cipasa\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-18T16:30:39.524777Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-18 16:30:39.528246','2025-11-18 16:30:39.529983'),(1763483676.2925,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(62) 99999-9999\", \"state\": \"GO\", \"mobile\": \"(62) 99914-8826\", \"message\": \"Apenas uma mensagem de teste para ver o email.Apenas uma mensagem de teste para ver o email.Apenas uma mensagem de teste para ver o email.Apenas uma mensagem de teste para ver o email.Apenas uma mensagem de teste para ver o email.\", \"subject\": \"Quero vender os empreendimentos da Cipasa\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-18T16:34:36.289259Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-18 16:34:36.291915','2025-11-18 16:34:36.292813'),(1763483688.5669,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(62) 99999-9999\", \"state\": \"GO\", \"mobile\": \"(62) 99914-8826\", \"message\": \"Apenas uma mensagem de teste para ver o email.Apenas uma mensagem de teste para ver o email.\", \"subject\": \"Quero vender os empreendimentos da Cipasa\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-18T16:34:48.563697Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-18 16:34:48.566292','2025-11-18 16:34:48.567194'),(1763483733.1331,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(62) 99999-9999\", \"state\": \"GO\", \"mobile\": \"(62) 99914-8826\", \"message\": \"Apenas uma mensagem de teste para ver o email.Apenas uma mensagem de teste para ver o email.Apenas uma mensagem de teste para ver o email.Apenas uma mensagem de teste para ver o email.Apenas uma mensagem de teste para ver o email.\", \"subject\": \"Quero vender os empreendimentos da Cipasa\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-18T16:35:33.129883Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-18 16:35:33.132454','2025-11-18 16:35:33.133358'),(1763483744.3268,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(62) 99999-9999\", \"state\": \"GO\", \"mobile\": \"(62) 99914-8826\", \"message\": \"Apenas uma mensagem de teste para ver o email.Apenas uma mensagem de teste para ver o email.Apenas uma mensagem de teste para ver o email.Apenas uma mensagem de teste para ver o email.Apenas uma mensagem de teste para ver o email.\", \"subject\": \"Quero vender os empreendimentos da Cipasa\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-18T16:35:44.323596Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-18 16:35:44.326215','2025-11-18 16:35:44.327073'),(1763483837.3927,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(62) 99999-9999\", \"state\": \"GO\", \"mobile\": \"(62) 99914-8826\", \"message\": \"Apenas uma mensagem de teste para ver o email.Apenas uma mensagem de teste para ver o email.Apenas uma mensagem de teste para ver o email.Apenas uma mensagem de teste para ver o email.Apenas uma mensagem de teste para ver o email.\", \"subject\": \"Quero vender os empreendimentos da Cipasa\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-18T16:37:17.389486Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-18 16:37:17.392075','2025-11-18 16:37:17.392980'),(1763483974.9467,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(62) 99999-9999\", \"state\": \"GO\", \"mobile\": \"(62) 99914-8826\", \"message\": \"asdasdasdasda\", \"subject\": \"Quero vender os empreendimentos da Cipasa\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-18T16:39:34.943464Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-18 16:39:34.946114','2025-11-18 16:39:34.946958'),(1763484065.4050,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(62) 99999-9999\", \"state\": \"GO\", \"mobile\": \"(62) 99914-8826\", \"message\": \"teste\", \"subject\": \"Dúvida sobre empreendimento\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-18T16:41:05.401885Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-18 16:41:05.404394','2025-11-18 16:41:05.405328'),(1763485574.9115,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(62) 99999-9999\", \"state\": \"GO\", \"mobile\": \"(62) 99914-8826\", \"message\": \"asdasdasdasd asdsadasd asdasasdasdasdasd asdsadasd asdasasdasdasdasd asdsadasd asdasasdasdasdasd asdsadasd asdasasdasdasdasd asdsadasd asdasasdasdasdasd asdsadasd asdasasdasdasdasd asdsadasd asdasasdasdasdasd asdsadasd asdasasdasdasdasd asdsadasd asdasasdasdasdasd asdsadasd asdasasdasdasdasd asdsadasd asdasasdasdasdasd asdsadasd asdasasdasdasdasd asdsadasd asdasasdasdasdasd asdsadasd asdasasdasdasdasd asdsadasd asdasasdasdasdasd asdsadasd asdasasdasdasdasd asdsadasd asdasasdasdasdasd asdsadasd asdasasdasdasdasd asdsadasd asdas\", \"subject\": \"Dúvida sobre empreendimento\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-18T17:06:14.908294Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-18 17:06:14.910886','2025-11-18 17:06:14.911786'),(1763485746.3621,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(46) 54564-5646\", \"state\": \"GO\", \"mobile\": \"(65) 45646-5454\", \"message\": \"asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas asdasdasdas\", \"subject\": \"Quero vender os empreendimentos da Cipasa\", \"last_name\": \"Teste\", \"consent_at\": \"2025-11-18T17:09:06.358971Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-18 17:09:06.361492','2025-11-18 17:09:06.362428'),(1763485894.3979,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste2.com\", \"phone\": \"(62) 99999-9999\", \"state\": \"GO\", \"mobile\": \"(62) 99999-9999\", \"message\": \"Rua Ministro Jesuíno Cardoso, 633, Edifício Ministro Jesuíno Cardoso, 10º andar, Sala 102, Vila Olímpia, São Paulo/SP - CEP: 04544-051Rua Ministro Jesuíno Cardoso, 633, Edifício Ministro Jesuíno Cardoso, 10º andar, Sala 102, Vila Olímpia, São Paulo/SP - CEP: 04544-051Rua Ministro Jesuíno Cardoso, 633, Edifício Ministro Jesuíno Cardoso, 10º andar, Sala 102, Vila Olímpia, São Paulo/SP - CEP: 04544-051\", \"subject\": \"Quero vender os empreendimentos da Cipasa\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-18T17:11:34.394649Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-18 17:11:34.397277','2025-11-18 17:11:34.398149'),(1763486112.9132,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(62) 94147-7552\", \"state\": \"GO\", \"mobile\": \"(62) 99999-9999\", \"message\": \"Rua Ministro Jesuíno Cardoso, 633, Edifício Ministro Jesuíno Cardoso, 10º andar, Sala 102, Vila Olímpia, São Paulo/SP - CEP: 04544-051Rua Ministro Jesuíno Cardoso, 633, Edifício Ministro Jesuíno Cardoso, 10º andar, Sala 102, Vila Olímpia, São Paulo/SP - CEP: 04544-051Rua Ministro Jesuíno Cardoso, 633, Edifício Ministro Jesuíno Cardoso, 10º andar, Sala 102, Vila Olímpia, São Paulo/SP - CEP: 04544-051Rua Ministro Jesuíno Cardoso, 633, Edifício Ministro Jesuíno Cardoso, 10º andar, Sala 102, Vila Olímpia, São Paulo/SP - CEP: 04544-051\", \"subject\": \"Quero vender os empreendimentos da Cipasa\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-18T17:15:12.909914Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-18 17:15:12.912541','2025-11-18 17:15:12.913479'),(1763486215.3074,'contato','{\"cep\": \"74580-340\", \"city\": \"Goiânia\", \"email\": \"teste@teste.com\", \"phone\": \"(62) 9999-999\", \"state\": \"GO\", \"mobile\": \"(62) 99914-8826\", \"message\": \"Rua Ministro Jesuíno Cardoso, 633, Edifício Ministro Jesuíno Cardoso, 10º andar, Sala 102, Vila Olímpia, São Paulo/SP - CEP: 04544-051Rua Ministro Jesuíno Cardoso, 633, Edifício Ministro Jesuíno Cardoso, 10º andar, Sala 102, Vila Olímpia, São Paulo/SP - CEP: 04544-051Rua Ministro Jesuíno Cardoso, 633, Edifício Ministro Jesuíno Cardoso, 10º andar, Sala 102, Vila Olímpia, São Paulo/SP - CEP: 04544-051Rua Ministro Jesuíno Cardoso, 633, Edifício Ministro Jesuíno Cardoso, 10º andar, Sala 102, Vila Olímpia, São Paulo/SP - CEP: 04544-051\", \"subject\": \"Quero vender os empreendimentos da Cipasa\", \"last_name\": \"Yosimura\", \"consent_at\": \"2025-11-18T17:16:55.303948Z\", \"consent_ip\": \"127.0.0.1\", \"first_name\": \"Bruno\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-18 17:16:55.306714','2025-11-18 17:16:55.307680'),(1763486955.8464,'tenho_uma_area','{\"cep\": \"\", \"nome\": \"Bruno\", \"uuid\": \"b5ebe447-0f60-4809-8e0c-125b019d2825\", \"email\": \"teste@teste.com\", \"celular\": \"(62) 99914-8826\", \"map_url\": \"http://127.0.0.1:8000/mapa/area/b5ebe447-0f60-4809-8e0c-125b019d2825\", \"consent_at\": \"2025-11-18T14:29:15-03:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [\"documentos::tenho_uma_area/b5ebe447-0f60-4809-8e0c-125b019d2825/gserv4jcppblzkrtceund5dwo1mbms2laj8s57yj.pdf\", \"documentos::tenho_uma_area/b5ebe447-0f60-4809-8e0c-125b019d2825/x20hag3nc4dfsasijxcnqlhtosd9uu2hvvbldrci.jpeg\"], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"coordenadas\": \"[{\\\"lat\\\":-16.64696475120848,\\\"lng\\\":-49.29897487163544},{\\\"lat\\\":-16.645176167297816,\\\"lng\\\":-49.298180937767036},{\\\"lat\\\":-16.645649012943437,\\\"lng\\\":-49.29458677768708},{\\\"lat\\\":-16.64761233781831,\\\"lng\\\":-49.2955094575882}]\", \"informacoes\": \"Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem\", \"tamanho_area\": \"8.43\"}','2025-11-18 17:29:15.845918','2025-11-18 17:29:15.846633'),(1763488216.6857,'tenho_uma_area','{\"cep\": \"74580-340\", \"nome\": \"Bruno\", \"uuid\": \"06307b24-954b-4c33-b095-ac205371437c\", \"email\": \"teste@testew.com\", \"celular\": \"(62) 99914-7726\", \"map_url\": \"http://127.0.0.1:8000/mapa/area/06307b24-954b-4c33-b095-ac205371437c\", \"consent_at\": \"2025-11-18T14:50:16-03:00\", \"consent_ip\": \"127.0.0.1\", \"documentos\": [\"documentos::tenho_uma_area/06307b24-954b-4c33-b095-ac205371437c/ousjfi7x2wxtcvfz281pejrx0dhdy2eaopzvxoyo.png\", \"documentos::tenho_uma_area/06307b24-954b-4c33-b095-ac205371437c/y6aqrb9nrmmvnfwga68ugxsyuzpsacqgdqpkkl4c.png\"], \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"coordenadas\": \"[{\\\"lat\\\":-16.6468002844194,\\\"lng\\\":-49.29857790470124},{\\\"lat\\\":-16.64554622051103,\\\"lng\\\":-49.29793417453766},{\\\"lat\\\":-16.64696475120848,\\\"lng\\\":-49.29749429225922},{\\\"lat\\\":-16.646101298991006,\\\"lng\\\":-49.29882466793061},{\\\"lat\\\":-16.646132136637195,\\\"lng\\\":-49.29708659648896}]\", \"informacoes\": \"tset\", \"tamanho_area\": \"1.16\"}','2025-11-18 17:50:16.684780','2025-11-18 17:50:16.686046'),(1763488292.5725,'empreendimento','{\"cep\": \"74580340\", \"name\": \"Bruno\", \"email\": \"teste@testew.com\", \"phone\": \"62999148826\", \"consent_at\": \"2025-11-18T17:51:32.000000Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"venture_id\": 19, \"venture_name\": \"Verana Condomínio Fechado\", \"venture_slug\": \"verana-condominio-fechado\"}','2025-11-18 17:51:32.571841','2025-11-18 17:51:32.572788'),(1763488324.3116,'newsletter','{\"email\": \"bananas@teste.com\", \"consent_at\": \"2025-11-18T17:52:04.308312Z\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\"}','2025-11-18 17:52:04.310971','2025-11-18 17:52:04.311909');
/*!40000 ALTER TABLE `form_submissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forms`
--

DROP TABLE IF EXISTS `forms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forms` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `handle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `settings` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `forms_handle_unique` (`handle`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forms`
--

LOCK TABLES `forms` WRITE;
/*!40000 ALTER TABLE `forms` DISABLE KEYS */;
INSERT INTO `forms` VALUES (1,'contato','Contato','{\"data\": [], \"email\": [{\"id\": \"mhtiixmv\", \"to\": \"brunopuc2015@gmail.com\", \"from\": \"no-reply@test-ywj2lpn1m1kg7oqz.mlsender.net\", \"subject\": \"Contato do site Cipasa\", \"markdown\": false, \"attachments\": false}], \"store\": true, \"honeypot\": \"honeypot\"}','2025-10-21 21:40:31','2025-11-10 22:06:33'),(4,'empreendimento','Empreendimento','{\"data\": [], \"email\": [{\"id\": \"mhtbakrh\", \"to\": \"brunopuc2015@gmail.com\", \"from\": \"no-reply@test-ywj2lpn1m1kg7oqz.mlsender.net\", \"subject\": \"Interesse em Empreendimento Cipasa\", \"markdown\": false, \"attachments\": false}], \"store\": true, \"honeypot\": \"honeypot\"}','2025-11-10 18:30:26','2025-11-10 22:06:40'),(5,'tenho_uma_area','Tenho uma área','{\"data\": [], \"email\": [{\"id\": \"mhusgdq7\", \"to\": \"brunopuc2015@gmail.com\", \"from\": \"no-reply@test-ywj2lpn1m1kg7oqz.mlsender.net\", \"subject\": \"Tenho um terreno do site Cipasa\", \"markdown\": false, \"attachments\": false}], \"store\": true, \"honeypot\": \"honeypot\"}','2025-11-11 17:36:42','2025-11-11 19:32:12'),(6,'newsletter','Newsletter','{\"data\": [], \"email\": [{\"id\": \"mhz93kue\", \"to\": \"brunopuc2015@gmail.com\", \"from\": \"no-reply@test-ywj2lpn1m1kg7oqz.mlsender.net\", \"markdown\": false, \"attachments\": false}], \"store\": true, \"honeypot\": \"honeypot\"}','2025-11-14 19:08:54','2025-11-14 19:28:54');
/*!40000 ALTER TABLE `forms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `global_set_variables`
--

DROP TABLE IF EXISTS `global_set_variables`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `global_set_variables` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `handle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `origin` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `data` json NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `global_set_variables_handle_index` (`handle`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `global_set_variables`
--

LOCK TABLES `global_set_variables` WRITE;
/*!40000 ALTER TABLE `global_set_variables` DISABLE KEYS */;
/*!40000 ALTER TABLE `global_set_variables` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `global_sets`
--

DROP TABLE IF EXISTS `global_sets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `global_sets` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `handle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `settings` json NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `global_sets_handle_unique` (`handle`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `global_sets`
--

LOCK TABLES `global_sets` WRITE;
/*!40000 ALTER TABLE `global_sets` DISABLE KEYS */;
/*!40000 ALTER TABLE `global_sets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group_user`
--

DROP TABLE IF EXISTS `group_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `group_user` (
  `group_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`group_id`,`user_id`),
  KEY `group_user_user_id_foreign` (`user_id`),
  CONSTRAINT `group_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_user`
--

LOCK TABLES `group_user` WRITE;
/*!40000 ALTER TABLE `group_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `group_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `have_land_submissions`
--

DROP TABLE IF EXISTS `have_land_submissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `have_land_submissions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cep` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `coordinates` json NOT NULL,
  `area_hectares` decimal(10,2) DEFAULT NULL,
  `meta` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `have_land_submissions_uuid_unique` (`uuid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `have_land_submissions`
--

LOCK TABLES `have_land_submissions` WRITE;
/*!40000 ALTER TABLE `have_land_submissions` DISABLE KEYS */;
INSERT INTO `have_land_submissions` VALUES (1,'b5ebe447-0f60-4809-8e0c-125b019d2825','Bruno','(62) 99914-8826','teste@teste.com','','[{\"lat\": -16.64696475120848, \"lng\": -49.29897487163544}, {\"lat\": -16.645176167297816, \"lng\": -49.29818093776704}, {\"lat\": -16.645649012943437, \"lng\": -49.29458677768708}, {\"lat\": -16.64761233781831, \"lng\": -49.2955094575882}]',8.43,'{\"files\": [\"documentos::tenho_uma_area/b5ebe447-0f60-4809-8e0c-125b019d2825/gserv4jcppblzkrtceund5dwo1mbms2laj8s57yj.pdf\", \"documentos::tenho_uma_area/b5ebe447-0f60-4809-8e0c-125b019d2825/x20hag3nc4dfsasijxcnqlhtosd9uu2hvvbldrci.jpeg\"], \"consent_at\": \"2025-11-18T14:29:15-03:00\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"observacoes\": \"Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem Teste de mensagem\"}','2025-11-18 17:29:15','2025-11-18 17:29:15'),(2,'06307b24-954b-4c33-b095-ac205371437c','Bruno','(62) 99914-7726','teste@testew.com','74580-340','[{\"lat\": -16.6468002844194, \"lng\": -49.29857790470124}, {\"lat\": -16.64554622051103, \"lng\": -49.29793417453766}, {\"lat\": -16.64696475120848, \"lng\": -49.29749429225922}, {\"lat\": -16.646101298991006, \"lng\": -49.29882466793061}, {\"lat\": -16.646132136637195, \"lng\": -49.29708659648896}]',1.16,'{\"files\": [\"documentos::tenho_uma_area/06307b24-954b-4c33-b095-ac205371437c/ousjfi7x2wxtcvfz281pejrx0dhdy2eaopzvxoyo.png\", \"documentos::tenho_uma_area/06307b24-954b-4c33-b095-ac205371437c/y6aqrb9nrmmvnfwga68ugxsyuzpsacqgdqpkkl4c.png\"], \"consent_at\": \"2025-11-18T14:50:16-03:00\", \"consent_ip\": \"127.0.0.1\", \"user_agent\": \"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0\", \"observacoes\": \"tset\"}','2025-11-18 17:50:16','2025-11-18 17:50:16');
/*!40000 ALTER TABLE `have_land_submissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_batches`
--

LOCK TABLES `job_batches` WRITE;
/*!40000 ALTER TABLE `job_batches` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leads`
--

DROP TABLE IF EXISTS `leads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leads` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `venture_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `venture_slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `venture_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cep` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `consent_at` timestamp NULL DEFAULT NULL,
  `consent_ip` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leads`
--

LOCK TABLES `leads` WRITE;
/*!40000 ALTER TABLE `leads` DISABLE KEYS */;
INSERT INTO `leads` VALUES (1,'25','verana-condominio-fechado-1',NULL,'Bruno','32145364564','teste@teste.com','74580340','2025-11-10 17:57:30','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 17:57:30','2025-11-10 17:57:30'),(2,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','Bruno 2','62985857464','teste@teste.com','74580340','2025-11-10 18:00:07','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 18:00:07','2025-11-10 18:00:07'),(3,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','Bruno 3','23423423423','teste@teste.com','74580340','2025-11-10 18:15:15','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 18:15:15','2025-11-10 18:15:15'),(4,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','Bruno 4','21342134232','teste@teste.com','74285465','2025-11-10 18:17:21','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 18:17:21','2025-11-10 18:17:21'),(5,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','asdasdasd','34234234234','teste@sdfsf.com','45464654','2025-11-10 18:32:09','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 18:32:09','2025-11-10 18:32:09'),(6,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','sdfsdfs','23423423234','sdfsdf@sdfsdf.com','23424234','2025-11-10 18:34:37','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 18:34:37','2025-11-10 18:34:37'),(7,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','Teste Bruninho','35234324234','teste@teste35.com','54646464','2025-11-10 18:42:12','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 18:42:12','2025-11-10 18:42:12'),(8,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','assadasddad','32442342423','dsfsdf@fsdfsdfsf.com','74580340','2025-11-10 18:42:49','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 18:42:49','2025-11-10 18:42:49'),(9,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','teste','34232344234','sdfsd@aasfsd.com','32432423','2025-11-10 18:58:57','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 18:58:57','2025-11-10 18:58:57'),(10,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','asdasd','12321312312','dsafsfsd@teste.comq','74580340','2025-11-10 19:12:50','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 19:12:50','2025-11-10 19:12:50'),(11,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','teste','34213213123','tessdf@sedsfsfd.com','23423232','2025-11-10 19:25:37','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 19:25:37','2025-11-10 19:25:37'),(12,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','Bruno teste','62959595959','teste@teste.com','56456456','2025-11-10 19:28:58','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 19:28:58','2025-11-10 19:28:58'),(13,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','Bruno Yosimura','62999148826','teste@teste.com','74580340','2025-11-10 19:37:03','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 19:37:03','2025-11-10 19:37:03'),(14,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','Bruno Yosimura 2','6299148826','teste@teste.com','74580340','2025-11-10 19:39:58','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 19:39:58','2025-11-10 19:39:58'),(15,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','Bruino','62991488255','bruno@teste.com','74580340','2025-11-10 19:44:26','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 19:44:26','2025-11-10 19:44:26'),(16,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','fsddsf','23423423422','sdfdsf@dsfdsfs.com','23423423','2025-11-10 19:46:28','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 19:46:28','2025-11-10 19:46:28'),(17,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','Bruno Yosimura','56466544654','teste@sdfsdfsdf.com','74580340','2025-11-10 19:51:13','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 19:51:13','2025-11-10 19:51:13'),(18,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','Teste','21321331232','dsfsdff@fsdfsdf.com','23423423','2025-11-10 19:53:39','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 19:53:39','2025-11-10 19:53:39'),(19,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','Bruno Yosimura','62999148826','bruno@teste.com','74580340','2025-11-10 19:56:30','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 19:56:30','2025-11-10 19:56:30'),(20,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','Bruno Yosimura','62999148826','teste@bananas.com','74580340','2025-11-10 19:59:25','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:144.0) Gecko/20100101 Firefox/144.0','2025-11-10 19:59:25','2025-11-10 19:59:25'),(21,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','Bruno','62995554991','teste@teste.com','74580340','2025-11-13 23:22:27','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0','2025-11-13 23:22:27','2025-11-13 23:22:27'),(22,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','asdasdasda','23423423423','sdfsdf@teste.com','74580340','2025-11-14 00:53:19','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0','2025-11-14 00:53:19','2025-11-14 00:53:19'),(23,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 2','asdasd','32214324322','teste@teste.com','32432423','2025-11-14 00:55:50','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0','2025-11-14 00:55:50','2025-11-14 00:55:50'),(24,'25','verana-condominio-fechado-1','Verana Condomínio Fechado 22','Bruno','23423423423','teste@teste.com','23423423','2025-11-14 21:51:39','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0','2025-11-14 21:51:39','2025-11-14 21:51:39'),(25,'19','verana-condominio-fechado','Verana Condomínio Fechado','Bruno','62999148826','teste@testew.com','74580340','2025-11-18 17:51:32','127.0.0.1','Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0','2025-11-18 17:51:32','2025-11-18 17:51:32');
/*!40000 ALTER TABLE `leads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (41,'0001_01_01_000000_create_users_table',1),(42,'0001_01_01_000001_create_cache_table',1),(43,'0001_01_01_000002_create_jobs_table',1),(44,'2024_03_07_100000_create_asset_containers_table',1),(45,'2024_03_07_100000_create_asset_table',1),(46,'2024_03_07_100000_create_blueprints_table',1),(47,'2024_03_07_100000_create_collections_table',1),(48,'2024_03_07_100000_create_fieldsets_table',1),(49,'2024_03_07_100000_create_form_submissions_table',1),(50,'2024_03_07_100000_create_forms_table',1),(51,'2024_03_07_100000_create_global_variables_table',1),(52,'2024_03_07_100000_create_globals_table',1),(53,'2024_03_07_100000_create_navigation_trees_table',1),(54,'2024_03_07_100000_create_navigations_table',1),(55,'2024_03_07_100000_create_revisions_table',1),(56,'2024_03_07_100000_create_taxonomies_table',1),(57,'2024_03_07_100000_create_terms_table',1),(58,'2024_03_07_100000_create_tokens_table',1),(59,'2024_05_15_100000_modify_form_submissions_id',1),(60,'2024_07_16_100000_create_sites_table',1),(61,'2025_10_15_181338_create_entries_table',2),(62,'2025_10_21_171249_add_blueprint_to_entries_table',3),(63,'2025_10_21_171351_add_order_to_entries_table',4),(64,'2025_11_10_143903_create_leads_table',5),(66,'2025_11_11_144201_create_have_land_submissions_table',6),(67,'2025_11_17_181241_statamic_auth_tables',7),(68,'2025_11_17_183832_alter_role_and_group_user_columns_to_uuid',8),(69,'2025_11_17_184033_reset_statamic_user_tables',9);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `navigations`
--

DROP TABLE IF EXISTS `navigations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `navigations` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `handle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `settings` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `navigations_handle_unique` (`handle`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `navigations`
--

LOCK TABLES `navigations` WRITE;
/*!40000 ALTER TABLE `navigations` DISABLE KEYS */;
/*!40000 ALTER TABLE `navigations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_activation_tokens`
--

DROP TABLE IF EXISTS `password_activation_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_activation_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_activation_tokens_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_activation_tokens`
--

LOCK TABLES `password_activation_tokens` WRITE;
/*!40000 ALTER TABLE `password_activation_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_activation_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `revisions`
--

DROP TABLE IF EXISTS `revisions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `revisions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `action` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `attributes` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `revisions_key_created_at_unique` (`key`,`created_at`),
  KEY `revisions_action_index` (`action`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `revisions`
--

LOCK TABLES `revisions` WRITE;
/*!40000 ALTER TABLE `revisions` DISABLE KEYS */;
/*!40000 ALTER TABLE `revisions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_user`
--

DROP TABLE IF EXISTS `role_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_user` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_user`
--

LOCK TABLES `role_user` WRITE;
/*!40000 ALTER TABLE `role_user` DISABLE KEYS */;
INSERT INTO `role_user` VALUES (1,'f274db87-3bc5-4bbd-b1f8-03e503047259','administrador');
/*!40000 ALTER TABLE `role_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sites`
--

DROP TABLE IF EXISTS `sites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sites` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `handle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lang` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `attributes` json NOT NULL,
  `order` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sites_handle_unique` (`handle`),
  KEY `sites_order_index` (`order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sites`
--

LOCK TABLES `sites` WRITE;
/*!40000 ALTER TABLE `sites` DISABLE KEYS */;
/*!40000 ALTER TABLE `sites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taxonomies`
--

DROP TABLE IF EXISTS `taxonomies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taxonomies` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `handle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sites` json DEFAULT NULL,
  `settings` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `taxonomies_handle_unique` (`handle`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taxonomies`
--

LOCK TABLES `taxonomies` WRITE;
/*!40000 ALTER TABLE `taxonomies` DISABLE KEYS */;
/*!40000 ALTER TABLE `taxonomies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taxonomy_terms`
--

DROP TABLE IF EXISTS `taxonomy_terms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taxonomy_terms` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `site` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uri` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `taxonomy` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `data` json NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `taxonomy_terms_slug_taxonomy_site_unique` (`slug`,`taxonomy`,`site`),
  KEY `taxonomy_terms_site_index` (`site`),
  KEY `taxonomy_terms_uri_index` (`uri`),
  KEY `taxonomy_terms_taxonomy_index` (`taxonomy`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taxonomy_terms`
--

LOCK TABLES `taxonomy_terms` WRITE;
/*!40000 ALTER TABLE `taxonomy_terms` DISABLE KEYS */;
/*!40000 ALTER TABLE `taxonomy_terms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tokens`
--

DROP TABLE IF EXISTS `tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `handler` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `data` json NOT NULL,
  `expire_at` timestamp NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tokens_token_unique` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trees`
--

DROP TABLE IF EXISTS `trees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trees` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `handle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tree` json DEFAULT NULL,
  `settings` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `trees_handle_type_locale_unique` (`handle`,`type`,`locale`),
  KEY `trees_type_index` (`type`),
  KEY `trees_locale_index` (`locale`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trees`
--

LOCK TABLES `trees` WRITE;
/*!40000 ALTER TABLE `trees` DISABLE KEYS */;
INSERT INTO `trees` VALUES (1,'pages','collection','default','[{\"entry\": 20}, {\"entry\": 33}, {\"entry\": 34}, {\"entry\": 26}, {\"entry\": 28}, {\"entry\": 27}]','[]','2025-10-15 21:14:01','2025-11-17 20:09:40'),(2,'empreendimentos','collection','cipasa','[]','[]','2025-10-15 21:14:01','2025-10-15 21:14:01'),(3,'empreendimentos','collection','default','[{\"entry\": 19}, {\"entry\": 21}, {\"entry\": 22}, {\"entry\": 23}, {\"entry\": 24}, {\"entry\": 25}]','[]','2025-10-21 21:50:22','2025-11-07 20:17:44'),(4,'home','navigation','default','[{\"id\": \"7b35e0ad-0350-4357-aeb3-8c165803bd9e\", \"url\": \"/\", \"title\": \"Home\"}]','[]','2025-10-22 15:09:33','2025-10-22 15:14:52');
/*!40000 ALTER TABLE `trees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `super` tinyint(1) NOT NULL DEFAULT '0',
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `preferences` json DEFAULT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('2e41551b-3347-4179-bf15-4566091da2c5','Bruno Yosimura','brunopuc2015@gmail.com',NULL,'$2y$12$nYf8o/2Fkox7TgD1eri0fONd1HMTUp540jc3fDUCUdTVs1hR3atsy',NULL,'2025-11-17 21:40:52','2025-11-17 21:40:52',1,NULL,'{\"theme\": \"dark\", \"locale\": \"pt_BR\", \"favorites\": []}','2025-11-18 18:41:54'),('f274db87-3bc5-4bbd-b1f8-03e503047259','Bruno Gatinho','micoc64699@datoinf.com',NULL,'$2y$12$Lcq3FERY2NTYCs0VGTBjbOX2p39kD51gXTcZ7nqkfM9XNarczT9qq',NULL,'2025-11-17 21:40:52','2025-11-17 21:40:52',0,NULL,'{\"locale\": \"pt_BR\", \"favorites\": []}','2025-11-18 18:43:12');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-18 15:50:32
