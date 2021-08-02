const ProgressBar = ({
  color = '#ff0000',
  completed = 100,
  labelComponent,
}) => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      minWidth: '300px',
      margin: '8px 0',
    },
    label: {
      fontSize: '14px',
      width: '200px',
      textAlign: 'right'
    },
    tail: {
      marginLeft: '8px',
      height: '16px',
      width: '100%',
      backgroundColor: '#00000040',
      borderRadius: '4px',
    },
    filler: {
      position: 'relative',
      height: '100%',
      width: `${completed}%`,
      backgroundColor: color,
      borderRadius: 'inherit',
      display: 'flex',
      alignItems: 'center',
    },
    percentage: {
      position: 'absolute',
      right: '4px',
      color: 'white',
      fontSize: '10px',
      fontWeight: '700'
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.label}>{labelComponent}</div>
      <div style={styles.tail}>
        <div style={styles.filler}>
          <span style={styles.percentage}>{`${completed}`}</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
