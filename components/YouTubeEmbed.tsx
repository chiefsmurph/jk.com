import styles from "./YouTubeEmbed.module.css";
type Props = {
  videoId: string;
};

export default function YouTubeEmbed({ videoId }: Props) {
  return (
    <div className={styles.videoWrapper}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title="Johnny Blake Acting Reel"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
